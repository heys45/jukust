
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
console.log(prop_object);
console.log(prop_object);


