function toCamel(str) {
  return str?.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

function toPascal(str) {
  const camel = toCamel(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function sqlToJava(type) {
  return {
    bigint: 'Long',
    int: 'Integer',
    varchar: 'String',
    text: 'String',
    datetime: 'LocalDateTime',
    timestamp: 'LocalDateTime',
    date: 'LocalDate',
    decimal: 'BigDecimal',
  }[type] || 'String';
}

module.exports = { toCamel, toPascal, sqlToJava };
