
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


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// メッセージヘッダーとメッセージ出力欄の作成
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region
document.querySelectorAll(".notion-callout__content span")[0].style.display="none";
document.getElementsByClassName("notion-callout__content")[0].innerHTML=document.getElementsByClassName("notion-header__title")[0].innerHTML;
document.getElementsByClassName("notion-callout__content")[0].style.overflow="none";


var log_box =document.createElement("div");
log_box.innerHTML='　過去のメッセージ';
log_box.style.border="solid 2px #555555";
log_box.style.height="calc(100% - 300px)";
log_box.style.padding="10px 0";
log_box.style.backgroundColor="#eeeeee";
log_box.style.overflowY="scroll";
var area = document.getElementsByClassName("notion-callout")[0];
area.style.backgroundColor="#33A614"
area.style.color="white"
area.after(log_box);
// #endregion


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// メッセージ入力エリアの作成
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region
var message_form =''+
'<form id="message_form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdcJDQfvYup36rYH80HUvZ3OB_sq2kjzINjUY4FHZBsbNr7nw/formResponse" target="hidden_iframe3">'+
'<input type="text" name="entry.1194399256" id="teaid">'+
'<input type="text" name="entry.1896770762" id="schid">'+
'<input type="text" name="entry.1711080326" id="ouboid">'+
'<textarea name="entry.2088308727" class="message"></textarea>'+
'</form>';
var area = document.getElementsByClassName("notion-callout")[1];
document.getElementsByClassName("notion-callout__content")[1].remove()
area.style.backgroundColor="#888888";
area.insertAdjacentHTML("afterbegin", message_form );

document.getElementById("schid").value = prop_object["教室ID"];
document.getElementById("ouboid").value = prop_object["応募ID"];

const death_prop = document.querySelectorAll("#schid,#ouboid,#teaid,.fd,.adj,.fs");
death_prop.forEach(element=>{  element.style.display = 'none'; });
document.getElementById("message_form").style.width="100%";
document.getElementsByClassName("message")[0].style.width="100%";
document.getElementsByClassName("message")[0].style.resize="vertical";
document.getElementsByClassName("message")[0].style.margin="0 35px 0 5px";
// #endregion
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// メッセージ入力エリアの後ろ作成
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region
var guide =document.createElement("p");
guide.innerHTML="＊メッセージの反映には2分ほどかかります。"
guide.style.color="white"
guide.style.padding="5px"

document.getElementById("message_form").appendChild(guide);

// #endregion


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 送信部分の作成
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region フォーム関連の共通設定
var submit_button = document.createElement("button");
submit_button.setAttribute("type","submit");
submit_button.setAttribute("form","message_form");
var button_area= document.getElementsByClassName("notion-callout__icon")[1];
console.log(button_area.children);
var button_icon=button_area.children ;
button_area.appendChild(submit_button);
submit_button.appendChild(button_icon);

// フォーム送信後の画面遷移の設定
var form_iframe = document.createElement("iframe");
form_iframe.setAttribute("name","hidden_iframe");
form_iframe.setAttribute("id","hidden_iframe");
form_iframe.style.display="none";
document.getElementById("message_form").appendChild(form_iframe);
document.getElementById("message_form").setAttribute("method","post");
document.getElementById("message_form").setAttribute("target","hidden_iframe");

submit_button.addEventListener('click',function(){
  document.getElementsByClassName("message")[0].innerHTML="";
});

// #endregion 



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
        message_data1.innerHTML=message_db["会員ID"][index]+"｜"+message_db["送信時間"][index];
        message_data1.style.display="inline-box";
        message_data1.style.width="80%";
        message_data1.style.margin="3px 15px"
        message_data_box.appendChild(message_data1);
        var message_data2= document.createElement("div");
        message_data2.innerHTML=message_db["メッセージ"][index]
        message_data2.style.width="80%"
        message_data2.style.margin="3px 15px"
        message_data2.style.padding="5px 5px"
        message_data2.style.backgroundColor="white";
        message_data2.style.borderRadius="5px"
        message_data_box.appendChild(message_data2);

        if(message_db["教室ID"][index]!=null){
          message_data1.innerHTML=message_db["教室ID"][index]+"｜"+message_db["送信時間"][index];
          message_data_box.style.justifyContent="flex-end"
          message_data2.style.backgroundColor="rgb(23, 131, 124)";
          message_data2.style.color="white";
        }
        log_box.appendChild(message_data_box);
      }
  });
}

// #endregion 


}}





