
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
    var prop_value = null;
        if(prop_wrap[i].querySelectorAll("checked")[0] !=null){
            prop_value = 1;
        }
        else if(prop_wrap[i].getElementsByTagName("span")[1] !=null){
        if(prop_wrap[i].querySelectorAll("span span")[0]){
            prop_value = prop_wrap[i].querySelectorAll("span span")[0].innerHTML;
        }else{
            prop_value = prop_wrap[i].getElementsByTagName("span")[1].innerHTML;
        }
    }
    prop_object[prop_name] = prop_value;
}
console.log("プロパティリスト");
console.log(prop_object);

// テキストブロックの連想配列を作成する。
var qblock_object = {};
const qblock_wrap = document.querySelectorAll('.notion-quote');
for (let i=0; i< qblock_wrap.length; i++){
    const qblock_name = qblock_wrap[i].getElementsByTagName("strong")[0].innerHTML;
    qblock_wrap[i].setAttribute("id",qblock_name);
    const qblock_value = document.getElementById(qblock_name);

    qblock_object[qblock_name] = qblock_value;
}
console.log("quoteリスト");
console.log(qblock_object);




// // ヘッダーの設定

//   var logo = document.getElementById("header-logo");
//   document.getElementsByClassName("notion-header__title")[0].before(logo);

var header_title = document.getElementsByClassName("notion-header__title")[0];
document.getElementsByClassName("super-navbar__logo")[0].after(header_title);

header_title.after(prop_object["会員ID"]);


let tbc_btn = document.createElement("button");
tbc_btn.innerHTML = "ページ一覧";
tbc_btn.setAttribute("id","tbc-btn");
var header_reload = document.getElementsByClassName("super-navbar__actions")[0];
header_reload.after(tbc_btn);

tbc_btn.addEventListener('click', tbc_view);
function tbc_view() {
    copy_tbc.classList.toggle('active');
    tbc_btn.classList.toggle('active');
}


var page_list = document.getElementsByClassName("notion-collection")[0];
var header = document.getElementsByClassName("super-navbar")[0];
var copy_tbc = page_list.cloneNode(true);
copy_tbc.setAttribute("id","tbc-list");
copy_tbc.style["z-index"] = "999";
copy_tbc.style["position"] = "fixed";
copy_tbc.style["top"] = "51px";
header.after(copy_tbc);

let sp_header = document.createElement("div");
sp_header.setAttribute("id","sp-header");
sp_header.style["z-index"] = "999";
sp_header.style["position"] = "fixed";
sp_header.style["top"] = "51px";
header.after(sp_header);

var copy_title = header_title.cloneNode(true);
copy_title.setAttribute("id","copy-title");
sp_header.appendChild(copy_title);
var copy_btn = reload_btn.cloneNode(true);
copy_btn.setAttribute("id","copy-btn");
sp_header.appendChild(copy_btn);





// // フッターの設定

// var footer = document.getElementsByTagName("footer")[0];
// var main_content = document.getElementsByClassName("super-content")[0];
// main_content.after(footer) ;
// footer.style.display = "block";


