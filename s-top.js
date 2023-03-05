setTimeout(timefunc,300);
function timefunc(){
if(prop_object["ページ表示名"]==="教室トップページ"){



var topguide =document.getElementById("スポットバイトへようこそ！").nextSibling.nextSibling;

topguide.innerHTML="教室用"+prop_object["教室名"];
topguide.style.fontWeight="bolder";


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォーム表示設定代項目　3分
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // 使用するフォームの選択
  const sh_form = document.getElementById("shift-form");
  const sc_form = document.getElementById("schedule-form");
  const wr_form = document.getElementById("wr-form");

  sc_form.remove();        //ページによって変更する
  sh_form.remove();
  wr_form.remove();



  document.getElementsByClassName("notion-image")[0].style.maxWidth="400px";



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// DB表示設定代項目
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// var check_areas=[];
// var check_area = document.getElementsByClassName("notion-collection")[2];
// check_areas.push(check_area)
// var check_area = document.getElementsByClassName("notion-collection")[3];
// check_areas.push(check_area)
// var check_area = document.getElementsByClassName("notion-collection")[4];
// check_areas.push(check_area)
// var check_area = document.getElementsByClassName("notion-collection")[5];
// check_areas.push(check_area)

// // #region データベース個別処理
// for (let index = 0; index < check_areas.length; index++) {

//   if(check_areas[index].getElementsByClassName("notion-collection-table")[0] !=null){
//     var check_db =check_areas[index].getElementsByClassName("notion-collection-table") [0];
//     var make_db ={};
//     var headers = check_db.querySelectorAll("thead th");
//     headers.forEach(element =>{
//       make_db[element.innerHTML]=[];
//     });
//     var datas = check_db.querySelectorAll("tbody tr");
//     datas.forEach(element =>{
//       var datas = element.querySelectorAll("td");
//       for (let i = 0; i< datas.length; i++) {
//         if(datas[i].querySelectorAll("span")[0] !=null){
//           if(datas[i].querySelectorAll("span span")[0] !=null){
//             var data = datas[i].querySelectorAll("span span")[0].innerHTML;}
//           else{
//             var data = datas[i].querySelectorAll("span")[0].innerHTML;}
//         }else{var data=null;}
//         make_db[headers[i].innerHTML].push(data);}
//     });
//     console.log(make_db);}
// // #endregion
// if(make_db !=null){
// var message_db = make_db;}
// console.log(message_db);

// if(check_areas[index].getElementsByClassName("notion-collection-table")[0] !=null){
//   var check_db =check_areas[index].getElementsByClassName("notion-collection-table") [0];
//   var datas = check_db.querySelectorAll("tbody tr");
//   datas.forEach((element,index) =>{
//     console.log(message_db["教室ID"][index]!=prop_object["教室ID"])
//       if(message_db["教室ID"][index]!=prop_object["教室ID"]){
//         element.style.display="none"
//       }
//   });
// }  
// }





var target = document.getElementById("ショートカットリスト").nextElementSibling;
target.getElementsByClassName("notion-column")[0].setAttribute("clsss","s-top-db");
target.getElementsByClassName("notion-column")[1].setAttribute("clsss","s-top-db");

var target = document.getElementById("ショートカットリスト").nextElementSibling.nextElementSibling;
target.getElementsByClassName("notion-column")[0].setAttribute("clsss","s-top-db");
target.getElementsByClassName("notion-column")[1].setAttribute("clsss","s-top-db");


}}








