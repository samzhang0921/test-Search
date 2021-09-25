const config = require('config')

const fullConfig = config.util.toObject()

module.exports = () => {
  return {
    publicRuntimeConfig: fullConfig
  };
};
