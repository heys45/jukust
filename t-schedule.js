setTimeout(timefunc,300);
function timefunc(){
if(prop_object["ページ表示名"]==="講師スケジュール提出"){


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォーム作成用の　日付ラ作成 　　何もしなくてOK
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region 【共通】スケ提出とシフト管理は同じ　直近30日のフォーム用意
const formdate =new Date();
var days = [];
for (let index = 0; index < 30; index++) {
  formdate.setDate(formdate.getDate() + 1);
  var year = formdate.getFullYear();
  var month = formdate.getMonth()+1;
  var week = formdate.getDay();
  var day = formdate.getDate();
  var yobi= new Array("日","月","火","水","木","金","土");
  var key = year+"/"+month+"/"+day;//+"("+yobi[week]+")"
  days.push(key)
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 教室 or 講師　DBのフィルタリング処理　＋DBの配列処理
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
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


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォーム表示設定代項目　3分
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 出力する場所を用意（quoteを指定）
const form_copy = '<div class="form-wrapper"><div class="form-header"><span class="header-day">X月X日(〜)</span><span class="header-status">ステータス</span></div><div class="form-block"><span class="info1">提出中のスケジュール：勤務可否</span><br><span class="info3">補足備考：</span><p class="info4">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p></div><div class="form-block"><button class="change">変更する</button></div><form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSerjsf4QByIyoK-hHQgZlY6j-7uKtvSylNAkc3AtFaBH0rlBw/formResponse" onsubmit="return" method="post" target="hidden_iframe"><div class="form-none"><input type="text" name="entry.747298616" class="f-day"><input type="text" name="entry.1173998301" class="f-kaiin"><input type="text" name="entry.372668424" class="f-kaiin-name"></div><div class="form-inline"><span>勤務可否：</span><select name="entry.1601652951" class="f-kinmukahi"><option value="要選択">要選択</option><option value="終日勤務可能">終日勤務可能</option><option value="一部勤務可能">一部勤務可能</option><option value="勤務不可">勤務不可</option><option value="調整中">調整中</option></select></div><div class="form-inline"><span>勤務可能時間：</span><select name="entry.1375913458" class="f-time1"><option value="要選択">要選択</option><option value="8:00">8:00</option><option value="8:30">8:30</option><option value="9:00">9:00</option><option value="9:30">9:30</option><option value="10:00">10:00</option><option value="10:30">10:30</option><option value="11:00">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option></select><span>〜</span><select name="entry.988321615" class="f-time2"><option value="要選択">要選択</option><option value="8:00">8:00</option><option value="8:30">8:30</option><option value="9:00">9:00</option><option value="9:30">9:30</option><option value="10:00">10:00</option><option value="10:30">10:30</option><option value="11:00">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option></select></div><div class="form-inlines"><button class="hosokukinyuu">補足記入</button></div><div class="form-block"><span>補足備考：</span><br><textarea name="entry.1701006954" class="f-hosoku"></textarea></div><div class="form-block"><button type="submit">スケジュールを提出する</button></div><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe></form></div>';
var area_target = document.getElementById("スケジュール提出はこちらから").nextElementSibling;
var form_area = document.createElement("div");
area_target.after(form_area );

// フォーム作成ループ
days.forEach(element=>{
  form_area.insertAdjacentHTML("beforeend",form_copy);
  var wrap =document.querySelectorAll(".form-wrapper:last-child")[0];
  wrap.querySelectorAll(".header-day")[0].innerHTML= element ;
  wrap.querySelectorAll(".header-status")[0].innerHTML= "未回答" ;
  wrap.querySelectorAll("form .f-day")[0].value= element ;
  wrap.querySelectorAll("form .f-kaiin")[0].value= prop_object["会員ID"];
  wrap.querySelectorAll("form .f-kaiin-name")[0].value= prop_object["姓"]+prop_object["名"];
  wrap.querySelectorAll(".form-block")[0].style.display="none";
  wrap.querySelectorAll(".form-block")[1].style.display="none";
  wrap.querySelectorAll(".form-none")[0].style.display="none";
  wrap.querySelectorAll("form .form-inline")[1].style.display="none";
  wrap.querySelectorAll("form .form-block")[0].style.display="none";

  // 提出データがあった場合の処理
  for (let index = 0; index < sc_list["日付"].length; index++) {
    if(sc_list["日付"][index] == element){

      if(sc_list["勤務可否"][index] == "一部勤務可能"){
      wrap.querySelectorAll(".info1")[0].innerHTML= "提出スケジュール："+ sc_list["勤務可否"][index]+"｜"+ sc_list["勤務可能時刻｜開始"][index]+" 〜 "+sc_list["勤務可能時刻｜終了"][index];
      }else if(sc_list["勤務可否"][index] == "終日勤務可能"){
        wrap.querySelectorAll(".info1")[0].innerHTML= "提出スケジュール："+ sc_list["勤務可否"][index]+"｜8:00 〜 23:00 ";      
      }else{     wrap.querySelectorAll(".info1")[0].innerHTML= "提出スケジュール："+ sc_list["勤務可否"][index];}

      if(sc_list["備考・補足"][index] !=null ){
      wrap.querySelectorAll(".info4")[0].innerHTML= sc_list["備考・補足"][index];
      wrap.querySelectorAll(".info3")[0].style.display="block";
      wrap.querySelectorAll(".info4")[0].style.display="block";
      }else{
      wrap.querySelectorAll(".info3")[0].style.display="none";
      wrap.querySelectorAll(".info4")[0].style.display="none";
      }

      wrap.querySelectorAll(".header-status")[0].innerHTML= "提出済" ;
      wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "#34675C" ;
      wrap.querySelectorAll(".header-status")[0].style.color = "white" ;
      wrap.querySelectorAll(".form-block")[0].style.display="block";
      wrap.querySelectorAll(".form-block")[1].style.display="block";
      wrap.querySelectorAll("form")[0].style.display="none";
    }
  }
})

// ステータスボタン変更時の動作設定
  var kinmukahi =document.querySelectorAll(".f-kinmukahi")
  kinmukahi.forEach((element,index)=>{
    element.addEventListener('change',function(){
      var wrap = document.querySelectorAll(".form-wrapper")[index]
      if(element.value=="一部勤務可能"){
        wrap.querySelectorAll("form .form-inline")[1].style.display="inline-block";
      }else{
        wrap.querySelectorAll("form .form-inline")[1].style.display="none";
      }
    })
  })
// 補足記入ボタン時の動作設定
var hosokukinyuu =document.querySelectorAll(".hosokukinyuu")
hosokukinyuu.forEach((element,index)=>{
  element.addEventListener('click',function(){
    var wrap = document.querySelectorAll(".form-wrapper")[index]
    wrap.querySelectorAll("form .form-block")[0].style.display="block";
    element.style.display="none"
  })
})


// 変更ボタンプッシュ時の動作設定
  var change_button =document.querySelectorAll(".form-wrapper .change")
  change_button.forEach((element,index)=>{
    element.addEventListener('click',function(){
      document.querySelectorAll(".form-wrapper form")[index].style.display="flex";
      element.style.display="none";
    })
  })

// フォーム提出時の動作設定


  var submit_button = document.querySelectorAll("form .form-block button");
  console.log(submit_button);
  submit_button.forEach((element,index)=>{

    element.addEventListener('click',function(e){

      // バリデーション処理
      e.preventDefault();
      var wrap = document.querySelectorAll(".form-wrapper")[index];
      console.log(wrap);
      if(wrap.querySelectorAll(".f-kinmukahi")[0].value == "要選択"){
        alert("勤務可否を設定してください。");
      }else if(wrap.querySelectorAll(".f-kinmukahi")[0].value == "一部勤務可能"&&wrap.querySelectorAll(".f-time1")[0].value == "要選択"){
        alert("勤務可能な時間を設定してください。");
      }else if(wrap.querySelectorAll(".f-kinmukahi")[0].value == "一部勤務可能"&&wrap.querySelectorAll(".f-time2")[0].value == "要選択"){
        alert("勤務可能な時間を設定してください。");
      }else{
        document.querySelectorAll("form")[index].submit();

      // そう申請講師の処理
      wrap.querySelectorAll(".info1")[0].insertAdjacentHTML("beforebegin",'<span class="info0">スケジュールの提出が完了しました</span><br>')
      wrap.querySelectorAll(".info1")[0].innerHTML= "提出スケジュール："+ wrap.querySelectorAll(".f-kinmukahi")[0].value;
      if(wrap.querySelectorAll(".f-kinmukahi")[0].value == "一部勤務可能"){
        wrap.querySelectorAll(".info1")[0].innerHTML= "提出スケジュール："+ wrap.querySelectorAll(".f-kinmukahi")[0].value+"｜"+wrap.querySelectorAll(".f-time1")[0].value+"　〜　"+wrap.querySelectorAll(".f-time2")[0].value;
      }else if(wrap.querySelectorAll(".f-kinmukahi")[0].value == "終日勤務可能"){
        wrap.querySelectorAll(".info1")[0].innerHTML= "提出スケジュール："+ wrap.querySelectorAll(".f-kinmukahi")[0].value+"｜8:00 〜 23:00";
      }
      if(wrap.querySelectorAll(".f-hosoku")[0].value !=null ){
        wrap.querySelectorAll(".info4")[0].innerHTML= wrap.querySelectorAll(".f-hosoku")[0].value;
      }else{
        wrap.querySelectorAll(".info3")[0].style.display="none";
        wrap.querySelectorAll(".info4")[0].style.display="none";
      }
      wrap.querySelectorAll(".header-status")[0].innerHTML= "提出済" ;
      wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "#34675C" ;
      wrap.querySelectorAll(".header-status")[0].style.backgroundColor = "white" ;
      wrap.querySelectorAll(".form-wrapper .form-block")[0].style.display="block";
      wrap.querySelectorAll("form")[0].style.display="none";
    }})
  })






// forms.forEach((element,index) =>{
//   // 挿入する日付を用意（明日以降）
//   formdate.setDate(formdate.getDate() + 1);
//   var year = formdate.getFullYear();
//   var month = formdate.getMonth()+1;
//   var week = formdate.getDay();
//   var day = formdate.getDate();
//   var yobi= new Array("日","月","火","水","木","金","土");
//   var key = year+"/"+month+"/"+day+"("+yobi[week]+")";
//   // フォームデザインのフォーマットを用意
//   form_area.appendChild(document.getElementsByClassName("day-box")[0].cloneNode(true));
//   var target = document.getElementsByClassName("day-box")[index+1];
//   target.style.display = "flex";

//   // 日付を入れる
//   var day_label = month+"/"+day+"<br>("+yobi[week]+")"
//   target.getElementsByClassName("day-label")[0].innerHTML = day_label;
//   if (week == 0){
//     target.getElementsByClassName("day-box-l")[0].style["background-color"]="#6f1d1b"
//   } 
//   if (week == 6){
//     target.getElementsByClassName("day-box-l")[0].style["background-color"]="#284b63"
//   } 
// // #endregion


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの作成②　スケジュール情報挿入 　10min
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//     // スケジュール提出があればスケジュール情報を入れる
//     if(document.getElementById("db-3") !=null){
      
//     if(document.getElementById("db-3").querySelectorAll("[name='"+key+"']")[0] !=null){
//       var db_id =document.getElementById("db-3").querySelectorAll("[name='"+key+"']")[0].getAttribute('id');
//       if(document.getElementById(db_id+"-2").getElementsByTagName("span")[0]!=null){
//       var status = document.getElementById(db_id+"-2").getElementsByTagName("span")[0].innerHTML;}
//       else{var status=""}
//       if(document.getElementById(db_id+"-3").getElementsByTagName("span")[0]!=null){
//       var time1 = document.getElementById(db_id+"-3").getElementsByTagName("span")[0].innerHTML;}
//       else{var time1="" }
//       if(document.getElementById(db_id+"-4").getElementsByTagName("span")[0]!=null){
//         var time2 = document.getElementById(db_id+"-4").getElementsByTagName("span")[0].innerHTML;}
//       else{var time2="" }
//       if(document.getElementById(db_id+"-5").getElementsByTagName("span")[0]!=null){
//       var hosoku = "<br>補足事項｜"+document.getElementById(db_id+"-5").getElementsByTagName("span")[0].innerHTML;}
//       else{var hosoku="" }
//       var db_info ="スケジュール提出済み"+"<span class=\"pill\">｜"+status+"｜</span>"+time1+"〜"+time2+hosoku;
//       target.getElementsByClassName("sch-info")[0].innerHTML = db_info;
//       target.getElementsByClassName("sch-info")[0].style["font-weight"] = "bold";
      
//     // スケジュールがあれば提出フォームを初期で非表示にする
//     target.getElementsByClassName("day-box-form")[0].style.display="none";

//     // 依頼フォーム再表示用のボタンを用意する
//     const swich= '<div class="btn">スケジュールを<br>変更する</div>';
//     target.getElementsByClassName("day-box-swich")[0].innerHTML = swich;

//     var trigger = target.getElementsByClassName("btn")[0];
//     trigger.addEventListener('click',function(){
//       target.getElementsByClassName("day-box-form")[0].style.display="block";
//       target.getElementsByClassName("day-box-swich")[0].style.display="none";
//     });

//     //ーーーーーーーーーーーーーーーーーー
//     // スケジュール提出がなかった時の処理
//     //ーーーーーーーーーーーーーーーーーー
//     }else{
//       target.getElementsByClassName("day-box-swich")[0].remove();
//       target.getElementsByClassName("sch-info")[0].remove();
//     }}else{
//       target.getElementsByClassName("day-box-swich")[0].remove();
//       target.getElementsByClassName("sch-info")[0].remove();
//     }

//     // 参考ボックスの非表示
//     target.getElementsByClassName("ajs-info")[0].remove();
//     target.getElementsByClassName("sh-info")[0].remove();


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの作成④　送信部分の作成 　10min
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  

//     // フォームを挿入して、解答欄のラベル（ガイド）をつけてあげる
//     target.getElementsByClassName("day-box-form")[0].appendChild(element);

//     var status_guide = document.createElement("span");
//     status_guide.innerHTML = "スケジュール｜";
//     status_guide.style["font-weight"]="bold";
//     target.getElementsByClassName("fs2")[0].before(status_guide);

//     var time_guide = document.createElement("span");
//     time_guide.innerHTML = "勤務可能時間｜";
//     target.getElementsByClassName("ft1")[0].before(time_guide);

//     var time_guide = document.createElement("span");
//     time_guide.innerHTML = "〜";
//     time_guide.style["font-weight"]="bold";
//     target.getElementsByClassName("ft1")[0].after(time_guide);

//     var submit_guide = document.createElement("span");
//     submit_guide.innerHTML="　＊提出完了には送信が必要です";
//     submit_guide.style["font-weight"] = "bold";
//     submit_guide.style["color"] = "#34675c";
//     submit_guide.style["font-size"] = "14px";
//     submit_guide.style["display"] = "inline-box";
//     target.getElementsByClassName("fs2")[0].after(submit_guide);

//     var hosoku_guide = document.createElement("span");
//     hosoku_guide.innerHTML = "備考・補足　｜";
//     target.getElementsByClassName("hosoku")[0].before(hosoku_guide);
//     target.getElementsByClassName("hosoku")[0].style.width = "calc(100% - 115px)";


//     // フォームの回答と選択肢を設定する
//     target.getElementsByClassName("fd")[0].value =key;

//     var values =["選択してください","終日勤務可能", "一部勤務可能", "勤務不可", "調整中"];
//     values.forEach(element =>{
//       var option = document.createElement('option');
//       option.setAttribute("value",element);
//       option.textContent = element;
//       target.getElementsByClassName("fs2")[0].appendChild(option);
//     });

//     var values = ["","8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];
//     values.forEach(element =>{
//       var option = document.createElement('option');
//       option.setAttribute("value",element);
//       option.textContent = element;
//       target.getElementsByClassName("ft1")[0].appendChild(option);
//     });

//     var values = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
//     values.forEach(element =>{
//       var option = document.createElement('option');
//       option.setAttribute("value",element);
//       option.textContent = element;
//       target.getElementsByClassName("ft2")[0].appendChild(option);
//     });
  
//   })




// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの拡張①　送信機能＋送信後の設定　10min
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // #region フォーム関連の共通設定

//   // フォーム送信ボタンラッパーの作成
//   var form_button_wrapper = document.createElement("div");
//   form_button_wrapper.setAttribute("id","form_button_wrapper");
//   form_button_wrapper.style.display = "flex";
//   form_button_wrapper.style["flex-direction"]= "column";
//   form_button_wrapper.style["justify-content"] = "center";
//   form_button_wrapper.style["align-item"] = "center";
//   form_area.appendChild(form_button_wrapper);
//   var form_wrapper = document.getElementById("form_button_wrapper")

//   // フォーム送信ボタンの作成
//   var form_button = document.createElement("button");
//   form_button.setAttribute("id","form_button");
//   form_button.setAttribute("type","submit");
//   form_button.innerHTML="▶︎ スケジュール提出を完了する";
//   form_button.style["background-color"] ="#34675c";
//   form_button.style["border-radius"] = "5px";
//   form_button.style["padding"] = "8px";
//   form_button.style["text-align"] = "center";
//   form_button.style.color="white";
//   form_wrapper.appendChild(form_button);
//   var form_button = document.getElementById("form_button")

//   var timelag = document.createElement("p");
//   timelag.innerHTML="＊データの反映には2分ほど時間がかかります。最新のデータを確認する際は、しばらく待ってからページを更新してください。<br><br>";
//   timelag.style.color="red";
//   form_button.after(timelag);
  
//   // フォーム送信ボタン送信後の表示設定
//   var form_comfirm= document.createElement("div");
//   form_comfirm.style.display="none";
//   form_wrapper.appendChild(form_comfirm);

//   // フォーム送信後の画面遷移の設定
//   var form_iframe = document.createElement("iframe");
//   form_iframe.setAttribute("name","hidden_iframe");
//   form_iframe.setAttribute("id","hidden_iframe");
//   form_iframe.style.display="none";
//   form_area.appendChild(form_iframe);
//   form_area.setAttribute("method","post");
//   form_area.setAttribute("target","hidden_iframe");

// // #endregion 


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの拡張①　送信後のメッセージ作成　10min
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  
// // #region 【個別】送信後のメッセージ作成
//   //フォーム送信後の処理
//   form_button.addEventListener('click',function(){
//     form_comfirm.style.display="block";
//     form_button.style["background-color"]="gray";
//     form_button.innerHTML="送信完了";
//     form_comfirm.innerHTML='<p>スケジュール提出が完了しました。データの反映には2分ほど時間がかかります。</p><p>送信内容</p><div id="re_content"></div>';


//     // 送信内容の作成
//     var restarts = document.querySelectorAll(".day-box .fs2");
//     console.log(restarts);
//     restarts.forEach((element,index) =>{
//       console.log(element);
//       if(element.value !="選択してください"){
//         var resta = document.querySelectorAll(".day-box .fs2")[index].value;
//         var reday = document.querySelectorAll(".day-box .fd")[index].value;
//         var restart = document.querySelectorAll(".day-box .ft1")[index].value;
//         var reend = document.querySelectorAll(".day-box .ft2")[index].value;
//         if(document.querySelectorAll(".day-box .hosoku")[index].value !=null){
//           var rehosoku = "<br>補足｜"+document.querySelectorAll(".day-box .hosoku")[index].value;
//         }else{var rehosoku =""}
//         var re_content = reday+"｜"+resta+"｜"+restart+"〜"+reend+rehosoku;
//         var re_contentp = document.createElement("p");
//         re_contentp.innerHTML= re_content;
//         document.getElementById("re_content").appendChild(re_contentp);
//       }
//     });

//   });
  
//  //#endregion


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // フォームボックスの拡張②　提出期間切り替えボタンの設定
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  
// // #region 【共通】スケ提出とシフト管理は同じ
//   var form_term_box = document.createElement("div");
//   form_term_box.id="form_term_swich_wrapper";
//   form_term_box.style.display="flex";
//   form_term_box.style.padding="5px";
//   area_target.after(form_term_box);

//   var form_term_swich = document.createElement("div");
//   form_term_swich.innerHTML="1週間分を<br>提出する";
//   form_term_swich.id="week1";
//   form_term_swich.style["background-color"]="#34675c";  form_term_swich.style["width"]="33.3%";  form_term_swich.style["margin"]="5px";  form_term_swich.style["padding"]="5px";  form_term_swich.style["color"]="white";  form_term_swich.style["border-radius"]="5px";  form_term_swich.style["text-align"]="center";
//   form_term_box.appendChild(form_term_swich);

//   var form_term_swich = form_term_swich.cloneNode(true);
//   form_term_swich.innerHTML="2週間分を<br>提出する";
//   form_term_swich.style["background-color"]="white";
//   form_term_swich.style["color"]="#34675c";
//   form_term_swich.style["border"]="solid 1px #34675c";
//   form_term_swich.id="week2";
//   form_term_box.appendChild(form_term_swich);

//   var form_term_swich = form_term_swich.cloneNode(true);
//   form_term_swich.innerHTML="1ヶ月分を<br>提出する";
//   form_term_swich.id="week4";
//   form_term_box.appendChild(form_term_swich);

//   for (let j = 8; j <= 30; j++) {
//     document.getElementsByClassName("day-box")[j].style.display="none";
//   }


//   var triggers = document.querySelectorAll("#form_term_swich_wrapper div");
//   triggers.forEach(element =>{
//     console.log(element);
//     element.addEventListener('click',function(){
//       // 共通処理
//       console.log(element);
//       for (let i = 0; i < triggers.length; i++) {
//         triggers[i].style["background-color"]="white";
//         triggers[i].style["color"]="#34675c";
//         triggers[i].style["border"]="solid 1px #34675c";
//       }
//       element.style["background-color"]="#34675c";
//       element.style["color"]="white";
//       for (let j = 0; j <= 30; j++) {
//         document.getElementsByClassName("day-box")[j].style.display="flex";
//       }
//       // 個別処理
//       if(element.id == "week1"){
//         for (let j = 8; j <= 30; j++) {
//           document.getElementsByClassName("day-box")[j].style.display="none";
//         }
//       }
//       if(element.id == "week2"){
//         for (let j = 15; j <= 30; j++) {
//           document.getElementsByClassName("day-box")[j].style.display="none";
//         }
//       }

//     });
//   });

// // #endregion


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // データベースの値取得改善案
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // #region 【改善案】データベースの情報取得
//     // var main_db ={};
//     // var db_data = document.getElementById("db-3").querySelectorAll("tr:not(#db-3-1)");
//     // var db_header = document.getElementById("db-3-1").querySelectorAll("th");
//     // console.log(db_header);
//     // db_header.forEach(element => {
//     //   main_db[element.innerHTML] =[];
//     // });
//     // var nullspan = document.createElement("span");
//     // db_data.forEach(element => {
//     //   var a_db_data = element.querySelectorAll("td");
//     //   console.log(a_db_data);
//     //   for (let index = 0; index < db_header.length; index++) {
//     //     a_db_data[index].appendChild(nullspan);
//     //     var a_db_data_n = a_db_data[index].getElementsByTagName("span")[0];
//     //     if (a_db_data_n.getElementsByTagName("span")[0] !=null) {// spanが二段階の時
//     //       var a_db_data_n = a_db_data_n.getElementsByTagName("span")[0];
//     //       var a_db_data_n =  a_db_data_n.innerHTML;
//     //       main_db[db_header[index].innerHTML].push(a_db_data_n);
//     //     }else{// spanが一段階の時
//     //       var a_db_data_n =  a_db_data_n.innerHTML;
//     //       main_db[db_header[index].innerHTML].push(a_db_data_n);
//     //     }
//     //   }
//     // });
//     // console.log(main_db);
// // #endregion


// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // スケジュールフォーム、時間入力時のみカラーの設定
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

//     // スケジュールフォーム、時間入力時のみカラーの設定
//     // ターゲット取得
//     var sc_ft1s = document.querySelectorAll('.ft1');
//     var sc_ft2s = document.querySelectorAll('.ft2');
//     var st2s = document.querySelectorAll('.fs2');   

//     sc_ft1s.forEach(element=>{
//       element.style["background-color"] ="gray";
//       element.style["border"] ="solid 3px gray";
//     });
//     sc_ft2s .forEach(element=>{
//       element.style.backgroundColor ="gray";
//       element.style["border"] ="solid 3px gray";
//     });

    
//     // ステータスが一部勤務可能の時のみ色変更
//     st2s.forEach(function(element,index){
//         element.addEventListener("change", function() {
//             console.log(element);
//             var elementv = element.value;
//             console.log(elementv);

//             if(elementv == '選択してください'){
//               element.style["background-color"] ="white";
//               element.style["color"] ="#17837c";
//               element.style["border"] ="solid 3px #17837c";
//               element.style["font-weight"] ="normal";
//               sc_ft1s[index].style["background-color"] ="gray";
//               sc_ft1s[index].style["border"] ="gray";
//               sc_ft2s[index].style["background-color"] ="gray";
//               sc_ft2s[index].style["border"] ="gray";
//               }

//             if(elementv == '一部勤務可能'){
//             element.style["background-color"] ="#17837c";
//             element.style["color"] ="white";
//             element.style["border"] ="solid 3px #17837c";
//             element.style["font-weight"] ="normal";
//             sc_ft1s[index].style["background-color"] ="white";
//             sc_ft1s[index].style["border"] ="solid 3px #777777";
//             sc_ft2s[index].style["background-color"] ="white";
//             sc_ft1s[index].style["border"] ="solid 3px #777777";
//             }
//             if(elementv == '勤務不可'){
//               element.style["background-color"] ="gray";
//               element.style["color"] ="white";
//               element.style["border"] ="solid 3px gray";
//               element.style["font-weight"] ="normal";
//               sc_ft1s[index].style["background-color"] ="gray";
//               sc_ft1s[index].style["border"] ="gray";
//               sc_ft2s[index].style["background-color"] ="gray";
//               sc_ft2s[index].style["border"] ="gray";
//             }
//             if(elementv == '終日勤務可能'){
//               element.style["background-color"] ="#17837c";
//               element.style["color"] ="white";
//               element.style["border"] ="solid 3px #17837c";
//               element.style["font-weight"] ="normal";
//               sc_ft1s[index].style["background-color"] ="gray";
//               sc_ft1s[index].style["border"] ="gray";
//               sc_ft2s[index].style["background-color"] ="gray";
//               sc_ft2s[index].style["border"] ="gray";
//             }
            
//         });
//     });








}}








