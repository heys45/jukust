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



<div style="font-family: -apple-system, BlinkMacSystemFont, Roboto, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Avenir, &quot;Helvetica Neue&quot;, &quot;Lucida Grande&quot;, sans-serif; height: 100vh; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
  <div>
    <style>
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                @media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }</style>
              
    <div style="display: inline-block; text-align: left; line-height: 49px; height: 49px; vertical-align: middle;">
    <h2 style="font-size: 14px; font-weight: normal; line-height: 49px; margin: 0px; padding: 0px;">
        Application error: a client-side exception has occurred (see the browser console for more information).
    </h2>
    </div>
    </div>
    </div>