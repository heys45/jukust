
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



document.querySelectorAll(".notion-callout__content span")[0].style.display="none";
document.getElementsByClassName("notion-callout__content")[0].innerHTML=document.getElementsByClassName("notion-header__title")[0].innerHTML;
document.getElementsByClassName("notion-callout__content")[0].style.overflow="none";


var log_box =document.createElement("div");
log_box.innerHTML='メッセージのエリア';
log_box.style.border="solid 2px #555555";
log_box.style.height="calc(100% - 300px)";
log_box.style.padding="10px 0";
var area = document.getElementsByClassName("notion-callout")[0];
area.style.backgroundColor="#33A614"
area.style.color="white"
area.after(log_box);




var message_box =document.createElement("div");
message_box.innerHTML=''+
'<form id="message_form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdcJDQfvYup36rYH80HUvZ3OB_sq2kjzINjUY4FHZBsbNr7nw/formResponse" target="hidden_iframe3">'+
'<input type="text" name="entry.1194399256" id="teaid">'+
'<input type="text" name="entry.1896770762" id="schid">'+
'<input type="text" name="entry.1711080326" id="ouboid">'+
'<textarea name="entry.2088308727" class="message"></textarea>'+
'</form>';
console.log(document.getElementsByClassName("notion-callout")[1]);
var area = document.getElementsByClassName("notion-callout")[1];
document.getElementsByClassName("notion-callout__content")[1].remove()
area.style.backgroundColor="#33A614"
area.prepend(message_box);

document.getElementById("schid").value = prop_object["教室ID"];
document.getElementById("ouboid").value = prop_object["応募ID"];

const death_prop = document.querySelectorAll("#schid,#ouboid,#teaid,.fd,.adj,.fs");
death_prop.forEach(element=>{  element.style.display = 'none'; });
document.getElementById("message_form")[0].style.width="100%";
document.getElementsByClassName("message")[0].style.width="100%";
document.getElementsByClassName("message")[0].style.resize="vertical";
document.getElementsByClassName("message")[0].style.padding="0 8px 0 0";



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベース個別処理準備　　メッセージDBの情報を配列化　
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

var check_area = document.querySelectorAll(".notion-collection")[2];
check_area.style.display="none";

// #region 共通処理部分
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
  var message_db = make_db;
console.log(message_db);}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベース個別処理　メッセージDBからメッセージデータ出力
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region 
if(check_area.getElementsByClassName("notion-collection-table")[0] !=null){
  var check_db =check_area.getElementsByClassName("notion-collection-table") [0];
  var datas = check_db.querySelectorAll("tbody tr");
  datas.forEach((element,index) =>{
    console.log(message_db["応募ID"][index]!=prop_object["応募ID"])
      if(message_db["応募ID"][index] ==prop_object["応募ID"]){

        var message_data_box = document.createElement("div");
        message_data_box.style.display="flex";
        message_data_box.style.padding="10px";
        message_data_box.style.flexWrap="wrap"
        var message_data1= document.createElement("span");
        message_data1.innerHTML=message_db["送信時間"][index]+"｜"+message_db["教室ID"][index]+message_db["会員ID"][index];
        message_data1.style.display="inline-box";
        message_data1.style.width="80%";
        message_data1.style.margin="3px 15px"
        message_data_box.appendChild(message_data1);
        var message_data2= document.createElement("div");
        message_data2.innerHTML=message_db["メッセージ"][index]
        message_data2.style.width="80%"
        message_data2.style.margin="3px 15px"
        message_data2.style.padding="5px 5px"
        message_data2.style.backgroundColor="#cccccc";
        message_data2.style.borderRadius="5px"
        message_data_box.appendChild(message_data2);

        if(message_db["教室ID"][index]!=null){
          message_data_box.style.justifyContent="flex-end"
          message_data2.style.backgroundColor="#aaaaaa";
        }
        log_box.appendChild(message_data_box);
      }
  });
}

// #endregion 


}}





