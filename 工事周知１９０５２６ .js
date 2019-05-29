(function() {
  "use strict";

  const soshiki = [ //オブジェクト作成
    {
      "name": aa,
      "社名": bb,
    "人数":num,
    }
  ];

  var aa = [];  //作業員名
  var bb = [];  //会社名
  var num = 0;
  var labelName = [];　//alertに表示するよう


//   
// 
// if (user.name.indexOf("AA") != -1) {
//     userSelectAlert("AA");
//   } else if (user.name.indexOf("BB") != -1) {
//     userSelectAlert("BB");
//   } else if (user.name.indexOf("CC") != -1) {
//     userSelectAlert("CC");
//   } else {
//     alert("失敗。。。");
//   }
//   alert("loginUSER" + user);
// // 
// 

  kintone.events.on("mobile.app.record.detail.show", function(event) {
    var record = event.record;
    window.swal({
      title: "作業者　：" + record["作業者"]["value"],
      type: "info"
    });
   
    var user = kintone.getLoginUser().name;
    if (user.indexOf("_") != -1) {
        user = user.slice(0, 2);
        alert("社名摂りたい　：" + user);
    };

    var div = document.createElement("div");
    div.id = "test";
    var testSpace = kintone.mobile.app.record.getSpaceElement("test");
    var btn = document.createElement("button");
    btn.id = "btn";
    btn.style.fontWeight = "bold";
    btn.style.height = "auto";
    btn.style.backgroundColor = "#3498db";
    btn.innerHTML = "閲覧状況を" + "<br/>" + "確認しますか？";
    testSpace.appendChild(btn);
  
// 
// 
//作業者フィールドから取得する
    if (!record["作業者"]["value"]) {
    console.log("全員確認済み");
    } else {
      for (var i = 0; i < record["作業者"]["value"].length; i++) {
       if (record["作業者"]["value"][i].name.indexOf(user) != -1) {
           aa.push(record["作業者"]["value"][i].name);
           bb.push(user);
           num += 1;
       } 
      };
    };

    

    function userSelectAlert() {
        if(soshiki.length <= 0) {
        continue;
        };

      for (var n = 0; n < soshiki.length; n++) {
        if (soshiki.name[n]) {
          labelName.push(soshiki.name[n]);
        };
        div.innerHTML += labelName[n] + "様" + "<br>";
      }
      return div;
    }

    btn.addEventListener("click", function() {
    userSelectAlert();
      if (!labelName.length) {
        window.swal({
            title: "御社は、皆さま内容をご確認済みです",
            type: "success"
          });
        };
        window.swal({
          title: "御社の、未閲覧の方々です。",
          text: div.innerHTML,
          type: "info"
        });
        
    });

    return event;
  });
})();
