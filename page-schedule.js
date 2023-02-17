
setTimeout(timefunc,300);

function timefunc(){
if(prop_object["ページ表示名"]==="スケジュール提出"){


    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // プログレスバーの変更
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    // 表示位置の設定
    var quote_name = "スポットバイトの流れ";
    var progressbar = document.getElementsByClassName("progressbar")[0];
    document.getElementById(quote_name).after(progressbar);
    progressbar.style.display = 'flex';

    //プログレスバー書き換え処理
    document.getElementById('li-schedule').setAttribute("class","active");
    // document.getElementById('db-2-1-4').setAttribute("class",complete);


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
    const select_term = document.getElementsByClassName("select-term")[0];
    select_term.style.display = 'block';
    function viewChange(){
      var select_form = document.getElementById('select-term-button').value;
      console.log(select_form);
      if(select_form == '１週間分'){
          document.getElementById('schedule-form1').style.display = "";
          document.getElementById('schedule-form2').style.display = "none";
          document.getElementById('schedule-form3').style.display = "none";
      }else if(select_form == '2週間分'){
          document.getElementById('schedule-form1').style.display = "";
          document.getElementById('schedule-form2').style.display = "";
          document.getElementById('schedule-form3').style.display = "none";
      }
      else if(select_form == '1ヶ月分'){
          document.getElementById('schedule-form1').style.display = "";
          document.getElementById('schedule-form2').style.display = "";
          document.getElementById('schedule-form3').style.display = "";
      }
    }
    var trigger = document.getElementById('select-term-button');
    trigger.onchange=viewChange;


    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // フォーム表示設定代項目
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // 使用するフォームの選択
    const sh_form = document.getElementById("shift-form");
    const sc_form = document.getElementById("schedule-form");

    const view_form = sc_form;          //ページによって変更する
    const death_form = sh_form;         //ページによって変更する

    // 表示位置の設定
    var quote_name = "スケジュール提出はこちらから";
    var form_area = document.getElementById("form-area");
    document.getElementById(quote_name).after(form_area);
    view_form.style.display = 'block';
    death_form.remove();

    // フォームプロパティ非表示設定
    const death_prop = document.querySelectorAll(".adj,.fs,.fd");
    death_prop.forEach(element=>{
    element.style.display = 'none';
    });

    // フォーム見出し設定
    // ステータス欄の設定
    const fssa = document.querySelectorAll('.fs2');
    fssa.forEach(element =>{
      var datelabel = document.createElement("div");
      datelabel.style.width ="100%";
      element.before(datelabel);
      var datelabel = document.createElement("span");
      datelabel.textContent = "ステータス：";
      element.before(datelabel);
      var datelabel = document.createElement("span");
      datelabel.textContent = "　";
      element.after(datelabel);
    });

    // 調整希望時間の設定
    const adft1s = document.querySelectorAll('.ft1');
    adft1s.forEach(element =>{
      var datelabel = document.createElement("span");
      datelabel.textContent = "希望時間：";
      element.before(datelabel);
      var datelabel = document.createElement("span");
      datelabel.textContent = "〜";
      element.after(datelabel);
    });

    // 補足欄の設定
    const hosokus = document.querySelectorAll('.hosoku');
    hosokus.forEach(element =>{
      var datelabel = document.createElement("div");
      datelabel.style.width = "100%";
      element.before(datelabel);
      element.style.width = "calc(100% - 100px)";
      var datelabel = document.createElement("span");
      datelabel.textContent = "備考・補足：";
      element.before(datelabel);
    });






    //フォームのプルダウン値設定
    //日付部分
    const formdays = document.querySelectorAll('.fd');
    //グループごとにidにプロパティ名を設定
    formdays.forEach(function(formday,index){
      var date=new Date();
      date.setDate(date.getDate() + 1+index);
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var week = date.getDay();
      var day = date.getDate();
      var yobi= new Array("日","月","火","水","木","金","土");
      var date2 = year+"年"+month+"月"+day+"日 ("+yobi[week]+")";
      var date3 = year+"/"+month+"/"+day;
      var datelabel = document.createElement("span");
      formday.value = date3;
      datelabel.textContent = date2;
      formday.after(datelabel);
    });
    
    
    
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
    // const adt1s = document.querySelectorAll('.adft1');
    // adt1s.forEach(function(ft1){
    // times.forEach(function(time){
    //   var option = document.createElement('option');
    //   option.textContent = time;
    //   ft1.appendChild(option);
    // });
    // });
    // //終了調整時刻の設定
    // const adt2s = document.querySelectorAll('.adft2');
    // adt2s.forEach(function(ft2){
    // times2.forEach(function(time){
    //   var option = document.createElement('option');
    //   option.textContent = time;
    //   ft2.appendChild(option);
    // });
    // });
    //ステータス
    // const fss = document.querySelectorAll('.fs');
    // var sta = ["講師回答前", "勤務確定", "勤務不可", "調整中"]
    // fss.forEach(function(fs){
    // sta.forEach(function(time){
    //   var option = document.createElement('option');
    //   option.textContent = time;
    //   fs.appendChild(option);
    // });
    // });
    //スケジュール用ステータス
    const fs2s = document.querySelectorAll('.fs2');
    var sta2 = ["選択してください","終日勤務可能", "一部勤務可能", "勤務不可", "調整中"]
    fs2s.forEach(function(fs){
    sta2.forEach(function(sta2){
      var option = document.createElement('option');
      option.textContent = sta2;
      option.value = sta2;
      fs.appendChild(option);
    });
    });

    // スケジュールフォーム、時間入力時のみカラーの設定
    // ターゲット取得
    var sc_ft1s = document.querySelectorAll('.ft1,.ft2');
    var sc_ft2s = document.querySelectorAll('.ft2');
    var st2s = document.querySelectorAll('.fs2');   

    sc_ft1s.forEach(element=>{
      element.style["background-color"] ="red";
    });
    sc_ft2s .forEach(element=>{
      element.style.backgroundColor ="blue";
    });
    
    // ステータスが一部勤務可能の時のみ色変更
    st2s.forEach(function(st2,index){
        st2.addEventListener("change", function() {
            console.log(st2);
            var st2v = st2.value;
            console.log(st2v);
            if(st2v == '一部勤務可能'){
            sc_ft1s[index].style["background-color"] ="white";
            sc_ft2s[index].style["background-color"] ="white";
            }
        });
    });
    
    // フォーム初期値設定
    document.getElementById("teaid").value = prop_object["講師ID"];

  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ステータスボタンの色設定
  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // ターゲット取得
  const st_btns = document.querySelectorAll(".fs2");
  // ステータスが一部勤務可能の時のみ色変更
  st_btns.forEach(function(st_btn,index){
      st_btn.onchange= function(){
          var stv = st_btn.value;
          if(stv == '一部勤務可能'){
          st_btn[index].style["background-color"] ="red";
          }
      }
  });



















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

//テーブルをまとめて取得
const dbs = document.querySelectorAll('.notion-collection-table');
//テーブルにIDを付与する 
for( var i=0; i<dbs.length; i++) {
  console.log(dbs[i]);
  var name = "db-"+(i+1);
  console.log(name);
  dbs[i].setAttribute("id",name);
  
  //行をまとめて取得
  const rows = dbs[i].getElementsByTagName("tr")
  //行にIDを付与する 
  for( var j=0; j<rows.length; j++) {
  console.log(rows[j]);
  var name = "db-"+(i+1)+"-"+(j+1);
  console.log(name);
  rows[j].setAttribute("id",name);
  
  //列をまとめて取得
  const columns =rows[j].getElementsByTagName("td")
  const columnhs =rows[j].getElementsByTagName("th");
  //列にIDを付与する 
  for( var k=0; k<columns.length; k++) {
  console.log(columns[k]);
  var name = "db-"+(i+1)+"-"+(j+1)+"-"+(k+1);
  console.log(name);
  columns[k].setAttribute("id",name);
  }
  for( var k=0; k<columnhs.length; k++) {
  console.log(columnhs[k]);
  var name = "db-"+(i+1)+"-"+(j+1)+"-"+(k+1);
  console.log(name);
  columnhs[k].setAttribute("id",name);

  }
  }
}



//DB書き換え処理
document.getElementById('db-2-1-3').innerHTML = "勤務可能<br>開始時間";
document.getElementById('db-2-1-4').innerHTML = "勤務可能<br>終了時間";

//フォーム送信後の処理
var schedule_form_btn = document.getElementById("schedule-form-btn");
schedule_form_btn.addEventListener('click', schedule_form);
function schedule_form() {
  document.getElementById('schedule-form-comp').style.display = 'block';
  }


}}





