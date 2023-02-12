
// id属性で要素を取得
function posichange(){
var shiftrec = document.getElementsByClassName('notion-collection')[0];
console.log(shiftrec);
var form1 = document.getElementById("form11")
console.log(form1);
// 指定した要素の前に挿入
shiftrec.after(form1);}
window.addEventListener('load',posichange);


function shiftpage(){
  // シフト提出ページ表示設定
  if (document.URL.match(/shift-offer/)) {
  const adjs = document.querySelectorAll(".adj");
  adjs.forEach(function(adj){
  adj.style.display = 'none';
  });
  const status = document.querySelectorAll(".fs");
  status.forEach(function(state){
  state.style.display = 'none';
  });
  const formdays = document.querySelectorAll(".fd");
  formdays.forEach(function(formday){
  formday.style.display = 'none';
  });
  // シフト提出ページフォーム初期値
  const pageproperty = document.getElementsByClassName('notion-page__properties')[0];
  var span2 = pageproperty.getElementsByTagName("span")[1];
  var span3 = span2.getElementsByTagName("span")[0].innerHTML;
  console.log(span3);
  document.getElementById("schid").value =span3;
  }
}
window.addEventListener('load',shiftpage);




function viewChange(){
        id = document.getElementById('sample').value;
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








function dayset(){
//日付欄を一括取得し、今日を取得
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
}
window.addEventListener('load',dayset);




function timeaf(){
//日付欄を一括取得し、今日を取得
const timeafs = document.querySelectorAll('.hosoku');
//グループごとにidにプロパティ名を設定
timeafs.forEach(function(timeaf,index){
  timeaf.style.width = '300px';
  var datelabel = document.createElement("span");
  datelabel.textContent = "　備考・補足：";
  timeaf.before(datelabel);
});

const timeafss = document.querySelectorAll('.fs');
//グループごとにidにプロパティ名を設定
timeafss.forEach(function(timeaf,index){
  var datelabel = document.createElement("span");
  datelabel.textContent = "勤務希望時間：";
  timeaf.before(datelabel);
});

const timeafsss = document.querySelectorAll('.ft1');
//グループごとにidにプロパティ名を設定
timeafsss.forEach(function(timeaf,index){
  var datelabel = document.createElement("span");
  datelabel.textContent = "〜";
  timeaf.after(datelabel);
});




}
window.addEventListener('load',timeaf);








function optset(){
//開始時刻の設定
const formtime1s = document.querySelectorAll('.ft1');
var times = ["","8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"]
formtime1s.forEach(function(formtime1){
times.forEach(function(time){
  var option = document.createElement('option');
  option.value = time;
  option.textContent = time;
  formtime1.appendChild(option);
});
});
//終了時刻の設定
const formtime2s = document.querySelectorAll('.ft2');
var times = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"]
formtime2s.forEach(function(formtime2){
times.forEach(function(time){
  var option = document.createElement('option');
  option.value = time;
  option.textContent = time;
  formtime2.appendChild(option);
});
});
//開始調整時刻の設定
const adtime1s = document.querySelectorAll('.adft1');
var times = ["","8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"]
adtime1s.forEach(function(formtime1){
times.forEach(function(time){
  var option = document.createElement('option');
  option.value = time;
  option.textContent = time;
  formtime1.appendChild(option);
});
});
//終了調整時刻の設定
const adtime2s = document.querySelectorAll('.adft2');
var times = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"]
adtime2s.forEach(function(formtime2){
times.forEach(function(time){
  var option = document.createElement('option');
  option.value = time;
  option.textContent = time;
  formtime2.appendChild(option);
});
});






//開始時刻の設定
const formstatuses = document.querySelectorAll('.fs');
var times = ["講師回答前", "勤務確定", "勤務不可", "調整中"]
formstatuses.forEach(function(formstatus){
times.forEach(function(time){
  var option = document.createElement('option');
  option.value = time;
  option.textContent = time;
  console.log(option);
  formstatus.appendChild(option);
});
});

}
window.addEventListener('load',optset);







function hoge(){
//グループをまとめて取得して非表示
const groups = document.querySelectorAll('.notion-collection-group__section');
//グループごとにidにプロパティ名を設定
groups.forEach(function(group){
  console.log(group);
  var span = group.getElementsByTagName("span")[1].innerHTML;
  console.log(span);
  group.setAttribute("id",span);
});

//ページプロパティ取得
const pageproperty = document.getElementsByClassName('notion-page__properties')[0];
var span2 = pageproperty.getElementsByTagName("span")[1];
var span3 = span2.getElementsByTagName("span")[0].innerHTML;
console.log(span3);
//ページプロパティ該当グループのみ表示
document.getElementById(span3).style.display = "block" ;

}
window.onload =hoge;










function hoge(){

//グループをまとめて取得して非表示
const groups = document.querySelectorAll('.notion-collection-group__section');

//グループごとにidにプロパティ名を設定
groups.forEach(function(group){
  console.log(group);
  var span = group.getElementsByTagName("span")[1].innerHTML;
  console.log(span);
  group.setAttribute("id",span);
  
});

//ページプロパティ取得
const pageproperty = document.getElementsByClassName('notion-page__properties')[0];

var span2 = pageproperty.getElementsByTagName("span")[1];
var span3 = span2.getElementsByTagName("span")[0].innerHTML;
console.log(span3);

//ページプロパティ該当グループのみ表示
document.getElementById(span3).style.display = "block" ;

}
window.onload =hoge;
