setTimeout(timefunc,400);

var db_areas= document.querySelectorAll(".notion-collection");
var dbs =[];

var targets = ["教室トップページ","教室シフト管理リスト","教室勤怠確認リスト","教室講師確認リスト","教室連絡確認リスト","教室プロフィール","教室よくある質問","教室シフト管理","教室勤怠管理","教室講師確認","教室連絡確認","講師トップページ","講師スケジュール提出","講師シフト確定リスト","講師勤怠確認リスト","講師教室確認リスト","講師連絡確認リスト","講師プロフィール","講師よくある質問","講師シフト確定","講師勤怠確認","講師教室確認","講師連絡確認"];

if(targets.includes(prop_object["ページ表示名"])){
function timefunc(){
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
if(targets.includes(prop_object["ページ表示名"])){
  // 教室用のロゴ設定
  pc_logo.src = 'https://heys45.github.io/jukust/logo2.png'; // 画像パス
  sp_logo.src = 'https://heys45.github.io/jukust/logo02.png'; // 画像パス
  document.getElementsByClassName("super-navbar")[0].style["background-color"]="#33A614";
  header_text_color="white"; header_text="｜";var header_text2=prop_object["名"];
}else{
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

// ページタイトルの表示設定
var header_info = document.createElement("span");
header_info.innerHTML=header_text+document.getElementsByClassName("notion-header__title")[0].innerHTML;
header_info.style.color=header_text_color;header_info.style.position="relative";header_info.style.zIndex="1000";
header_info.style.paddingBottom="3px";header_info.style.paddingLeft="10px";header_info.style.display="inline-block";
document.querySelectorAll(".super-navbar__logo-image")[0].style["display"]= "flex";
document.querySelectorAll(".super-navbar__logo-image")[0].style["align-items"]= "end";
img_area.appendChild(header_info);


// #endregion　



}}