module.exports = {
  db: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'planes',
  },

  basePackage: 'com.server.plane',
  outputDir: '../src/main/java',

  ignoreColumns: ['created_at', 'updated_at'],
  tables: [], // empty = all tables
};
