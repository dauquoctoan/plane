const { toCamel, sqlToJava } = require('./utils');
const config = require('./config');

// Chỉ lấy cột để tạo CreateDTO
function filterCreate(col) {
  return (
    (col.COLUMN_KEY || '') !== 'PRI' &&
    !(col.EXTRA || '').includes('auto_increment') &&
    !config.ignoreColumns.includes(col.COLUMN_NAME)
  );
}

// Generate Create DTO
function genCreate(entity, cols) {
    cols.filter((c)=>{
        return c.COLUMN_NAME !== 'created_at' || c.COLUMN_NAME !== 'updated_at';
    })
    return dto(
        `${entity}CreateRequest`,
        cols.filter(filterCreate), entity
    );
}

// Generate Update DTO
function genUpdate(entity, cols) {
  return dto(
    `${entity}UpdateRequest`,
    cols.filter(c => (c.COLUMN_KEY || '') !== 'PRI'), entity
  );
}

// Generate Delete DTO
function genDelete(entity) {
  return `
package ${config.basePackage}.dto.${entity};

public class ${entity}DeleteRequest {
    private Long id;
}
`;
}

// Generate Response DTO
function genResponse(entity, cols) {
  return dto(`${entity}Response`, cols, entity, true);
}

// Helper: generate DTO class từ columns
function dto(name, cols, entity, cr) {
    const fields = cols.map(c => {
    const colName = c.COLUMN_NAME || 'undefined';
    const colType = c.DATA_TYPE || 'varchar';
    return `    private ${sqlToJava(colType)} ${toCamel(colName)};`;
}).filter(Boolean).join('\n');

return `
package ${config.basePackage}.dto.${entity};

import java.time.*;
import java.math.*;
${cr?`import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import io.swagger.v3.oas.annotations.media.Schema;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Analytic ${entity}")`:""}
public class ${name} {
${fields}
}
`;
}

module.exports = {
  genCreate,
  genUpdate,
  genDelete,
  genResponse,
};
