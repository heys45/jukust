
var old_url = window.location.href;
var url_interval = setInterval(()=>{
var new_url = window.location.href;
if (old_url !=new_url){

    window.location.reload();

    old_url = new_url;
}},1000)

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




// ヘッダーの設定

  var logo = document.getElementById("header-logo");
  document.getElementsByClassName("notion-header__title")[0].before(logo);



// フッターの設定

var footer = document.getElementsByTagName("footer")[0];
var main_content = document.getElementsByClassName("super-content")[0];
main_content.after(footer) ;
footer.style.display = "block";


