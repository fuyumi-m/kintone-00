jQuery.noConflict();
(function($) {
   "use strict";
   kintone.events.on("app.record.index.show", function(e) {
   });
})(jQuery);
(function() {
    "use strict";

    var updateApp = 101;

    var params = {
        "app": updateApp,
        
    };

const properties = function(resp) {
    var i = 0;
    while (i < resp.length) {
      var code[i] = resp.properties[i].code; 
      var type[i] = resp.properties[i].type; 
      var options[i] = resp.properties[i].options; 
     console.log(code[i] + type[i] + options[i]);
       i++;
    }
};    

    kintone.api(kintone.api.url('/k/v1/form', true), "GET", params, function(resp) {
        // console.log(resp);
        // var code = resp.properties;
        // console.log(code + ":");
        // console.log(resp.properties[0]);
        // console.log(resp.properties[0].code);
        properties(resp);
    }, function(erroe) {
        console.log(e.massege);
    });
})();