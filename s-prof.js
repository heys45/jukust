
setTimeout(timefunc,300);

function timefunc(){
if(prop_object["ページ表示名"]==="教室プロフィール"){

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
  document.getElementById("table-7").classList.add("col-header,row-header");
  document.getElementById("table-8").classList.add("col-header,row-header");
  document.getElementById("table-9").classList.add("col-header,row-header");
  document.getElementById("table-10").style.width="100%";
  document.getElementById("table-11").style.width="100%";
  
  var slide_guide = document.createElement("p");
  slide_guide.textContent = "表を左にスライドしてください";
  slide_guide.style.color("red");
  
  document.getElementById("ユーザープロフィール").after(slide-guide);
  document.getElementById("指導可能科目").after(slide-guide);










  var top_position = document.getElementById("マイページへようこそ");
  var top_div =document.createElement("div");
  top_div.classList.add("top-content-wrapper");
  top_position.after(top_div);

  var top_span1 = document.createElement("span");
  top_span1.textContent = prop_object["講師名！"];
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


}}





