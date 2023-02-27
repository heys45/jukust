setTimeout(timefunc,300);

function timefunc(){
if(prop_object["ページ表示名"]==="シフト確定"){

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// プログレスバーの変更 2min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region プログレスバー設定　個別
    // 表示位置の設定
    var quote_name = "スポットバイトの流れ";
    var progressbar = document.getElementsByClassName("progressbar")[0];
    document.getElementById(quote_name).after(progressbar);
    progressbar.style.display = 'flex';

    //プログレスバー書き換え処理
    document.getElementById('li-schedule').setAttribute("class","complete");
    document.getElementById('li-request').setAttribute("class","complete");
    document.getElementById('li-confirm').setAttribute("class","active");
    // document.getElementById('db-2-1-4').setAttribute("class",complete);
// #endregion

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
      element.remove();  });
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

  const view_form = sh_form;          //ページによって変更する
  sc_form.remove();
  wr_form.remove();

  // 出力する場所を用意（quoteを指定）
  var area_target = document.getElementById("シフト確定の回答はこちらから").nextElementSibling;
  var form_area = document.getElementsByTagName("form")[0];
  console.log(form_area.id);
  form_area.setAttribute("id","form");
  area_target.after(form_area);  

  const forms = document.querySelectorAll('.dg');

  // フォーム初期値の設定 講師ID、教室ID、勤務IDの存在を確認。
  document.getElementById("teaid").value = prop_object["講師ID"];
  document.getElementById("schid").value = prop_object["教室ID"];

  // フォーム不要項目の非表示
  const death_prop = document.querySelectorAll(".fd,.ft1,.ft2");
  death_prop.forEach(element=>{  element.style.display = 'none'; });

  view_form.style.display = 'block';


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの作成①　日付ラベル作成 　　何もしなくてOK
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region 【共通】スケ提出とシフト管理は同じ　直近30日のフォーム用意
const formdate =new Date();
forms.forEach((element,index) =>{
  // 挿入する日付を用意（明日以降）
  formdate.setDate(formdate.getDate() + 1);
  var year = formdate.getFullYear();
  var month = formdate.getMonth()+1;
  var week = formdate.getDay();
  var day = formdate.getDate();
  var yobi= new Array("日","月","火","水","木","金","土");
  var key = year+"/"+month+"/"+day+"("+yobi[week]+")";
  // フォームデザインのフォーマットを用意
  form_area.appendChild(document.getElementsByClassName("day-box")[0].cloneNode(true));
  var target = document.getElementsByClassName("day-box")[index+1];
  target.style.display = "flex";

  // 日付を入れる
  var day_label = month+"/"+day+"<br>("+yobi[week]+")"
  target.getElementsByClassName("day-label")[0].innerHTML = day_label;
  if (week == 0){
    target.getElementsByClassName("day-box-l")[0].style["background-color"]="#6f1d1b"
  } 
  if (week == 6){
    target.getElementsByClassName("day-box-l")[0].style["background-color"]="#284b63"
  } 
// #endregion

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの作成③　シフト情報挿入 　10min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // シフト申請or確定シフトがあればシフト情報を入れる　依頼フォームは非表示にする
    if(document.getElementById("db-3") !=null){
      if(document.getElementById("db-3").querySelectorAll("[name='"+key+"']")[0] !=null){
        var db_id =document.getElementById("db-3").querySelectorAll("[name='"+key+"']")[0].getAttribute('id');
        if(document.getElementById(db_id+"-2").getElementsByTagName("span")[0]!=null){
        var status = document.getElementById(db_id+"-2").getElementsByTagName("span")[0].innerHTML;}
        else{var status=""}
        if(document.getElementById(db_id+"-3").getElementsByTagName("span")[0]!=null){
        var time1 = document.getElementById(db_id+"-3").getElementsByTagName("span")[0].innerHTML;}
        else{var time1="" }
        if(document.getElementById(db_id+"-4").getElementsByTagName("span")[0]!=null){
          var time2 = document.getElementById(db_id+"-4").getElementsByTagName("span")[0].innerHTML;}
        else{var time2="" }
        if(document.getElementById(db_id+"-5").getElementsByTagName("span")[0]!=null){
        var hosoku = "<br>補足事項｜"+document.getElementById(db_id+"-5").getElementsByTagName("span")[0].innerHTML;}
        else{var hosoku="" }

        var db_info ="シフト依頼時間｜"+time1+"〜"+time2+hosoku;
        target.getElementsByClassName("sh-info")[0].innerHTML = db_info;
        target.getElementsByClassName("sh-info")[0].style["font-weight"]="bold";
        target.getElementsByClassName("sch-info")[0].remove();
        target.getElementsByClassName("day-box-swich")[0].remove();
  
        // // 依頼フォームのボックスを初期で非表示にする
        // target.getElementsByClassName("day-box-form")[0].style.display="none";
        // // 依頼フォーム再表示用のボタンを用意する
        // const swich= '<div class="btn">依頼時間を変更する</div><div class="btn">依頼内容を取り消す</div>';
        // target.getElementsByClassName("day-box-swich")[0].innerHTML = swich;
  
      }else{
        target.getElementsByClassName("day-box-swich")[0].remove();
        target.getElementsByClassName("sh-info")[0].remove();
        target.getElementsByClassName("sch-info")[0].before(target.getElementsByClassName("day-box-form")[0]);
      }}else{
        target.getElementsByClassName("day-box-swich")[0].remove();
        target.getElementsByClassName("sh-info")[0].remove();
        target.getElementsByClassName("sch-info")[0].before(target.getElementsByClassName("day-box-form")[0]);
      }
  
      // 参考ボックスの非表示
      target.getElementsByClassName("ajs-info")[0].remove();

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの作成④　送信部分の作成 　10min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  

    // フォームを挿入して、解答欄のラベル（ガイド）をつけてあげる
    target.getElementsByClassName("day-box-form")[0].appendChild(element);


    var time_guide = document.createElement("span");
    time_guide.innerHTML = "依頼への回答｜";
    time_guide.style["font-weight"]="bold";
    target.getElementsByClassName("fs")[0].before(time_guide);

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "調整希望時間｜";
    time_guide.style["font-weight"]="bold";
    target.getElementsByClassName("adft1")[0].before(time_guide);

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "〜";
    time_guide.style["font-weight"]="bold";
    target.getElementsByClassName("adft1")[0].after(time_guide);

    var submit_guide = document.createElement("span");
    submit_guide.innerHTML="　＊依頼完了には送信が必要です";
    submit_guide.style["font-weight"] = "bold";
    submit_guide.style["color"] = "#34675c";
    submit_guide.style["font-size"] = "14px";
    submit_guide.style["display"] = "inline-box";
    target.getElementsByClassName("fs")[0].after(submit_guide);

    var hosoku_guide = document.createElement("span");
    hosoku_guide.innerHTML = "備考・補足｜";
    target.getElementsByClassName("hosoku")[0].before(hosoku_guide);
    target.getElementsByClassName("hosoku")[0].style.width = "calc(100% - 115px)";


    // フォームの回答と選択肢を設定する
    target.getElementsByClassName("fd")[0].value =key;

    var values =["講師回答前", "勤務確定", "勤務不可", "調整中"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target.getElementsByClassName("fs")[0].appendChild(option);
    });

    var values = ["","8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target.getElementsByClassName("adft1")[0].appendChild(option);
    });

    var values = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target.getElementsByClassName("adft2")[0].appendChild(option);
    });
  
  })


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの拡張①　送信機能＋送信後の設定　10min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region フォーム関連の共通設定  ※送信ボタンのテキストのみ個別！！

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
  form_button.innerHTML="▶︎ シフトの依頼を完了する";
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
  //フォーム送信後の処理　　メッセージの設定必要！
  form_button.addEventListener('click',function(){
    form_comfirm.style.display="block";
    form_button.style["background-color"]="gray";
    form_button.innerHTML="送信完了";
    form_comfirm.innerHTML='<p>シフトの依頼が完了しました。データの反映には2分ほど時間がかかります。</p><p>送信内容</p><div id="re_content"></div>';

    // 送信内容の作成
    var restarts = document.querySelectorAll(".day-box .ft1");
    console.log(restarts);
    restarts.forEach((element,index) =>{
      console.log(element);
      if(element.value !="選択してください"){
        var reday = document.querySelectorAll(".day-box .fd")[index].value;
        var restart = document.querySelectorAll(".day-box .ft1")[index].value;
        var reend = document.querySelectorAll(".day-box .ft2")[index].value;
        if(document.querySelectorAll(".day-box .hosoku")[index].value !=null){
          var rehosoku = "<br>補足｜"+document.querySelectorAll(".day-box .hosoku")[index].value;
        }else{var rehosoku =""}
        var re_content = reday+"｜"+restart+"〜"+reend+rehosoku;
        var re_contentp = document.createElement("p");
        re_contentp.innerHTML= re_content;
        document.getElementById("re_content").appendChild(re_contentp);
      }
    });

  });
  
 //#endregion



}}



