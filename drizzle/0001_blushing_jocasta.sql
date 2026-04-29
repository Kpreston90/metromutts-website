CREATE TABLE `promo_codes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`code` varchar(50) NOT NULL,
	`description` text NOT NULL,
	`serviceType` enum('daycare','boarding','grooming','all') NOT NULL,
	`discountType` enum('percentage','fixed_amount','free_night') NOT NULL,
	`discountValue` int NOT NULL,
	`maxRedemptions` int,
	`currentRedemptions` int NOT NULL DEFAULT 0,
	`isActive` enum('true','false') NOT NULL DEFAULT 'true',
	`newCustomersOnly` enum('true','false') NOT NULL DEFAULT 'false',
	`startsAt` timestamp,
	`expiresAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `promo_codes_id` PRIMARY KEY(`id`),
	CONSTRAINT `promo_codes_code_unique` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `promo_redemptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`promoCodeId` int NOT NULL,
	`customerName` varchar(255) NOT NULL,
	`customerEmail` varchar(320) NOT NULL,
	`customerPhone` varchar(20),
	`serviceType` enum('daycare','boarding','grooming') NOT NULL,
	`status` enum('pending','confirmed','expired') NOT NULL DEFAULT 'pending',
	`notes` text,
	`redeemedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `promo_redemptions_id` PRIMARY KEY(`id`)
);
