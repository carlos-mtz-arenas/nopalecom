const DEFAULT_TIMEOUT = 1000;

/**
 * Shows a snack message for some time.
 * @returns {Promise} Time in which the message is being shown in case it needs tracking.
 */
const showSnack = ({
  dispatchEvent,
  msg,
  timeout = DEFAULT_TIMEOUT
}) => {
  if (!dispatchEvent) {
    console.warn('There is no element to trigger this event');
    return;
  }

  return new Promise((resolve) => {
    const snackMsg = document.createElement('snack-msg');
    snackMsg.setAttribute('message', msg);
    document.body.append(snackMsg);

    setTimeout(() => {
      snackMsg.remove();
      resolve();
    }, timeout);
  });
};

export { showSnack };
