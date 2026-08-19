'use strict';

module.exports = () => ({
  controllers: require('./controllers'),
  routes: require('./routes'),
  services: require('./services'),
  contentTypes: require('./content-types'),
});
