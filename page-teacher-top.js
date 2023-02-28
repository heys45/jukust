
setTimeout(timefunc,300);

function timefunc(){
if(prop_object["ページ表示名"]==="講師トップページ"){

  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // トップ情報の書き出し
  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

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
// DB表示設定代項目 1min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region データベースフィルター設定　★まとめページは変更？
    // 教室or講師IDによるDBフィルタ
    // 前提：データベースはグループ化しておく
    const groups = document.querySelectorAll('.notion-collection-group__section');
    groups.forEach(element =>{
        var group_id = element.getElementsByTagName("span")[1].innerHTML;
        element.classList.add("x"+ group_id);
    });

    var research_id = prop_object["講師ID"];
    var research_class =".x"+research_id

    var research_id = prop_object["講師ID"];
    var research_class =".x"+research_id
    
    document.querySelectorAll(research_class).forEach(element =>{
      element.style.display = "block" ;  });
    document.querySelectorAll(".notion-collection-group__section:not("+research_class+")").forEach(element =>{
      element.remove(); 
     });
// #endregion

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// テーブルの番号づけ 何もしなくてOK
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region テーブル共通処理
  //テーブルを取得しIDを付与する
  const tables = document.querySelectorAll('.notion-table');
  for( var i=0; i<tables.length; i++) {
  var name = "table-"+(i+1);
  tables[i].setAttribute("id",name);
    //行をまとめて取得しIDを付与する
    const rows = tables[i].getElementsByTagName("tr");
    for( var j=0; j<rows.length; j++) {
    var name = "table-"+(i+1)+"-"+(j+1);
    rows[j].setAttribute("id",name);
    //列をまとめて取得しIDを付与する
    const columns =rows[j].getElementsByTagName("td");
    const columnhs =rows[j].getElementsByTagName("th");
    for( var k=0; k<columns.length; k++) {
    var name = "table-"+(i+1)+"-"+(j+1)+"-"+(k+1);
    columns[k].setAttribute("id",name);}//列の設定１
    for( var k=0; k<columnhs.length; k++) {
      var name = "table-"+(i+1)+"-"+(j+1)+"-"+(k+1);
      columnhs[k].setAttribute("id",name);}//列の設定２
    }//行の設定完了
  }
// #endregion


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベースの番号づけ 何もしなくてOK
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region データベース共通処理
  //DBをまとめて取得しIDを付与する 
  const dbs = document.querySelectorAll('.notion-collection-table');
  for( var i=0; i<dbs.length; i++) {
  var name = "db-"+(i+1);
  dbs[i].setAttribute("id",name); 
    //行をまとめて取得しIDを付与する 
    const rows = dbs[i].getElementsByTagName("tr")
    for( var j=0; j<rows.length; j++) {
    if(j != 0){
    var name = rows[j].getElementsByTagName("span")[0].getElementsByTagName("span")[0].innerHTML;
    rows[j].setAttribute("name",name);}
    var name = "db-"+(i+1)+"-"+(j+1);
    rows[j].setAttribute("id",name);
    //列をまとめて取得しIDを付与する 
    const columns =rows[j].getElementsByTagName("td")
    const columnhs =rows[j].getElementsByTagName("th");
    for( var k=0; k<columns.length; k++) {
    var name = "db-"+(i+1)+"-"+(j+1)+"-"+(k+1);
    columns[k].setAttribute("id",name);}//列の設定１
    for( var k=0; k<columnhs.length; k++) {
    var name = "db-"+(i+1)+"-"+(j+1)+"-"+(k+1);
    columnhs[k].setAttribute("id",name);}//列の設定2
    }//行の設定完了
  }
// #endregion


//     //DB書き換え処理
//     document.getElementById('db-3-1-3').innerHTML = "勤務可能<br>開始時間";
//     document.getElementById('db-3-1-4').innerHTML = "勤務可能<br>終了時間";


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォーム表示設定代項目　3分
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // 使用するフォームの選択
  const sh_form = document.getElementById("shift-form");
  const sc_form = document.getElementById("schedule-form");
  const wr_form = document.getElementById("wr-form");

  const view_form = wr_form;          //ページによって変更する
  sc_form.remove();
  sh_form.remove();

  // 出力する場所を用意（quoteを指定）
  var area_target = document.getElementById("勤怠報告はこちらから").nextElementSibling;
  var form_area = document.getElementsByTagName("form")[0];
  console.log(form_area.id);
  form_area.setAttribute("id","form");
  area_target.after(form_area);  

  const forms = document.querySelectorAll('.in-dg,.out-dg');

  // フォーム初期値の設定 講師ID、教室ID、勤務IDの存在を確認。
  document.getElementById("teaid").value = prop_object["講師ID"];
  document.getElementById("schid").value = prop_object["教室ID"];

  // フォーム不要項目の非表示
  // const death_prop = document.querySelectorAll("");
  // death_prop.forEach(element=>{  element.style.display = 'none'; });

  view_form.style.display = 'block';



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベースの値取得準備
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var checks = document.querySelectorAll(".notion-checkbox.checked");
checks.forEach(element =>{
  var check = document.createElement("span");
  check.innerHTML="1";
  element.appendChild(check);
})
var checks = document.querySelectorAll(".notion-checkbox:not(.checked)");
checks.forEach(element =>{
  var check = document.createElement("span");
  check.innerHTML="0";
  element.appendChild(check);
})


var main_db ={};
var db_data = document.getElementById("db-4").querySelectorAll("tr:not(#db-4-1)");
var db_header = document.getElementById("db-4-1").querySelectorAll("th");
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

// 過去の日付で勤怠報告未完了のものを取得
console.log(main_db["日付"]);
main_db["日付"].forEach((element,index)=>{
  var counter = 0;
  console.log(main_db["開始報告フラグ"]);

  if(main_db["開始報告フラグ"][index]==1){
    // フォームデザインのフォーマットを用意
    form_area.appendChild(document.getElementsByClassName("day-box")[0].cloneNode(true));
    var target1 = form_area.lastChild;
    console.log(target1);
    target1.style.display = "flex";
    // 日付を入れ
    var day_label =element.replace(/.*\//,"").replace(/\(.*/,"")+"<br>（"+element.replace(/.*\(/,"");
    target1.getElementsByClassName("day-label")[0].innerHTML = day_label;
    var start = main_db["開始時刻"][index];
    var end = main_db["終了時刻"][index];

    db_info = "勤務時間｜" + start +"〜"+end;
    target1.getElementsByClassName("sh-info")[0].innerHTML = db_info;
    target1.getElementsByClassName("sh-info")[0].style["font-weight"]="bold";
    target1.getElementsByClassName("sh-info")[0].style["color"]="red";
    target1.getElementsByClassName("sch-info")[0].remove();


    // フォームを挿入して、解答欄のラベル（ガイド）をつけてあげる
    var shift_form = document.getElementsByClassName("in-dg")[0];
    target1.getElementsByClassName("day-box-form")[0].appendChild(shift_form);
    target1.getElementsByClassName("in-fd")[0].innerHTML=element;

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "実際の出勤時間　｜";
    time_guide.style["font-weight"]="bold";
    target1.getElementsByClassName("in-time")[0].before(time_guide);

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "変更後の出勤時間｜";
    time_guide.style["font-weight"]="bold";
    target1.getElementsByClassName("in-change")[0].before(time_guide);

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "補足・備考｜";
    time_guide.style["font-weight"]="bold";
    target1.getElementsByClassName("in-hosoku")[0].before(time_guide);

    // フォームの回答と選択肢を設定する
    var values =["", "出勤"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target1.getElementsByClassName("in-flag")[0].appendChild(option);
    });

    var values = ["","8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target1.getElementsByClassName("in-time")[0].appendChild(option);
      target1.getElementsByClassName("in-change")[0].appendChild(option);
    });


    //依頼フォームのボックスを初期で非表示にする
    target1.getElementsByClassName("day-box-form")[0].style.display="none";


    // 依頼フォーム再表示用のボタンを用意する
    const swich= '<div class="btn">出勤報告する</div><div class="btn">報告時間の<br>調整をする</div><div class="btn">勤務時間の<br>変更を報告</div>';
    target1.getElementsByClassName("day-box-swich")[0].innerHTML = swich;

    var trigger = target1.getElementsByClassName("btn")[0];
    trigger.addEventListener('click',function(){
      target1.getElementsByClassName("day-box-form")[0].style.display="block";
      target1.getElementsByClassName("day-box-swich")[0].style.display="none";
      target1.getElementsByClassName("in-flag")[0].firstElementChild.remove();
    });

    var trigger = target1.getElementsByClassName("btn")[0];
    trigger.addEventListener('click',function(){
      targe1t.getElementsByClassName("day-box-form")[0].style.display="block";
      targe1t.getElementsByClassName("day-box-swich")[0].style.display="none";
    });

  }




  if(main_db["終了報告フラグ"][index]==1){
    // フォームデザインのフォーマットを用意
    form_area.appendChild(document.getElementsByClassName("day-box")[0].cloneNode(true));
    var target2 = form_area.lastChild;
    console.log(target2);
    target2.style.display = "flex";
    // 日付を入れる
    var day_label =element.replace(/.*\//,"").replace(/\(.*/,"")+"<br>（"+element.replace(/.*\(/,"");
    target2.getElementsByClassName("day-label")[0].innerHTML = day_label;
    var start = main_db["開始時刻"][index];
    var end = main_db["終了時刻"][index];

    db_info = "勤務時間｜" + start +"〜"+end;
    target2.getElementsByClassName("sh-info")[0].innerHTML = db_info;
    target2.getElementsByClassName("sh-info")[0].style["font-weight"]="bold";
    target2.getElementsByClassName("sh-info")[0].style["color"]="red";
    target2.getElementsByClassName("ajs-info")[0].remove();


    // フォームを挿入して、解答欄のラベル（ガイド）をつけてあげる
    var shift_form = document.getElementsByClassName("out-dg")[0];
    target2.getElementsByClassName("day-box-form")[0].appendChild(shift_form);
    target2.getElementsByClassName("out-fd")[0].innerHTML=element;

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "実際の退勤時間　｜";
    time_guide.style["font-weight"]="bold";
    target2.getElementsByClassName("out-time")[0].before(time_guide);

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "変更後の退勤時間｜";
    time_guide.style["font-weight"]="bold";
    target2.getElementsByClassName("out-change")[0].before(time_guide);

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "補足・備考｜";
    time_guide.style["font-weight"]="bold";
    target2.getElementsByClassName("out-hosoku")[0].before(time_guide);


  // フォームの回答と選択肢を設定する
  var values =["", "退勤"];
  values.forEach(element =>{
    var option = document.createElement('option');
    option.setAttribute("value",element);
    option.textContent = element;
    target2.getElementsByClassName("out-flag")[0].appendChild(option);
  });

  var values = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
  values.forEach(element =>{
    var option = document.createElement('option');
    option.setAttribute("value",element);
    target2.getElementsByClassName("out-time")[0].appendChild(option);
    target2.getElementsByClassName("out-change")[0].appendChild(option);
  });



  }

});






//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベースの値取得準備
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var senkou_db ={};
var db_data = document.getElementById("db-3").querySelectorAll("tr:not(#db-3-1)");
var db_header = document.getElementById("db-3-1").querySelectorAll("th");
console.log(db_header);
db_header.forEach(element => {
  senkou_db[element.innerHTML] =[];
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
      senkou_db[db_header[index].innerHTML].push(a_db_data_n);
    }else{// spanが一段階の時
      var a_db_data_n =  a_db_data_n.innerHTML;
      senkou_db[db_header[index].innerHTML].push(a_db_data_n);
    }
  }
});
console.log(senkou_db);

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 選考状況による表示編集
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

senkou_db["TimeRex入力済"].forEach((element,index)=>{
  if(senkou_db["TimeRex入力済"][index]==1){
    var area_target = document.getElementById("やることリスト").nextElementSibling;

    var TimeRexbox = document.createElement("div");
    TimeRexbox.setAttribute("id","TRB")
    area_target.after(TimeRexbox);
    area_target = document.getElementById("TRB");



    // setTimeout(timefunc2,5000);
    // function timefunc2(){
    // var TimeRex = document.createElement("div");
    // TimeRex.setAttribute("id","timerex_calender");
    // TimeRex.setAttribute("data-url","https://timerex.net/s/kaitoyoshitomi_4a1b/7ba6055f");
    // area_target.appendChild(TimeRex);

    // var TimeRex = document.createElement("script");
    // TimeRex.setAttribute("id","timerex_embed");
    // TimeRex.setAttribute("src","https://asset.timerex.net/js/embed.js");
    // area_target.appendChild(TimeRex);

    // var TimeRex = document.createElement("script");
    // TimeRex.setAttribute("type","text/javascript");
    // TimeRex.innerHTML="TimerexCalendar();"
    // area_target.appendChild(TimeRex);
    // var TimeRexdata = document.getElementById("timerex_calendar")[0];
    // area_target.appendChild(TimeRexdata);
    // }


  };
});










    // // シフト申請or確定シフトがあればシフト情報を入れる　依頼フォームは非表示にする
    // if(document.getElementById("db-3") !=null){
    //   if(document.getElementById("db-3").querySelectorAll("[name='"+key+"']")[0] !=null){
    //     var db_id =document.getElementById("db-3").querySelectorAll("[name='"+key+"']")[0].getAttribute('id');
    //     if(document.getElementById(db_id+"-2").getElementsByTagName("span")[0] =="講師回答前"){
    //     var status = document.getElementById(db_id+"-2").getElementsByTagName("span")[0].innerHTML;
    //     if(document.getElementById(db_id+"-3").getElementsByTagName("span")[0]!=null){
    //     var time1 = document.getElementById(db_id+"-3").getElementsByTagName("span")[0].innerHTML;}
    //     else{var time1="" }
    //     if(document.getElementById(db_id+"-4").getElementsByTagName("span")[0]!=null){
    //       var time2 = document.getElementById(db_id+"-4").getElementsByTagName("span")[0].innerHTML;}
    //     else{var time2="" }
    //     if(document.getElementById(db_id+"-5").getElementsByTagName("span")[0]!=null){
    //     var hosoku = "<br>補足事項｜"+document.getElementById(db_id+"-5").getElementsByTagName("span")[0].innerHTML;}
    //     else{var hosoku="" }

    //     var db_info ="シフト時間　｜"+time1+"〜"+time2+hosoku;
    //     target.getElementsByClassName("sh-info")[0].innerHTML = db_info;
    //     target.getElementsByClassName("sh-info")[0].style["font-weight"]="bold";
    //     target.getElementsByClassName("sh-info")[0].style["color"]="red";
    //     target.getElementsByClassName("sch-info")[0].remove();
    //     target.getElementsByClassName("day-box-swich")[0].remove();
    //   }  
    //   }else{
    //     target.getElementsByClassName("day-box-swich")[0].remove();
    //     target.getElementsByClassName("sh-info")[0].remove();
    //     target.getElementsByClassName("sch-info")[0].before(target.getElementsByClassName("day-box-form")[0]);
    //     target.style.display="none";
    //   }}else{
    //     target.getElementsByClassName("day-box-swich")[0].remove();
    //     target.getElementsByClassName("sh-info")[0].remove();
    //     target.getElementsByClassName("sch-info")[0].before(target.getElementsByClassName("day-box-form")[0]);
    //     target.remove();
    //     target.style.display="none";
    //   }






//     // 出勤フォーマットにフォーム挿入
//     var formset = document.getElementsByClassName("in-dg")[counter];
//     target.getElementsByClassName("in-content")[0].appendChild(formset);
//     // 出勤フォーマットにデータセット
//     target.getElementsByClassName("in-day-label")[0].textContent = element;

//     var target_class="in-fd" ; var textcontent = "実際の出勤時間";
//     spancontent.textContent = textcontent;
//     var spancontent =document.create("span");
//     target.getElementsByClassName(target_class)[0].before(spancontent);



//     // 退勤フォーマットにフォーム挿入
//     var formset = document.getElementsByClassName("out-dg")[counter];
//     target.getElementsByClassName("out-content")[0].appendChild(formset);
//     // 退勤フォーマットにデータセット
//     target.getElementsByClassName("out-day-label")[0].textConten= element;

//     // カウントアップ
//     var counter = counter+1;

//   }

//   // var datelabel = document.createElement("p");
//   // datelabel.textContent = element+"　｜"+main_db["ステータス"][index]+"｜"+main_db["勤務可能<br>開始時間"][index]+"〜"+main_db["勤務可能<br>終了時間"][index];
//   // var target = document.getElementsByClassName("fd")[index];
//   // target.parentNode.classList.add("view-dg");
//   // target.before(datelabel);
//   // target.value = element;
// })
// var death_fd = document.querySelectorAll(".dg:not(.view-dg)")
// death_fd.remove();





}}





