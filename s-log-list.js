setTimeout(timefunc,0);
function timefunc(){


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region　教室 or 講師共通処理　＊フィルタリング　ナビバー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 判定用リストの作成
var targets = ["教室トップページ","教室シフト管理リスト","教室勤怠確認リスト","教室講師確認リスト","教室連絡確認リスト","教室プロフィール","教室よくある質問","教室シフト管理","教室勤怠管理","教室講師確認","教室連絡確認"];

// 判定＋判定による処理
filter_prop ="null"
var pc_logo = document.createElement('img');
var sp_logo = document.createElement('img');
var header_text_color="#555555"; var header_text="講師用｜";
if(targets.includes(prop_object["ページ表示名"])){
  // 教室用のフィルター設定
  var filter_prop ="教室ID";
  // 教室用のロゴ設定
  pc_logo.src = 'https://heys45.github.io/jukust/logo2.png'; // 画像パス
  sp_logo.src = 'https://heys45.github.io/jukust/logo02.png'; // 画像パス
  document.getElementsByClassName("super-navbar")[0].style["background-color"]="#33A614";
  header_text_color="white"; header_text="教室用｜";
}else{
  // 講師用のフィルター設定
  var filter_prop ="会員ID";
  // ユーザー用のロゴ設定
  pc_logo.src = 'https://heys45.github.io/jukust/logo1.png'; // 画像パス
  sp_logo.src = 'https://heys45.github.io/jukust/logo01.png'; // 画像パス
}

// ロゴの表示設定
pc_logo.style.width="151px";pc_logo.setAttribute("id","pc_logo");pc_logo.style.height="32px";pc_logo.style.position="relative";
sp_logo.style.width="32px";sp_logo.setAttribute("id","sp_logo");sp_logo.style.height="32px";sp_logo.style.position="relative";
var img_area=  document.querySelectorAll(".super-navbar__logo-image")[0];
document.querySelectorAll(".super-navbar__logo-image span")[0].remove();
img_area.appendChild(pc_logo);
img_area.appendChild(sp_logo);

// DBのグループにグループ番号を表示（CSSで事前にフィルタリングしておく）
const dbgs = document.querySelectorAll('.notion-collection-group__section');
dbgs.forEach(element =>{
    var group_id = element.getElementsByTagName("span")[1].innerHTML;
    element.classList.add("dbg-"+ group_id);
});

// 指定したIDでDBのグループをフィルタリング
var dbg_class =".dbg-"+prop_object[ filter_prop];
var view_dbg = document.querySelectorAll(dbg_class);
view_dbg.forEach(element =>{element.style.display = "block" ;});
var remove_dbg = document.querySelectorAll(".notion-collection-group__section:not("+dbg_class+")");
remove_dbg.forEach(element =>{element.remove();});



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region　共通UIレスポンス設定
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

var header_info = document.createElement("span");
header_info.innerHTML=header_text+document.getElementsByClassName("notion-header__title")[0].innerHTML;
header_info.style.color=header_text_color;header_info.style.position="relative";header_info.style.zIndex="1000";
header_info.style.paddingBottom="2px";header_info.style.paddingLeft="10px";document.querySelectorAll(".super-navbar__logo-image")[0].style["align-items"]= "end";
img_area.appendChild(header_info);





// DBの一つ目＝ページリストをSP用に複製。
var page_list_pc = document.getElementsByClassName("notion-collection")[0];
page_list_pc.setAttribute("id","page_list_pc");
var page_list_sp = page_list_pc.cloneNode(true);
page_list_sp.setAttribute("id","page_list_sp")
var header = document.getElementsByClassName("super-navbar")[0];
header.after(page_list_sp);




// SP用ページリスト表示ボタンを作成。
let page_list_btn = document.createElement("button");
page_list_btn.innerHTML = "ページ一覧";
page_list_btn.setAttribute("id","tbc-btn");
var header_reload = document.getElementsByClassName("super-navbar__actions")[0];
header_reload.after(page_list_btn);

// SP用ページリスト表示ボタンタップ時の設定
page_list_btn.addEventListener('click', page_list_view);
function page_list_view() {
    page_list_sp.classList.toggle('active');
    page_list_btn.classList.toggle('active');
}


page_list_sp.setAttribute("id","tbc-list");
page_list_sp.style["z-index"] = "999";
page_list_sp.style["position"] = "fixed";
page_list_sp.style["top"] = "51px";
header.after(copy_tbc);



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #endregion
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region　プログレスバーの設定
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
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
    document.getElementById('li-confirm').setAttribute("class","complete");
    document.getElementById('li-attendance').setAttribute("class","active");
  }
  var targets = ["講師勤怠確認リスト","講師勤怠確認"];
  if(targets.includes(prop_object["ページ表示名"])){
    document.getElementsByClassName("progressbar")[0].style.display="flex";
    document.getElementById('li-schedule').setAttribute("class","complete");
    document.getElementById('li-request').setAttribute("class","complete");
    document.getElementById('li-confirm').setAttribute("class","complete");
    document.getElementById('li-attendance').setAttribute("class","active");
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

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #endregion
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // 使用するフォームの選択
  const sh_form = document.getElementById("shift-form");
  const sc_form = document.getElementById("schedule-form");
  const wr_form = document.getElementById("wr-form");

  sc_form.remove();
  sh_form.remove();
  wr_form.remove();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region　データベースの番号づけ
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

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #endregion　データベースの番号づけ
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


}


