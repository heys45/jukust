
setTimeout(timefunc,300);

function timefunc(){
if(prop_object["ページ表示名"]==="講師プロフィール"){



  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // テーブル埋め
  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // 2行テーブルのデータ通常挿入
  var row2_table = document.querySelectorAll("#table-1,#table-2,#table-3,#table-4,#table-10,#table-11");
  row2_table.forEach(element=>{
    var header = element.querySelectorAll("tr")[0].querySelectorAll("td");
    var target = element.querySelectorAll("tr")[1].querySelectorAll("td");
    for (let index = 0; index < header.length; index++) {
      if(header[index].querySelectorAll("span")[0] !=null){ //空ヘッダーエラー処理
        var key = header[index].querySelectorAll("span")[0].querySelectorAll("span")[0].innerHTML;
          if(prop_object[key] !=null){ //空バリュー（notion_prop）エラー処理
            var value =prop_object[key];
            console.log(value);
            var a_target =target[index].querySelectorAll("span")[0].querySelectorAll("span")[0];
            a_target.textContent = value;
          }//空バリュー（notion_prop）エラー処理
        var key = key.replace(/（.*?）/,""); 
        console.log(key);
        header[index].querySelectorAll("span")[0].querySelectorAll("span")[0].textContent = key;
      } //空ヘッダーエラー処理
    }
  });

    // 2行テーブルのデータ挿入
    var row2_table = document.querySelectorAll("#table-5,#table-6,#table-7,#table-8,#table-9");
    row2_table.forEach(element=>{
      var header = element.querySelectorAll("tr")[0].querySelectorAll("td");
      var target = element.querySelectorAll("tr")[1].querySelectorAll("td");
      for (let index = 0; index < header.length; index++) {
        if(header[index].querySelectorAll("span")[0] !=null){ //空ヘッダーエラー処理
          var key = header[index].querySelectorAll("span")[0].querySelectorAll("span")[0].innerHTML;
            if(prop_object[key] !=null){ //空バリュー（notion_prop）エラー処理
              var value =prop_object[key];
              console.log(value);
              var value = value.replace(/1/,"✅ 指導可"); 
              var value = value.replace(/0/,"-"); 
              var a_target =target[index].querySelectorAll("span")[0].querySelectorAll("span")[0];
              a_target.textContent = value;
            }//空バリュー（notion_prop）エラー処理
          var key = key.replace(/（.*?）/,""); 
          console.log(key);
          header[index].querySelectorAll("span")[0].querySelectorAll("span")[0].textContent = key;
        } //空ヘッダーエラー処理
      }
    });

  // テーブルサイズなど個別調整

  document.getElementById("table-10").style.width="100%";
  document.getElementById("table-11").style.width="100%";


  var slide_guide = document.createElement("p");
  slide_guide.innerHTML = "表を左にスライドしてください";
  slide_guide.style.color="red";
  document.getElementById("ユーザープロフィール").after(slide_guide);
  document.getElementById("指導可能科目").after(slide_guide);







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



    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // フォーム提出期間変更ボタンの設定
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // const select_term = document.getElementsByClassName("select-term")[0];
    // select_term.style.display = 'block';
    // function viewChange(){
    //   var select_form = document.getElementById('select-term-button').value;
    //   console.log(select_form);
    //   if(select_form == '１週間分'){
    //       document.getElementById('schedule-form1').style.display = "";
    //       document.getElementById('schedule-form2').style.display = "none";
    //       document.getElementById('schedule-form3').style.display = "none";
    //   }else if(select_form == '2週間分'){
    //       document.getElementById('schedule-form1').style.display = "";
    //       document.getElementById('schedule-form2').style.display = "";
    //       document.getElementById('schedule-form3').style.display = "none";
    //   }
    //   else if(select_form == '1ヶ月分'){
    //       document.getElementById('schedule-form1').style.display = "";
    //       document.getElementById('schedule-form2').style.display = "";
    //       document.getElementById('schedule-form3').style.display = "";
    //   }
    // }
    // var trigger = document.getElementById('select-term-button');
    // trigger.onchange=viewChange;




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


}}





