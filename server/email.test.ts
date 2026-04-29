import { describe, it, expect } from "vitest";

describe("Email (Resend) Integration", () => {
  it("should have RESEND_API_KEY configured", () => {
    expect(process.env.RESEND_API_KEY).toBeDefined();
    expect(process.env.RESEND_API_KEY!.length).toBeGreaterThan(10);
    expect(process.env.RESEND_API_KEY!.startsWith("re_")).toBe(true);
  });

  it("validates Resend API key by checking domains", async () => {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Use the domains.list() endpoint as a lightweight validation
    // This will fail with 401 if the key is invalid
    const { error } = await resend.domains.list();

    // If error is null or the error is not an auth error, the key is valid
    if (error) {
      expect(error.message).not.toContain("401");
      expect(error.message).not.toContain("Unauthorized");
      expect(error.name).not.toBe("unauthorized");
    }
    // If no error, the key is definitely valid
  });
});
