/**
 * This file contains all the necessary JSON langs to be used within
 * the site
 */
import * as es_MX from './es_MX.json';

const messages = {
  es_MX: es_MX.default
};

/**
 * @param {String} lang The language isoCode.
 * @return {JSON} JSON object with the proper language JSON messages.
 */
const getMessagesForLang = (lang) => messages[lang] ?? {};

export { getMessagesForLang };
