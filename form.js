// // const CALLBACK_REGEX =
// //   /^$|^([a-z][a-z0-9+.-]*):\/\/([^/?#\s]+)(?:\/[^?#\s]*)?(?:\?[^#\s]*)?(?:#.*)?$/
// const SUBDOMAIN_REGEX = /^(([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)(:\d+)?(\/\S*)?$/

// const CALLBACK_REGEX = /^$|^[a-z][a-z0-9+.-]*:\/\/[^\s/$.?#].[^\s]*$/i



const CALLBACK_REGEX = /^$|^[a-z][a-z0-9+.-]*:\/\/[^\s/$.?#](?:[^\s]*[^\s/$.?#])?$/i;
const SUBDOMAIN_REGEX = /^(([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)(:\d+)?(\/\S*)?$/i;
