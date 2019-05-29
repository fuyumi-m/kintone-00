jQuery.noConflict();
(function() {
  "use strict";
  kintone.events.on("app.record.create.show", function(event) {
    var record = event.record;
    event.record["ユーザー選択"].disabled = false;
    return event;
  });
})();

(function() {
  "use strict";

  var updateApp = 100;

  var params = {
    app: updateApp,
    id: 1
  };

  var code;
  var type;
  var value;
  var options;

  const posttest = function(resp, event) {
    for (var i = 0; i < resp.properties.length; i++) {
      // console.log(resp.properties[i].code);
      // console.log(resp.properties[i].type);
      // console.log(resp.properties[i].value);
      code[i] = resp.properties[i].code;
      type[i] = resp.properties[i].type;
      value[i] = resp.properties[i].value;

      if (resp.properties[i].options) {
        for (var j = 0; j < resp.properties[i].options.length; j++) {
          options = resp.properties[i].options[i];
        }
      }
      //   options[i] = resp.options;
      //  console.log(code[i] + type[i] + options[i]);
      // console.log('protest');
    }
  };

  kintone.api(
    kintone.api.url("/k/v1/form", true),
    "GET",
    params,
    function(resp) {
      // console.log(resp
      // var code = resp.properties;
      // console.log(code + ":");
      // console.log(resp.properties[0]);
      // console.log(resp.properties[0].code);
      console.log(resp);

      posttest(resp);

      // protest(resp);
    },
    function(error) {
      console.log(e.massege);
    }
  );
})();
