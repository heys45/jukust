https://heys45.github.io/jukust/shift-form


プロパティ名取得用関数
https://heys45.github.io/jukust/prop-search.js



-------------------------
ターミナルのコマンド
-------------------------

ファイル名の変更
git mv shift-form.html super-raw.html


// 日付部分
console.log(main_db["日付"]);
main_db["日付"].forEach((element,index)=>{
  var counter = 0;
  console.log(main_db["報告フラグ"]);
  if(main_db["報告フラグ"][index]=1){
    // フォーマットの複製
    var target =document.getElementsByClassName("wr-formbox")[counter];
    var clone  = target.cloneNode(true);
    target.after(clone);

    // 出勤フォーマットにフォーム挿入
    var formset = document.getElementsByClassName("in-dg")[counter];
    target.getElementsByClassName("in-content")[0].appendChild(formset);
    // 出勤フォーマットにデータセット
    target.getElementsByClassName("in-day-label")[0].textContent = element;

    var target_class="in-fd" ; var textcontent = "実際の出勤時間";
    spancontent.textContent = textcontent;
    var spancontent =document.create("span");
    target.getElementsByClassName(target_class)[0].before(spancontent);



    // 退勤フォーマットにフォーム挿入
    var formset = document.getElementsByClassName("out-dg")[counter];
    target.getElementsByClassName("out-content")[0].appendChild(formset);
    // 退勤フォーマットにデータセット
    target.getElementsByClassName("out-day-label")[0].textConten= element;

    // カウントアップ
    var counter = counter+1;

  }