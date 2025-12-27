const mysql = require('mysql2/promise');
const config = require('./config');

async function getTables() {
  const conn = await mysql.createConnection(config.db);
  const [rows] = await conn.query(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = ?
  `, [config.db.database]);
  await conn.end();
  return rows.map(r => r.TABLE_NAME);
}

async function getColumns(table) {
  const conn = await mysql.createConnection(config.db);
  const [rows] = await conn.query(`
    SELECT column_name, data_type, is_nullable, column_key, extra
    FROM information_schema.columns
    WHERE table_schema = ?
      AND table_name = ?
    ORDER BY ordinal_position
  `, [config.db.database, table]);
  await conn.end();
  return rows;
}

module.exports = { getTables, getColumns };
