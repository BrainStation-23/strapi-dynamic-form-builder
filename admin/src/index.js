import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';

export default {
  register(app) {
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  bootstrap() {},
};
