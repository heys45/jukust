
setTimeout(timefunc,300);

function timefunc(){
if(prop_object["ページ表示名"]==="教室連絡確認"){


// 使用するフォームの選択
const sh_form = document.getElementById("shift-form");
const sc_form = document.getElementById("schedule-form");
const wr_form = document.getElementById("wr-form");

sc_form.remove();
sh_form.remove();
wr_form.remove();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// DB表示設定代項目
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

var check_area = document.getElementById("割り当て講師の一覧").nextElementSibling.nextElementSibling;
// #region データベース個別処理
  if(check_area.getElementsByClassName("notion-collection-table")[0] !=null){
    var check_db =check_area.getElementsByClassName("notion-collection-table") [0];
    var make_db ={};
    var headers = check_db.querySelectorAll("thead th");
    headers.forEach(element =>{
      make_db[element.innerHTML]=[];
    });
    var datas = check_db.querySelectorAll("tbody tr");
    datas.forEach(element =>{
      var datas = element.querySelectorAll("td");
      for (let i = 0; i< datas.length; i++) {
        if(datas[i].querySelectorAll("span")[0] !=null){
          if(datas[i].querySelectorAll("span span")[0] !=null){
            var data = datas[i].querySelectorAll("span span")[0].innerHTML;}
          else{
            var data = datas[i].querySelectorAll("span")[0].innerHTML;}
        }else{var data=null;}
        make_db[headers[i].innerHTML].push(data);}
    });
    console.log(make_db);}
// #endregion
if(make_db !=null){
var message_db = make_db;}
console.log(message_db);

if(check_area.getElementsByClassName("notion-collection-table")[0] !=null){
  var check_db =check_area.getElementsByClassName("notion-collection-table") [0];
  var datas = check_db.querySelectorAll("tbody tr");
  datas.forEach(element =>{
    for (let i = 0; i< datas.length; i++) {
      if(message_db["教室ID"][index]!=prop_object["教室ID"]){
        element.style.display.none
      }
    }
  });
}







//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// DB表示設定代項目
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// ''+
// '<form id="schedule-form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdcJDQfvYup36rYH80HUvZ3OB_sq2kjzINjUY4FHZBsbNr7nw/formResponse" target="hidden_iframe3">'+
// '<input type="text" name="entry.1194399256" class="teaid">'+
// '<input type="text" name="entry.1896770762" class="schid">'+
// '<input type="text" name="entry.1711080326" class="ouboid">'+
// '<textarea name="entry.2088308727" class="message"></textarea>'+
// '</form>'


// フォーム初期値設定
// document.getElementById("teaid").value = prop_object["会員ID"];
document.getElementById("schid").value = prop_object["教室ID"];
document.getElementById("ouboid").value = prop_object["応募ID"];









}}





