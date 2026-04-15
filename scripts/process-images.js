const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_IMAGES = path.join(ROOT, "public", "images");
const ASSETS = path.join(ROOT, "ASSETS");

// Ensure output directory exists
if (!fs.existsSync(PUBLIC_IMAGES)) fs.mkdirSync(PUBLIC_IMAGES, { recursive: true });

// ── Source image paths ──────────────────────────────────────────────
const src = {
  // Stock photos (high-quality, wide — good for heroes)
  stock1: path.join(ASSETS, "stockphotos", "1.jpg"),
  stock2: path.join(ASSETS, "stockphotos", "2.jpg"),
  stock3: path.join(ASSETS, "stockphotos", "3.jpg"),
  stock4: path.join(ASSETS, "stockphotos", "4.jpg"),
  stock5: path.join(ASSETS, "stockphotos", "5.jpg"),
  stock6: path.join(ASSETS, "stockphotos", "6.jpg"),
  stock7: path.join(ASSETS, "stockphotos", "7.jpg"),
  stock8: path.join(ASSETS, "stockphotos", "8.jpg"),

  // Best pool client photos
  pool0975: path.join(ASSETS, "client-photos-best-pools", "IMG_0975.jpeg"),
  pool1829: path.join(ASSETS, "client-photos-best-pools", "IMG_1829.jpeg"),
  pool2103: path.join(ASSETS, "client-photos-best-pools", "IMG_2103.jpeg"),
  pool2505: path.join(ASSETS, "client-photos-best-pools", "IMG_2505.jpeg"),
  pool2506: path.join(ASSETS, "client-photos-best-pools", "IMG_2506.jpeg"),
  pool2508: path.join(ASSETS, "client-photos-best-pools", "IMG_2508.jpeg"),
  pool2511: path.join(ASSETS, "client-photos-best-pools", "IMG_2511.jpeg"),
  pool2512: path.join(ASSETS, "client-photos-best-pools", "IMG_2512.jpeg"),
  pool2690: path.join(ASSETS, "client-photos-best-pools", "IMG_2690.jpeg"),
  pool2756: path.join(ASSETS, "client-photos-best-pools", "IMG_2756.jpeg"),
  pool2904: path.join(ASSETS, "client-photos-best-pools", "IMG_2904.jpeg"),
  pool3724: path.join(ASSETS, "client-photos-best-pools", "IMG_3724.jpeg"),
  pool3932: path.join(ASSETS, "client-photos-best-pools", "IMG_3932.jpeg"),
  pool3951: path.join(ASSETS, "client-photos-best-pools", "IMG_3951.jpeg"),
  pool3954: path.join(ASSETS, "client-photos-best-pools", "IMG_3954.jpeg"),
  pool3964: path.join(ASSETS, "client-photos-best-pools", "IMG_3964.jpeg"),
  pool4233: path.join(ASSETS, "client-photos-best-pools", "IMG_4233.jpeg"),
  pool4728: path.join(ASSETS, "client-photos-best-pools", "IMG_4728.jpeg"),
  pool5504: path.join(ASSETS, "client-photos-best-pools", "IMG_5504.jpeg"),
  pool5747: path.join(ASSETS, "client-photos-best-pools", "IMG_5747.jpeg"),

  // General client photos (trucks, equipment, delivery)
  truck1: path.join(ASSETS, "client-photos", "IMG_6608.jpg"),
  truck2: path.join(ASSETS, "client-photos", "0_2.jpg"),
  truckAction1: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T115644.320.png"),
  truckAction2: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T120933.523.png"),
  truckAction3: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T121147.861.png"),
  truckAction4: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T121230.288.png"),
  truckFleet1: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T120035.142.png"),
  truckFleet2: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T120523.421.png"),
  truckTank1: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T120431.233.png"),
  truckTank2: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T120446.875.png"),
  truckSite1: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T120656.823.png"),
  truckSite2: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T115308.447.png"),
  truckDetail1: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T120638.678.png"),
  truckPool1: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T115134.892.png"),
  truckPool2: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T114649.253.png"),
  landscapeWater: path.join(ASSETS, "client-photos", "Ben-PCs-Computer-Tech-Specialist---2023-08-29T121103.090.png"),

  // Logo
  logo: path.join(ASSETS, "logo", "Screenshot-2023-08-29-095042.png"),
};

// ── Processing tasks ────────────────────────────────────────────────
// Each task: { input, output, width, height (optional), format }
const tasks = [
  // ===== HEROES (1920px wide) =====
  { input: src.stock3, output: "hero-home.webp", width: 1920 },
  { input: src.stock7, output: "about-hero.webp", width: 1920 },
  { input: src.stock4, output: "contact-hero.webp", width: 1920 },
  { input: src.stock6, output: "service-areas-hero.webp", width: 1920 },
  { input: src.stock5, output: "services-hero.webp", width: 1920 },

  // Service page heroes
  { input: src.stock1, output: "pool-water-delivery-hero.webp", width: 1920 },
  { input: src.pool2690, output: "well-water-refill-hero.webp", width: 1920 },
  { input: src.stock8, output: "emergency-water-delivery-hero.webp", width: 1920 },
  { input: src.stock2, output: "hot-tub-water-delivery-hero.webp", width: 1920 },
  { input: src.pool3724, output: "potable-water-delivery-hero.webp", width: 1920 },
  { input: src.truck1, output: "bulk-water-delivery-hero.webp", width: 1920 },
  { input: src.pool0975, output: "emergency-well-water-refill-hero.webp", width: 1920 },
  { input: src.pool1829, output: "pool-filling-new-installations-hero.webp", width: 1920 },
  { input: src.pool2103, output: "pool-liner-replacement-hero.webp", width: 1920 },
  { input: src.pool5504, output: "same-day-water-delivery-hero.webp", width: 1920 },
  { input: src.truckAction1, output: "clean-potable-water-hero.webp", width: 1920 },
  { input: src.truckFleet1, output: "rural-properties-hero.webp", width: 1920 },
  { input: src.truckSite2, output: "contractors-hero.webp", width: 1920 },

  // ===== SERVICE CARDS (800x600) =====
  { input: src.pool2506, output: "pool-water-delivery-card.webp", width: 800 },
  { input: src.pool2904, output: "well-water-refill-card.webp", width: 800 },
  { input: src.pool4728, output: "emergency-water-delivery-card.webp", width: 800 },
  { input: src.pool2512, output: "hot-tub-water-delivery-card.webp", width: 800 },
  { input: src.pool3954, output: "potable-water-delivery-card.webp", width: 800 },
  { input: src.truck2, output: "bulk-water-delivery-card.webp", width: 800 },
  { input: src.pool2756, output: "emergency-well-water-refill-card.webp", width: 800 },
  { input: src.pool3932, output: "pool-filling-new-installations-card.webp", width: 800 },
  { input: src.pool2505, output: "pool-liner-replacement-card.webp", width: 800 },
  { input: src.pool3964, output: "same-day-water-delivery-card.webp", width: 800 },
  { input: src.pool2511, output: "clean-potable-water-card.webp", width: 800 },
  { input: src.truckAction3, output: "rural-properties-card.webp", width: 800 },
  { input: src.truckTank1, output: "contractors-card.webp", width: 800 },

  // ===== SERVICE DETAIL IMAGES (800px wide) =====
  // Pool Water Delivery
  { input: src.pool2690, output: "pool-water-delivery-detail-1.webp", width: 800 },
  { input: src.pool3951, output: "pool-water-delivery-detail-2.webp", width: 800 },
  // Well Water Refill
  { input: src.truckAction2, output: "well-water-refill-detail-1.webp", width: 800 },
  { input: src.truckPool1, output: "well-water-refill-detail-2.webp", width: 800 },
  // Emergency Water Delivery
  { input: src.truckFleet2, output: "emergency-water-delivery-detail-1.webp", width: 800 },
  { input: src.truckDetail1, output: "emergency-water-delivery-detail-2.webp", width: 800 },
  // Hot Tub Water Delivery
  { input: src.pool2508, output: "hot-tub-water-delivery-detail-1.webp", width: 800 },
  { input: src.pool3954, output: "hot-tub-water-delivery-detail-2.webp", width: 800 },
  // Potable Water Delivery
  { input: src.truckTank2, output: "potable-water-delivery-detail-1.webp", width: 800 },
  { input: src.truckSite1, output: "potable-water-delivery-detail-2.webp", width: 800 },
  // Bulk Water Delivery
  { input: src.truckFleet1, output: "bulk-water-delivery-detail-1.webp", width: 800 },
  { input: src.truckAction4, output: "bulk-water-delivery-detail-2.webp", width: 800 },
  // Emergency Well Water Refill
  { input: src.pool0975, output: "emergency-well-water-refill-detail-1.webp", width: 800 },
  { input: src.truckPool2, output: "emergency-well-water-refill-detail-2.webp", width: 800 },
  // Pool Filling New Installations
  { input: src.pool1829, output: "pool-filling-new-installations-detail-1.webp", width: 800 },
  { input: src.pool2506, output: "pool-filling-new-installations-detail-2.webp", width: 800 },
  // Pool Liner Replacement
  { input: src.pool2103, output: "pool-liner-replacement-detail-1.webp", width: 800 },
  { input: src.pool2505, output: "pool-liner-replacement-detail-2.webp", width: 800 },
  // Same Day Water Delivery
  { input: src.pool5504, output: "same-day-water-delivery-detail-1.webp", width: 800 },
  { input: src.truckAction2, output: "same-day-water-delivery-detail-2.webp", width: 800 },
  // Clean Potable Water
  { input: src.truckAction1, output: "clean-potable-water-detail-1.webp", width: 800 },
  { input: src.truckTank2, output: "clean-potable-water-detail-2.webp", width: 800 },
  // Rural Properties
  { input: src.truckAction3, output: "rural-properties-detail-1.webp", width: 800 },
  { input: src.landscapeWater, output: "rural-properties-detail-2.webp", width: 800 },
  // Contractors
  { input: src.truckSite2, output: "contractors-detail-1.webp", width: 800 },
  { input: src.truckFleet2, output: "contractors-detail-2.webp", width: 800 },

  // ===== SECTION IMAGES (800px wide) =====
  { input: src.pool5504, output: "about-preview.webp", width: 800 },
  { input: src.pool3724, output: "standards-feature.webp", width: 800 },
  { input: src.pool5747, output: "about-story.webp", width: 800 },
  { input: src.pool4233, output: "about-team.webp", width: 800 },
  { input: src.truckAction1, output: "service-areas-feature.webp", width: 800 },

  // ===== LOGO (PNG, keep as-is but resize) =====
  { input: src.logo, output: "logo.png", width: 360, format: "png" },
];

// ── Logo white variant & favicons ───────────────────────────────────
async function processLogo() {
  console.log("Processing logo...");

  // Main logo
  await sharp(src.logo)
    .rotate() // auto-rotate from EXIF
    .resize(360)
    .png({ quality: 90 })
    .toFile(path.join(PUBLIC_IMAGES, "logo.png"));
  console.log("  logo.png");

  // White variant (invert colors for dark backgrounds)
  await sharp(src.logo)
    .rotate()
    .resize(360)
    .negate({ alpha: false })
    .png({ quality: 90 })
    .toFile(path.join(PUBLIC_IMAGES, "logo-white.png"));
  console.log("  logo-white.png");

  // Favicon (32x32)
  await sharp(src.logo)
    .rotate()
    .resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(ROOT, "public", "favicon.png"));
  console.log("  favicon.png");

  // Also make an ICO-compatible PNG
  await sharp(src.logo)
    .rotate()
    .resize(48, 48, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(ROOT, "public", "favicon-48.png"));

  // Apple touch icon (180x180)
  await sharp(src.logo)
    .rotate()
    .resize(180, 180, { fit: "contain", background: { r: 26, g: 86, b: 163 } })
    .png()
    .toFile(path.join(ROOT, "public", "apple-touch-icon.png"));
  console.log("  apple-touch-icon.png");

  // PWA icons
  await sharp(src.logo)
    .rotate()
    .resize(192, 192, { fit: "contain", background: { r: 26, g: 86, b: 163 } })
    .png()
    .toFile(path.join(PUBLIC_IMAGES, "icon-192.png"));
  console.log("  icon-192.png");

  await sharp(src.logo)
    .rotate()
    .resize(512, 512, { fit: "contain", background: { r: 26, g: 86, b: 163 } })
    .png()
    .toFile(path.join(PUBLIC_IMAGES, "icon-512.png"));
  console.log("  icon-512.png");
}

// ── OG Image ────────────────────────────────────────────────────────
async function createOGImage() {
  console.log("Creating OG image...");
  // Use stock photo 3 as background, composite logo on top
  const bg = await sharp(src.stock3)
    .rotate()
    .resize(1200, 630, { fit: "cover" })
    .modulate({ brightness: 0.6 }) // darken for text contrast
    .toBuffer();

  const logoResized = await sharp(src.logo)
    .rotate()
    .resize(400)
    .png()
    .toBuffer();

  await sharp(bg)
    .composite([{
      input: logoResized,
      gravity: "centre",
    }])
    .jpeg({ quality: 85 })
    .toFile(path.join(PUBLIC_IMAGES, "og-image.jpg"));
  console.log("  og-image.jpg");
}

// ── Main processing ─────────────────────────────────────────────────
async function processAll() {
  console.log(`\nProcessing ${tasks.length} images...\n`);

  let success = 0;
  let failed = 0;

  for (const task of tasks) {
    try {
      if (!fs.existsSync(task.input)) {
        console.log(`  SKIP (not found): ${path.basename(task.input)} -> ${task.output}`);
        failed++;
        continue;
      }

      const fmt = task.format || "webp";
      let pipeline = sharp(task.input).rotate(); // auto-rotate from EXIF

      if (task.width && task.height) {
        pipeline = pipeline.resize(task.width, task.height, { fit: "cover" });
      } else if (task.width) {
        pipeline = pipeline.resize(task.width);
      }

      if (fmt === "webp") {
        pipeline = pipeline.webp({ quality: 80 });
      } else if (fmt === "png") {
        pipeline = pipeline.png({ quality: 90 });
      } else {
        pipeline = pipeline.jpeg({ quality: 85 });
      }

      await pipeline.toFile(path.join(PUBLIC_IMAGES, task.output));
      console.log(`  OK: ${task.output}`);
      success++;
    } catch (err) {
      console.log(`  FAIL: ${task.output} — ${err.message}`);
      failed++;
    }
  }

  console.log(`\nImages: ${success} OK, ${failed} failed\n`);

  // Logo & favicons
  await processLogo();

  // OG Image
  await createOGImage();

  console.log("\nAll done!");
}

processAll().catch(console.error);
