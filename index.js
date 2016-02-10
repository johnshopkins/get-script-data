var $ = require("./shims/jquery");

module.exports = function (el) {

  var script = el.is("script") ? el : el.find("script");

  if (script.length === 0) return null;

  // get only first script
  script = $(script.get(0));

  var data = $.parseJSON(script.html());
  script.remove();

  return data;

};
