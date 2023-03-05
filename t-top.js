
setTimeout(timefunc,600);
function timefunc(){
if(prop_object["ページ表示名"]==="講師トップページ"){


var topguide =document.getElementById("マイページへようこそ").nextSibling.nextSibling;

topguide.innerHTML="講師用｜"+prop_object["姓"]+prop_object["名"]+"先生";
topguide.style.fontWeight="bolder";



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォーム表示設定代項目　3分
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // 使用するフォームの選択
  const sh_form = document.getElementById("shift-form");
  const sc_form = document.getElementById("schedule-form");
  const wr_form = document.getElementById("wr-form");

  wr_form.remove();  
  sc_form.remove();
  sh_form.remove();

// 出力する場所を用意（quoteを指定）
var area_target = document.getElementById("勤怠報告はこちらから").nextElementSibling;
var form_area = document.createElement("div")
area_target.after(form_area);

var houkoku_form =''+
'<form class="houkoku_form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdLDyYrhBECVA8Qbw_8YATYgGjH7n4nsntWg-LSx3oQKi7H3A/formResponse">'+
'<input type="text" name="entry.709565382" class="teaid">'+
'<input type="text" name="entry.1479770506" class="schid">'+
'<input type="text" name="entry.390570208" class="worid">'+
'<input type="text" name="entry.858388200" class="fd">'+
'<input type="text" name="entry.92160164" class="houkoku">'+
'<textarea name="entry.1043875530" class="hosoku"></textarea>'+
'<input type="text" name="entry.1236686027" class="bosscheck">'+
'<select name="entry.1155261595" class="ft1"><option value=""></option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>'+
'<select name="entry.437373386" class="ft2"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>'+
'<select name="entry.419752739" class="ft3"><option value=""></option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>'+
'<select name="entry.114545285" class="ft4"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>'+
'<select name="entry.780733668" class="ft5"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="96">96</option><option value="97">97</option><option value="98">98</option><option value="99">99</option><option value="100">100</option><option value="101">101</option><option value="102">102</option><option value="103">103</option><option value="104">104</option><option value="105">105</option><option value="106">106</option><option value="107">107</option><option value="108">108</option><option value="109">109</option><option value="110">110</option><option value="111">111</option><option value="112">112</option><option value="113">113</option><option value="114">114</option><option value="115">115</option><option value="116">116</option><option value="117">117</option><option value="118">118</option><option value="119">119</option><option value="120">120</option><option value="121">121</option><option value="122">122</option><option value="123">123</option><option value="124">124</option><option value="125">125</option><option value="126">126</option><option value="127">127</option><option value="128">128</option><option value="129">129</option><option value="130">130</option><option value="131">131</option><option value="132">132</option><option value="133">133</option><option value="134">134</option><option value="135">135</option><option value="136">136</option><option value="137">137</option><option value="138">138</option><option value="139">139</option><option value="140">140</option><option value="141">141</option><option value="142">142</option><option value="143">143</option><option value="144">144</option><option value="145">145</option><option value="146">146</option><option value="147">147</option><option value="148">148</option><option value="149">149</option><option value="150">150</option><option value="151">151</option><option value="152">152</option><option value="153">153</option><option value="154">154</option><option value="155">155</option><option value="156">156</option><option value="157">157</option><option value="158">158</option><option value="159">159</option><option value="160">160</option><option value="161">161</option><option value="162">162</option><option value="163">163</option><option value="164">164</option><option value="165">165</option><option value="166">166</option><option value="167">167</option><option value="168">168</option><option value="169">169</option><option value="170">170</option><option value="171">171</option><option value="172">172</option><option value="173">173</option><option value="174">174</option><option value="175">175</option><option value="176">176</option><option value="177">177</option><option value="178">178</option><option value="179">179</option><option value="180">180</option></select>'+
'</form>';


// 過去の日付で勤怠報告未完了のものを取得
console.log(dbs[2]["日付"]);
dbs[2]["日付"].forEach((element,index)=>{

  // フォームの作成
  console.log(dbs[2]["開始報告フラグ"][index])
  if(dbs[2]["開始報告フラグ"][index]==1){
  form_area.insertAdjacentHTML("beforeend", houkoku_form );
  var ele =document.querySelectorAll("form")[document.querySelectorAll("form").length-1];
  console.log(ele);
  console.log(ele.querySelectorAll(".teaid")[0]);
  ele.querySelectorAll("teaid")[0].setAttribute("value",prop_object["会員ID"]);
  ele.querySelectorAll("fd")[0].setAttribute("value",dbs[2]["日付"][index]);
  ele.querySelectorAll("houkoku")[0].setAttribute("value","出勤");

  var submit_button = document.createElement("button");
  submit_button.setAttribute("type","submit");
  submit_button.innerHTML="出勤報告する"
  ele.appendChild(submit_button);

  var form_iframe = document.createElement("iframe");
  form_iframe.setAttribute("name","hidden_iframe");
  form_iframe.setAttribute("id","hidden_iframe");
  form_iframe.style.display="none";
  ele.appendChild(form_iframe);
  ele.setAttribute("method","post");
  ele.setAttribute("target","hidden_iframe");

  submit_button.addEventListener('click',function(){
  ele.style.display="none"

  // フォームのラベル作成
  var kinmu_info ="<p>"+dbs[2]["日付"][index]+"｜"+dbs[2]["開始時刻"][index]+"〜"+dbs[2]["終了時刻"][index]+"</p>";
  ele.insertAdjacentHTML("beforebegin", kinmu_info );

  });}









  // フォームの作成
  console.log(dbs[2]["終了報告フラグ"][index])
  if(dbs[2]["終了報告フラグ"][index]==1){
  form_area.insertAdjacentHTML("beforeend", houkoku_form );
  var ele =document.querySelectorAll("form")[document.querySelectorAll("form").length-1];
  ele.querySelectorAll(".teaid")[0].setAttribute("value",prop_object["会員ID"]);
  ele.querySelectorAll(".fd")[0].setAttribute("value",dbs[2]["日付"][index]);
  ele.querySelectorAll(".houkoku")[0].setAttribute("value","退勤");

  var submit_button = document.createElement("button");
  submit_button.setAttribute("type","submit");
  submit_button.innerHTML="退勤報告する"
  ele.appendChild(submit_button);

  var form_iframe = document.createElement("iframe");
  form_iframe.setAttribute("name","hidden_iframe");
  form_iframe.setAttribute("id","hidden_iframe");
  form_iframe.style.display="none";
  ele.appendChild(form_iframe);
  ele.setAttribute("method","post");
  ele.setAttribute("target","hidden_iframe");

  submit_button.addEventListener('click',function(){
    ele.style.display="none"

  // フォームのラベル作成
  var kinmu_info ="<p>"+dbs[2]["日付"][index]+"｜"+dbs[2]["開始時刻"][index]+"〜"+dbs[2]["終了時刻"][index]+"</p>";
  ele.insertAdjacentHTML("beforebegin", kinmu_info );

  });}


  })


  // フォーム不要項目の非表示
  // const death_prop = document.querySelectorAll("");
  // death_prop.forEach(element=>{  element.style.display = 'none'; });



//     







    
    // // フォームデザインのフォーマットを用意
    // form_area.appendChild(document.getElementsByClassName("day-box")[0].cloneNode(true));
    // var target1 = form_area.lastChild;
    // console.log(target1);
    // target1.style.display = "flex";
    // // 日付を入れ
    // var day_label =element.replace(".*\/","");
    // target1.getElementsByClassName("day-label")[0].innerHTML = day_label;
    // var start = kintai_db["開始時刻"][index];
    // var end = kintai_db["終了時刻"][index];
    // db_info = "勤務時間｜" + start +"〜"+end;

    // target1.getElementsByClassName("sh-info")[0].innerHTML = db_info;
    // target1.getElementsByClassName("sh-info")[0].style.fontWeight="bold";
    // target1.getElementsByClassName("sh-info")[0].style.fontSize="18px";
    // target1.getElementsByClassName("sch-info")[0].remove();
    // target1.getElementsByClassName("ajs-info")[0].remove();

    // フォームを挿入して、解答欄のラベル（ガイド）をつけてあげる
    // var shift_form = document.getElementsByClassName("dg")[0];
    // shift_form.style.display ="block";
    // target1.getElementsByClassName("day-box-form")[0].appendChild(shift_form);
    // target1.getElementsByClassName("fd")[0].value=element;

    // var time_guide = document.createElement("span");
    // time_guide.innerHTML = "実際の出勤時間｜";
    // target1.getElementsByClassName("wh")[0].before(time_guide);
    // var time_guide = document.createElement("span");
    // time_guide.innerHTML = "<br>↓勤務開始時間変更 or 遅刻した場合のみ記入<br>";
    // time_guide.style["font-size"]="14px"
    // time_guide.style["color"]="#34675C"
    // target1.getElementsByClassName("wm")[0].before(time_guide);


    // var time_guide = document.createElement("span");
    // time_guide.innerHTML = "実際の休憩時間｜";
    // target1.getElementsByClassName("bh")[0].before(time_guide);

    // var time_guide = document.createElement("span");
    // time_guide.innerHTML = "<br>↓休憩時間が減った or 増えた場合など記入<br><br>";
    // time_guide.style["font-size"]="14px"
    // time_guide.style["color"]="#34675C"
    // target1.getElementsByClassName("bm")[0].before(time_guide);
    // time_guide.style["font-size"]="14px"
    // time_guide.style["color"]="#34675C"
    // var time_guide = document.createElement("span");
    // time_guide.innerHTML = "補足・備考｜*勤務時間変更時などは説明<br>";
    

    // target1.getElementsByClassName("hosoku")[0].before(time_guide);
    // target1.getElementsByClassName("hosoku")[0].style.width = "calc(100%)";



//   }

// });



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// フォームボックスの拡張①　送信後のメッセージ作成　10min
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  
// #region 【個別】送信後のメッセージ作成
  //フォーム送信後の処理
  // form_button.addEventListener('click',function(){
  //   form_comfirm.style.display="block";
  //   form_button.style["background-color"]="gray";
  //   form_button.innerHTML="送信完了";
  //   form_comfirm.innerHTML='<p>勤怠報告が完了しました。データの反映には2分ほど時間がかかります。</p><p>送信内容</p><div id="re_content"></div>';


    // // 送信内容の作成
    // var restarts = document.querySelectorAll(".day-box .fs2");
    // console.log(restarts);
    // restarts.forEach((element,index) =>{
    //   console.log(element);
    //   if(element.value !="選択してください"){
    //     var resta = document.querySelectorAll(".day-box .fs2")[index].value;
    //     var reday = document.querySelectorAll(".day-box .fd")[index].value;
    //     var restart = document.querySelectorAll(".day-box .ft1")[index].value;
    //     var reend = document.querySelectorAll(".day-box .ft2")[index].value;
    //     if(document.querySelectorAll(".day-box .hosoku")[index].value !=null){
    //       var rehosoku = "<br>補足｜"+document.querySelectorAll(".day-box .hosoku")[index].value;
    //     }else{var rehosoku =""}
    //     var re_content = reday+"｜"+resta+"｜"+restart+"〜"+reend+rehosoku;
    //     var re_contentp = document.createElement("p");
    //     re_contentp.innerHTML= re_content;
    //     document.getElementById("re_content").appendChild(re_contentp);
    //   }
    // });

  // });
  
 //#endregion



document.querySelectorAll("#form>.in-dg").forEach(element => {
  element.remove();
});
document.querySelectorAll("#form>.out-dg").forEach(element => {
  element.remove();
});

document.getElementById("db-4").style.display="none";









//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// データベースの値取得準備
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var senkou_db ={};
if(document.getElementById("db-3") !=null){
var db_data = document.getElementById("db-3").querySelectorAll("tr:not(#db-3-1)");
var db_header = document.getElementById("db-3-1").querySelectorAll("th");
console.log(db_header);
db_header.forEach(element => {
  senkou_db[element.innerHTML] =[];
});
var nullspan = document.createElement("span");
db_data.forEach(element => {
  var a_db_data = element.querySelectorAll("td");
  console.log(a_db_data);
  for (let index = 0; index < db_header.length; index++) {
    a_db_data[index].appendChild(nullspan);
    var a_db_data_n = a_db_data[index].getElementsByTagName("span")[0];
    if (a_db_data_n.getElementsByTagName("span")[0] !=null) {// spanが二段階の時
      var a_db_data_n = a_db_data_n.getElementsByTagName("span")[0];
      var a_db_data_n =  a_db_data_n.innerHTML;
      senkou_db[db_header[index].innerHTML].push(a_db_data_n);
    }else{// spanが一段階の時
      var a_db_data_n =  a_db_data_n.innerHTML;
      senkou_db[db_header[index].innerHTML].push(a_db_data_n);
    }
  }
});
console.log(senkou_db);

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 選考状況による表示編集
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

senkou_db["TimeRex入力済"].forEach((element,index)=>{
  if(senkou_db["TimeRex入力済"][index]==0){
    var area_target = document.getElementById("やることリスト").nextElementSibling;

    var TimeRexbox = document.createElement("div");
    TimeRexbox.setAttribute("id","TRB")
    area_target.after(TimeRexbox);
    area_target = document.getElementById("TRB");

    setTimeout(timefunc2,5000);
    function timefunc2(){
    var testrex =document.createElement("div");
    testrex.innerHTML="タイムレックスが入力済みでないのでここにタイムレックスを表示<br><br>タイムレックス入力後は、面談の案内<br><br>面談後、合格ならシフト入力の案内<br><br>不合格の場合は何を表示しましょう？？"
    testrex.style.height="500px"
    testrex.style["background-color"]="#eeeeee";
    area_target.appendChild(testrex);

    var TimeRex = document.createElement("div");
    TimeRex.setAttribute("id","timerex_calender");
    TimeRex.setAttribute("data-url","https://timerex.net/s/juku-spot/5e012623");
    area_target.appendChild(TimeRex);

    var TimeRex = document.createElement("script");
    TimeRex.setAttribute("id","timerex_embed");
    TimeRex.setAttribute("src","https://asset.timerex.net/js/embed.js");
    area_target.appendChild(TimeRex);

    // var TimeRex = document.createElement("script");
    // TimeRex.setAttribute("type","text/javascript");
    // TimeRex.innerHTML="TimerexCalendar();"
    // area_target.appendChild(TimeRex);
    // var TimeRexdata = document.getElementById("timerex_calendar");
    // area_target.appendChild(TimeRexdata);
    }


  };
 });//選考状況終わり

}


}}





