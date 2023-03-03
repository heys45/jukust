
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
  top_span1.textContent = prop_object["姓"]+prop_object["名"];
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

  const forms = document.querySelectorAll('.dg');

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


var check_area = document.getElementById("これからの勤務予定").nextElementSibling.nextElementSibling;
// #region データベース個別処理
  if(check_area.getElementsByClassName("notion-collection-table")[0] !=null){
    var check_db =check_area.getElementsByClassName("notion-collection-table") [0];
    var make_db ={};
    var headers = check_db.querySelectorAll("thead th");
    headers.forEach(element =>{
      make_db[element.innerHTML]=[];
    });
    var datas = check_db.querySelectorAll("tbody tr");
    datas.forEach(element =>{
      var datas = element.querySelectorAll("td");
      for (let i = 0; i< datas.length; i++) {
        if(datas[i].querySelectorAll("span")[0] !=null){
          if(datas[i].querySelectorAll("span span")[0] !=null){
            var data = datas[i].querySelectorAll("span span")[0].innerHTML;}
          else{
            var data = datas[i].querySelectorAll("span")[0].innerHTML;}
        }else{var data=null;}
        make_db[headers[i].innerHTML].push(data);}
    });
    console.log(make_db);}
// #endregion
if(make_db !=null){
var kintai_db = make_db;}
console.log(kintai_db);


//     //DB書き換え処理
//     document.getElementById('db-3-1-3').innerHTML = "勤務可能<br>開始時間";
//     document.getElementById('db-3-1-4').innerHTML = "勤務可能<br>終了時間";



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベース由来のフォーム作成
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 過去の日付で勤怠報告未完了のものを取得
console.log(kintai_db["日付"]);
kintai_db["日付"].forEach((element,index)=>{
  console.log(kintai_db["開始報告フラグ"][index])
  if(kintai_db["開始報告フラグ"][index]==1){

    
    // フォームデザインのフォーマットを用意
    form_area.appendChild(document.getElementsByClassName("day-box")[0].cloneNode(true));
    var target1 = form_area.lastChild;
    console.log(target1);
    target1.style.display = "flex";
    // 日付を入れ
    var day_label =element;
    target1.getElementsByClassName("day-label")[0].innerHTML = day_label;
    var start = kintai_db["開始時刻"][index];
    var end = kintai_db["終了時刻"][index];
    db_info = "勤務時間｜" + start +"〜"+end;

    target1.getElementsByClassName("sh-info")[0].innerHTML = db_info;
    target1.getElementsByClassName("sh-info")[0].style["font-weight"]="bold";
    target1.getElementsByClassName("sh-info")[0].style["color"]="red";
    target1.getElementsByClassName("sch-info")[0].remove();
    target1.getElementsByClassName("ajs-info")[0].remove();

    // フォームを挿入して、解答欄のラベル（ガイド）をつけてあげる
    var shift_form = document.getElementsByClassName("dg")[0];
    target1.getElementsByClassName("day-box-form")[0].appendChild(shift_form);
    target1.getElementsByClassName("fd")[0].innerHTML=element;

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "実際の出勤時間｜";
    target1.getElementsByClassName("wh")[0].before(time_guide);
    var time_guide = document.createElement("span");
    time_guide.innerHTML = "<br>↑勤務開始時間変更 or 遅刻した場合のみ記入";
    target1.getElementsByClassName("wm")[0].after(time_guide);


    var time_guide = document.createElement("span");
    time_guide.innerHTML = "実際の休憩時間｜";
    target1.getElementsByClassName("bh")[0].before(time_guide);

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "<br>↑休憩時間が減った or 増えた場合など記入";
    target1.getElementsByClassName("bm")[0].after(time_guide);

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "補足・備考｜*勤務時間変更時などは説明<br>";
    time_guide.style["font-weight"]="bold";
    target1.getElementsByClassName("hosoku")[0].before(time_guide);
    target1.getElementsByClassName("hosoku")[0].style.width = "calc(100%)";


    // --------------------------------
    // フォームの回答と選択肢を設定する
    // --------------------------------
    var values = ["","8", "9","10","11", "12", "13", "14", "15","16", "17", "18", "19", "20", "21", "22"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target1.getElementsByClassName("wh")[0].appendChild(option);
    });
    var values = ["","00", "10", "20", "30", "40", "50"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target1.getElementsByClassName("wm")[0].appendChild(option);
    });
    var values = ["","8", "9","10","11", "12", "13", "14", "15","16", "17", "18", "19", "20", "21", "22"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target1.getElementsByClassName("bh")[0].appendChild(option);
    });
    var values = ["","00", "10", "20", "30", "40", "50"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target1.getElementsByClassName("bm")[0].appendChild(option);
    });


    //依頼フォームのボックスを初期で非表示にする
    target1.getElementsByClassName("day-box-form")[0].style.display="none";

    // 出勤、退勤ボタンを用意する
    const swich= '<div class="btn">出勤報告する</div>';
    target1.getElementsByClassName("day-box-swich")[0].innerHTML = swich;

    var trigger1 = target1.getElementsByClassName("btn")[0];
    trigger1.addEventListener('click',function(){
      target1.getElementsByClassName("flag")[0].innerHTML="出勤報告あり"
      target1.getElementsByClassName("day-box-form")[0].style.display="block";
      trigger1.style["background-color"]="#34675c";
      trigger1.style["color"]="white";
    });

  }

});

document.querySelectorAll("#form>.dg").remove();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの拡張①　送信機能＋送信後の設定　10min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region フォーム関連の共通設定

  // フォーム送信ボタンラッパーの作成
  var form_button_wrapper = document.createElement("div");
  form_button_wrapper.setAttribute("id","form_button_wrapper");
  form_button_wrapper.style.display = "flex";
  form_button_wrapper.style["flex-direction"]= "column";
  form_button_wrapper.style["justify-content"] = "center";
  form_button_wrapper.style["align-item"] = "center";
  form_area.appendChild(form_button_wrapper);
  var form_wrapper = document.getElementById("form_button_wrapper")

  // フォーム送信ボタンの作成
  var form_button = document.createElement("button");
  form_button.setAttribute("id","form_button");
  form_button.setAttribute("type","submit");
  form_button.innerHTML="▶︎ 勤怠報告を完了する";
  form_button.style["background-color"] ="#34675c";
  form_button.style["border-radius"] = "5px";
  form_button.style["padding"] = "8px";
  form_button.style["text-align"] = "center";
  form_button.style.color="white";
  form_wrapper.appendChild(form_button);
  var form_button = document.getElementById("form_button")
  
  // フォーム送信ボタン送信後の表示設定
  var form_comfirm= document.createElement("div");
  form_comfirm.style.display="none";
  form_wrapper.appendChild(form_comfirm);

  // フォーム送信後の画面遷移の設定
  var form_iframe = document.createElement("iframe");
  form_iframe.setAttribute("name","hidden_iframe");
  form_iframe.setAttribute("id","hidden_iframe");
  form_iframe.style.display="none";
  form_area.appendChild(form_iframe);
  form_area.setAttribute("method","post");
  form_area.setAttribute("target","hidden_iframe");

// #endregion 


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの拡張①　送信後のメッセージ作成　10min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  
// #region 【個別】送信後のメッセージ作成
  //フォーム送信後の処理
  form_button.addEventListener('click',function(){
    form_comfirm.style.display="block";
    form_button.style["background-color"]="gray";
    form_button.innerHTML="送信完了";
    form_comfirm.innerHTML='<p>勤怠報告が完了しました。データの反映には2分ほど時間がかかります。</p><p>送信内容</p><div id="re_content"></div>';


    // // 送信内容の作成
    // var restarts = document.querySelectorAll(".day-box .fs2");
    // console.log(restarts);
    // restarts.forEach((element,index) =>{
    //   console.log(element);
    //   if(element.value !="選択してください"){
    //     var resta = document.querySelectorAll(".day-box .fs2")[index].value;
    //     var reday = document.querySelectorAll(".day-box .fd")[index].value;
    //     var restart = document.querySelectorAll(".day-box .ft1")[index].value;
    //     var reend = document.querySelectorAll(".day-box .ft2")[index].value;
    //     if(document.querySelectorAll(".day-box .hosoku")[index].value !=null){
    //       var rehosoku = "<br>補足｜"+document.querySelectorAll(".day-box .hosoku")[index].value;
    //     }else{var rehosoku =""}
    //     var re_content = reday+"｜"+resta+"｜"+restart+"〜"+reend+rehosoku;
    //     var re_contentp = document.createElement("p");
    //     re_contentp.innerHTML= re_content;
    //     document.getElementById("re_content").appendChild(re_contentp);
    //   }
    // });

  });
  
 //#endregion






document.querySelectorAll("#form>.in-dg").forEach(element => {
  element.remove();
});
document.querySelectorAll("#form>.out-dg").forEach(element => {
  element.remove();
});

document.getElementById("db-4").style.display="none";









//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベースの値取得準備
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var senkou_db ={};
if(document.getElementById("db-3") !=null){
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
  if(senkou_db["TimeRex入力済"][index]==0){
    var area_target = document.getElementById("やることリスト").nextElementSibling;

    var TimeRexbox = document.createElement("div");
    TimeRexbox.setAttribute("id","TRB")
    area_target.after(TimeRexbox);
    area_target = document.getElementById("TRB");

    setTimeout(timefunc2,5000);
    function timefunc2(){
    var testrex =document.createElement("div");
    testrex.innerHTML="タイムレックスが入力済みでないのでここにタイムレックスを表示<br><br>タイムレックス入力後は、面談の案内<br><br>面談後、合格ならシフト入力の案内<br><br>不合格の場合は何を表示しましょう？？"
    testrex.style.height="500px"
    testrex.style["background-color"]="#eeeeee";
    area_target.appendChild(testrex);

    var TimeRex = document.createElement("div");
    TimeRex.setAttribute("id","timerex_calender");
    TimeRex.setAttribute("data-url","https://timerex.net/s/juku-spot/5e012623");
    area_target.appendChild(TimeRex);

    var TimeRex = document.createElement("script");
    TimeRex.setAttribute("id","timerex_embed");
    TimeRex.setAttribute("src","https://asset.timerex.net/js/embed.js");
    area_target.appendChild(TimeRex);

    // var TimeRex = document.createElement("script");
    // TimeRex.setAttribute("type","text/javascript");
    // TimeRex.innerHTML="TimerexCalendar();"
    // area_target.appendChild(TimeRex);
    // var TimeRexdata = document.getElementById("timerex_calendar");
    // area_target.appendChild(TimeRexdata);
    }


  };
 });//選考状況終わり

}


}}





