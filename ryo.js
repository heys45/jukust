
// id属性で要素を取得
function posichange(){
var shiftrec = document.getElementsByClassName('notion-collection')[0];
console.log(shiftrec);
var form1 = document.getElementById("form11")
console.log(form1);
// 指定した要素の前に挿入
shiftrec.after(form1);}
window.addEventListener('load',posichange);


// フォームプロパティ表示設定
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

// フォーム初期値設定
const pageproperty = document.getElementsByClassName('notion-page__properties')[0];
var span2 = pageproperty.getElementsByTagName("span")[1];
var span3 = span2.getElementsByTagName("span")[0].innerHTML;
console.log(span3);
document.getElementById("schid").value =span3;




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



