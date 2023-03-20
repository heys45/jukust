//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//プロパティの連想配列を作成する。
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var prop_object = {};
const prop_wrap = document.querySelectorAll('.notion-page__property');
for (let i=0; i< prop_wrap.length; i++){
    const prop_name = prop_wrap[i].getElementsByTagName("span")[0].innerHTML;
    var prop_value = null;
        if(prop_wrap[i].querySelectorAll(".checked")[0] !=null){
            prop_value = 1;
        }
        else if(prop_wrap[i].getElementsByTagName("span")[1] !=null){
        if(prop_wrap[i].querySelectorAll("span span")[0]){
            prop_value = prop_wrap[i].querySelectorAll("span span")[0].innerHTML;
        }else{
            prop_value = prop_wrap[i].getElementsByTagName("span")[1].innerHTML;
        }
    }
    prop_object[prop_name] = prop_value;
}
console.log("プロパティリスト");
console.log(prop_object);


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// テキストブロックの連想配列を作成する。
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var qblock_object = {};
const qblock_wrap = document.querySelectorAll('.notion-quote');
for (let i=0; i< qblock_wrap.length; i++){
    const qblock_name = qblock_wrap[i].getElementsByTagName("strong")[0].innerHTML;
    qblock_wrap[i].setAttribute("id",qblock_name);
    const qblock_value = document.getElementById(qblock_name);

    qblock_object[qblock_name] = qblock_value;
}
console.log("quoteリスト");
console.log(qblock_object);



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ページごとの処理（共通処理）
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベースの集合と
var dbs= document.querySelectorAll(".notion-collection");
var dbs_arrays =[];

var targets = ["教室トップページ","教室シフト管理リスト","教室勤怠確認リスト","教室講師確認リスト","教室連絡確認リスト","教室プロフィール","教室よくある質問","教室シフト管理","教室勤怠管理","教室講師確認","教室連絡確認","講師トップページ","講師スケジュール提出","講師シフト確定リスト","講師勤怠確認リスト","講師教室確認リスト","講師連絡確認リスト","講師プロフィール","講師よくある質問","講師シフト確定","講師勤怠確認","講師教室確認","講師連絡確認"];
if(targets.includes(prop_object["ページ表示名"])){
document.getElementsByClassName("notion-column")[0].setAttribute("id","first-column");
document.getElementsByClassName("notion-column")[1].setAttribute("id","second-column");

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 教室 or 講師　ナビバー周りの処理
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region　

// 判定用リストの作成
var targets = ["教室トップページ","教室シフト管理リスト","教室勤怠確認リスト","教室講師確認リスト","教室連絡確認リスト","教室プロフィール","教室よくある質問","教室シフト管理","教室勤怠管理","教室講師確認","教室連絡確認"];

// 判定＋判定による処理
var pc_logo = document.createElement('img');
var sp_logo = document.createElement('img');
var header_text_color="#555555"; var header_text="｜";var header_text2=prop_object["教室名"];
var last_url ="?juku-cr"
var list_label_part =""
if(targets.includes(prop_object["ページ表示名"])){
  // 教室用のロゴ設定
  pc_logo.src = 'https://heys45.github.io/jukust/logo2.png'; // 画像パス
  sp_logo.src = 'https://heys45.github.io/jukust/logo02.png'; // 画像パス
  document.getElementsByClassName("super-navbar")[0].style["background-color"]="#33A614";
  header_text_color="white"; header_text="｜";var header_text2=prop_object["名"];
  list_label_part=prop_object["教室名"]+"様";
}else{
  // ユーザー用のロゴ設定
  pc_logo.src = 'https://heys45.github.io/jukust/logo1.png'; // 画像パス
  sp_logo.src = 'https://heys45.github.io/jukust/logo01.png'; // 画像パス
  var last_url ="?koushi"
  list_label_part=prop_object["姓"]+prop_object["名"]+"先生";
}

// ロゴの表示設定
pc_logo.style.width="151px";pc_logo.setAttribute("id","pc_logo");pc_logo.style.height="32px";pc_logo.style.position="relative";
sp_logo.style.width="32px";sp_logo.setAttribute("id","sp_logo");sp_logo.style.height="32px";sp_logo.style.position="relative";
var img_area=  document.querySelectorAll(".super-navbar__logo-image")[0];
document.querySelectorAll(".super-navbar__logo-image span")[0].remove();
img_area.appendChild(pc_logo);
img_area.appendChild(sp_logo);

// ページタイトルの表示設定
var header_info = document.createElement("span");
header_info.innerHTML=header_text+document.getElementsByClassName("notion-header__title")[0].innerHTML;
header_info.style.color=header_text_color;header_info.style.position="relative";header_info.style.zIndex="1000";
header_info.style.paddingBottom="3px";header_info.style.paddingLeft="10px";header_info.style.display="inline-block";
document.querySelectorAll(".super-navbar__logo-image")[0].style["display"]= "flex";
document.querySelectorAll(".super-navbar__logo-image")[0].style["align-items"]= "end";
img_area.appendChild(header_info);

// ページリストの表示設定
var list_label = document.querySelectorAll(".notion-collection__header span span")[0];
list_label.innerHTML=list_label_part+"<br>ページリスト";
list_label.style.fontSize="18px"
list_label.style.lineHeight="20px"



//ページ更新用のJS
var old_url = window.location.href;
if(window.location.href.indexOf(last_url) == -1){
history.pushState('', document.getElementsByClassName("notion-header__title")[0].innerHTML, window.location.href+last_url);}

var url_interval = setInterval(()=>{
var new_url = window.location.href;
if (old_url !=new_url){
  old_url = new_url;
  window.location.href = window.location.href;
}},500)

// var reload_btn = document.getElementsByClassName("super-navbar__actions")[0];
// reload_btn.addEventListener('click', reload2);
// console.log("prop-search.js")

// function reload2() {
//   window.location.reload();
// }


// #endregion　



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 教室 or 講師　DBのフィルタリング処理　＋DBの配列処理
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// page_listのデータ取得。
 var page_list_db = document.querySelectorAll(".notion-collection-table")[0];
 var page_list ={};
 var headers0 = page_list_db.querySelectorAll("thead th");
 var headers = []
  headers0.forEach(element =>{
    headers.push(element.innerHTML)
    page_list[element.innerHTML] =[];
  })
  console.log(headers);
var rowdatas = page_list_db.querySelectorAll("tbody tr");
  rowdatas.forEach(element =>{
    datas = element.querySelectorAll("td");
      for (let i =0 ; i< datas.length; i++) {
        // データがない場合の処理
        if(datas[i].querySelectorAll("span")[0] ==null){
          var data= null
        }else{
        // 二重スパンの場合
          var data= datas[i].querySelectorAll("span span")[0].innerHTML;
        } 
        // 配列にデータを追加
        page_list[headers[i]].push(data);
      }
  })
// ここまでで page_list["カラム名"]["行数"]でデータ取得可能。

// page_listのページ名にリンクを挿入
var page_list_as = page_list_db.querySelectorAll("tbody tr a");
  page_list_as.forEach((element,index) =>{
    element.style.display="none"
    var replace_a = document.createElement("a");
    replace_a.innerHTML= page_list["名前"][index]
    replace_a.setAttribute("href","https://jukuspot.com/"+page_list["URL"][index].replace(/^.*\//,""));
    element.after(replace_a);
  })

// page_listの→OFFを非表示に
var rowdatas = page_list_db.querySelectorAll("tbody tr");
var OFF_number = headers.indexOf("→OFF");
rowdatas.forEach(element =>{
  datas = element.querySelectorAll("td");
    for (let i =OFF_number ; i< datas.length; i++) {
      datas[i].style.display="none"
    }
})
for (let i =OFF_number ; i< datas.length; i++) {
  headers0[i].style.display="none"
}

// #region　DBの一つ目＝ページリストをSP用に複製。
var page_list_pc = document.getElementsByClassName("notion-collection")[0];
page_list_pc.setAttribute("id","page_list_pc");
var page_list_sp = page_list_pc.cloneNode(true);
page_list_sp.setAttribute("id","page_list_sp")
var notion_header = document.getElementsByClassName("super-navbar")[0];
notion_header.after(page_list_sp);

page_list_sp.setAttribute("id","tbc-list");
page_list_sp.style["z-index"] = "999";
page_list_sp.style["position"] = "fixed";
page_list_sp.style["top"] = "51px";
// #endregion

// #region SP用ページリスト表示ボタンを作成。
let page_list_btn = document.createElement("button");
page_list_btn.innerHTML = "ページ一覧";page_list_btn.setAttribute("id","tbc-btn");
page_list_btn.style.backgroundColor="#17837c";page_list_btn.style.color="white";
page_list_btn.style.borderRadius="5px";page_list_btn.style.padding="3px 12px";
page_list_btn.style.fontSize="14px";
var header_reload = document.getElementsByClassName("super-navbar__actions")[0];
header_reload.after(page_list_btn);
header_reload.remove();
// SP用ページリスト表示ボタンタップ時の設定
page_list_btn.addEventListener('click', page_list_view);
function page_list_view() {
    page_list_sp.classList.toggle('active');
    page_list_btn.classList.toggle('active');
}
// #endregion

// page_listを表示してあげる
document.querySelectorAll(".notion-column-list .notion-column .notion-collection:first-child")[0].style.display="block";



  












//リストページの一覧取得
var targets = ["教室シフト管理リスト","教室勤怠確認リスト","教室講師確認リスト","教室連絡確認リスト","講師シフト確定リスト","講師勤怠確認リスト","講師教室確認リスト","講師連絡確認リスト"];

if(targets.includes(prop_object["ページ表示名"])){

// page_listの→OFFを非表示に
var rowdatas = document.querySelectorAll(".notion-collection-table")[2].querySelectorAll("tbody tr");
var headers0 = document.querySelectorAll(".notion-collection-table")[2].querySelectorAll("thead th");
var headers = []
 headers0.forEach(element =>{
   headers.push(element.innerHTML)
   page_list[element.innerHTML] =[];
 })
 console.log(headers);

var OFF_number = headers.indexOf("→OFF");
rowdatas.forEach(element =>{
  datas = element.querySelectorAll("td");
    for (let i =OFF_number ; i< datas.length; i++) {
      datas[i].style.display="none"
    }
})
for (let i =OFF_number ; i< datas.length; i++) {
  headers0[i].style.display="none"
}

}









//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// プログレスバーの設定
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region　プログレスバーの設定

if(document.getElementById("スポットバイトの流れ")!=null){
  var progress_wrapper =document.createElement("div");
  progress_wrapper.setAttribute("id","progress-wrapper")
  document.getElementById("スポットバイトの流れ").after(progress_wrapper);
  document.getElementById("progress-wrapper").innerHTML=''+
  '<ul class="progressbar">'+
  '<li id="li-schedule" class="">ｽｹｼﾞｭｰﾙ<br>提出</li>'+
    '<li id="li-request" class="">シフト<br>ﾘｸｴｽﾄ</li>'+
    '<li id="li-confirm" class="">シフト<br>確定</li>'+
    '<li id="li-attendance" class="">勤務<br>報告</li>'+
    '<li id="li-payment" class="">給与<br>振込</li>'+
  '</ul>';
  
  var targets = ["講師スケジュール提出"];
  if(targets.includes(prop_object["ページ表示名"])){
    document.getElementsByClassName("progressbar")[0].style.display="flex";
    document.getElementById('li-schedule').setAttribute("class","active");
  }
  var targets = ["教室シフト管理リスト","教室シフト管理"];
  if(targets.includes(prop_object["ページ表示名"])){
    document.getElementsByClassName("progressbar")[0].style.display="flex";
    document.getElementById('li-schedule').setAttribute("class","complete");
    document.getElementById('li-request').setAttribute("class","active");
  }
  var targets = ["講師シフト確定リスト","講師シフト確定"];
  if(targets.includes(prop_object["ページ表示名"])){
    document.getElementsByClassName("progressbar")[0].style.display="flex";
    document.getElementById('li-schedule').setAttribute("class","complete");
    document.getElementById('li-request').setAttribute("class","complete");
    document.getElementById('li-confirm').setAttribute("class","active");
  }
  var targets = ["教室トップページ","教室勤怠確認リスト","教室勤怠確認","講師トップページ","講師勤怠確認リスト","講師勤怠確認"];
  if(targets.includes(prop_object["ページ表示名"])){
    document.getElementsByClassName("progressbar")[0].style.display="flex";
    document.getElementById('li-schedule').setAttribute("class","complete");
    document.getElementById('li-request').setAttribute("class","complete");
    document.getElementById('li-confirm').setAttribute("class","complete");
    document.getElementById('li-attendance').setAttribute("class","active");
  }
  }


// #endregion













}