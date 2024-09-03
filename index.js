// const SUBDOMAIN_REGEX = /^(([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)(:\d+)?(\/\S*)?$/;
// const URL_REGEX = new RegExp('(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))');
// const NEW_CALLBACK_REGEX = /^(?:.+:\/\/.*)(d*)\/?(.*)$/;




// const CALLBACK_REGEX = /^(?:.+:\/\/.*)(d*)\/?(.*)$/;
// const SUBDOMAIN_REGEX = /^(([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)(:\d+)?(\/\S*)?$/;



// const CALLBACK_REGEX = /^(?:.+:\/\/.*)(?:\d+|\d*)\/?(.*)$/;
// const SUBDOMAIN_REGEX = /^(([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)(:\d+)?(\/\S*)?$/;
// const OLD_URL_REGEX = new RegExp('(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))');
// const CALLBACK_REGEX = /^(?:$|(?:.+:\/\/[^\d]*\d*\/?.*))$/;
// const SUBDOMAIN_REGEX = /^(([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)(:\d+)?(\/\S*)?$/;

// const SUBDOMAIN_REGEX = /^(([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)(:\d+)?(\/\S*)?$/;
// const CALLBACK_REGEX = /^(?:$|(?:[a-zA-Z]+:\/\/[^\d]*\d*\/?.*))$/;
// const newOne= /^(?:$|(?:.+:\/\/[^\/]*\/?.*))$/;

// const EMPTY_STRING_REGEX = /^$/;
// const URL_REGEX = /^(?:.+:\/\/[^\/]*\/?.*)$/;

// const CALLBACK_REGEX = new RegExp(`(?:${EMPTY_STRING_REGEX.source}|${URL_REGEX.source})`);
// const CALLBACK_REGEX = /^$|^(?:https?:\/\/)(?:[^/\s:]+)(?::\d+)?(?:\/[^/\s]*)*$/
const CALLBACK_REGEX = /^$|^([a-z][a-z0-9+.-]*):\/\/([^/?#\s]+)(?:\/[^?#\s]*)?(?:\?[^#\s]*)?(?:#.*)?$/i;
