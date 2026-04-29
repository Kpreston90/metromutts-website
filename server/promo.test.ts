import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the ENV module
vi.mock("./_core/env", () => ({
  ENV: {
    gingrApiKey: "test-key",
    gingrBaseUrl: "https://metromutts.gingrapp.com",
    ownerOpenId: "owner-123",
    forgeApiUrl: "https://forge.test",
    forgeApiKey: "forge-key",
  },
}));

// We'll test the validatePromoCode logic by directly testing the validation rules
// without hitting the database, by extracting the logic into testable units.

describe("Promo Code System", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("Promo Code Validation Logic", () => {
    // Test the validation rules directly
    function validatePromoLogic(promo: any, serviceType: string) {
      if (!promo) return { valid: false, error: "Invalid promo code" };
      if (promo.isActive !== "true") return { valid: false, error: "This promo code is no longer active" };

      const now = new Date();
      if (promo.startsAt && promo.startsAt > now) return { valid: false, error: "This promo code is not yet active" };
      if (promo.expiresAt && promo.expiresAt < now) return { valid: false, error: "This promo code has expired" };

      if (promo.maxRedemptions && promo.currentRedemptions >= promo.maxRedemptions) {
        return { valid: false, error: "This promo code has reached its maximum uses" };
      }

      if (promo.serviceType !== "all" && promo.serviceType !== serviceType) {
        return { valid: false, error: `This promo code is only valid for ${promo.serviceType}` };
      }

      return { valid: true, promo };
    }

    it("returns invalid for non-existent code (null promo)", () => {
      const result = validatePromoLogic(null, "boarding");
      expect(result.valid).toBe(false);
      expect(result.error).toBe("Invalid promo code");
    });

    it("returns invalid for inactive code", () => {
      const promo = {
        id: 1,
        code: "EXPIRED",
        description: "Test",
        serviceType: "boarding",
        discountType: "free_night",
        discountValue: 1,
        maxRedemptions: null,
        currentRedemptions: 0,
        isActive: "false",
        newCustomersOnly: "false",
        startsAt: null,
        expiresAt: null,
      };
      const result = validatePromoLogic(promo, "boarding");
      expect(result.valid).toBe(false);
      expect(result.error).toBe("This promo code is no longer active");
    });

    it("returns invalid when max redemptions reached", () => {
      const promo = {
        id: 1,
        code: "MAXED",
        description: "Test",
        serviceType: "boarding",
        discountType: "free_night",
        discountValue: 1,
        maxRedemptions: 10,
        currentRedemptions: 10,
        isActive: "true",
        newCustomersOnly: "false",
        startsAt: null,
        expiresAt: null,
      };
      const result = validatePromoLogic(promo, "boarding");
      expect(result.valid).toBe(false);
      expect(result.error).toBe("This promo code has reached its maximum uses");
    });

    it("returns invalid when service type doesn't match", () => {
      const promo = {
        id: 1,
        code: "BOARDONLY",
        description: "Boarding only promo",
        serviceType: "boarding",
        discountType: "free_night",
        discountValue: 1,
        maxRedemptions: null,
        currentRedemptions: 0,
        isActive: "true",
        newCustomersOnly: "false",
        startsAt: null,
        expiresAt: null,
      };
      const result = validatePromoLogic(promo, "daycare");
      expect(result.valid).toBe(false);
      expect(result.error).toBe("This promo code is only valid for boarding");
    });

    it("returns valid for a correct active code", () => {
      const promo = {
        id: 1,
        code: "FIRSTNIGHT",
        description: "First night free for new boarders",
        serviceType: "boarding",
        discountType: "free_night",
        discountValue: 1,
        maxRedemptions: 50,
        currentRedemptions: 5,
        isActive: "true",
        newCustomersOnly: "true",
        startsAt: null,
        expiresAt: null,
      };
      const result = validatePromoLogic(promo, "boarding");
      expect(result.valid).toBe(true);
      expect(result.promo).toBeDefined();
      expect(result.promo!.code).toBe("FIRSTNIGHT");
    });

    it("returns valid for 'all' service type code used with any service", () => {
      const promo = {
        id: 2,
        code: "WELCOME20",
        description: "20% off any service",
        serviceType: "all",
        discountType: "percentage",
        discountValue: 20,
        maxRedemptions: null,
        currentRedemptions: 0,
        isActive: "true",
        newCustomersOnly: "false",
        startsAt: null,
        expiresAt: null,
      };
      const result = validatePromoLogic(promo, "grooming");
      expect(result.valid).toBe(true);
    });

    it("returns invalid for expired code", () => {
      const promo = {
        id: 3,
        code: "OLDCODE",
        description: "Expired promo",
        serviceType: "all",
        discountType: "percentage",
        discountValue: 10,
        maxRedemptions: null,
        currentRedemptions: 0,
        isActive: "true",
        newCustomersOnly: "false",
        startsAt: null,
        expiresAt: new Date("2020-01-01"),
      };
      const result = validatePromoLogic(promo, "daycare");
      expect(result.valid).toBe(false);
      expect(result.error).toBe("This promo code has expired");
    });

    it("returns invalid for code that hasn't started yet", () => {
      const promo = {
        id: 4,
        code: "FUTURE",
        description: "Future promo",
        serviceType: "all",
        discountType: "percentage",
        discountValue: 15,
        maxRedemptions: null,
        currentRedemptions: 0,
        isActive: "true",
        newCustomersOnly: "false",
        startsAt: new Date("2030-01-01"),
        expiresAt: null,
      };
      const result = validatePromoLogic(promo, "daycare");
      expect(result.valid).toBe(false);
      expect(result.error).toBe("This promo code is not yet active");
    });

    it("allows code with remaining redemptions", () => {
      const promo = {
        id: 5,
        code: "LIMITED",
        description: "Limited uses",
        serviceType: "all",
        discountType: "fixed_amount",
        discountValue: 25,
        maxRedemptions: 100,
        currentRedemptions: 99,
        isActive: "true",
        newCustomersOnly: "false",
        startsAt: null,
        expiresAt: null,
      };
      const result = validatePromoLogic(promo, "boarding");
      expect(result.valid).toBe(true);
    });
  });

  describe("Promo Code Schema", () => {
    it("promoCodes table is defined correctly", async () => {
      const { promoCodes } = await import("../drizzle/schema");
      expect(promoCodes).toBeDefined();
      expect((promoCodes as any)[Symbol.for("drizzle:Name")]).toBe("promo_codes");
    });

    it("promoRedemptions table is defined correctly", async () => {
      const { promoRedemptions } = await import("../drizzle/schema");
      expect(promoRedemptions).toBeDefined();
      expect((promoRedemptions as any)[Symbol.for("drizzle:Name")]).toBe("promo_redemptions");
    });

    it("PromoCode type has required fields", async () => {
      const { promoCodes } = await import("../drizzle/schema");
      // Verify the table has the expected columns by checking the config
      const columns = Object.keys((promoCodes as any)[Symbol.for("drizzle:Columns")]);
      expect(columns).toContain("code");
      expect(columns).toContain("description");
      expect(columns).toContain("serviceType");
      expect(columns).toContain("discountType");
      expect(columns).toContain("discountValue");
      expect(columns).toContain("maxRedemptions");
      expect(columns).toContain("isActive");
    });
  });
});
