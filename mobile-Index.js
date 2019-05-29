(function() {
  "use strict";
  kintone.events.on("mobile.app.record.index.show", function(event) {
    if (event.viewId !== 5523551) {
      return event;
    }

    const tElement = document.querySelector("#app");

    kintone.api(
      kintone.api.url("/k/v1/records", true),
      "GET",
      { app: event.appId },
      function(resp) {
        resp.records.forEach(function(record) {
          // レコード情報用のwrapper
          var wrapper = $("<div />", {
            css: {
              padding: "8px",
              borderBottom: "1px solid #ccc"
            }
          });

          $("<a />", {
            text: record.項目.value,
            href: "/k/" + event.appId + "/show?record=" + record.$id.value, //レコードのリンク
            css: {
              fontWeight: "bold"
            }
          }).appendTo(wrapper); //レコード情報用のwrapperへ代入

          var detail = $("<div />", {
            css: {
              padding: "5px"
            }
          }).appendTo(wrapper);

          $("<div />", {
            text: "説明" + record.説明.value
          }).appendTo(detail);

          $("<div />", {
            text: "オブジェクト: " + record.オブジェクト.value
          }).appendTo(detail);

          $(tElement).append(wrapper);
        });
      }
    );
  });
})();
