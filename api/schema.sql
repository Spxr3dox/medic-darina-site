-- MEDIC DARIYA — MySQL schema (utf8mb4). Виконати один раз через phpMyAdmin.

CREATE TABLE IF NOT EXISTS accounts (
  id           VARCHAR(64) NOT NULL PRIMARY KEY,
  name         VARCHAR(120) NOT NULL,
  email        VARCHAR(190) NOT NULL UNIQUE,
  pass_hash    VARCHAR(255) NOT NULL,
  role         VARCHAR(16) NOT NULL DEFAULT 'user',
  avatar       TEXT NULL,
  created_at   BIGINT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS sessions (
  token       VARCHAR(64) NOT NULL PRIMARY KEY,
  account_id  VARCHAR(64) NOT NULL,
  created_at  BIGINT NOT NULL,
  CONSTRAINT fk_sessions_acc FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS products (
  id            VARCHAR(64) NOT NULL PRIMARY KEY,
  title         VARCHAR(255) NOT NULL,
  descr         TEXT NULL,
  price         DECIMAL(12,2) NOT NULL,
  old_price     DECIMAL(12,2) NULL,
  sku           VARCHAR(80) NULL,
  color         VARCHAR(80) NULL,
  category      VARCHAR(40) DEFAULT 'scrubs',
  gender        VARCHAR(16) DEFAULT 'unisex',
  brand         VARCHAR(80) NULL,
  sizes_top     TEXT NULL,
  sizes_bottom  TEXT NULL,
  pants_lens    TEXT NULL,
  avail         VARCHAR(16) NOT NULL DEFAULT 'stock',
  photo         TEXT NULL,
  created_at    BIGINT NOT NULL,
  INDEX idx_products_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS news (
  id          VARCHAR(64) NOT NULL PRIMARY KEY,
  title       VARCHAR(255) NOT NULL,
  body        TEXT NULL,
  photo       TEXT NULL,
  created_at  BIGINT NOT NULL,
  INDEX idx_news_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS orders (
  id          VARCHAR(64) NOT NULL PRIMARY KEY,
  account_id  VARCHAR(64) NULL,
  items_json  MEDIUMTEXT NOT NULL,
  total       DECIMAL(12,2) NOT NULL,
  status      VARCHAR(16) NOT NULL DEFAULT 'new',
  created_at  BIGINT NOT NULL,
  INDEX idx_orders_acc (account_id),
  INDEX idx_orders_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS presence (
  session_id  VARCHAR(64) NOT NULL PRIMARY KEY,
  account_id  VARCHAR(64) NULL,
  seen_at     BIGINT NOT NULL,
  INDEX idx_presence_seen (seen_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
