setTimeout(timefunc,300);
function timefunc(){


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region　教室 or 講師共通処理　＊フィルタリング　ナビバー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 判定用リストの作成
var targets = ["教室トップページ","教室シフト管理リスト","教室勤怠確認リスト","教室講師確認リスト","教室連絡確認リスト","教室プロフィール","教室よくある質問","教室シフト管理","教室勤怠管理","教室講師確認","教室連絡確認"];

// 判定＋判定による処理
filter_prop ="null"
if(targets.includes(prop_object["ページ表示名"])){
  document.getElementsByClassName("super-navbar")[0].style["background-color"]="green";
  var filter_prop ="教室ID";
}else{
  var filter_prop ="会員ID";
}

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


