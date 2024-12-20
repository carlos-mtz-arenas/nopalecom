
const findMsg = (messages, path) => {
  if (!messages) {
    throw new Error(`Invalid configuration for path [${path}]`);
  }

  const periodIndex = path.indexOf('.');

  if (periodIndex === -1) {
    return messages[path];
  }

  const key = path.substring(0, periodIndex);

  if (!messages[key]) {
    return null;
  }

  return findMsg(messages[key], path.substring(periodIndex + 1, path.length));
}

const overrideParamsInMessage = (msg, params) => {
  // TODO find a better way to do this, like in general
  params.forEach((param, index) => {
    console.log('replacing', `\{${index}\}`, 'with', param);
    msg = msg.replace(`\{${index}\}`, param);
  });

  return msg;
}

const getMessage = (key, params) => {
  if (!window.nopalEcom.messages) {
    throw new Error('Current language was not properly loaded');
  }

  const { messages } = window.nopalEcom;
  const message = findMsg(messages, key);

  // TODO in case a message is not found on the current lang (and not equal to default), try on default's
  if (!message) {
    console.warn(`Could not find [${key}]`);
    return '';
  }

  if (!params) {
    return message;
  }

  return overrideParamsInMessage(message, params);
};

export { getMessage };
