var fs = require('fs');
configPath = './keys/config.json';
var parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));
exports.storageConfig = parsed;
console.log(parsed)

