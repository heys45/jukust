
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
///ページ名によって読み込むHTML要素とJSを切り替える


// DBの表示設定
// DBの表示設定


// 教室or講師IDによるDBフィルタ
// 前提：データベースはグループ化しておく

// const groups = document.querySelectorAll('.notion-collection-group__section');
// groups.forEach(element =>{
//     var id = element.getElementsByTagName("span")[1].innerHTML;
//     element.setAttribute("id",id);
// });
// console.log(prop_object["講師ID"]);
// var test = document.getElementById(prop_object["講師ID"]);
// console.log(test);
// test.style.display = "block" ;



// フォームの表示設定
// フォームの表示設定



// フォーム共通の処理
function viewChange(){
    id = document.getElementById('select-term-button').value;
    console.log(id);
    if(id == '１週間分'){
        document.getElementById('Box1').style.display = "";
        document.getElementById('Box2').style.display = "none";
        document.getElementById('Box3').style.display = "none";
    }else if(id == '2週間分'){
        document.getElementById('Box1').style.display = "";
        document.getElementById('Box2').style.display = "";
        document.getElementById('Box3').style.display = "none";
    }
    else if(id == '1ヶ月分'){
        document.getElementById('Box1').style.display = "";
        document.getElementById('Box2').style.display = "";
        document.getElementById('Box3').style.display = "";
    }
}

var trigger = document.getElementById('sample');
trigger.onchange=viewChange;



// フォーム＝スケジュールの時


// フォーム＝シフトの時





if(prop_object["ページ表示名"]==="スケジュール提出"){


// シフトフォームの表示
const sc_form = document.getElementById("schedule-form");
sc_form.style.display = 'block';
const select_term = document.getElementsByClassName("select-term")[0];
select_term.style.display = 'block';
}



//フォームのプルダウン値設定
//日付部分
const formdays = document.querySelectorAll('.fd');
//グループごとにidにプロパティ名を設定
formdays.forEach(function(formday,index){
  var date=new Date();
  date.setDate(date.getDate() + 1+index);
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var week = date.getDay();
  var day = date.getDate();
  var yobi= new Array("日","月","火","水","木","金","土");
  var date2 = year+"年"+month+"月"+day+"日 ("+yobi[week]+")";
  var date3 = year+"/"+month+"/"+day;
  var datelabel = document.createElement("p");
  formday.value = date3;
  datelabel.textContent = date2;
  formday.after(datelabel);
});





//開始時刻
const ft1s = document.querySelectorAll('.ft1');
var times = ["","8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"]
ft1s.forEach(function(ft1){
times.forEach(function(time){
  var option = document.createElement('option');
  option.textContent = time;
  ft1.appendChild(option);
});
});
//終了時刻
const ft2s = document.querySelectorAll('.ft2');
var times2 = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"]
ft2s.forEach(function(ft2){
times2.forEach(function(time){
  var option = document.createElement('option');
  option.textContent = time;
  ft2.appendChild(option);
});
});
//開始調整時刻の設定
const adt1s = document.querySelectorAll('.adft1');
adt1s.forEach(function(ft1){
times.forEach(function(time){
  var option = document.createElement('option');
  option.textContent = time;
  ft1.appendChild(option);
});
});
//終了調整時刻の設定
const adt2s = document.querySelectorAll('.adft2');
adt2s.forEach(function(ft2){
times2.forEach(function(time){
  var option = document.createElement('option');
  option.textContent = time;
  ft2.appendChild(option);
});
});
//ステータス
const fss = document.querySelectorAll('.fs');
var sta = ["講師回答前", "勤務確定", "勤務不可", "調整中"]
fss.forEach(function(fs){
sta.forEach(function(time){
  var option = document.createElement('option');
  option.textContent = time;
  fs.appendChild(option);
});
});
//ステータス
const fs2s = document.querySelectorAll('.fs2');
var sta2 = ["","終日勤務可能", "一部勤務可能", "勤務不可", "調整中"]
fs2s.forEach(function(fs){
sta2.forEach(function(time){
  var option = document.createElement('option');
  option.textContent = time;
  fs.appendChild(option);
});
});
