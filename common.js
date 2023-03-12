setTimeout(timefunc,1000);
console.log("common.js")
alert( "ページ名のリンク変更テスト1246" );

// データベースの集合と
var dbs= document.querySelectorAll(".notion-collection");
var dbs_arrays =[];

function timefunc(){
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
  
}}