setTimeout(timefunc,300);
function timefunc(){
if(prop_object["ページ表示名"]==="教室シフト管理"){

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォーム作成用の　日付ラ作成 　　何もしなくてOK
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region 【共通】スケ提出とシフト管理は同じ　直近30日のフォーム用意
const formdate =new Date();
var days = [];var days2 = [];
for (let index = 0; index < 30; index++) {
  formdate.setDate(formdate.getDate() + 1);
  var year = formdate.getFullYear();
  var month = formdate.getMonth()+1;
  var week = formdate.getDay();
  var day = formdate.getDate();
  var yobi= new Array("日","月","火","水","木","金","土");
  var key = year+"/"+month+"/"+day;//+"("+yobi[week]+")"
  var key2 = month+"月"+day+"日("+yobi[week]+")";
  days.push(key);  days2.push(key2);
}
// #endregion

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// スケジュールDBの情報取得   sc_list
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region
// sc_listのデータ取得。
var sc_list_db = document.querySelectorAll(".notion-collection-table")[1];
var sc_list ={};
var headers0 = sc_list_db.querySelectorAll("thead th");
var headers = []
 headers0.forEach(element =>{
   headers.push(element.innerHTML)
   sc_list[element.innerHTML] =[];
 })
 console.log(headers);
var rowdatas = sc_list_db.querySelectorAll("tbody tr");
 rowdatas.forEach(element =>{
   datas = element.querySelectorAll("td");
     for (let i =0 ; i< datas.length; i++) {
       // データがない場合の処理
       if(datas[i].querySelectorAll("span")[0] ==null){
         var data= null
       }else if(datas[i].querySelectorAll("span span")[0] ==null){
        var data= datas[i].querySelectorAll("span")[0].innerHTML;
       }else{
       // 二重スパンの場合
         var data= datas[i].querySelectorAll("span span")[0].innerHTML;
       }
       // 配列にデータを追加
       sc_list[headers[i]].push(data);
 }})
 console.log(sc_list);
 // ここまでで page_list["カラム名"]["行数"]でデータ取得可能。


//#endregion

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// シフトDBの情報取得  sf_list
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region
// sf_listのデータ取得。
var sf_list_db = document.querySelectorAll(".notion-collection-table")[2];
var sf_list ={};
var headers0 = sf_list_db.querySelectorAll("thead th");
var headers = []
 headers0.forEach(element =>{
   headers.push(element.innerHTML)
   sf_list[element.innerHTML] =[];
 })
 console.log(headers);
var rowdatas = sf_list_db.querySelectorAll("tbody tr");
 rowdatas.forEach(element =>{
   datas = element.querySelectorAll("td");
     for (let i =0 ; i< datas.length; i++) {
       // データがない場合の処理
       if(datas[i].querySelectorAll("span")[0] ==null){
         var data= null
       }else if(datas[i].querySelectorAll("span span")[0] ==null){
        var data= datas[i].querySelectorAll("span")[0].innerHTML;
       }else{
       // 二重スパンの場合
         var data= datas[i].querySelectorAll("span span")[0].innerHTML;
       }
       // 配列にデータを追加
       sf_list[headers[i]].push(data);
 }})
 console.log(sf_list);
 // ここまでで page_list["カラム名"]["行数"]でデータ取得可能。


//#endregion


// 出力する場所を用意（quoteを指定）
var form_copy = '<div class="form-wrapper"><div class="form-header"><span class="header-day">X月X日(〜)</span><span class="header-status">ステータス</span></div><div class="form-block"><span class="info1">講師のスケジュール：勤務可否 18:00〜22:00</span><br><span class="info3">補足備考：</span><br><p class="info4">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p></div><div class="form-block"><span class="info11">依頼中のシフト：講師回答前</span><br><span class="info14">補足備考：</span><br><p class="info15">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p></div><div class="form-block"><button class="change">変更する</button><button class="remove">依頼を取り消しする</button></div><form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdL3XBnLOebrkRYeLPcA5LSLII59XIFEZyz7dR5jAtXx4Tx9A/formResponse" method="post" target="hidden_iframe"><div class="form-none"><input type="text" name="entry.160618089" class="f-day"><input type="text" name="entry.1222060984" class="f-oubo"><input type="text" name="entry.154620229" class="f-kaiin"><input type="text" name="entry.1318309983" class="f-kaiin-name"><input type="text" name="entry.730274298" class="f-school"><input type="text" name="entry.1643541075" class="f-school-name"><input type="text" name="entry.60113429" class="f-torikeshi"></div><div class="form-inline"><span>開始：</span><select name="entry.1320773206" class="f-time1"><option value="--">--</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option></select><span> 時 </span><select name="entry.1928280393" class="f-time2"><option value="--">--</option><option value="00">00</option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option></select><span> 分 ｜</span><span>終了：</span><select name="entry.1975073071" class="f-time3"><option value="--">--</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option></select><span> 時 </span><select name="entry.1278678826" class="f-time4"><option value="--">--</option><option value="00">00</option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option></select><span> 分 ｜</span><span>休憩：</span><select name="entry.1043304982" class="f-time5"><option value="--">--</option><option value="00">00</option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option><option value="60">60</option><option value="70">70</option><option value="80">80</option><option value="90">90</option><option value="100">100</option><option value="110">110</option><option value="120">120</option></select><span> 分 </span><button class="hosokukinyuu">補足欄</button></div><div class="form-inline form-flex"><button type="submit">シフト依頼を確定</button></div><div class="form-block"><span>補足備考：</span><br><textarea name="entry.1882666715" class="f-hosoku"></textarea></div><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe></form></div>';
var area_target = document.getElementById("シフト申請はこちらから").nextElementSibling;

var form_area = document.createElement("div");
area_target.after(form_area );

// フォーム作成ループ
days.forEach((element,index)=>{
  form_area.insertAdjacentHTML("beforeend",form_copy);
  var wrap =document.querySelectorAll(".form-wrapper:last-child")[0];
  wrap.querySelectorAll(".header-day")[0].innerHTML= days2[index] ;
  wrap.querySelectorAll(".header-status")[0].innerHTML= "シフト未申請" ;
  wrap.querySelectorAll("form .f-day")[0].value= element ;
  wrap.querySelectorAll("form .f-kaiin")[0].value= prop_object["会員ID"];
  wrap.querySelectorAll("form .f-kaiin-name")[0].value= prop_object["姓"]+prop_object["名"];
  wrap.querySelectorAll("form .f-school")[0].value= prop_object["教室ID"];
  wrap.querySelectorAll("form .f-school-name")[0].value= prop_object["教室名"];
  wrap.querySelectorAll("form .f-oubo")[0].value= prop_object["応募ID"];
  wrap.querySelectorAll(".info1")[0].innerHTML= "講師スケジュール｜未回答"
  wrap.querySelectorAll(".form-block")[1].style.display="none";
  wrap.querySelectorAll(".form-block")[2].style.display="none";
  wrap.querySelectorAll(".form-none")[0].style.display="none";
  wrap.querySelectorAll("form .form-block")[0].style.display="none";

  // スケジュールデータがあった場合の処理
  for (let index = 0; index < sc_list["日付"].length; index++) {
    if(sc_list["日付"][index] == element){
      if(sc_list["勤務可否"][index] == "一部勤務可能"){
      wrap.querySelectorAll(".info1")[0].innerHTML= "講師スケジュール｜"+ sc_list["勤務可否"][index]+"｜"+ sc_list["勤務可能時刻｜開始"][index]+" 〜 "+sc_list["勤務可能時刻｜終了"][index];
      }else{
        wrap.querySelectorAll(".info1")[0].innerHTML= "講師スケジュール｜"+ sc_list["勤務可否"][index];
      }
      if(sc_list["備考・補足"][index] !=null ){
      wrap.querySelectorAll(".info4")[0].innerHTML= sc_list["備考・補足"][index];
      }else{
      wrap.querySelectorAll(".info3")[0].nextSibling.remove()
      wrap.querySelectorAll(".info3")[0].style.display="none";
      wrap.querySelectorAll(".info4")[0].style.display="none";
      }
    //   wrap.querySelectorAll(".header-status")[0].innerHTML= "提出済" ;
    //   wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "#34675C" ;
    //   wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "white" ;
      wrap.querySelectorAll(".form-block")[0].style.display="block";
    }
  }
    // シフト依頼データがあった場合の処理
    for (let index = 0; index < sf_list["日付"].length; index++) {
        if(sf_list["日付"][index] == element){
            if(sf_list["依頼への回答"][index]!=null){
            wrap.querySelectorAll(".info11")[0].innerHTML= "依頼中のシフト｜"+sf_list["依頼への回答"][index]+"｜"+ sf_list["勤務依頼時刻｜開始"][index]+" 〜 "+sf_list["勤務依頼時刻｜終了"][index]+"｜休憩時間："+ sf_list["休憩時間（依頼）"][index]+" 分 ";
            }else{
            wrap.querySelectorAll(".info11")[0].innerHTML= "依頼中のシフト｜"+"講師回答前｜"+ sf_list["勤務依頼時刻｜開始"][index]+" 〜 "+sf_list["勤務依頼時刻｜終了"][index]+"｜休憩時間："+ sf_list["休憩時間（依頼）"][index]+" 分 ";
            }
            if(sf_list["備考補足　シフト提出時"][index] !=null ){
            wrap.querySelectorAll(".info15")[0].innerHTML= sf_list["備考補足　シフト提出時"][index];
            }else{
            wrap.querySelectorAll(".info14")[0].nextSibling.remove()
            wrap.querySelectorAll(".info14")[0].style.display="none";
            wrap.querySelectorAll(".info15")[0].style.display="none";
            }
            wrap.querySelectorAll(".header-status")[0].innerHTML= "講師の回答待ち" ;
            if(sf_list["依頼への回答"][index]=="勤務確定"){
            wrap.querySelectorAll(".header-status")[0].innerHTML= "シフト確定済み" ;
            wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "#34675C" ;
            wrap.querySelectorAll(".header-status")[0].style.color = "white" ;
            }
            wrap.querySelectorAll(".form-block")[1].style.display="block";
            wrap.querySelectorAll(".form-block")[2].style.display="block";
            wrap.querySelectorAll("form")[0].style.display="none";
        }
    }
}) 

// 変更ボタンプッシュ時の動作設定
var change_button =document.querySelectorAll(".form-wrapper .change")
change_button.forEach((element,index)=>{
  element.addEventListener('click',function(){
      var wrap1 = document.querySelectorAll(".form-wrapper")[index];
      wrap1.querySelectorAll("form")[0].style.display="flex";
      wrap1.querySelectorAll(".form-block")[2].style.display="none";
  })
})

// 補足ボタンプッシュ時の動作設定
var form_button =document.querySelectorAll(".form-wrapper .hosokukinyuu")
form_button.forEach((element,index)=>{
  element.addEventListener('click',function(){
      var wrap2 = document.querySelectorAll(".form-wrapper")[index];
      wrap2.querySelectorAll(".form-block")[2].style.display="none";
      wrap2.querySelectorAll("form .form-block")[0].style.display="block";
      element.style.display="none"
  })
})


// 取り消しボタンプッシュ時の動作設定
var remove_button =document.querySelectorAll(".form-wrapper .remove")
remove_button.forEach((element,index)=>{
  element.addEventListener('click',function(){
      var wrap3 = document.querySelectorAll(".form-wrapper")[index];
      wrap3.querySelectorAll("form")[0].style.display="flex";
      wrap3.querySelectorAll(".f-torikeshi")[0].value="true";
      wrap3.querySelectorAll(".form-block")[2].style.display="none";
      wrap3.querySelectorAll("form .form-inline")[0].style.display="none";
      wrap3.querySelectorAll("form button")[1].innerHTML="シフト依頼を取り消す"
  })
})



// フォーム提出時の動作設定
  var submit_button = document.querySelectorAll("form .form-flex button");
  submit_button.forEach((element,index)=>{
    element.addEventListener('click',function(e){
      // バリデーション
      e.preventDefault();
      var wrap4 = document.querySelectorAll(".form-wrapper")[index]  
      if(wrap4.querySelectorAll(".f-time1")[0].value == "--" ||wrap4.querySelectorAll(".f-time2")[0].value == "--"||wrap4.querySelectorAll(".f-time3")[0].value == "--" ||wrap4.querySelectorAll(".f-time4")[0].value == "--"||wrap4.querySelectorAll(".f-time1")[0].value == "--" ||wrap4.querySelectorAll(".f-time5")[0].value == "--"){
        alert("勤務時間、休憩時間を設定してください。");    
      }else{
        document.querySelectorAll("form")[index].submit();
      // 送信時処理
        wrap4.querySelectorAll(".info11")[0].innerHTML= "依頼中のシフト｜"+ wrap4.querySelectorAll(".f-time1")[0].value+":"+ wrap4.querySelectorAll(".f-time2")[0].value+" 〜 "+wrap4.querySelectorAll(".f-time3")[0].value+":"+ wrap4.querySelectorAll(".f-time4")[0].value+"｜休憩時間："+ wrap4.querySelectorAll(".f-time5")[0].value+" 分 ";
        if(wrap4.querySelectorAll(".f-hosoku")[0].value !=null ){
        wrap4.querySelectorAll(".info15")[0].innerHTML= wrap4.querySelectorAll(".f-hosoku")[0].value;
        }else{
        wrap4.querySelectorAll(".info14")[0].nextSibling.remove()
        wrap4.querySelectorAll(".info14")[0].style.display="none";
        wrap4.querySelectorAll(".info15")[0].style.display="none";
        }
        wrap4.querySelectorAll(".header-status")[0].innerHTML= "シフト依頼済み" ;
        wrap4.querySelectorAll(".header-status")[0].style.backgroundColor = "#34675C" ;
        wrap4.querySelectorAll(".header-status")[0].style.color = "white" ;
      wrap4.querySelectorAll(".form-wrapper .form-block")[1].style.display="block";
      wrap4.querySelectorAll("form")[0].style.display="none";}
    })
  })




}}


