
var old_url = window.location.href;
var url_interval = setInterval(()=>{
var new_url = window.location.href;
if (old_url !=new_url){
    window.location.href = window.location.href;

    old_url = new_url;
}},500)

var reload_btn = document.getElementsByClassName("super-navbar__actions")[0];
reload_btn.addEventListener('click', reload2);

function reload2() {
  window.location.reload();
  }


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//プロパティの連想配列を作成する。
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var prop_object = {};
const prop_wrap = document.querySelectorAll('.notion-page__property');
for (let i=0; i< prop_wrap.length; i++){
    const prop_name = prop_wrap[i].getElementsByTagName("span")[0].innerHTML;
    var prop_value = null;
        if(prop_wrap[i].querySelectorAll(".checked")[0] !=null){
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

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// テキストブロックの連想配列を作成する。
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
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


