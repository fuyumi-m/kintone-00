(function() {
  "use strict";

  kintone.events.on("app.record.detail.show", function(event) {
    var record = event.record;
    console.log("作業者　：" + record["作業者"]["value"]);

    const soshiki = [
      {
        AA: aa,

        BB: bb,

        CC: cc
      }
    ];

    var aa = [];
    var bb = [];
    var cc = [];

    if (record["作業者"]["value"] >= 0) {
      for (var i = 0; i < record["作業者"]["value"].length; i++) {
        var sName = record["作業者"]["value"][i].name;

        if (sName.indexOf("AA") != -1) {
          aa.push(sName);
        } else if (sName.indexOf("BB") != -1) {
          bb.push(sName);
        } else if (sName.indexOf("CC") != -1) {
          cc.push(sName);
        } else {
          console.log(sName + ":" + i);
        }
        console.log("作業者名：" + sName);
      }
    }

    var testSpace = kintone.app.record.getSpaceElement("test");
    var div = document.createElement("div");
    div.id = "test";

    var btn = document.createElement("button");
    btn.id = "btn";
    btn.style.width = "150px";
    btn.style.height = "auto";
    btn.style.backgroundColor = "#3498db";
    btn.innerHTML = "作業者を確認します";
    testSpace.appendChild(btn);

    var user = kintone.getLoginUser();
    if (user.name.indexOf("AA") != -1) {
      userSelectAlert("AA");
    } else if (user.name.indexOf("BB") != -1) {
      userSelectAlert("BB");
    } else if (user.name.indexOf("CC") != -1) {
      userSelectAlert("CC");
    } else {
      alert("失敗。。。");
    }
    console.log("loginUSER" + user);

    function userSelectAlert(syamei) {
      var labelName = [];
      //   for (var j = 0; j < soshiki["value"].length; j++) {

      for (var n = 0; n < soshiki.length; n++) {
        if (soshiki[n][syamei] != 0) {
          success();
        }
        labelName.push(soshiki[n][syamei]);
        div.innerHTML += labelName[n] + "様" + "<br>";
      }

      btn.addEventListener("click", function() {
        window.swal({
          title: "まだレコードを確認されていない方",
          text: div.innerHTML,
          type: "success"
        });
      });

      function success() {
        window.swal({
          title: "皆さん確認済みです",
          type: "success"
        });
      }
      return div;
    }

    return event;
  });
})();
