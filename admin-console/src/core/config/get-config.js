// TODO move this to the initial fetch so that we get this as a JSON and just
//  persist it within a window element and sync it up with the localStorage
const defaultConfig = {
  lang: {
    default: 'es_MX',
    supported: ['es_MX', 'en_US'],
  },
};

const attr = (config, path) => {
  if (!config) {
    throw new Error(`Invalid configuration for path [${path}]`);
  }

  const periodIndex = path.indexOf('.');

  // found the configuration level
  if (periodIndex === -1) {
    return config[path];
  }

  // inspect the next level
  const key = path.substring(0, periodIndex);

  if (!config[key]) {
    return null;
  }

  return attr(config[key], path.substring(periodIndex + 1, path.length));
};

const getConfig = (key, defaultValue = null) => {
  return attr(defaultConfig, key) ?? defaultValue;
};

export { getConfig };
