
setTimeout(timefunc,300);

function timefunc(){
if(prop_object["ページ表示名"]==="教室よくある質問"){

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// テーブルの番号づけ
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

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
  // DB表示設定代項目
  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // 教室or講師IDによるDBフィルタ
  // 前提：データベースはグループ化しておく

  const groups = document.querySelectorAll('.notion-collection-group__section');
  groups.forEach(element =>{
      var group_id = element.getElementsByTagName("span")[1].innerHTML;
      element.classList.add("t"+ group_id);
  });

  var teacher_id = prop_object["会員ID"];
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
// フォーム表示設定大項目
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

const sh_form = document.getElementById("shift-form");
const sc_form = document.getElementById("schedule-form");
const wr_form = document.getElementById("wr-form");


var death_form = sc_form;         //ページによって変更する
death_form.remove();
var death_form = sh_form;         //ページによって変更する
death_form.remove();
var death_form = wr_form;         //ページによって変更する
death_form.remove();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベースの番号づけ
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

// //DB書き換え処理
// document.getElementById('db-3-1-3').innerHTML = "勤務可能<br>開始時間";
// document.getElementById('db-3-1-4').innerHTML = "勤務可能<br>終了時間";




}}





