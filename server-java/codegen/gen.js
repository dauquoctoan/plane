console.log('GEN START');

const config = require('./config');
const { getTables, getColumns } = require('./db');
const { toPascal } = require('./utils');
const { write } = require('./writer');
const dto = require('./gen-dto');
const { genController } = require('./gen-controller');
const { genService } = require('./gen-service');

(async () => {
  try {
    console.log('CONNECTING DB...');

    const tables = config.tables.length
      ? config.tables
      : await getTables();

    console.log('TABLES:', tables);

    for (const table of tables) {
      console.log('PROCESS TABLE:', table);

      const cols = await getColumns(table);
      console.log('COLUMNS:', cols.length);

      const Entity = toPascal(table);

      write('dto', `${Entity}/${Entity}CreateRequest.java`, dto.genCreate(Entity, cols));
      write('dto', `${Entity}/${Entity}UpdateRequest.java`, dto.genUpdate(Entity, cols));
      write('dto', `${Entity}/${Entity}DeleteRequest.java`, dto.genDelete(Entity));
      write('dto', `${Entity}/${Entity}Response.java`, dto.genResponse(Entity, cols));
      write('controller', `${Entity}/${Entity}Controller.java`, genController(Entity));
      write('service', `${Entity}/${Entity}Service.java`, genService(Entity));

      console.log(`✔ DONE: ${table}`);
    }

    console.log('GEN DONE');
  } catch (err) {
    console.error('❌ GEN ERROR');
    console.error(err);
  }
})();
