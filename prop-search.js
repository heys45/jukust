
//プロパティの連想配列を作成する。
var prop_object = {};
const prop_wrap = document.querySelectorAll('.notion-page__property');
prop_wrap.forEach(element => {
    const prop_name = element.getElementsByTagName("span")[0].innerHTML;
    const prop_value = element.getElementsByTagName("span")[1].getElementsByTagName("span")[0].innerHTML;
    console.log(prop_name); 
    console.log(prop_value); 
    prop_object[prop_name] = prop_value;
});
console.log(prop_object);


///ページ名によって読み込むHTML要素とJSを切り替える


if(prop_object["ページ表示名"]==="スケジュール提出"){
// シフトフォームの表示
const sc_form = document.getElementById("schedule-form");
sc_form.style.display = 'inline-block';
const select_term = document.getElementsByClassName("select-term")[0];
select_term.style.display = 'inline-block';
}