/**
 * This file contains all the necessary JSON langs to be used within
 * the site
 */
import * as es_MX from './es_MX.json';

// NOTICE: to support a new language, just add a new entry to this toJSON();
//  and make sure to use the same structure with the corresponding translations
const messages = {
  es_MX: es_MX.default
};

/**
 * Returns all the messages corresponding to the passed language.
 *
 * @param {String} lang The language isoCode.
 * @return {JSON} JSON object with the proper language JSON messages.
 */
const getMessagesForLang = (lang) => messages[lang] ?? {};

export { getMessagesForLang };
