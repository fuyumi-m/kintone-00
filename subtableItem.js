(function() {
  "use strict";

  kintone.events.on(["app.record.detail.show"], function(event) {
    let record = event.record;
    let id = event.recordId;

    let table = event.record.明細.value;

    for (let i = 0; i < table.length; i++) {

    let item[i] = table[i].value["商品名"].value;
    let price[i] = table[i].value["単価"].value;
    let num[i] = table[i].value["数量"].value;
    console.log(item[i] + price[i] + num[i] + id[i]);
    }
    return event;
  });
  kintone.events.on(["app.record.edit.show","mobile.app.record.edit.show"], function(event) {
    let record = event.record;
    const user = kintone.getLoginUser().code;
　　
    const status = record.ステータス.value;
    console.log(status);
// 承認のステータスで空白
    if(status == '承認を確認' ) {
      record.承認者.value = [];
   
      console.log('空欄：' + record.承認者.value);
    
    };
    if(record.承認者.value = []) {
      record.承認者.value[0] = user;
      console.log('承認者入れたい' + record.承認者.value);
    }
    
     
    
    // tableを追加する
    record.userTable.value.push({
      value: {
        'ユーザー': {
         
           "type": "USER_SELECT",
           "value":[
               {
           "code": user,
         },
        ]
        }
      }
    });
    // let table = event.record.明細.value;

    // for (let i = 0; i < table.length; i++) {

    // let item[i] = table[i].value["商品名"].value;
    // let price[i] = table[i].value["単価"].value;
    // let num[i] = table[i].value["数量"].value;
    // console.log(item[i] + price[i] + num[i] + id[i]);
    // }
    return event;
  });
})();
