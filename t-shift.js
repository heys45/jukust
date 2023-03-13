setTimeout(timefunc,500);

function timefunc(){
if(prop_object["ページ表示名"]==="講師シフト確定"){
  alert("001")

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// シフトDBの情報取得  sf_list
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region
// sf_listのデータ取得。
var sf_list_db = document.querySelectorAll(".notion-collection-table")[1];
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
var form_copy = '<div class="form-wrapper"><div class="form-header"><span class="header-day">X月X日(〜)</span><span class="header-status">ステータス</span></div><form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeuyJMJUvwq_mNtJs-idijDrDUl8ko0zYcYVgkQ2ZPXsPErgA/formResponse" method="post" target="hidden_iframe"><div class="form-none"><input type="text" name="entry.463774100" class="f-day"><input type="text" name="entry.1985960195" class="f-oubo"><input type="text" name="entry.1904757408" class="f-kaiin"><input type="text" name="entry.1386472612" class="f-kaiin-name"><input type="text" name="entry.2090898669" class="f-school"><input type="text" name="entry.1323446715" class="f-school-name"></div><div class="form-inline"><span class="info11">依頼が来たシフト：講師回答前</span><br><span class="info14">補足備考：</span><br><p class="info15">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p></div><div class="form-inline form-flex"><select name="entry.1776705296" class="f-kinmukahi"><option value="要選択">要選択</option><option value="勤務確定">勤務確定</option><option value="勤務不可">勤務不可</option><option value="調整希望">調整希望</option></select><button class="hosokukinyuu">補足記入</button><button type="submit">シフト依頼を確定</button></div><div class="form-block"><span>補足備考：</span><br><textarea name="entry.108034819" class="f-hosoku"></textarea></div><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe></form></div>';
var area_target = document.getElementById("シフト確定の回答はこちらから").nextElementSibling;
var form_area = document.createElement("div");
area_target.after(form_area );

sf_list["日付"].forEach((element,index)=>{
  form_area.insertAdjacentHTML("beforeend",form_copy);
  var wrap =document.querySelectorAll(".form-wrapper:last-child")[0];
  wrap.querySelectorAll(".header-day")[0].innerHTML= element ;
  wrap.querySelectorAll("form .f-day")[0].value= element ;
  wrap.querySelectorAll("form .f-kaiin")[0].value= prop_object["会員ID"];
  wrap.querySelectorAll("form .f-kaiin-name")[0].value= prop_object["姓"]+prop_object["名"];
  wrap.querySelectorAll("form .f-school")[0].value= prop_object["教室ID"];
  wrap.querySelectorAll("form .f-school-name")[0].value= prop_object["教室名"];
  wrap.querySelectorAll("form .f-oubo")[0].value= prop_object["応募ID"];
  wrap.querySelectorAll(".form-none")[0].style.display="none";

  if(sf_list["依頼への回答"][index]==null){
    // 未回答の時
    wrap.querySelectorAll(".info11")[0].innerHTML= "シフト依頼内容｜"+sf_list["勤務依頼時刻｜開始"][index]+" 〜 "+sf_list["勤務依頼時刻｜終了"][index]+"｜休憩時間："+ sf_list["休憩時間（依頼）"][index]+" 分 ";
    wrap.querySelectorAll(".header-status")[0].innerHTML= "未回答" ;
    wrap.querySelectorAll("form .form-block")[2].style.display="none";
    }else{
    // 回答済みの時
    wrap.querySelectorAll(".info11")[0].innerHTML=sf_list ["依頼への回答"][index]+ "｜シフト依頼内容｜"+ sf_list["勤務依頼時刻｜開始"][index]+" 〜 "+sf_list["勤務依頼時刻｜終了"][index]+"｜休憩時間："+ sf_list["休憩時間（依頼）"][index]+" 分 ";
    wrap.querySelectorAll(".header-status")[0].innerHTML= "回答済み" ;
    wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "#34675C" ;
    wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "white" ;
    wrap.querySelectorAll("form .form-block")[1].style.display="none";
    wrap.querySelectorAll("form .form-block")[2].style.display="none";
    }
    if(sf_list["備考補足　シフト提出時"][index] !=null ){
    wrap.querySelectorAll(".info15")[0].innerHTML= sf_list["備考補足　シフト提出時"][index];
    }else{
    wrap.querySelectorAll(".info14")[0].nextSibling.remove()
    wrap.querySelectorAll(".info14")[0].style.display="none";
    wrap.querySelectorAll(".info15")[0].style.display="none";
    }

})


// 補足ボタンプッシュ時の動作設定
var form_button =document.querySelectorAll(".form-wrapper .hosokukinyuu")
form_button.forEach((element,index)=>{
  element.addEventListener('click',function(){
      var wrap = document.querySelectorAll(".form-wrapper")[index];
      element.style.display="none";
      wrap.querySelectorAll("form .form-block")[2].style.display="block";
      element.style.display="none"
  })
})

// フォーム提出時の動作設定
  var submit_button = document.querySelectorAll("form")[0].querySelectorAll("button")[1];
  submit_button.forEach((element,index)=>{
    element.addEventListener('click',function(){
      var wrap = document.querySelectorAll(".form-wrapper")[index]  
      // 回答済みの時
      wrap.querySelectorAll(".info11")[0].insertAdjacentHTML("afterbegin", wrap.querySelectorAll(".f-kinmukahi")[0])+"｜";
      wrap.querySelectorAll(".header-status")[0].innerHTML= "回答済み" ;
      wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "#34675C" ;
      wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "white" ;
      wrap.querySelectorAll("form .form-block")[1].style.display="none";
      wrap.querySelectorAll("form .form-block")[2].style.display="none";
      
      if( wrap.querySelectorAll(".f-hosoku")[0] !=null ){
      wrap.querySelectorAll(".info15")[0].innerHTML= wrap.querySelectorAll(".f-hosoku")[0];
      }else{
      wrap.querySelectorAll(".info14")[0].nextSibling.remove()
      wrap.querySelectorAll(".info14")[0].style.display="none";
      wrap.querySelectorAll(".info15")[0].style.display="none";
      }
      })
  })



}}



