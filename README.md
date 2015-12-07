# window resize window

A module that handles getting a script element and parsing it into JSON.

### Dependencies

* jQuery

### Usage

```JavaScript

var getScriptData = require("get-script-data");

$(function() {

  /*
  <div class="data">
  <script type="applcation/json">
  [ ... ]
  </script>
  </div>
   */
  var data = getScriptData($(".data"));

  /*
  <script type="applcation/json" id="data">
  [ ... ]
  </script>
   */
  var iconData = getScriptData($("#icons"));

});
```
