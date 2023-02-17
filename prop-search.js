
var old_url = window.location.href;
var url_interval = setInterval(()=>{
var new_url = window.location.href;
if (old_url !=new_url){
    window.location.reload();

    old_url = new_url;
}},1000)

var reload_btn = document.getElementsByClassName("super-navbar__actions")[0];
reload_btn.addEventListener('click', reload2);
function reload2() {
  window.location.reload();
  }



//プロパティの連想配列を作成する。
var prop_object = {};
const prop_wrap = document.querySelectorAll('.notion-page__property');
for (let i=0; i< prop_wrap.length; i++){
    const prop_name = prop_wrap[i].getElementsByTagName("span")[0].innerHTML;
    const prop_value = prop_wrap[i].getElementsByTagName("span")[1].getElementsByTagName("span")[0].innerHTML;
    console.log(prop_name); 
    console.log(prop_value); 
    prop_object[prop_name] = prop_value;
}
console.log(prop_object);

// テキストブロックの連想配列を作成する。
var qblock_object = {};
const qblock_wrap = document.querySelectorAll('.notion-quote');
for (let i=0; i< qblock_wrap.length; i++){
    const qblock_name = qblock_wrap[i].getElementsByTagName("strong")[0].innerHTML;
    qblock_wrap[i].setAttribute("id",qblock_name);
    const qblock_value = document.getElementById(qblock_name);
    console.log(qblock_name); 
    console.log(qblock_value); 
    qblock_object[qblock_name] = qblock_value;
}
console.log(qblock_object);




// // ヘッダーの設定

//   var logo = document.getElementById("header-logo");
//   document.getElementsByClassName("notion-header__title")[0].before(logo);

var header_title = document.getElementsByClassName("notion-header__title")[0];
document.getElementsByClassName("super-navbar__logo")[0].after(header_title);



let tbc_btn = document.createElement("button");
tbc_btn.innerHTML = "ページ一覧";
tbc_btn.setAttribute("id","tbc_btn")
var header_reload = document.getElementsByClassName("super-navbar__actions")[0];
header_reload.after(tbc_btn);

tbc_btn.addEventListener('click', tbc_view);
function tbc_view() {
    copy_tbc.style.display = "block";
  }


var header_title = document.getElementsByClassName("notion-collection")[0];
var header = document.getElementsByClassName("super-navbar")[0];
var copy_tbc = header_title.cloneNode(true);
copy_tbc.style.display = "none";
copy_tbc.style["z-index"] = "999";
copy_tbc.style["position"] = "fixed";
copy_tbc.style["top"] = "51px";

header.after(copy_tbc);










// // フッターの設定

// var footer = document.getElementsByTagName("footer")[0];
// var main_content = document.getElementsByClassName("super-content")[0];
// main_content.after(footer) ;
// footer.style.display = "block";


