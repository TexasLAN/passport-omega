/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }

  var profile = {};
  profile.id = json.id;
  profile.username = json.username;
  profile.displayName = json.firstname;
  profile.name = { familyName: json.lastname,
                   givenName: json.firstname };
  profile.emails = [{ value: json.email }];

  return profile;
};
