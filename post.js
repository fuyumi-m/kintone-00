(function() {
  "use strict";
  // 登録は成功
  kintone.events.on('app.record.detail.show', function(event) {
    //レコードオブジェクトを取得
    var record = event.record;
    // request
    var params = {
      "app": 51, //追加したいアプリID
      "record": {
        "氏名": { //相手のフィールドコード
          "value": record['氏名']['value']
        },
        "従業員番号": {
          "value": record['従業員番号']['value']
        },
        "生年月日": {
          "value": record['生年月日']['value']
        },
        "郵便番号": {
          "value": record['郵便番号']['value']
        },
        "住所": {
          "value": record['住所']['value']
        },
        "性別": {
          "value": record['性別']['value']
        },
      }
    };

    kintone.api(kintone.api.url('/k/v1/record', true), 'POST', params, function(resp) {
      // 成功時
      console.log(params);
      testPost(resp.record);
    }, function(error) {
      // 処理失敗
      alert('error');
    });

    var mySpace = kintone.app.record.getHeaderMenuSpaceElement();
    var No = event['record']['従業員番号']['value'];

    mySpace.innerHTML = "";

    function testPost(record) {
      if (No != record.従業員番号.value) {
        alert('レコードがありません');
        return;
      }

      for (var i = 0; i < record.length; i++) {
        // var record = record[i];
        var item = document.createElement('div');
        //   var list = document.createElement('div');
        var No = document.createElement('a');
        item.innerHTML = record.従業員番号.value;

        No.innerHTML = record.氏名.value;
        mySpace.appendChild(item);
        mySpace.appendChild(No);
      }
      // ? console.log(recNo + ":" + record.レコード番号.value);
    }
    console.log(item + ':' + No);

    return event;
  });
})();
