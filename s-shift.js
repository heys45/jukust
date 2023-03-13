setTimeout(timefunc,300);
function timefunc(){
if(prop_object["ページ表示名"]==="教室シフト管理"){

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォーム作成用の　日付ラ作成 　　何もしなくてOK
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region 【共通】スケ提出とシフト管理は同じ　直近30日のフォーム用意
const formdate =new Date();
var days = [];
for (let index = 0; index < 30; index++) {
  formdate.setDate(formdate.getDate() + 1);
  var year = formdate.getFullYear();
  var month = formdate.getMonth()+1;
  var week = formdate.getDay();
  var day = formdate.getDate();
  var yobi= new Array("日","月","火","水","木","金","土");
  var key = year+"/"+month+"/"+day;//+"("+yobi[week]+")"
  days.push(key)
}
// #endregion

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// スケジュールDBの情報取得   sc_list
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region
// sc_listのデータ取得。
var sc_list_db = document.querySelectorAll(".notion-collection-table")[1];
var sc_list ={};
var headers0 = sc_list_db.querySelectorAll("thead th");
var headers = []
 headers0.forEach(element =>{
   headers.push(element.innerHTML)
   sc_list[element.innerHTML] =[];
 })
 console.log(headers);
var rowdatas = sc_list_db.querySelectorAll("tbody tr");
 rowdatas.forEach(element =>{
   datas = element.querySelectorAll("td");
     for (let i =0 ; i< datas.length; i++) {
       // データがない場合の処理
       if(datas[i].querySelectorAll("span")[0] ==null){
         var data= null
       }else if(datas[i].querySelectorAll("span span")[0] ==null){
        var data= datas[i].querySelectorAll("span")[0].innerHTML;
       }else{
       // 二重スパンの場合
         var data= datas[i].querySelectorAll("span span")[0].innerHTML;
       }
       // 配列にデータを追加
       sc_list[headers[i]].push(data);
 }})
 console.log(sc_list);
 // ここまでで page_list["カラム名"]["行数"]でデータ取得可能。


//#endregion

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// シフトDBの情報取得  sf_list
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region
// sf_listのデータ取得。
var sf_list_db = document.querySelectorAll(".notion-collection-table")[2];
var sf_list ={};
var headers0 = sf_list_db.querySelectorAll("thead th");
var headers = []
 headers0.forEach(element =>{
   headers.push(element.innerHTML)
   sf_list[element.innerHTML] =[];
 })
 console.log(headers);
var rowdatas = sf_list_db.querySelectorAll("tbody tr");
 rowdatas.forEach(element =>{
   datas = element.querySelectorAll("td");
     for (let i =0 ; i< datas.length; i++) {
       // データがない場合の処理
       if(datas[i].querySelectorAll("span")[0] ==null){
         var data= null
       }else if(datas[i].querySelectorAll("span span")[0] ==null){
        var data= datas[i].querySelectorAll("span")[0].innerHTML;
       }else{
       // 二重スパンの場合
         var data= datas[i].querySelectorAll("span span")[0].innerHTML;
       }
       // 配列にデータを追加
       sf_list[headers[i]].push(data);
 }})
 console.log(sf_list);
 // ここまでで page_list["カラム名"]["行数"]でデータ取得可能。


//#endregion


// 出力する場所を用意（quoteを指定）
var form_copy = '<div class="form-wrapper"><div class="form-header"><span class="header-day">X月X日(〜)</span><span class="header-status">ステータス</span></div><div class="form-block"><span class="info1">講師のスケジュール：勤務可否 18:00〜22:00</span><br><span class="info3">補足備考：</span><br><p class="info4">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p></div><div class="form-block"><span class="info11">依頼中のシフト：講師回答前</span><br><span class="info12">勤務時間： 18:00〜22:00</span><br><span class="info13">休憩時間： 30分</span><br><span class="info14">補足備考：</span><br><p class="info15">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p></div><div class="form-block"><button class="change">変更する</button><button class="remove">依頼を取り消しする</button></div><form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdL3XBnLOebrkRYeLPcA5LSLII59XIFEZyz7dR5jAtXx4Tx9A/formResponse" method="post" target="hidden_iframe"><div class="form-none"><input type="text" name="entry.160618089" class="f-day"><input type="text" name="entry.1222060984" class="f-oubo"><input type="text" name="entry.154620229" class="f-kaiin"><input type="text" name="entry.1318309983" class="f-kaiin-name"><input type="text" name="entry.730274298" class="f-school"><input type="text" name="entry.1643541075" class="f-school-name"><input type="text" name="entry.60113429" class="f-torikeshi"></div><div class="form-block"><span>開始：</span><select name="entry.1320773206" class="f-time1"><option value="選択">選択</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option></select><span> 時 </span><select name="entry.1928280393" class="f-time2"><option value="選択">選択</option><option value="00">00</option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option></select><span> 分 ｜</span><span>終了：</span><select name="entry.1975073071" class="f-time3"><option value="選択">選択</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option></select><span> 時 </span><select name="entry.1278678826" class="f-time4"><option value="選択">選択</option><option value="00">00</option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option></select><span> 分 ｜</span><span>休憩：</span><select name="entry.1043304982" class="f-time5"><option value="選択">選択</option><option value="00">00</option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option><option value="60">60</option><option value="70">70</option><option value="80">80</option><option value="90">90</option><option value="100">100</option><option value="110">110</option><option value="120">120</option></select><span> 分 </span><br></div><div class="form-block"><span>補足備考：</span><br><textarea name="entry.1882666715" class="f-hosoku"></textarea></div><div class="form-block"><button type="submit">シフト依頼を確定</button></div><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe></form></div>';
var area_target = document.getElementById("シフト申請はこちらから").nextElementSibling;

var form_area = document.createElement("div");
area_target.after(form_area );

// フォーム作成ループ
days.forEach(element=>{
  form_area.insertAdjacentHTML("beforeend",form_copy);
  var wrap =document.querySelectorAll(".form-wrapper:last-child")[0];
  wrap.querySelectorAll(".header-day")[0].innerHTML= element ;
  wrap.querySelectorAll(".header-status")[0].innerHTML= "シフト未申請" ;
  wrap.querySelectorAll("form .f-day")[0].value= element ;
  wrap.querySelectorAll("form .f-kaiin")[0].value= prop_object["会員ID"];
  wrap.querySelectorAll("form .f-kaiin-name")[0].value= prop_object["姓"]+prop_object["名"];
  wrap.querySelectorAll("form .f-school")[0].value= prop_object["教室ID"];
  wrap.querySelectorAll("form .f-school-name")[0].value= prop_object["教室名"];
  wrap.querySelectorAll("form .f-oubo")[0].value= prop_object["応募ID"];
  wrap.querySelectorAll(".form-block")[0].style.display="none";
  wrap.querySelectorAll(".form-block")[1].style.display="none";
  wrap.querySelectorAll(".form-block")[2].style.display="none";
  wrap.querySelectorAll(".form-none")[0].style.display="none";

  // スケジュールデータがあった場合の処理
  for (let index = 0; index < sc_list["日付"].length; index++) {
    if(sc_list["日付"][index] == element){
      if(sc_list["勤務可否"][index] == "一部勤務可能"){
      wrap.querySelectorAll(".info1")[0].innerHTML= "講師のスケジュール｜"+ sc_list["勤務可否"][index]+"｜"+ sc_list["勤務可能時刻｜開始"][index]+"　〜　"+sc_list["勤務可能時刻｜終了"][index];
      }else{
        wrap.querySelectorAll(".info1")[0].innerHTML= "講師のスケジュール｜"+ sc_list["勤務可否"][index];
      }
      if(sc_list["備考・補足"][index] !=null ){
      wrap.querySelectorAll(".info4")[0].innerHTML= sc_list["備考・補足"][index];
      }else{
        wrap.querySelectorAll(".info3")[0].nextSibling.remove()
      wrap.querySelectorAll(".info3")[0].style.display="none";
      wrap.querySelectorAll(".info4")[0].style.display="none";
      }
    //   wrap.querySelectorAll(".header-status")[0].innerHTML= "提出済" ;
    //   wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "#34675C" ;
    //   wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "white" ;
      wrap.querySelectorAll(".form-block")[0].style.display="block";
    }
  }
    // シフト依頼データがあった場合の処理
    for (let index = 0; index < sf_list["日付"].length; index++) {
        if(sf_list["日付"][index] == element){
            if(sf_list["依頼への回答"][index]!=null){
            wrap.querySelectorAll(".info11")[0].innerHTML= "依頼中のシフト："+ sf_list["依頼への回答"][index];
            }else{
            wrap.querySelectorAll(".info11")[0].innerHTML= "依頼中のシフト："+ "講師回答前";
            }
            wrap.querySelectorAll(".info12")[0].innerHTML= "勤務依頼時間　："+ sf_list["勤務依頼時刻｜開始"][index]+" 〜 "+sf_list["勤務依頼時刻｜終了"][index];
            wrap.querySelectorAll(".info13")[0].innerHTML= "休憩時間　　　："+ sf_list["休憩時間（依頼）"][index]+"　分　";
            if(sf_list["備考補足　シフト提出時"][index] !=null ){
            wrap.querySelectorAll(".info15")[0].innerHTML= sf_list["備考補足　シフト提出時"][index];
            }else{
            wrap.querySelectorAll(".info14")[0].nextSibling.remove()
            wrap.querySelectorAll(".info14")[0].style.display="none";
            wrap.querySelectorAll(".info15")[0].style.display="none";
            }
            wrap.querySelectorAll(".header-status")[0].innerHTML= "シフト依頼済み" ;
            if(sf_list["依頼への回答"][index]=="勤務確定"){
            wrap.querySelectorAll(".header-status")[0].innerHTML= "シフト確定済み" ;
            wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "#34675C" ;
            wrap.querySelectorAll(".header-status")[0].style.color = "white" ;
            }
            wrap.querySelectorAll(".form-block")[1].style.display="block";
            wrap.querySelectorAll(".form-block")[2].style.display="block";
            wrap.querySelectorAll("form")[0].style.display="none";
        }
    }
}) 

// 変更ボタンプッシュ時の動作設定
  var change_button =document.querySelectorAll(".form-wrapper .change")
  change_button.forEach((element,index)=>{
    element.addEventListener('click',function(){
        var wrap = document.querySelectorAll(".form-wrapper")[index];
        wrap.querySelectorAll("form")[0].style.display="flex";
        wrap.querySelectorAll(".form-block")[2].style.display="none";
    })
  })
// 変更ボタンプッシュ時の動作設定
var remove_button =document.querySelectorAll(".form-wrapper .remove")
remove_button.forEach((element,index)=>{
  element.addEventListener('click',function(){
      var wrap = document.querySelectorAll(".form-wrapper")[index];
      wrap.querySelectorAll("form")[0].style.display="flex";
      wrap.querySelectorAll(".f-torikeshi")[0].value="true";
      wrap.querySelectorAll("form .form-block")[0].style.display="none";
      wrap.querySelectorAll("form .form-block")[1].style.display="none";
      wrap.querySelectorAll("form button")[0].innerHTML="シフト依頼を取り消す"
  })





})

// フォーム提出時の動作設定
  var submit_button = document.querySelectorAll("form button");
  submit_button.forEach((element,index)=>{
    element.addEventListener('click',function(){
      var wrap = document.querySelectorAll(".form-wrapper")[index]  
        wrap.querySelectorAll(".info11")[0].innerHTML= "依頼中のシフト：";
        wrap.querySelectorAll(".info12")[0].innerHTML= "勤務依頼時間　："+ wrap.querySelectorAll("f-time1")[0]+":"+ wrap.querySelectorAll("f-time2")[0]+"　〜　"+wrap.querySelectorAll("f-time3")[0]+":"+ wrap.querySelectorAll("f-time4")[0];
        wrap.querySelectorAll(".info13")[0].innerHTML= "休憩時間　　　："+ wrap.querySelectorAll("f-time5")[0]+"　分　";
        if(wrap.querySelectorAll(".f-hosoku")[0].value !=null ){
        wrap.querySelectorAll(".info15")[0].innerHTML= wrap.querySelectorAll(".f-hosoku")[0].value;
        }else{
        wrap.querySelectorAll(".info14")[0].nextSibling.remove()
        wrap.querySelectorAll(".info14")[0].style.display="none";
        wrap.querySelectorAll(".info15")[0].style.display="none";
        }
        wrap.querySelectorAll(".header-status")[0].innerHTML= "シフト依頼済み" ;
      wrap.querySelectorAll(".form-wrapper .form-block")[1].style.display="block";
      wrap.querySelectorAll("form")[0].style.display="none";
    })
  })

































//     //DB書き換え処理
//     document.getElementById('db-3-1-3').innerHTML = "勤務可能<br>開始時間";
//     document.getElementById('db-3-1-4').innerHTML = "勤務可能<br>終了時間";



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォーム表示設定代項目　3分
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


//   // 出力する場所を用意（quoteを指定）
//   var area_target = document.getElementById("シフト依頼はこちらから").nextElementSibling;
//   var form_area = document.getElementsByTagName("form")[0];
//   console.log(form_area.id);
//   form_area.setAttribute("id","form");
//   area_target.after(form_area);  

//   const forms = document.querySelectorAll('.dg');

//   // フォーム初期値の設定 講師ID、教室ID、勤務IDの存在を確認。
//   document.getElementById("teaid").value = prop_object["講師ID"];
//   document.getElementById("schid").value = prop_object["教室ID"];

//   // フォーム不要項目の非表示
//   const death_prop = document.querySelectorAll(".fd,.adj,.fs");
//   death_prop.forEach(element=>{  element.style.display = 'none'; });

//   view_form.style.display = 'block';


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの作成①　日付ラベル作成 　　何もしなくてOK
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // #region 【共通】スケ提出とシフト管理は同じ　直近30日のフォーム用意
//   const formdate =new Date();
//   forms.forEach((element,index) =>{
//     // 挿入する日付を用意（明日以降）
//     formdate.setDate(formdate.getDate() + 1);
//     var year = formdate.getFullYear();
//     var month = formdate.getMonth()+1;
//     var week = formdate.getDay();
//     var day = formdate.getDate();
//     var yobi= new Array("日","月","火","水","木","金","土");
//     var key = year+"/"+month+"/"+day+"("+yobi[week]+")";
//     // フォームデザインのフォーマットを用意
//     form_area.appendChild(document.getElementsByClassName("day-box")[0].cloneNode(true));
//     var target = document.getElementsByClassName("day-box")[index+1];
//     target.style.display = "flex";

//     // 日付を入れる
//     var day_label = month+"/"+day+"<br>("+yobi[week]+")"
//     target.getElementsByClassName("day-label")[0].innerHTML = day_label;
//     if (week == 0){
//       target.getElementsByClassName("day-box-l")[0].style["background-color"]="#6f1d1b"
//     } 
//     if (week == 6){
//       target.getElementsByClassName("day-box-l")[0].style["background-color"]="#284b63"
//     } 
// // #endregion


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの作成②　スケジュール情報挿入 　10min
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//     // スケジュール提出があればスケジュール情報を入れる
//     if(document.getElementById("db-4") !=null){
//     if(document.getElementById("db-4").querySelectorAll("[name='"+key+"']")[0] !=null){
//       var db_id =document.getElementById("db-4").querySelectorAll("[name='"+key+"']")[0].getAttribute('id');
//       if(document.getElementById(db_id+"-2").getElementsByTagName("span")[0]!=null){
//       var status = document.getElementById(db_id+"-2").getElementsByTagName("span")[0].innerHTML;}
//       else{var status=""}
//       if(document.getElementById(db_id+"-3").getElementsByTagName("span")[0]!=null){
//       var time1 = document.getElementById(db_id+"-3").getElementsByTagName("span")[0].innerHTML;}
//       else{var time1="" }
//       if(document.getElementById(db_id+"-4").getElementsByTagName("span")[0]!=null){
//         var time2 = document.getElementById(db_id+"-4").getElementsByTagName("span")[0].innerHTML;}
//       else{var time2="" }
//       if(document.getElementById(db_id+"-5").getElementsByTagName("span")[0]!=null){
//       var hosoku = "<br>備考・補足｜"+document.getElementById(db_id+"-5").getElementsByTagName("span")[0].innerHTML;}
//       else{var hosoku="" }
//       var db_info ="ｽｹｼﾞｭｰﾙ "+"<span class=\"pill\">｜"+status+"｜</span>"+time1+"〜"+time2+hosoku;
//       target.getElementsByClassName("sch-info")[0].innerHTML = db_info;
//       target.getElementsByClassName("sch-info")[0].style["font-weight"] = "bold";
//     }else{
//       target.getElementsByClassName("sch-info")[0].innerHTML = "スケジュール未提出";
//       target.getElementsByClassName("sch-info")[0].style.color = "red";
//     }}else{
//       target.getElementsByClassName("sch-info")[0].innerHTML = "スケジュール未提出";
//       target.getElementsByClassName("sch-info")[0].style.color = "red";
//     }

// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの作成③　シフト情報挿入 　10min
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//     // シフト申請or確定シフトがあればシフト情報を入れる　依頼フォームは非表示にする
//     if(document.getElementById("db-3") !=null){
//     if(document.getElementById("db-3").querySelectorAll("[name='"+key+"']")[0] !=null){
//       var db_id =document.getElementById("db-3").querySelectorAll("[name='"+key+"']")[0].getAttribute('id');
//       if(document.getElementById(db_id+"-2").getElementsByTagName("span")[0]!=null){
//       var status = document.getElementById(db_id+"-2").getElementsByTagName("span")[0].innerHTML;}
//       else{var status=""}
//       if(document.getElementById(db_id+"-3").getElementsByTagName("span")[0]!=null){
//       var time1 = document.getElementById(db_id+"-3").getElementsByTagName("span")[0].innerHTML;}
//       else{var time1="" }
//       if(document.getElementById(db_id+"-4").getElementsByTagName("span")[0]!=null){
//         var time2 = document.getElementById(db_id+"-4").getElementsByTagName("span")[0].innerHTML;}
//       else{var time2="" }
//       if(document.getElementById(db_id+"-5").getElementsByTagName("span")[0]!=null){
//       var hosoku = "<br>補足事項｜"+document.getElementById(db_id+"-5").getElementsByTagName("span")[0].innerHTML;}
//       else{var hosoku="" }
//       var db_info ="依頼済み"+"<span class=\"pill\">｜"+status+"｜</span>"+time1+"〜"+time2+hosoku;
//       target.getElementsByClassName("sh-info")[0].innerHTML = db_info;

//       target.getElementsByClassName("sch-info")[0].style["font-weight"] = "";
//       target.getElementsByClassName("sh-info")[0].style["font-weight"] = "bold";

//       // 依頼フォームのボックスを初期で非表示にする
//       target.getElementsByClassName("day-box-form")[0].style.display="none";
//       // 依頼フォーム再表示用のボタンを用意する
//       const swich= '<div class="btn">依頼時間を変更する</div><div class="btn">依頼内容を取り消す</div>';
//       target.getElementsByClassName("day-box-swich")[0].innerHTML = swich;

//     }else{
//       target.getElementsByClassName("day-box-swich")[0].remove();
//       target.getElementsByClassName("sh-info")[0].remove();
//       target.getElementsByClassName("sch-info")[0].before(target.getElementsByClassName("day-box-form")[0]);
//     }}else{
//       target.getElementsByClassName("day-box-swich")[0].remove();
//       target.getElementsByClassName("sh-info")[0].remove();
//       target.getElementsByClassName("sch-info")[0].before(target.getElementsByClassName("day-box-form")[0]);
//     }

//     // 参考ボックスの非表示
//     target.getElementsByClassName("ajs-info")[0].remove();

// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの作成④　送信部分の作成 　10min
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  

//     // フォームを挿入して、解答欄のラベル（ガイド）をつけてあげる
//     target.getElementsByClassName("day-box-form")[0].appendChild(element);

//     var time_guide = document.createElement("span");
//     time_guide.innerHTML = "依頼時間｜";
//     time_guide.style["font-weight"]="bold";
//     target.getElementsByClassName("ft1")[0].before(time_guide);

//     var time_guide = document.createElement("span");
//     time_guide.innerHTML = "〜";
//     time_guide.style["font-weight"]="bold";
//     target.getElementsByClassName("ft1")[0].after(time_guide);

//     var submit_guide = document.createElement("span");
//     submit_guide.innerHTML="　＊依頼完了には送信が必要です";
//     submit_guide.style["font-weight"] = "bold";
//     submit_guide.style["color"] = "#34675c";
//     submit_guide.style["font-size"] = "14px";
//     submit_guide.style["display"] = "inline-box";
//     target.getElementsByClassName("ft2")[0].after(submit_guide);

//     var hosoku_guide = document.createElement("span");
//     hosoku_guide.innerHTML = "補足事項｜";
//     target.getElementsByClassName("hosoku")[0].before(hosoku_guide);
//     target.getElementsByClassName("hosoku")[0].style.width = "calc(100% - 115px)";


//     // フォームの回答と選択肢を設定する
//     target.getElementsByClassName("fd")[0].value =key;

//     var values =["講師回答前", "勤務確定", "勤務不可", "調整中"];
//     values.forEach(element =>{
//       var option = document.createElement('option');
//       option.setAttribute("value",element);
//       option.textContent = element;
//       target.getElementsByClassName("fs")[0].appendChild(option);
//     });

//     var values = ["","8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];
//     values.forEach(element =>{
//       var option = document.createElement('option');
//       option.setAttribute("value",element);
//       option.textContent = element;
//       target.getElementsByClassName("ft1")[0].appendChild(option);
//     });

//     var values = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
//     values.forEach(element =>{
//       var option = document.createElement('option');
//       option.setAttribute("value",element);
//       option.textContent = element;
//       target.getElementsByClassName("ft2")[0].appendChild(option);
//     });
  
//   })

// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの拡張①　送信機能＋送信後の設定　10min
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // #region フォーム関連の共通設定  ※送信ボタンのテキストのみ個別！！

//   // フォーム送信ボタンラッパーの作成
//   var form_button_wrapper = document.createElement("div");
//   form_button_wrapper.setAttribute("id","form_button_wrapper");
//   form_button_wrapper.style.display = "flex";
//   form_button_wrapper.style["flex-direction"]= "column";
//   form_button_wrapper.style["justify-content"] = "center";
//   form_button_wrapper.style["align-item"] = "center";
//   form_area.appendChild(form_button_wrapper);
//   var form_wrapper = document.getElementById("form_button_wrapper")

//   // フォーム送信ボタンの作成
//   var form_button = document.createElement("button");
//   form_button.setAttribute("id","form_button");
//   form_button.setAttribute("type","submit");
//   form_button.innerHTML="▶︎ シフトの依頼を完了する";
//   form_button.style["background-color"] ="#34675c";
//   form_button.style["border-radius"] = "5px";
//   form_button.style["padding"] = "8px";
//   form_button.style["text-align"] = "center";
//   form_button.style.color="white";
//   form_wrapper.appendChild(form_button);
//   var form_button = document.getElementById("form_button")
  
//   // フォーム送信ボタン送信後の表示設定
//   var form_comfirm= document.createElement("div");
//   form_comfirm.style.display="none";
//   form_wrapper.appendChild(form_comfirm);

//   // フォーム送信後の画面遷移の設定
//   var form_iframe = document.createElement("iframe");
//   form_iframe.setAttribute("name","hidden_iframe");
//   form_iframe.setAttribute("id","hidden_iframe");
//   form_iframe.style.display="none";
//   form_area.appendChild(form_iframe);
//   form_area.setAttribute("method","post");
//   form_area.setAttribute("target","hidden_iframe");

// // #endregion 


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの拡張①　送信後のメッセージ作成　10min
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  
// // #region 【個別】送信後のメッセージ作成
//   //フォーム送信後の処理　　メッセージの設定必要！
//   form_button.addEventListener('click',function(){
//     form_comfirm.style.display="block";
//     form_button.style["background-color"]="gray";
//     form_button.innerHTML="送信完了";
//     form_comfirm.innerHTML='<p>シフトの依頼が完了しました。データの反映には2分ほど時間がかかります。</p><p>送信内容</p><div id="re_content"></div>';

//     // 送信内容の作成
//     var restarts = document.querySelectorAll(".day-box .ft1");
//     console.log(restarts);
//     restarts.forEach((element,index) =>{
//       console.log(element);
//       if(element.value !="選択してください"){
//         var reday = document.querySelectorAll(".day-box .fd")[index].value;
//         var restart = document.querySelectorAll(".day-box .ft1")[index].value;
//         var reend = document.querySelectorAll(".day-box .ft2")[index].value;
//         if(document.querySelectorAll(".day-box .hosoku")[index].value !=null){
//           var rehosoku = "<br>補足｜"+document.querySelectorAll(".day-box .hosoku")[index].value;
//         }else{var rehosoku =""}
//         var re_content = reday+"｜"+restart+"〜"+reend+rehosoku;
//         var re_contentp = document.createElement("p");
//         re_contentp.innerHTML= re_content;
//         document.getElementById("re_content").appendChild(re_contentp);
//       }
//     });

//   });
  
//  //#endregion

  
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの拡張②　提出期間切り替えボタンの設定
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  
// // #region 【共通】スケ提出とシフト管理は同じ
//   var form_term_box = document.createElement("div");
//   form_term_box.id="form_term_swich_wrapper";
//   form_term_box.style.display="flex";
//   form_term_box.style.padding="5px";
//   area_target.after(form_term_box);

//   var form_term_swich = document.createElement("div");
//   form_term_swich.innerHTML="1週間分を<br>提出する";
//   form_term_swich.id="week1";
//   form_term_swich.style["background-color"]="#34675c";  form_term_swich.style["width"]="33.3%";  form_term_swich.style["margin"]="5px";  form_term_swich.style["padding"]="5px";  form_term_swich.style["color"]="white";  form_term_swich.style["border-radius"]="5px";  form_term_swich.style["text-align"]="center";
//   form_term_box.appendChild(form_term_swich);

//   var form_term_swich = form_term_swich.cloneNode(true);
//   form_term_swich.innerHTML="2週間分を<br>提出する";
//   form_term_swich.style["background-color"]="white";
//   form_term_swich.style["color"]="#34675c";
//   form_term_swich.style["border"]="solid 1px #34675c";
//   form_term_swich.id="week2";
//   form_term_box.appendChild(form_term_swich);

//   var form_term_swich = form_term_swich.cloneNode(true);
//   form_term_swich.innerHTML="1ヶ月分を<br>提出する";
//   form_term_swich.id="week4";
//   form_term_box.appendChild(form_term_swich);

//   for (let j = 8; j <= 30; j++) {
//     document.getElementsByClassName("day-box")[j].style.display="none";
//   }


//   var triggers = document.querySelectorAll("#form_term_swich_wrapper div");
//   triggers.forEach(element =>{
//     console.log(element);
//     element.addEventListener('click',function(){
//       // 共通処理
//       console.log(element);
//       for (let i = 0; i < triggers.length; i++) {
//         triggers[i].style["background-color"]="white";
//         triggers[i].style["color"]="#34675c";
//         triggers[i].style["border"]="solid 1px #34675c";
//       }
//       element.style["background-color"]="#34675c";
//       element.style["color"]="white";
//       for (let j = 0; j <= 30; j++) {
//         document.getElementsByClassName("day-box")[j].style.display="flex";
//       }
//       // 個別処理
//       if(element.id == "week1"){
//         for (let j = 8; j <= 30; j++) {
//           document.getElementsByClassName("day-box")[j].style.display="none";
//         }
//       }
//       if(element.id == "week2"){
//         for (let j = 15; j <= 30; j++) {
//           document.getElementsByClassName("day-box")[j].style.display="none";
//         }
//       }

//     });
//   });


// // #endregion


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // データベースの値取得改善案
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // #region 【改善案】データベースの情報取得
//     // var main_db ={};
//     // var db_data = document.getElementById("db-3").querySelectorAll("tr:not(#db-3-1)");
//     // var db_header = document.getElementById("db-3-1").querySelectorAll("th");
//     // console.log(db_header);
//     // db_header.forEach(element => {
//     //   main_db[element.innerHTML] =[];
//     // });
//     // var nullspan = document.createElement("span");
//     // db_data.forEach(element => {
//     //   var a_db_data = element.querySelectorAll("td");
//     //   console.log(a_db_data);
//     //   for (let index = 0; index < db_header.length; index++) {
//     //     a_db_data[index].appendChild(nullspan);
//     //     var a_db_data_n = a_db_data[index].getElementsByTagName("span")[0];
//     //     if (a_db_data_n.getElementsByTagName("span")[0] !=null) {// spanが二段階の時
//     //       var a_db_data_n = a_db_data_n.getElementsByTagName("span")[0];
//     //       var a_db_data_n =  a_db_data_n.innerHTML;
//     //       main_db[db_header[index].innerHTML].push(a_db_data_n);
//     //     }else{// spanが一段階の時
//     //       var a_db_data_n =  a_db_data_n.innerHTML;
//     //       main_db[db_header[index].innerHTML].push(a_db_data_n);
//     //     }
//     //   }
//     // });
//     // console.log(main_db);
// // #endregion






}}


