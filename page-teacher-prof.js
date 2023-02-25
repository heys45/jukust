
setTimeout(timefunc,300);

function timefunc(){
if(prop_object["ページ表示名"]==="講師プロフィール"){

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// テーブルの番号づけ
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

//テーブルをまとめて取得
const tables = document.querySelectorAll('.notion-table');
//テーブルにIDを付与する 
for( var i=0; i<tables.length; i++) {
  console.log(tables[i]);
  var name = "table-"+(i+1);
  console.log(name);
  tables[i].setAttribute("id",name);
  //行をまとめて取得
  const rows = tables[i].getElementsByTagName("tr");
  //行にIDを付与する 
  for( var j=0; j<rows.length; j++) {
  console.log(rows[j]);
  var name = "table-"+(i+1)+"-"+(j+1);
  console.log(name);
  rows[j].setAttribute("id",name);
  
  //列をまとめて取得
  const columns =rows[j].getElementsByTagName("td");
  const columnhs =rows[j].getElementsByTagName("th");
  //列にIDを付与する 
  for( var k=0; k<columns.length; k++) {
  console.log(columns[k]);
  var name = "table-"+(i+1)+"-"+(j+1)+"-"+(k+1);
  console.log(name);
  columns[k].setAttribute("id",name);
  }
  for( var k=0; k<columnhs.length; k++) {
    console.log(columnhs[k]);
    var name = "table-"+(i+1)+"-"+(j+1)+"-"+(k+1);
    console.log(name);
    columnhs[k].setAttribute("id",name);
    }
  }
}

  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // テーブル埋め
  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // 2行テーブルのデータ挿入
  var row2_table = document.querySelectorAll(".notion-table");

  row2_table.forEach(element=>{
    var header = element.querySelectorAll("tr")[0].querySelectorAll("td");
    var target = element.querySelectorAll("tr")[1].querySelectorAll("td");
    for (let index = 0; index < header.length; index++) {
      if(header[index].querySelectorAll("span")[0] !=null){ //空ヘッダーエラー処理
        var key = header[index].querySelectorAll("span")[0].querySelectorAll("span")[0].innerHTML;
        var value =prop_object[key];
        var value = value.replace(/1/,"指導可能"); 
        var value = value.replace(/0/,"-"); 
        var a_target =target[index].querySelectorAll("span")[0].querySelectorAll("span")[0];
        a_target.textContent = value;
        var key = key.replace(/（.*?）/,"X"); 

        console.log(key);
        header[index].querySelectorAll("span")[0].querySelectorAll("span")[0].textContent = key;
      } //空ヘッダーエラー処理
    }
  });





  var top_position = document.getElementById("マイページへようこそ");
  var top_div =document.createElement("div");
  top_div.classList.add("top-content-wrapper");
  top_position.after(top_div);

  var top_span1 = document.createElement("span");
  top_span1.textContent = prop_object["講師名！"];
  top_span1.classList.add();
  top_span1.style["font-size"] = "32px";
  top_div.appendChild(top_span1);
  var top_span1_1 = document.createElement("span");
  top_span1_1.textContent = "先生";
  top_span1_1.style["padding-right"] = "16px";
  top_div.appendChild(top_span1_1);

  var top_span2 = document.createElement("span");
  top_span2.textContent = prop_object["ステータス！"];
  top_span2.classList.add();
  top_span2.style["background-color"] = "gray";
  top_span2.style["color"] = "white";
  top_span2.style["border-radius"] = "20px";
  top_span2.style["padding"] = "3px 10px";
  top_div.appendChild(top_span2);

// 勤務情報集約
  var top_p3 = document.createElement("p");
  top_p3.textContent = "過去1ヶ月の勤務回数｜　X回";
  top_p3.classList.add();
  top_p3.style["padding-top"] = "30px";
  top_div.appendChild(top_p3);
  var top_p4 = document.createElement("p");
  top_p4.textContent = "これから1ヶ月の勤務予定回数｜　X回";
  top_p4.classList.add();
  top_div.appendChild(top_p4);


  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // プログレスバーの変更
  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // // 表示位置の設定
  // var quote_name = "スポットバイトの流れ";
  // var progressbar = document.getElementsByClassName("progressbar")[0];
  // document.getElementById(quote_name).after(progressbar);
  // progressbar.style.display = 'flex';

  // //プログレスバー書き換え処理
  // document.getElementById('li-schedule').setAttribute("class","complete");
  // document.getElementById('li-request').setAttribute("class","complete");
  // document.getElementById('li-confirm').setAttribute("class","active");
  // // document.getElementById('db-2-1-4').setAttribute("class",complete);


  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // DB表示設定代項目
  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // 教室or講師IDによるDBフィルタ
  // 前提：データベースはグループ化しておく

  const groups = document.querySelectorAll('.notion-collection-group__section');
  groups.forEach(element =>{
      var group_id = element.getElementsByTagName("span")[1].innerHTML;
      element.classList.add("t"+ group_id);
  });

  var teacher_id = prop_object["講師ID"];
  var teacher_class =".t"+teacher_id
  var test = document.querySelectorAll(teacher_class);
  var test2 = document.querySelectorAll(".notion-collection-group__section:not("+teacher_class+")");

  test.forEach(element =>{
  element.style.display = "block" ;
  });
  test2.forEach(element =>{
    element.remove();
    });


    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // フォーム提出期間変更ボタンの設定
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // const select_term = document.getElementsByClassName("select-term")[0];
    // select_term.style.display = 'block';
    // function viewChange(){
    //   var select_form = document.getElementById('select-term-button').value;
    //   console.log(select_form);
    //   if(select_form == '１週間分'){
    //       document.getElementById('schedule-form1').style.display = "";
    //       document.getElementById('schedule-form2').style.display = "none";
    //       document.getElementById('schedule-form3').style.display = "none";
    //   }else if(select_form == '2週間分'){
    //       document.getElementById('schedule-form1').style.display = "";
    //       document.getElementById('schedule-form2').style.display = "";
    //       document.getElementById('schedule-form3').style.display = "none";
    //   }
    //   else if(select_form == '1ヶ月分'){
    //       document.getElementById('schedule-form1').style.display = "";
    //       document.getElementById('schedule-form2').style.display = "";
    //       document.getElementById('schedule-form3').style.display = "";
    //   }
    // }
    // var trigger = document.getElementById('select-term-button');
    // trigger.onchange=viewChange;


    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // フォーム表示設定大項目
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    
    const sh_form = document.getElementById("shift-form");
    const sc_form = document.getElementById("schedule-form");
    const wr_form = document.getElementById("wr-form");


    var death_form = sc_form;         //ページによって変更する
    death_form.remove();
    var death_form = sh_form;         //ページによって変更する
    death_form.remove();

    
    const view_form = wr_form;          //ページによって変更する
    // 表示位置の設定
    var quote_name = "勤怠報告はこちらから";
    var form_area = document.getElementById("form-area");
    var position = document.getElementById(quote_name).nextElementSibling;
    position.after(form_area);
    view_form.style.display = 'block';


    // フォームプロパティ非表示設定
    const death_prop = document.querySelectorAll(".ft1,.ft2,.fd");
    death_prop.forEach(element=>{
    element.style.display = 'none';
    });

    // ステータス欄の設定
    const fssa = document.querySelectorAll('.fs');
    fssa.forEach(element =>{
      var datelabel = document.createElement("span");
      datelabel.textContent = "";
      element.before(datelabel);
    });

    // 調整希望時間の設定
    const adft1s = document.querySelectorAll('.adft1');
    adft1s.forEach(element =>{
      var datelabel = document.createElement("span");
      datelabel.textContent = "　調整希望時間：";
      element.before(datelabel);
    });

    // 補足欄の設定
    const hosokus = document.querySelectorAll('.hosoku');
    hosokus.forEach(element =>{
      element.style.width = '300px';
      var datelabel = document.createElement("span");
      datelabel.textContent = "備考・補足：";
      element.before(datelabel);
    });




    // //フォームのプルダウン値設定
    // //日付部分
    // const formdays = document.querySelectorAll('.fd');
    // //グループごとにidにプロパティ名を設定
    // formdays.forEach(function(formday,index){
    //   var date=new Date();
    //   date.setDate(date.getDate() + 1+index);
    //   var year = date.getFullYear();
    //   var month = date.getMonth()+1;
    //   var week = date.getDay();
    //   var day = date.getDate();
    //   var yobi= new Array("日","月","火","水","木","金","土");
    //   var date2 = year+"年"+month+"月"+day+"日 ("+yobi[week]+")";
    //   var date3 = year+"/"+month+"/"+day+"("+yobi[week]+")";
    //   var datelabel = document.createElement("p");
    //   formday.value = date3;
    //   datelabel.textContent = date2;
    //   formday.after(datelabel);
    // });
    
    
    
    //開始時刻
    const ft1s = document.querySelectorAll('.ft1');
    var times = ["","8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"]
    ft1s.forEach(function(ft1){
    times.forEach(function(time){
      var option = document.createElement('option');
      option.textContent = time;
      ft1.appendChild(option);
    });
    });
    //終了時刻
    const ft2s = document.querySelectorAll('.ft2');
    var times2 = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"]
    ft2s.forEach(function(ft2){
    times2.forEach(function(time){
      var option = document.createElement('option');
      option.textContent = time;
      ft2.appendChild(option);
    });
    });

    // //開始調整時刻の設定
    const adt1s = document.querySelectorAll('.adft1');
    adt1s.forEach(function(ft1){
    times.forEach(function(time){
      var option = document.createElement('option');
      option.textContent = time;
      ft1.appendChild(option);
    });
    });
    // //終了調整時刻の設定
    const adt2s = document.querySelectorAll('.adft2');
    adt2s.forEach(function(ft2){
    times2.forEach(function(time){
      var option = document.createElement('option');
      option.textContent = time;
      ft2.appendChild(option);
    });
    });
    //ステータス
    const fss = document.querySelectorAll('.fs');
    var sta = ["講師回答前", "勤務確定", "勤務不可", "調整中"]
    fss.forEach(function(fs){
    sta.forEach(function(time){
      var option = document.createElement('option');
      option.textContent = time;
      fs.appendChild(option);
    });
    });
    //スケジュール用ステータス
    // const fs2s = document.querySelectorAll('.fs2');
    // var sta2 = ["選択してください","終日勤務可能", "一部勤務可能", "勤務不可", "調整中"]
    // fs2s.forEach(function(fs){
    // sta2.forEach(function(sta2){
    //   var option = document.createElement('option');
    //   option.textContent = sta2;
    //   option.value = sta2;
    //   fs.appendChild(option);
    // });
    // });

    // スケジュールフォーム、時間入力時のみカラーの設定
    // ターゲット取得
    // sc_ft1s = sc_form.querySelectorAll('.ft1');
    // sc_ft2s = sc_form.querySelectorAll('.ft2');
    // st2s = document.querySelectorAll('.fs2');
    // // ステータスが一部勤務可能の時のみ色変更
    // st2s.forEach(function(st2,index){
    //     st2.onchange= function(){
    //         var st2v = st2.value;
    //         if(st2v == '一部勤務可能'){
    //         sc_ft1s[index].style["background-color"] ="white";
    //         sc_ft2s[index].style["background-color"] ="white";
    //         }
    //     }
    // });
    
    


    // フォーム初期値設定
    document.getElementById("teaid").value = prop_object["講師ID"];

    // var shift_form_btn = document.getElementById("shift-form-btn");
    // shift_form_btn.addEventListener('click', shift_form);
    // function shift_form() {
    //   document.getElementById('shift-form-comp').style.display = 'block';
    //   }




//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベースの番号づけ
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

//テーブルをまとめて取得
const dbs = document.querySelectorAll('.notion-collection-table');
//テーブルにIDを付与する 
for( var i=0; i<dbs.length; i++) {
  var name = "db-"+(i+1);
  dbs[i].setAttribute("id",name);
  
  //行をまとめて取得
  const rows = dbs[i].getElementsByTagName("tr")
  //行にIDを付与する 
  for( var j=0; j<rows.length; j++) {
  var name = "db-"+(i+1)+"-"+(j+1);
  rows[j].setAttribute("id",name);
  
  //列をまとめて取得
  const columns =rows[j].getElementsByTagName("td")
  const columnhs =rows[j].getElementsByTagName("th");
  //列にIDを付与する 
  for( var k=0; k<columns.length; k++) {
  var name = "db-"+(i+1)+"-"+(j+1)+"-"+(k+1);
  columns[k].setAttribute("id",name);
  }
  for( var k=0; k<columnhs.length; k++) {
  var name = "db-"+(i+1)+"-"+(j+1)+"-"+(k+1);
  columnhs[k].setAttribute("id",name);

  }
  }
}

//DB書き換え処理
document.getElementById('db-3-1-3').innerHTML = "勤務可能<br>開始時間";
document.getElementById('db-3-1-4').innerHTML = "勤務可能<br>終了時間";

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベースの値取得
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

var main_db ={};
var db_data = document.getElementById("db-3").querySelectorAll("tr:not(#db-3-1)");
var db_header = document.getElementById("db-3-1").querySelectorAll("th");
console.log(db_header);
db_header.forEach(element => {
  main_db[element.innerHTML] =[];
});
var nullspan = document.createElement("span");
db_data.forEach(element => {
  var a_db_data = element.querySelectorAll("td");
  console.log(a_db_data);
  for (let index = 0; index < db_header.length; index++) {
    a_db_data[index].appendChild(nullspan);
    var a_db_data_n = a_db_data[index].getElementsByTagName("span")[0];
    if (a_db_data_n.getElementsByTagName("span")[0] !=null) {// spanが二段階の時
      var a_db_data_n = a_db_data_n.getElementsByTagName("span")[0];
      var a_db_data_n =  a_db_data_n.innerHTML;
      main_db[db_header[index].innerHTML].push(a_db_data_n);
    }else{// spanが一段階の時
      var a_db_data_n =  a_db_data_n.innerHTML;
      main_db[db_header[index].innerHTML].push(a_db_data_n);
    }
  }
});
console.log(main_db);


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベース由来のフォーム作成
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 日付部分
console.log(main_db["日付"]);
main_db["日付"].forEach((element,index)=>{
  var counter = 0;
  console.log(main_db["報告フラグ"]);
  if(main_db["報告フラグ"][index]=1){
    // フォーマットの複製
    var target =document.getElementsByClassName("wr-formbox")[counter];
    var clone  = target.cloneNode(true);
    target.after(clone);

    // 出勤フォーマットにフォーム挿入
    var formset = document.getElementsByClassName("in-dg")[counter];
    target.getElementsByClassName("in-content")[0].appendChild(formset);
    // 出勤フォーマットにデータセット
    target.getElementsByClassName("in-day-label")[0].textContent = element;

    var target_class="in-fd" ; var textcontent = "実際の出勤時間";
    spancontent.textContent = textcontent;
    var spancontent =document.create("span");
    target.getElementsByClassName(target_class)[0].before(spancontent);



    // 退勤フォーマットにフォーム挿入
    var formset = document.getElementsByClassName("out-dg")[counter];
    target.getElementsByClassName("out-content")[0].appendChild(formset);
    // 退勤フォーマットにデータセット
    target.getElementsByClassName("out-day-label")[0].textConten= element;

    // カウントアップ
    var counter = counter+1;

  }

  // var datelabel = document.createElement("p");
  // datelabel.textContent = element+"　｜"+main_db["ステータス"][index]+"｜"+main_db["勤務可能<br>開始時間"][index]+"〜"+main_db["勤務可能<br>終了時間"][index];
  // var target = document.getElementsByClassName("fd")[index];
  // target.parentNode.classList.add("view-dg");
  // target.before(datelabel);
  // target.value = element;
})
var death_fd = document.querySelectorAll(".dg:not(.view-dg)")
death_fd.remove();





}}





