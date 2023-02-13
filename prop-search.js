var prop_object = {};
var qblock_object = {};


//プロパティの連想配列を作成する。
// var prop_object = {};
const prop_wrap = document.querySelectorAll('.notion-page__property');

for (let i=0; i< prop_wrap.length; i++){
    const prop_name = prop_wrap[i].getElementsByTagName("span")[0].innerHTML;
    const prop_value = prop_wrap[i].getElementsByTagName("span")[1].getElementsByTagName("span")[0].innerHTML;
    console.log(prop_name); 
    console.log(prop_value); 
    prop_object[prop_name] = prop_value;
}
console.log(prop_object);

// prop_wrap.forEach(element => {
//     const prop_name = element.getElementsByTagName("span")[0].innerHTML;
//     const prop_value = element.getElementsByTagName("span")[1].getElementsByTagName("span")[0].innerHTML;
//     console.log(prop_name); 
//     console.log(prop_value); 
//     prop_object[prop_name] = prop_value;
// });
// console.log(prop_object);

// テキストブロックの連想配列を作成する。
// var qblock_object = {};
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

var testw = "提出スケジュールの現状ステータス"; 
testa = document.getElementById(testw);
console.log(testa);


// qblock_wrap.forEach(element => {
//     const qblock_name = element.getElementsByTagName("strong")[0].innerHTML;
//     element.setAttribute("id",qblock_name);
//     const qblock_value = document.getElementById(qblock_name);
//     console.log(qblock_name); 
//     console.log(qblock_value); 
//     qblock_object[qblock_name] = qblock_value;
//     var test = document.getElementById("シフト申請はこちら");
//     console.log(test);
// });
// console.log(qblock_object);


///ページ名によって読み込むHTML要素とJSを切り替える
///ページ名によって読み込むHTML要素とJSを切り替える


// DBの表示設定
// DBの表示設定






// フォームの表示設定
// フォームの表示設定



// フォーム共通の処理
function viewChange(){
    select_form = document.getElementById('select-term-button').value;
    console.log(select_form);
    if(select_form == '１週間分'){
        document.getElementById('schedule-form1').style.display = "";
        document.getElementById('schedule-form2').style.display = "none";
        document.getElementById('schedule-form3').style.display = "none";
    }else if(select_form == '2週間分'){
        document.getElementById('schedule-form1').style.display = "";
        document.getElementById('schedule-form2').style.display = "";
        document.getElementById('schedule-form3').style.display = "none";
    }
    else if(select_form == '1ヶ月分'){
        document.getElementById('schedule-form1').style.display = "";
        document.getElementById('schedule-form2').style.display = "";
        document.getElementById('schedule-form3').style.display = "";
    }
}

var trigger = document.getElementById('select-term-button');
trigger.onchange=viewChange;



// フォーム＝スケジュールの時


// フォーム＝シフトの時

