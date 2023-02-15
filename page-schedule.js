


function page_schedule(){
setTimeout(timefunc,300);

function timefunc(){
if(prop_object["ページ表示名"]==="スケジュール提出"){

    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // DB表示設定代項目
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    // 教室or講師IDによるDBフィルタ
    // 前提：データベースはグループ化しておく

    const groups = document.querySelectorAll('.notion-collection-group__section');
    groups.forEach(element =>{
        var group_id = element.getElementsByTagName("span")[1].innerHTML;
        element.classList.add("t"+ group_id);
    });

    var teacher_id = prop_object["講師ID"];
    var teacher_class =".t"+teacher_id
    var test = document.querySelectorAll(teacher_class);
    console.log(test);

    test.forEach(element =>{
    element.style.display = "block" ;
    });




    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // フォーム表示設定代項目
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    // シフトフォームの表示
    // const sh_form = document.getElementById("shift-form");
    // sh_form.style.display = 'block';
    // シフトフォームの表示
    const sc_form = document.getElementById("schedule-form");
    sc_form.style.display = 'block';
    // 提出期間変更ボタン表示
    const select_term = document.getElementsByClassName("select-term")[0];
    select_term.style.display = 'block';


    // フォームを指定したテキストブロック要素の後に挿入
    var form_area = document.getElementById("form-area");
    console.log(form_area);
    var quote_name = "シフト申請はこちらから";
    var test = document.getElementById(quote_name);
    console.log(test);

    let div = document.createElement("div");
    console.log(div);
    test.after(div);
    test.after(form_area);


    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    // 表示設定小項目
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    // フォームプロパティ表示設定
    const adjs = document.querySelectorAll(".adj");
    adjs.forEach(function(adj){
    adj.style.display = 'none';
    });
    const status = document.querySelectorAll(".fs");
    status.forEach(function(state){
    state.style.display = 'none';
    });
    const fds = document.querySelectorAll(".fd");
    fds.forEach(function(fd){
    fd.style.display = 'none';
    });



    //フォームのプルダウン値設定
    //日付部分
    const formdays = document.querySelectorAll('.fd');
    //グループごとにidにプロパティ名を設定
    formdays.forEach(function(formday,index){
      var date=new Date();
      date.setDate(date.getDate() + 1+index);
      var year = date.getFullYear();
      var month = date.getMonth();
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
    // //開始調整時刻の設定
    // const adt1s = document.querySelectorAll('.adft1');
    // adt1s.forEach(function(ft1){
    // times.forEach(function(time){
    //   var option = document.createElement('option');
    //   option.textContent = time;
    //   ft1.appendChild(option);
    // });
    // });
    // //終了調整時刻の設定
    // const adt2s = document.querySelectorAll('.adft2');
    // adt2s.forEach(function(ft2){
    // times2.forEach(function(time){
    //   var option = document.createElement('option');
    //   option.textContent = time;
    //   ft2.appendChild(option);
    // });
    // });
    //ステータス
    // const fss = document.querySelectorAll('.fs');
    // var sta = ["講師回答前", "勤務確定", "勤務不可", "調整中"]
    // fss.forEach(function(fs){
    // sta.forEach(function(time){
    //   var option = document.createElement('option');
    //   option.textContent = time;
    //   fs.appendChild(option);
    // });
    // });
    //スケジュール用ステータス
    const fs2s = document.querySelectorAll('.fs2');
    var sta2 = ["選択してください","終日勤務可能", "一部勤務可能", "勤務不可", "調整中"]
    fs2s.forEach(function(fs){
    sta2.forEach(function(sta2){
      var option = document.createElement('option');
      option.textContent = sta2;
      option.value = sta2;
      fs.appendChild(option);
    });
    });

    // スケジュールフォーム、時間入力時のみカラーの設定
    // ターゲット取得
    sc_ft1s = sc_form.querySelectorAll('.ft1');
    sc_ft2s = sc_form.querySelectorAll('.ft2');
    st2s = document.querySelectorAll('.fs2');
    // ステータスが一部勤務可能の時のみ色変更
    st2s.forEach(function(st2,index){
        st2.onchange= function(){
            var st2v = st2.value;
            if(st2v == '一部勤務可能'){
            sc_ft1s[index].style["background-color"] ="white";
            sc_ft2s[index].style["background-color"] ="white";
            }
        }
    });
    
    


    // フォーム初期値設定
    document.getElementById("teaid").value = prop_object["講師ID"];
  

    function addAnswer(){

      var newElement = document.createElement("p"); // p要素作成
      var newContent = document.createTextNode("子要素２"); // テキストノードを作成
      newElement.appendChild(newContent); // p要素にテキストノードを追加
       
       
      // 子要素１への参照を取得
      var childP1 = document.getElementById("form-area");
       
      // 追加
      parentDiv.insertBefore(newElement, childP1.nextSibling);


    }



}}}



window.addEventListener('load', page_schedule);
window.addEventListener('pageshow', page_schedule);







