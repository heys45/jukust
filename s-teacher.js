
setTimeout(timefunc,500);

function timefunc(){
if(prop_object["ページ表示名"]==="教室講師確認"){

  console.assertlog("ピンチ");


  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // テーブル埋め
  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // 2行テーブルのデータ通常挿入
  var row2_table = document.querySelectorAll("#table-1,#table-2,#table-3,#table-4,#table-10,#table-11");
  row2_table.forEach(element=>{
    var header = element.querySelectorAll("tr")[0].querySelectorAll("td");
    var target = element.querySelectorAll("tr")[1].querySelectorAll("td");
    for (let index = 0; index < header.length; index++) {
      console.log(header[index].querySelectorAll("span")[0]);
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

  // document.getElementById("table-10").style.width="100%";
  // document.getElementById("table-11").style.width="100%";


  var slide_guide = document.createElement("p");
  slide_guide.innerHTML = "表を左にスライドしてください";
  slide_guide.style.color="red";
  document.getElementById("ユーザープロフィール").after(slide_guide);
  document.getElementById("指導可能科目").after(slide_guide);




}}
