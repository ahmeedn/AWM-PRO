var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_cors = __toESM(require("cors"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_promise = __toESM(require("mysql2/promise"), 1);
var import_mysql2 = require("drizzle-orm/mysql2");
var import_drizzle_orm = require("drizzle-orm");
var import_fs = __toESM(require("fs"), 1);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
var import_bcryptjs = __toESM(require("bcryptjs"), 1);
var import_multer = __toESM(require("multer"), 1);
var import_vite = require("vite");

// src/db/schema.ts
var schema_exports = {};
__export(schema_exports, {
  auditLogs: () => auditLogs,
  contracts: () => contracts,
  discounts: () => discounts,
  payments: () => payments,
  properties: () => properties,
  tenants: () => tenants,
  users: () => users
});
var import_mysql_core = require("drizzle-orm/mysql-core");
var users = (0, import_mysql_core.mysqlTable)("users", {
  id: (0, import_mysql_core.varchar)("id", { length: 255 }).primaryKey(),
  email: (0, import_mysql_core.varchar)("email", { length: 255 }).unique(),
  passwordHash: (0, import_mysql_core.varchar)("password_hash", { length: 255 }),
  role: (0, import_mysql_core.varchar)("role", { length: 50 }),
  // 'OWNER' | 'TENANT'
  name: (0, import_mysql_core.varchar)("full_name", { length: 255 }),
  tenantLinkCode: (0, import_mysql_core.varchar)("tenant_link_code", { length: 100 }),
  portfolioSlug: (0, import_mysql_core.varchar)("portfolio_slug", { length: 100 }),
  phone: (0, import_mysql_core.varchar)("phone", { length: 100 }),
  whatsapp: (0, import_mysql_core.varchar)("whatsapp", { length: 100 }),
  nationalId: (0, import_mysql_core.varchar)("national_id", { length: 100 }),
  profilePicture: (0, import_mysql_core.text)("profile_picture"),
  instagram: (0, import_mysql_core.varchar)("instagram", { length: 255 }),
  facebook: (0, import_mysql_core.varchar)("facebook", { length: 255 }),
  twitter: (0, import_mysql_core.varchar)("twitter", { length: 255 }),
  website: (0, import_mysql_core.varchar)("website", { length: 255 }),
  currency: (0, import_mysql_core.varchar)("currency", { length: 10 }),
  generalBalance: (0, import_mysql_core.double)("general_balance").default(0),
  createdAt: (0, import_mysql_core.timestamp)("created_at").defaultNow()
});
var properties = (0, import_mysql_core.mysqlTable)("properties", {
  id: (0, import_mysql_core.varchar)("id", { length: 255 }).primaryKey(),
  customId: (0, import_mysql_core.varchar)("custom_id", { length: 100 }),
  name: (0, import_mysql_core.varchar)("name", { length: 255 }),
  type: (0, import_mysql_core.varchar)("type", { length: 100 }),
  address: (0, import_mysql_core.text)("address"),
  governorate: (0, import_mysql_core.varchar)("governorate", { length: 100 }),
  city: (0, import_mysql_core.varchar)("city", { length: 100 }),
  area: (0, import_mysql_core.double)("area"),
  rooms: (0, import_mysql_core.int)("rooms"),
  unitNumber: (0, import_mysql_core.varchar)("unit_number", { length: 100 }),
  description: (0, import_mysql_core.text)("description"),
  status: (0, import_mysql_core.varchar)("status", { length: 50 }),
  ownerId: (0, import_mysql_core.varchar)("owner_id", { length: 255 }),
  purchasingDetails: (0, import_mysql_core.json)("purchasing_details"),
  estimatedValue: (0, import_mysql_core.varchar)("estimated_value", { length: 100 }),
  features: (0, import_mysql_core.json)("features"),
  currentTenant: (0, import_mysql_core.varchar)("current_tenant", { length: 255 }),
  rentStart: (0, import_mysql_core.varchar)("rent_start", { length: 100 }),
  contractEnd: (0, import_mysql_core.varchar)("contract_end", { length: 100 }),
  rentPrice: (0, import_mysql_core.double)("rent_price"),
  increaseRate: (0, import_mysql_core.double)("increase_rate"),
  deposit: (0, import_mysql_core.double)("deposit"),
  terms: (0, import_mysql_core.text)("terms"),
  mapLink: (0, import_mysql_core.text)("map_link"),
  paymentMethod: (0, import_mysql_core.varchar)("payment_method", { length: 100 }),
  images: (0, import_mysql_core.json)("images"),
  views: (0, import_mysql_core.int)("views").default(0),
  createdAt: (0, import_mysql_core.timestamp)("created_at").defaultNow()
});
var tenants = (0, import_mysql_core.mysqlTable)("tenants", {
  id: (0, import_mysql_core.varchar)("id", { length: 255 }).primaryKey(),
  fullName: (0, import_mysql_core.varchar)("full_name", { length: 255 }),
  nationalId: (0, import_mysql_core.varchar)("national_id", { length: 100 }),
  email: (0, import_mysql_core.varchar)("email", { length: 255 }),
  phone: (0, import_mysql_core.varchar)("phone", { length: 100 }),
  whatsapp: (0, import_mysql_core.varchar)("whatsapp", { length: 100 }),
  address: (0, import_mysql_core.text)("address"),
  signature: (0, import_mysql_core.text)("signature"),
  tenantLinkCode: (0, import_mysql_core.varchar)("tenant_link_code", { length: 100 }),
  documents: (0, import_mysql_core.json)("documents"),
  idCardPath: (0, import_mysql_core.text)("id_card_path"),
  notes: (0, import_mysql_core.text)("notes"),
  userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }),
  ownerId: (0, import_mysql_core.varchar)("owner_id", { length: 255 }),
  createdAt: (0, import_mysql_core.timestamp)("created_at").defaultNow()
});
var contracts = (0, import_mysql_core.mysqlTable)("contracts", {
  id: (0, import_mysql_core.varchar)("id", { length: 255 }).primaryKey(),
  contractNumber: (0, import_mysql_core.varchar)("contract_number", { length: 100 }),
  propertyId: (0, import_mysql_core.varchar)("property_id", { length: 255 }),
  tenantId: (0, import_mysql_core.varchar)("tenant_id", { length: 255 }),
  startDate: (0, import_mysql_core.varchar)("start_date", { length: 100 }),
  endDate: (0, import_mysql_core.varchar)("end_date", { length: 100 }),
  durationMonths: (0, import_mysql_core.int)("duration_months"),
  monthlyRent: (0, import_mysql_core.double)("monthly_rent"),
  insuranceAmount: (0, import_mysql_core.double)("insurance_amount"),
  annualIncrease: (0, import_mysql_core.double)("annual_increase"),
  rentAmount: (0, import_mysql_core.double)("rent_amount"),
  paymentFrequency: (0, import_mysql_core.varchar)("payment_frequency", { length: 50 }),
  paymentMethod: (0, import_mysql_core.varchar)("payment_method", { length: 100 }),
  lateFee: (0, import_mysql_core.double)("late_fee"),
  status: (0, import_mysql_core.varchar)("status", { length: 50 }),
  // 'ACTIVE' | 'EXPIRED' | 'CANCELLED'
  details: (0, import_mysql_core.text)("details"),
  additionalTerms: (0, import_mysql_core.text)("additional_terms"),
  renewable: (0, import_mysql_core.boolean)("renewable"),
  pdfPath: (0, import_mysql_core.text)("pdf_path"),
  ownerId: (0, import_mysql_core.varchar)("owner_id", { length: 255 }),
  createdAt: (0, import_mysql_core.timestamp)("created_at").defaultNow()
});
var payments = (0, import_mysql_core.mysqlTable)("payments", {
  id: (0, import_mysql_core.varchar)("id", { length: 255 }).primaryKey(),
  contractId: (0, import_mysql_core.varchar)("contract_id", { length: 255 }),
  propertyId: (0, import_mysql_core.varchar)("property_id", { length: 255 }),
  tenantId: (0, import_mysql_core.varchar)("tenant_id", { length: 255 }),
  paymentNumber: (0, import_mysql_core.varchar)("payment_number", { length: 100 }),
  amount: (0, import_mysql_core.double)("amount").default(0),
  paidAmount: (0, import_mysql_core.double)("paid_amount").default(0),
  totalPaid: (0, import_mysql_core.double)("total_paid").default(0),
  discountAmount: (0, import_mysql_core.double)("discount_amount").default(0),
  lateFeeApplied: (0, import_mysql_core.double)("late_fee_applied").default(0),
  dueDate: (0, import_mysql_core.varchar)("due_date", { length: 100 }),
  status: (0, import_mysql_core.varchar)("status", { length: 50 }),
  // 'PENDING' | 'PAID'
  datePaid: (0, import_mysql_core.varchar)("date_paid", { length: 100 }),
  paymentDate: (0, import_mysql_core.varchar)("payment_date", { length: 100 }),
  method: (0, import_mysql_core.varchar)("method", { length: 50 }),
  type: (0, import_mysql_core.varchar)("type", { length: 50 }),
  notes: (0, import_mysql_core.text)("notes"),
  receiptUrl: (0, import_mysql_core.text)("receipt_url"),
  ownerId: (0, import_mysql_core.varchar)("owner_id", { length: 255 }),
  createdAt: (0, import_mysql_core.timestamp)("created_at").defaultNow()
});
var discounts = (0, import_mysql_core.mysqlTable)("discounts", {
  id: (0, import_mysql_core.varchar)("id", { length: 255 }).primaryKey(),
  amount: (0, import_mysql_core.double)("amount"),
  reason: (0, import_mysql_core.text)("reason"),
  date: (0, import_mysql_core.varchar)("date", { length: 100 }),
  ownerId: (0, import_mysql_core.varchar)("owner_id", { length: 255 }),
  createdAt: (0, import_mysql_core.timestamp)("created_at").defaultNow()
});
var auditLogs = (0, import_mysql_core.mysqlTable)("audit_logs", {
  id: (0, import_mysql_core.varchar)("id", { length: 255 }).primaryKey(),
  userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }),
  action: (0, import_mysql_core.varchar)("action", { length: 100 }),
  entityType: (0, import_mysql_core.varchar)("entity_type", { length: 100 }),
  entityId: (0, import_mysql_core.varchar)("entity_id", { length: 255 }),
  details: (0, import_mysql_core.text)("details"),
  ownerId: (0, import_mysql_core.varchar)("owner_id", { length: 255 }),
  timestamp: (0, import_mysql_core.timestamp)("timestamp").defaultNow()
});

// server.ts
import_dotenv.default.config();
var app = (0, import_express.default)();
app.use((0, import_cors.default)());
app.use(import_express.default.json({ limit: "50mb" }));
var PORT = 3e3;
var uploadsDir = import_path.default.join(process.cwd(), "uploads");
if (!import_fs.default.existsSync(uploadsDir)) {
  import_fs.default.mkdirSync(uploadsDir);
}
app.use("/uploads", import_express.default.static(uploadsDir));
var upload = (0, import_multer.default)({
  dest: uploadsDir,
  limits: { fileSize: 10 * 1024 * 1024 }
  // 10MB limit
});
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});
var sslConfig = { rejectUnauthorized: false };
if (process.env.MYSQL_CA_CERT) {
  try {
    if (process.env.MYSQL_CA_CERT.includes("BEGIN CERTIFICATE")) {
      sslConfig = { ca: process.env.MYSQL_CA_CERT, rejectUnauthorized: true };
    } else if (import_fs.default.existsSync(process.env.MYSQL_CA_CERT)) {
      sslConfig = { ca: import_fs.default.readFileSync(process.env.MYSQL_CA_CERT, "utf8"), rejectUnauthorized: true };
    }
  } catch (e) {
    console.error("Failed to parse MYSQL_CA_CERT", e);
  }
}
var pool = import_promise.default.createPool({
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || "26535"),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  ssl: sslConfig
});
var db = (0, import_mysql2.drizzle)(pool, { schema: schema_exports, mode: "default" });
(async () => {
  try {
    const [cols] = await pool.query("SHOW COLUMNS FROM properties LIKE 'views'");
    if (cols.length === 0) {
      await pool.query("ALTER TABLE properties ADD COLUMN views INT DEFAULT 0");
      console.log("Added views column to properties table");
    }
    const [userCols] = await pool.query("SHOW COLUMNS FROM users LIKE 'whatsapp'");
    if (userCols.length === 0) {
      await pool.query("ALTER TABLE users ADD COLUMN whatsapp VARCHAR(100)");
      console.log("Added whatsapp column to users table");
    }
  } catch (e) {
    console.error("Schema evolution error:", e);
  }
})();
var JWT_SECRET = process.env.JWT_SECRET || "super-secret-jwt-key";
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Missing fields" });
  try {
    const result = await db.query.users.findFirst({ where: (u, { eq: eq2 }) => eq2(u.email, email) });
    if (!result) return res.status(401).json({ error: "Invalid credentials" });
    const pass = result.passwordHash || result.password;
    const isValid = await import_bcryptjs.default.compare(password, pass).catch(() => password === pass);
    if (!isValid && password !== pass) return res.status(401).json({ error: "Invalid credentials" });
    const token = import_jsonwebtoken.default.sign({ id: result.id, role: result.role, email: result.email }, JWT_SECRET);
    res.json({ token, user: { id: result.id, email: result.email, role: result.role, fullName: result.fullName || result.name } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
var collectionsMap = {
  users,
  properties,
  tenants,
  contracts,
  payments,
  discounts,
  audit_logs: auditLogs
};
app.post("/api/db/getDocs", async (req, res) => {
  const { path: path2, constraints } = req.body;
  const table = collectionsMap[path2];
  if (!table) return res.status(404).json({ error: "Table not found" });
  let conditions = [];
  for (const c of constraints || []) {
    if (c.type === "where") {
      const col = table[c.field];
      if (!col) {
        console.error(`Invalid field: ${c.field} on table ${path2}`);
        return res.status(400).json({ error: `Invalid field: ${c.field}` });
      }
      if (c.op === "==") conditions.push((0, import_drizzle_orm.eq)(col, c.value));
    }
  }
  try {
    const results = await db.select().from(table).where(conditions.length > 0 ? (0, import_drizzle_orm.and)(...conditions) : void 0);
    res.json(results);
  } catch (e) {
    console.error("error in getDocs", e);
    res.status(500).json({ error: e.message });
  }
});
app.post("/api/db/getDoc", async (req, res) => {
  const { path: path2, id } = req.body;
  const table = collectionsMap[path2];
  if (!table) return res.status(404).json({ error: "Table not found" });
  try {
    const resultList = await db.select().from(table).where((0, import_drizzle_orm.eq)(table.id, id)).limit(1);
    const result = resultList.length > 0 ? resultList[0] : null;
    res.json(result || null);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
var cleanDataForDB = (data) => {
  const cleanData = { ...data };
  for (const [k, v] of Object.entries(cleanData)) {
    if (v && typeof v === "object" && "seconds" in v) {
      cleanData[k] = new Date(v.seconds * 1e3);
    } else if (v && typeof v === "string" && (k === "createdAt" || k === "updatedAt" || k === "timestamp")) {
      cleanData[k] = new Date(v);
    }
  }
  return cleanData;
};
app.post("/api/db/setDoc", async (req, res) => {
  const { ref, data, options } = req.body;
  const table = collectionsMap[ref.path];
  if (!table) return res.status(404).json({ error: "Table not found" });
  try {
    const id = ref.id;
    const existsList = await db.select().from(table).where((0, import_drizzle_orm.eq)(table.id, id)).limit(1);
    const exists = existsList.length > 0;
    const cleanData = cleanDataForDB(data);
    cleanData.id = id;
    if (exists) {
      if (options?.merge) {
        await db.update(table).set(cleanData).where((0, import_drizzle_orm.eq)(table.id, id));
      } else {
        await db.delete(table).where((0, import_drizzle_orm.eq)(table.id, id));
        await db.insert(table).values(cleanData);
      }
    } else {
      await db.insert(table).values(cleanData);
    }
    res.json({ success: true, id });
  } catch (e) {
    console.error("setDoc error:", e);
    res.status(500).json({ error: e.message });
  }
});
app.post("/api/db/updateDoc", async (req, res) => {
  const { ref, data } = req.body;
  const table = collectionsMap[ref.path];
  if (!table) return res.status(404).json({ error: "Table not found" });
  try {
    const cleanData = cleanDataForDB(data);
    await db.update(table).set(cleanData).where((0, import_drizzle_orm.eq)(table.id, ref.id));
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
app.post("/api/db/deleteDoc", async (req, res) => {
  const { ref } = req.body;
  const table = collectionsMap[ref.path];
  if (!table) return res.status(404).json({ error: "Table not found" });
  try {
    await db.delete(table).where((0, import_drizzle_orm.eq)(table.id, ref.id));
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
app.post("/api/db/batch", async (req, res) => {
  const { operations } = req.body;
  try {
    await db.transaction(async (tx) => {
      for (const op of operations) {
        const table = collectionsMap[op.ref.path];
        if (!table) continue;
        const cleanData = cleanDataForDB(op.data || {});
        if (op.type === "set") {
          cleanData.id = op.ref.id;
          const existsList = await tx.select().from(table).where((0, import_drizzle_orm.eq)(table.id, op.ref.id)).limit(1);
          const exists = existsList.length > 0;
          if (exists) {
            if (op.options?.merge) {
              await tx.update(table).set(cleanData).where((0, import_drizzle_orm.eq)(table.id, op.ref.id));
            } else {
              await tx.delete(table).where((0, import_drizzle_orm.eq)(table.id, op.ref.id));
              await tx.insert(table).values(cleanData);
            }
          } else {
            await tx.insert(table).values(cleanData);
          }
        } else if (op.type === "update") {
          await tx.update(table).set(cleanData).where((0, import_drizzle_orm.eq)(table.id, op.ref.id));
        } else if (op.type === "delete") {
          await tx.delete(table).where((0, import_drizzle_orm.eq)(table.id, op.ref.id));
        }
      }
    });
    res.json({ success: true });
  } catch (e) {
    console.error("batch error", e);
    res.status(500).json({ error: e.message });
  }
});
app.post("/api/db/init", async (req, res) => {
  try {
    const tables = ["audit_logs", "contracts", "discounts", "payments", "properties", "tenants", "users"];
    for (const table of tables) {
      await pool.query(`DROP TABLE IF EXISTS ${table}`);
    }
    const migDir = import_path.default.join(process.cwd(), "src/db/migrations");
    const migFile = import_fs.default.readdirSync(migDir).find((f) => f.endsWith(".sql"));
    if (!migFile) throw new Error("No migration file found.");
    const migPath = import_path.default.join(migDir, migFile);
    const sql = import_fs.default.readFileSync(migPath, "utf8");
    const statements = sql.split("--> statement-breakpoint").map((s) => s.trim()).filter((s) => s.length > 0);
    for (const stmt of statements) {
      await pool.query(stmt);
    }
    res.json({ success: true, message: "Database re-initialized." });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    try {
      const connection = await pool.getConnection();
      console.log("Connected to MySQL database!");
      connection.release();
    } catch (e) {
      console.error("Failed to connect to DB at startup:", e);
    }
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
