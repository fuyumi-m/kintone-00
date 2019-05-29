(function() {
  "use strict";
  kintone.events.on("mobile.app.record.index.show", function(event) {
    if (event.viewName !== "カレンダー") return;
    var appId = event.appId;
    var records = event.records;

    var A = document.createElement("a");
    A.href = "https:/" + "/devjyoskn.cybozu.com/k/" + 16 + "/show#record=";

    kintoneUtility.rest
      .getAllRecordsByQuery({
        app: kintone.mobile.app.getId()
      })
      .then(function(response) {
        $("#calendar").fullCalendar({
          height: 600, //対象となるデバイスのサイズに合わせて調整してください
          events: response.records.map(function(record) {
            return {
              start: record.作成日時.value,
              title: record.氏名.value,
              href: A.href
            };
          }),
          eventClick: function(e) {
            if (prompt(e.title)) {
              location.href = A;
            }
          }
        });
      });
  });
})();

(function() {
  "use strict";

  kintone.events.on("mobile.app.record.index.show", function(event) {
    var record = event.record;
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() + 1;

    alert(y + "年" + m);

    return event;
  });
})();
