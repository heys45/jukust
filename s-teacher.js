

setTimeout(timefunc,500);

function timefunc(){
if(prop_object["ページ表示名"]==="教室講師確認"){


  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // テーブル埋め
  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // 2行テーブルのデータ通常挿入
  var row2_table = document.querySelectorAll(".notion-table");
  row2_table.forEach(element=>{
    var header = element.querySelectorAll("tr")[0].querySelectorAll("td");
    var target = element.querySelectorAll("tr")[1].querySelectorAll("td");
    for (let index = 0; index < header.length; index++) {
      console.log(header[index].querySelectorAll("span")[0]);
      if(header[index].querySelectorAll("span")[0] !=null){ //空ヘッダーエラー処理
        var key = header[index].querySelectorAll("span")[0].querySelectorAll("span")[0].innerHTML;



        console.log(prop_object[key]);

          if(prop_object[key] !=null){ //空バリュー（notion_prop）エラー処理
            var value =prop_object[key];
            console.log(value);
            var a_target =target[index].querySelectorAll("span")[0].querySelectorAll("span")[0];
            a_target.textContent = value;
          }//空バリュー（notion_prop）エラー処理

          if(key=="名前"){
            var a_target =target[index].querySelectorAll("span")[0].querySelectorAll("span")[0];
            a_target.textContent = prop_object["姓"]+ prop_object["名"]
          }
          if(key=="フリガナ"){
            var a_target =target[index].querySelectorAll("span")[0].querySelectorAll("span")[0];
            a_target.textContent = prop_object["姓（フリガナ）"]+ prop_object["名（フリガナ）"]
          }
          if(key=="携帯電話番号"){
            var a_target =target[index].querySelectorAll("span")[0].querySelectorAll("span")[0];
            a_target.textContent = prop_object["電話番号"]
          }




        var key = key.replace(/（.*?）/,""); 
        console.log(key);
        header[index].querySelectorAll("span")[0].querySelectorAll("span")[0].textContent = key;
      } //空ヘッダーエラー処理
    }
  });



  // テーブルサイズなど個別調整

  document.querySelectorAll(".notion-table")[10].style.width="100%";
  document.querySelectorAll(".notion-table")[11].style.width="100%";


  // var slide_guide = document.createElement("p");
  // slide_guide.innerHTML = "表を左にスライドしてください";
  // slide_guide.style.color="red";
  // document.getElementById("ユーザープロフィール").after(slide_guide);
  // document.getElementById("指導可能科目").after(slide_guide);




}}
