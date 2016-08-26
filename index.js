const request = require('request');
const merge = require('lodash.merge');
const log = require('debug')('pingskiller');


const PING_SKILLS_SIGNUP_FORM = 'https://www.pingskills.com/membership-validate.php';

const DEFAULT_FORM = {
  firstName: null,
  surname: null,
  email: null,
  loginPassword: ':gotheem::aced:',
  countryCode: 'US',
  detectedCountryCode: 'US'
};

const DEFAULT_HEADERS = {
  'Cookie': 'PHPSESSID=trollinhard',
  'DNT': '1',
  'Host': 'www.pingskills.com',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://www.pingskills.com',
  'Referer': 'https://www.pingskills.com/membership-form.php',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
}

const pingskiller = function(opts, fn) {
  opts = merge({}, DEFAULT_FORM, opts || {});
  if (!opts.firstName || !opts.surname || !opts.email) {
    return fn(new Error('You need to provide first name, last name, and an email.'), null);
  }
  return request({
    url: PING_SKILLS_SIGNUP_FORM,
    form: opts,
    headers: DEFAULT_HEADERS,
    method: 'post'
  }, (err, resp) => {
    if (err) return fn(err, null);
    log('success: %s', resp.request.headers.Referer === PING_SKILLS_SIGNUP_FORM);
    return fn(null, resp.request.headers.Referer === PING_SKILLS_SIGNUP_FORM);
  });
};

module.exports = pingskiller;
