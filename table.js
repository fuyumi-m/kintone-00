(function(){
 "use strict";
 kintone.events.on('app.record.index.show', function(event) {


    var my_list = document.createElement('table');
    my_list.id = 'my_list';
    my_list.style.border = '1px solid';
    my_list.style.width = '550px';

    var records = event.records;
    //取得レコードのループ
    for (var i = 0; i < records.length; i++) {
    var record = records[i];


    //活動日時
    var dayTd1 = document.createElement('td');
    dayTd1.id = 'dayTd' + i + '_1';
    dayTd1.style.border = '1px solid';
    dayTd1.innerHTML = record.部署名.value;

    //活動内容
    var taskTd2 = document.createElement('td');
    taskTd2.id = 'taskTd' + i + '_2';
    taskTd2.style.border = '1px solid';
    taskTd2.innerHTML = record.会社名.value;

    //めも
    var memoTd3 = document.createElement('td');
    memoTd3.id = 'memoTd' + i + '_3';
    memoTd3.style.border = '1px solid';
    memoTd3.innerHTML = record.製品名.value;

    //行の挿入
    var myListtr = document.createElement('tr');
    myListtr.id = 'my_list_tr' + i;
    myListtr.appendChild(dayTd1);
    myListtr.appendChild(taskTd2);
    myListtr.appendChild(memoTd3);

    my_list.appendChild(myListtr);
  }
  var myHeaderSpace = kintone.app.getHeaderSpaceElement();
  myHeaderSpace.innerHTML = '';
  myHeaderSpace.appendChild(my_list);

  return;
 });
})();
