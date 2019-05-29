(function() {
  "use strict";

  let api_key = "AIzaSyCGR1nharHYtgSfRUUdfJARgYEqw7WAPSM";

  //ヘッダに要素を追加
  function load(src) {
    let head = document.getElementsByTagName("head")[0];
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    head.appendChild(script);
  }

  //レコード表示時イベントで住所フィールドの値を利用して地図を表示する
  kintone.events.on("app.record.detail.show", function(event) {
    let timeout = 10 * 1000; //ms
    let interval = 100; //ms

    let check = document.getElementsByName("map_latIng");
    //住所情報をもとに地図を住所フィールドの下に表示します
    function setlocation_address() {
      let locationEl_address = kintone.app.record.getFieldElement("maps");
      if (locationEl_address.length === 0) {
        return;
      }
    }
  });
});
