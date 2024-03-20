const url = require("url");

const { URL } = url;
const myURL = new URL("https://google.com");

// console.log("new URL()", myURL);
// console.log("url.format():", url.format(myURL));

/**
 * 
  new URL() URL {
  href: 'https://google.com/',
  origin: 'https://google.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'google.com',
  hostname: 'google.com',
  port: '',
  pathname: '/',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
}
url.format(): https://google.com/
 */
