const fs = require('fs');
const path = require('path');
const config = require('./config');

function pkgPath() {
  return config.basePackage.replace(/\./g, '/');
}

function write(sub, file, content) {
  const full = path.join(
    config.outputDir,
    pkgPath(),
    sub,
    file
  );
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
}

module.exports = { write };
