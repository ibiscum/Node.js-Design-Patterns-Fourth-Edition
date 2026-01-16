import { UrlBuilder } from "./urlBuilder.js";

const url = new UrlBuilder()
  .setProtocol("https")
  .setAuthentication("user", "pass")
  .setHostname("example.com")
  .build();

// Do not log URLs with credentials in cleartext.
// Example: log without authentication information
const sanitizedUrl = (() => {
  // reconstruct URL without the username and password
  let str = "";
  if (url.protocol) str += `${url.protocol}://`;
  // Skip credentials!
  str += url.hostname;
  if (url.port) str += url.port;
  if (url.pathname) str += url.pathname;
  if (url.search) str += `?${url.search}`;
  if (url.hash) str += `#${url.hash}`;
  return str;
})();
console.log(sanitizedUrl);
