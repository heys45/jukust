
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


var log_box =document.createElement("div");
log_box.innerHTML='メッセージのエリア';
log_box.style.border="solid 2px #555555"
var area = document.querySelectorAll(".notion-callout:first-child")[0];
area.appendChild(log_box);



var message_box =document.createElement("div");
message_box.innerHTML=''+
'<form id="schedule-form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdcJDQfvYup36rYH80HUvZ3OB_sq2kjzINjUY4FHZBsbNr7nw/formResponse" target="hidden_iframe3">'+
'<input type="text" name="entry.1194399256" class="teaid">'+
'<input type="text" name="entry.1896770762" class="schid">'+
'<input type="text" name="entry.1711080326" class="ouboid">'+
'<textarea name="entry.2088308727" class="message"></textarea>'+
'</form>';
var area = document.querySelectorAll(".notion-callout:nth-child(2)")[0];
area.appendchild(message_box);








//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// DB表示設定代項目
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  `<form id="schedule-form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdcJDQfvYup36rYH80HUvZ3OB_sq2kjzINjUY4FHZBsbNr7nw/formResponse" target="hidden_iframe3"><input type="text" name="entry.1194399256" class="teaid"><input type="text" name="entry.1896770762" class="schid"><input type="text" name="entry.1711080326" class="ouboid"><textarea name="entry.2088308727" class="message"></textarea></form>`


// フォーム初期値設定
// document.getElementById("teaid").value = prop_object["会員ID"];
document.getElementById("schid").value = prop_object["教室ID"];
document.getElementById("ouboid").value = prop_object["応募ID"];









}}





