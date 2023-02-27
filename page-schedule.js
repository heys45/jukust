setTimeout(timefunc,300);
function timefunc(){
if(prop_object["ページ表示名"]==="スケジュール提出"){

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// プログレスバーの変更
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    // 表示位置の設定
    var quote_name = "スポットバイトの流れ";
    var progressbar = document.getElementsByClassName("progressbar")[0];
    document.getElementById(quote_name).after(progressbar);
    progressbar.style.display = 'flex';

    //プログレスバー書き換え処理
    document.getElementById('li-schedule').setAttribute("class","active");
    // document.getElementById('db-2-1-4').setAttribute("class",complete);


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// DB表示設定代項目 1min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    // 教室or講師IDによるDBフィルタ
    // 前提：データベースはグループ化しておく
    const groups = document.querySelectorAll('.notion-collection-group__section');
    groups.forEach(element =>{
        var group_id = element.getElementsByTagName("span")[1].innerHTML;
        element.classList.add("x"+ group_id);
    });

    var research_id = prop_object["講師ID"];
    var research_class =".x"+research_id

    document.querySelectorAll(research_class).forEach(element =>{
      element.style.display = "block" ;  });
    document.querySelectorAll(".notion-collection-group__section:not("+research_class+")").forEach(element =>{
      element.remove();  });

// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // テーブルの番号づけ 何もしなくてOK
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//     //テーブルをまとめて取得
//     const tables = document.querySelectorAll('.notion-table');
//     //テーブルにIDを付与する 
//     for( var i=0; i<tables.length; i++) {
//       console.log(tables[i]);
//       var name = "table-"+(i+1);
//       console.log(name);
//       tables[i].setAttribute("id",name);
      
//       //行をまとめて取得
//       const rows = tables[i].getElementsByTagName("tr");
//       //行にIDを付与する 
//       for( var j=0; j<rows.length; j++) {
//       console.log(rows[j]);
//       var name = "table-"+(i+1)+"-"+(j+1);
//       console.log(name);
//       rows[j].setAttribute("id",name);
      
//       //列をまとめて取得
//       const columns =rows[j].getElementsByTagName("td");
//       const columnhs =rows[j].getElementsByTagName("th");
//       //列にIDを付与する 
//       for( var k=0; k<columns.length; k++) {
//       console.log(columns[k]);
//       var name = "table-"+(i+1)+"-"+(j+1)+"-"+(k+1);
//       console.log(name);
//       columns[k].setAttribute("id",name);
//       }
//       for( var k=0; k<columnhs.length; k++) {
//         console.log(columnhs[k]);
//         var name = "table-"+(i+1)+"-"+(j+1)+"-"+(k+1);
//         console.log(name);
//         columnhs[k].setAttribute("id",name);

//         }
//       }
//     }

// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // データベースの番号づけ 何もしなくてOK
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//     //DBをまとめて取得
//     const dbs = document.querySelectorAll('.notion-collection-table');
//     //DBにIDを付与する 
//     for( var i=0; i<dbs.length; i++) {
//       var name = "db-"+(i+1);
//       dbs[i].setAttribute("id",name);
      
//       //行をまとめて取得
//       const rows = dbs[i].getElementsByTagName("tr")
//       //行にIDを付与する 
//       for( var j=0; j<rows.length; j++) {
//       if(j != 0){
//       var name = rows[j].getElementsByTagName("span")[0].getElementsByTagName("span")[0].innerHTML;
//       rows[j].setAttribute("name",name);
//       }
//       var name = "db-"+(i+1)+"-"+(j+1);
//       rows[j].setAttribute("id",name);
      
//       //列をまとめて取得
//       const columns =rows[j].getElementsByTagName("td")
//       const columnhs =rows[j].getElementsByTagName("th");
//       //列にIDを付与する 
//       for( var k=0; k<columns.length; k++) {
//       var name = "db-"+(i+1)+"-"+(j+1)+"-"+(k+1);
//       columns[k].setAttribute("id",name);
//       }
//       for( var k=0; k<columnhs.length; k++) {
//       var name = "db-"+(i+1)+"-"+(j+1)+"-"+(k+1);
//       columnhs[k].setAttribute("id",name);

//       }
//       }
//     }


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォーム表示設定代項目　3分
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // 使用するフォームの選択
  const sh_form = document.getElementById("shift-form");
  const sc_form = document.getElementById("schedule-form");
  const wr_form = document.getElementById("wr-form");

  const view_form = sc_form;          //ページによって変更する
  sh_form.remove();
  wr_form.remove();

  // 出力する場所を用意（quoteを指定）
  var area_target = document.getElementById("スケジュール提出はこちらから").nextElementSibling;
  var form_area = document.getElementsByTagName("form")[0];
  console.log(form_area.id);
  form_area.setAttribute("id","form");
  area_target.after(form_area);  

  const forms = document.querySelectorAll('.dg');

  // フォーム初期値の設定 講師ID、教室ID、勤務IDの存在を確認。
  document.getElementById("teaid").value = prop_object["講師ID"];
  document.getElementById("schid").value = prop_object["教室ID"];

  // フォーム不要項目の非表示
  const death_prop = document.querySelectorAll(".fd,.adj");
  death_prop.forEach(element=>{  element.style.display = 'none'; });

  view_form.style.display = 'block';

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの作成①　日付ラベル作成 　　何もしなくてOK
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
const formdate =new Date();
forms.forEach((element,index) =>{
  // 挿入する日付を用意（明日以降）
  formdate.setDate(formdate.getDate() + 1);
  var year = formdate.getFullYear();
  var month = formdate.getMonth()+1;
  var week = formdate.getDay();
  var day = formdate.getDate();
  var yobi= new Array("日","月","火","水","木","金","土");
  var key = year+"/"+month+"/"+day+"("+yobi[week]+")";
  // フォームデザインのフォーマットを用意
  form_area.appendChild(document.getElementsByClassName("day-box")[0].cloneNode(true));
  var target = document.getElementsByClassName("day-box")[index+1];
  target.style.display = "flex";

  // 日付を入れる
  var day_label = month+"/"+day+"<br>("+yobi[week]+")"
  target.getElementsByClassName("day-label")[0].innerHTML = day_label;
  if (week == 0){
    target.getElementsByClassName("day-box-l")[0].style["background-color"]="#6f1d1b"
  } 
  if (week == 6){
    target.getElementsByClassName("day-box-l")[0].style["background-color"]="#284b63"
  } 

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの作成②　スケジュール情報挿入 　10min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // スケジュール提出があればスケジュール情報を入れる
    if(document.getElementById("db-3") !=null){
    if(document.getElementById("db-3").querySelectorAll("[name='"+key+"']")[0] !=null){
      var db_id =document.getElementById("db-3").querySelectorAll("[name='"+key+"']")[0].getAttribute('id');
      if(document.getElementById(db_id+"-2").getElementsByTagName("span")[0]!=null){
      var status = document.getElementById(db_id+"-2").getElementsByTagName("span")[0].innerHTML;}
      else{var status=""}
      if(document.getElementById(db_id+"-3").getElementsByTagName("span")[0]!=null){
      var time1 = document.getElementById(db_id+"-3").getElementsByTagName("span")[0].innerHTML;}
      else{var time1="" }
      if(document.getElementById(db_id+"-4").getElementsByTagName("span")[0]!=null){
        var time2 = document.getElementById(db_id+"-4").getElementsByTagName("span")[0].innerHTML;}
      else{var time2="" }
      if(document.getElementById(db_id+"-5").getElementsByTagName("span")[0]!=null){
      var hosoku = "<br>補足事項｜"+document.getElementById(db_id+"-5").getElementsByTagName("span")[0].innerHTML;}
      else{var hosoku="" }
      var db_info ="ｽｹｼﾞｭｰﾙ "+"<span class=\"pill\">｜"+status+"｜</span>"+time1+"〜"+time2+hosoku;
      target.getElementsByClassName("sch-info")[0].innerHTML = db_info;
      target.getElementsByClassName("sch-info")[0].style["font-weight"] = "bold";
      
    // スケジュールがあれば提出フォームを初期で非表示にする
    target.getElementsByClassName("day-box-form")[0].style.display="none";
    // 依頼フォーム再表示用のボタンを用意する
    const swich= '<div class="btn">スケジュールを<br>変更する</div>';
    target.getElementsByClassName("day-box-swich")[0].innerHTML = swich;



    }}else{
      target.getElementsByClassName("day-box-swich")[0].remove();
      target.getElementsByClassName("sch-info")[0].remove();
    }

    // 参考ボックスの非表示
    target.getElementsByClassName("ajs-info")[0].remove();
    target.getElementsByClassName("sh-info")[0].remove();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの作成④　送信部分の作成 　10min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  

    // フォームを挿入して、解答欄のラベル（ガイド）をつけてあげる
    target.getElementsByClassName("day-box-form")[0].appendChild(element);

    var status_guide = document.createElement("span");
    status_guide.innerHTML = "ｽｹｼﾞｭｰﾙ  ｜";
    status_guide.style["font-weight"]="bold";
    target.getElementsByClassName("fs2")[0].before(status_guide);

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "依頼時間｜";
    target.getElementsByClassName("ft1")[0].before(time_guide);

    var time_guide = document.createElement("span");
    time_guide.innerHTML = "〜";
    time_guide.style["font-weight"]="bold";
    target.getElementsByClassName("ft1")[0].after(time_guide);

    var submit_guide = document.createElement("span");
    submit_guide.innerHTML="　＊提出完了には送信が必要です";
    submit_guide.style["font-weight"] = "bold";
    submit_guide.style["color"] = "#34675c";
    submit_guide.style["font-size"] = "14px";
    submit_guide.style["display"] = "inline-box";
    target.getElementsByClassName("fs2")[0].after(submit_guide);

    var hosoku_guide = document.createElement("span");
    hosoku_guide.innerHTML = "補足事項｜";
    target.getElementsByClassName("hosoku")[0].before(hosoku_guide);
    target.getElementsByClassName("hosoku")[0].style.width = "calc(100% - 115px)";


    // フォームの回答と選択肢を設定する
    target.getElementsByClassName("fd")[0].value =key;

    var values =["選択してください","終日勤務可能", "一部勤務可能", "勤務不可", "調整中"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target.getElementsByClassName("fs2")[0].appendChild(option);
    });

    var values = ["","8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target.getElementsByClassName("ft1")[0].appendChild(option);
    });

    var values = ["","10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
    values.forEach(element =>{
      var option = document.createElement('option');
      option.setAttribute("value",element);
      option.textContent = element;
      target.getElementsByClassName("ft2")[0].appendChild(option);
    });
  
  })


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// Select属性の処理
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  


var selects =document.querySelectorAll("select");
selects.forEach((element,index) =>{
  //select設定時に、selected
  console.log(element.value);
  element.addEventListener('change', function(){
    console.log(element.selectedIndex);
    console.log(element.value);
  });
});







// var selects =document.querySelectorAll("select");
// selects.forEach((element,index) =>{
//   var options =element.querySelectorAll("option");
//   if(index = 0){ //初期値をselected
//     options[0].selected = true;} 
//   //select設定時に、selected
//   element.addEventListener('change', function(){
//   for (let j = 0; j < options.length; j++) {
//     options[j].selected=false;};
//     options[i].selected=true;
//   });
// });






// var selects =document.querySelectorAll("select");
// selects.forEach((element,index) =>{
//   var options =element.querySelectorAll("option");
//   swich(element.selectedIndex){
//       for (let i = 0; i < options.length; i++){
//       case i:
//         target.innerHTML = "〜〜〜〜〜〜〜";
//         break;
//       };
//     };


//   }


//   var options =element.querySelectorAll("option");
//   if(index = 0){ //初期値をselected
//     options[0].selected = true;} 
//   //select設定時に、selected

//     selindex = element

//   element.addEventListener('change', function(){
//   for (let j = 0; j < options.length; j++) {
//     selindex 

//     options[j].selected=false;};
//     options[i].selected=true;
//   });
// });







//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの拡張①　送信機能＋送信後の設定　10min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  
  var form_button_wrapper = document.createElement("div");
  form_button_wrapper.setAttribute("id","form_button_wrapper");
  form_button_wrapper.style.display = "flex";
  form_button_wrapper.style["flex-direction"]= "column";
  form_button_wrapper.style["justify-content"] = "center";
  form_button_wrapper.style["align-item"] = "center";
  form_area.appendChild(form_button_wrapper);
  var form_wrapper = document.getElementById("form_button_wrapper")

  var form_button = document.createElement("button");
  form_button.setAttribute("id","form_button");
  form_button.setAttribute("type","submit");
  form_button.innerHTML="▶︎ スケジュール提出を完了する";
  form_button.style["background-color"] ="#34675c";
  form_button.style["border-radius"] = "5px";
  form_button.style["padding"] = "8px";
  form_button.style["text-align"] = "center";
  form_button.style.color="white";
  form_wrapper.appendChild(form_button);
  var form_button = document.getElementById("form_button")
  

  var form_comfirm= document.createElement("div");
  form_comfirm.innerHTML='<p>スケジュール提出が完了しました。データの反映には2分ほど時間がかかります。</p><p>送信内容</p><div id="re_content"></div>';
  form_comfirm.style.display="none";
  form_wrapper.appendChild(form_comfirm);

  // var formss = document.querySelectorAll(".day-box");
  // formss.forEach(element =>{
  //   if(element.getElementsByClassName("ft1")[0].value !=null){
  //     var restart = element.getElementsByClassName("ft1")[0].value;
  //     var reday = element.getElementsByClassName("fd")[0].value;
  //     var reend = element.getElementsByClassName("ft2")[0].value;
  //     if(element.getElementsByClassName("hosoku")[0].value !=null){
  //       var rehosoku = "<br>補足｜"+element.getElementsByClassName("hosoku")[0].value;
  //     }else{var rehosoku =""}
  //     var re_content = reday+"｜"+restart+"〜"+reend+rehosoku;
  //     var re_contentp = document.createElement("p");
  //     re_contentp.innerHTML= re_content;
  //     document.getElementById("re_content").appendChild(re_contentp);
  //   }
  // });

  var form_iframe = document.createElement("iframe");
  form_iframe.setAttribute("name","hidden_iframe");
  form_iframe.setAttribute("id","hidden_iframe");
  form_iframe.style.display="none";
  form_area.appendChild(form_iframe);
  form_area.setAttribute("method","post");
  form_area.setAttribute("target","hidden_iframe");

  //フォーム送信後の処理
  form_button.addEventListener('click',function(){
    form_comfirm.style.display="block";
    form_button.style["background-color"]="gray";
    form_button.innerHTML="送信完了";

  });
  
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの拡張②　提出期間切り替えボタンの設定
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  

  var form_term_box = document.createElement("div");
  form_term_box.id="form_term_swich_wrapper";
  form_term_box.style.display="flex";
  form_term_box.style.padding="5px";
  area_target.after(form_term_box);

  var form_term_swich = document.createElement("div");
  form_term_swich.innerHTML="1週間分を<br>提出する";
  form_term_swich.id="week1";
  form_term_swich.style["background-color"]="#34675c";  form_term_swich.style["width"]="33.3%";  form_term_swich.style["margin"]="5px";  form_term_swich.style["padding"]="5px";  form_term_swich.style["color"]="white";  form_term_swich.style["border-radius"]="5px";  form_term_swich.style["text-align"]="center";
  form_term_box.appendChild(form_term_swich);

  var form_term_swich = form_term_swich.cloneNode(true);
  form_term_swich.innerHTML="2週間分を<br>提出する";
  form_term_swich.style["background-color"]="white";
  form_term_swich.style["color"]="#34675c";
  form_term_swich.style["border"]="solid 1px #34675c";
  form_term_swich.id="week2";
  form_term_box.appendChild(form_term_swich);

  var form_term_swich = form_term_swich.cloneNode(true);
  form_term_swich.innerHTML="1ヶ月分を<br>提出する";
  form_term_swich.id="week4";
  form_term_box.appendChild(form_term_swich);

  for (let j = 8; j <= 30; j++) {
    document.getElementsByClassName("day-box")[j].style.display="none";
  }


  var triggers = document.querySelectorAll("#form_term_swich_wrapper div");
  triggers.forEach(element =>{
    console.log(element);
    element.addEventListener('click',function(){
      // 共通処理
      console.log(element);
      for (let i = 0; i < triggers.length; i++) {
        triggers[i].style["background-color"]="white";
        triggers[i].style["color"]="#34675c";
        triggers[i].style["border"]="solid 1px #34675c";
      }
      element.style["background-color"]="#34675c";
      element.style["color"]="white";
      for (let j = 0; j <= 30; j++) {
        document.getElementsByClassName("day-box")[j].style.display="flex";
      }
      // 個別処理
      if(element.id == "week1"){
        for (let j = 8; j <= 30; j++) {
          document.getElementsByClassName("day-box")[j].style.display="none";
        }
      }
      if(element.id == "week2"){
        for (let j = 15; j <= 30; j++) {
          document.getElementsByClassName("day-box")[j].style.display="none";
        }
      }

    });
  });

  



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベースの値取得
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    // var main_db ={};
    // var db_data = document.getElementById("db-3").querySelectorAll("tr:not(#db-3-1)");
    // var db_header = document.getElementById("db-3-1").querySelectorAll("th");
    // console.log(db_header);
    // db_header.forEach(element => {
    //   main_db[element.innerHTML] =[];
    // });
    // var nullspan = document.createElement("span");
    // db_data.forEach(element => {
    //   var a_db_data = element.querySelectorAll("td");
    //   console.log(a_db_data);
    //   for (let index = 0; index < db_header.length; index++) {
    //     a_db_data[index].appendChild(nullspan);
    //     var a_db_data_n = a_db_data[index].getElementsByTagName("span")[0];
    //     if (a_db_data_n.getElementsByTagName("span")[0] !=null) {// spanが二段階の時
    //       var a_db_data_n = a_db_data_n.getElementsByTagName("span")[0];
    //       var a_db_data_n =  a_db_data_n.innerHTML;
    //       main_db[db_header[index].innerHTML].push(a_db_data_n);
    //     }else{// spanが一段階の時
    //       var a_db_data_n =  a_db_data_n.innerHTML;
    //       main_db[db_header[index].innerHTML].push(a_db_data_n);
    //     }
    //   }
    // });
    // console.log(main_db);

        // スケジュールフォーム、時間入力時のみカラーの設定
    // ターゲット取得
    var sc_ft1s = document.querySelectorAll('.ft1');
    var sc_ft2s = document.querySelectorAll('.ft2');
    var st2s = document.querySelectorAll('.fs2');   

    sc_ft1s.forEach(element=>{
      element.style["background-color"] ="gray";
      element.style["border"] ="solid 3px gray";
    });
    sc_ft2s .forEach(element=>{
      element.style.backgroundColor ="gray";
      element.style["border"] ="solid 3px gray";
    });
    
    // ステータスが一部勤務可能の時のみ色変更
    st2s.forEach(function(element,index){
        element.addEventListener("change", function() {
            console.log(element);
            var elementv = element.value;
            console.log(elementv);
            if(elementv == '一部勤務可能'){
            element.style["background-color"] ="#17837c";
            element.style["color"] ="white";
            element.style["border"] ="solid 3px #17837c";
            element.style["font-weight"] ="normal";
            sc_ft1s[index].style["background-color"] ="white";
            sc_ft1s[index].style["border"] ="solid 3px #777777";
            sc_ft2s[index].style["background-color"] ="white";
            sc_ft1s[index].style["border"] ="solid 3px #777777";
            }
            if(elementv == '勤務不可'){
              element.style["background-color"] ="gray";
              element.style["color"] ="white";
              element.style["border"] ="solid 3px gray";
              element.style["font-weight"] ="normal";
            }
            if(elementv == '終日勤務可能'){
              element.style["background-color"] ="#17837c";
              element.style["color"] ="white";
              element.style["border"] ="solid 3px #17837c";
              element.style["font-weight"] ="normal";
            }
            
        });
    });








}}








