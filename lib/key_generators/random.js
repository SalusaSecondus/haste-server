var RandomKeyGenerator = function(options) {
  if (!options) {
    options = {};
  }
  this.keyspace = options.keyspace || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
};

// Generate a random key
RandomKeyGenerator.prototype.createKey = function(keyLength) {
  if (typeof(global.nextKeyValue) == 'undefined') {
     global.nextKeyValue = 1000;   
  }
  var increment = Math.floor(Math.random() * 15);
  var result = global.nextKeyValue + increment;
  global.nextKeyValue = Math.max(global.nextKeyValue, result);
  return '' + result;
};

module.exports = RandomKeyGenerator;
