
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


// フォーム＝スケジュールの時


// フォーム＝シフトの時





if(prop_object["ページ表示名"]==="スケジュール提出"){


// シフトフォームの表示
const sc_form = document.getElementById("schedule-form");
sc_form.style.display = 'inline-block';
const select_term = document.getElementsByClassName("select-term")[0];
select_term.style.display = 'inline-block';
}



//フォームのプルダウン値設定
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
var times = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"]
ft2s.forEach(function(ft2){
times.forEach(function(time){
  var option = document.createElement('option');
  option.textContent = time;
  ft2.appendChild(option);
});
});
//開始調整時刻の設定
const adt1s = document.querySelectorAll('.adft1');
var times = ["","8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"]
adt1s.forEach(function(ft1){
times.forEach(function(time){
  var option = document.createElement('option');
  option.textContent = time;
  ft1.appendChild(option);
});
});
//終了調整時刻の設定
const adt2s = document.querySelectorAll('.adft2');
var times = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"]
adt2s.forEach(function(ft2){
times.forEach(function(time){
  var option = document.createElement('option');
  option.textContent = time;
  ft2.appendChild(option);
});
});
//ステータス
const fss = document.querySelectorAll('.fs');
var sta = ["講師回答前", "勤務確定", "勤務不可", "調整中"]
fss.forEach(function(fs){
times.forEach(function(time){
  var option = document.createElement('option');
  option.textContent = time;
  fs.appendChild(option);
});
});


