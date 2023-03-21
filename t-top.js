
setTimeout(timefunc,600);
function timefunc(){
if(prop_object["ページ表示名"]==="講師トップページ"){


var topguide =document.getElementById("スポットバイトへようこそ！").nextSibling.nextSibling;
topguide.innerHTML="講師用｜"+prop_object["姓"]+prop_object["名"]+"先生";
topguide.style.fontWeight="bolder";


if(prop_object["口座番号（半角数字）"] ==null){
var kojinform_wrapper = document.createElement("div")
topguide.after(kojinform_wrapper);
var kojinform = document.createElement("a")
kojinform_wrapper.appendChild(kojinform)
kojinform.setAttribute("href", "https://docs.google.com/forms/d/e/1FAIpQLSdshC5GsKHZhps40FNkEShsnnat6-B4Y_EQdRHk0XlXpwV9mg/viewform?usp=pp_url&entry.1339375578="+prop_object["会員ID"])
kojinform.innerHTML="個人情報、給与振り込み口座の情報を提出してください"
}


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

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// シフトDBの情報取得  sf_list
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region
// kt_listのデータ取得。
var kt_list_db = document.querySelectorAll(".notion-collection-table")[document.querySelectorAll(".notion-collection-table").length-1];
    kt_list_db.style.width="100%"
var kt_list ={};
var headers0 = kt_list_db.querySelectorAll("thead th");
var headers = []
 headers0.forEach(element =>{
   headers.push(element.innerHTML)
   kt_list[element.innerHTML] =[];
 })
 console.log(headers);
var rowdatas = kt_list_db.querySelectorAll("tbody tr");
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
       kt_list[headers[i]].push(data);
 }})
 console.log(kt_list);
 // ここまでで page_list["カラム名"]["行数"]でデータ取得可能。


//#endregion




// 出力する場所を用意（quoteを指定）
var form_copy = '<div class="form-wrapper"><div class="form-header"><span class="header-day">出勤報告フォーム｜X月X日(〜)</span></div><div class="form-block"><span class="info11">勤務予定のシフト：</span><br><span class="info13">教室からの補足備考：</span><br><p class="info14">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p><span class="info15">講師からの補足備考：</span><br><p class="info16">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p></div><form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfSYBbS4NOAjOGH1hafebiJVHKtUeHBfmvuQhjSZ5zjizfRUg/formResponse" method="post" target="hidden_iframe"><div class="form-none"><input type="text" name="entry.592475116" class="f-day"><input type="text" name="entry.1724347970" class="f-oubo"><input type="text" name="entry.978702857" class="f-kaiin"><input type="text" name="entry.1359978560" class="f-kaiin-name"><input type="text" name="entry.1735963854" class="f-school"><input type="text" name="entry.1636462857" class="f-school-name"></div><div class="form-block"><button type="submit">出勤報告する</button></div><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe></form></div>';
var area_target = document.getElementById("勤怠報告はこちらから").nextElementSibling;
var form_area = document.createElement("div");
area_target.after(form_area );

kt_list["日付"].forEach((element,index)=>{
if(kt_list["勤怠ステータス"][index]==null){

  form_area.insertAdjacentHTML("beforeend",form_copy);
  var wrap =document.querySelectorAll(".form-wrapper:last-child")[0];
  wrap.querySelectorAll(".header-day")[0].innerHTML= element+"｜出勤報告フォーム" ;
  wrap.querySelectorAll("form .f-day")[0].value= element ;
  wrap.querySelectorAll("form .f-kaiin")[0].value= prop_object["会員ID"];
  wrap.querySelectorAll("form .f-kaiin-name")[0].value= prop_object["姓"]+prop_object["名"];
  wrap.querySelectorAll("form .f-school")[0].value= prop_object["教室ID"];
  wrap.querySelectorAll("form .f-school-name")[0].value= kt_list["教室名（グループ名）"][index];
  wrap.querySelectorAll("form .f-oubo")[0].value= prop_object["応募ID"];
  wrap.querySelectorAll(".form-none")[0].style.display="none";
 
wrap.querySelectorAll(".info11")[0].innerHTML= "シフト内容｜"+kt_list["勤務依頼時刻｜開始"][index]+" 〜 "+kt_list["勤務依頼時刻｜終了"][index]+"｜休憩時間："+ kt_list["休憩時間（依頼）"][index]+" 分 ";

if(kt_list["備考・補足　シフト提出時"][index] !=null ){
wrap.querySelectorAll(".info14")[0].innerHTML= kt_list["備考補足　シフト提出時"][index];
}else{
wrap.querySelectorAll(".info13")[0].nextSibling.remove()
wrap.querySelectorAll(".info13")[0].style.display="none";
wrap.querySelectorAll(".info14")[0].style.display="none";
}
if(kt_list["備考補足　依頼への回答時"][index] !=null ){
    wrap.querySelectorAll(".info16")[0].innerHTML= kt_list["備考補足　シフト提出時"][index];
    }else{
    wrap.querySelectorAll(".info15")[0].nextSibling.remove()
    wrap.querySelectorAll(".info15")[0].style.display="none";
    wrap.querySelectorAll(".info16")[0].style.display="none";
    }

}})

// 勤怠ボタンプッシュ時の動作設定
var kintai_button =document.querySelectorAll(".form-wrapper form button")
kintai_button.forEach((element,index)=>{
  element.addEventListener('click',function(){
      var wrap = document.querySelectorAll(".form-wrapper")[index];
      element.style.display="none";
      wrap.querySelectorAll("info11")[0].insertAdjacentHTML("beforebegin","勤怠報告が完了しました。");
  })
})




// 出力する場所を用意（quoteを指定）
var form_copy2 = '<div class="form-wrapper2"><div class="form-header"><span class="header-day">退勤報告フォーム｜X月X日(〜)</span></div><div class="form-block"><span class="info11">勤務予定のシフト：</span><br><span class="info13">教室からの補足備考：</span><br><p class="info14">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p><span class="info15">講師からの補足備考：</span><br><p class="info16">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p></div><form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeUXbhdbbSIvKdQug9Hu9V9-sCBzgfNfwZ6Ydk4yRmdEP530Q/formResponse" method="post" target="hidden_iframe"><div class="form-none"><input type="text" name="entry.1294051003" class="f-day"><input type="text" name="entry.967381962" class="f-oubo"><input type="text" name="entry.1270091844" class="f-kaiin"><input type="text" name="entry.1720417205" class="f-kaiin-name"><input type="text" name="entry.2142978520" class="f-school"><input type="text" name="entry.335944105" class="f-school-name"></div><div class="form-block"><p class="info14">▼勤務予定から変更があった場合のみ記入してください。</p><span>実際の開始時間：</span><select name="entry.889221635" class="f-time1"><option value=""></option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option></select><span>時</span><select name="entry.1285381840" class="f-time2"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06"0>6</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select><span>分</span><br><span>実際の終了時間：</span><select name="entry.1419425410" class="f-time1"><option value=""></option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option></select><span>時</span><select name="entry.1563648415" class="f-time2"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select><span>分</span><br><span>実際の休憩時間 ：</span><select name="entry.1369008510" class="f-time2"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="96">96</option><option value="97">97</option><option value="98">98</option><option value="99">99</option><option value="100">100</option><option value="101">101</option><option value="102">102</option><option value="103">103</option><option value="104">104</option><option value="105">105</option><option value="106">106</option><option value="107">107</option><option value="108">108</option><option value="109">109</option><option value="110">110</option><option value="111">111</option><option value="112">112</option><option value="113">113</option><option value="114">114</option><option value="115">115</option><option value="116">116</option><option value="117">117</option><option value="118">118</option><option value="119">119</option><option value="120">120</option></select><span>分</span><br></div><div class="form-block"><span>補足備考：</span><br><textarea name="entry.2146375772" class="f-hosoku"></textarea></div><div class="form-block"><button type="submit">退勤報告する</button></div><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe></form></div>';
var area_target = document.getElementById("勤怠報告はこちらから").nextElementSibling;
var form_area = document.createElement("div");
area_target.after(form_area );

kt_list["日付"].forEach((element,index)=>{
if(kt_list["勤怠ステータス"][index]=="出勤報告済み"){

  form_area.insertAdjacentHTML("beforeend",form_copy2);
  var wrap =document.querySelectorAll(".form-wrapper2:last-child")[0];
  wrap.querySelectorAll(".header-day")[0].innerHTML= element+"｜退勤報告フォーム" ;
  wrap.querySelectorAll("form .f-day")[0].value= element ;
  wrap.querySelectorAll("form .f-kaiin")[0].value= prop_object["会員ID"];
  wrap.querySelectorAll("form .f-kaiin-name")[0].value= prop_object["姓"]+prop_object["名"];
  wrap.querySelectorAll("form .f-school")[0].value= prop_object["教室ID"];
  wrap.querySelectorAll("form .f-school-name")[0].value= kt_list["教室名（グループ名）"][index];
  wrap.querySelectorAll("form .f-oubo")[0].value= prop_object["応募ID"];
  wrap.querySelectorAll(".form-none")[0].style.display="none";
 
wrap.querySelectorAll(".info11")[0].innerHTML= "シフト内容｜"+kt_list["勤務依頼時刻｜開始"][index]+" 〜 "+kt_list["勤務依頼時刻｜終了"][index]+"｜休憩時間："+ kt_list["休憩時間（依頼）"][index]+" 分 ";

if(kt_list["備考・補足　シフト提出時"][index] !=null ){
wrap.querySelectorAll(".info14")[0].innerHTML= kt_list["備考補足　シフト提出時"][index];
}else{
wrap.querySelectorAll(".info13")[0].nextSibling.remove()
wrap.querySelectorAll(".info13")[0].style.display="none";
wrap.querySelectorAll(".info14")[0].style.display="none";
}
if(kt_list["備考補足　依頼への回答時"][index] !=null ){
    wrap.querySelectorAll(".info16")[0].innerHTML= kt_list["備考補足　シフト提出時"][index];
    }else{
    wrap.querySelectorAll(".info15")[0].nextSibling.remove()
    wrap.querySelectorAll(".info15")[0].style.display="none";
    wrap.querySelectorAll(".info16")[0].style.display="none";
    }
 
}})


// フォーム提出時の動作設定
var submit_button = document.querySelectorAll(".form-wrapper form .form-block button");
submit_button.forEach((element,index)=>{
  element.addEventListener('click',function(e){
    // バリデーション
    e.preventDefault();
    var wrap = document.querySelectorAll(".form-wrapper2")[index]  
    // 通常
    if(wrap.querySelectorAll(".f-time1")[0].value != "" &&wrap.querySelectorAll(".f-time2")[0].value != ""&&wrap.querySelectorAll(".f-time1")[1].value != "" &&wrap.querySelectorAll(".f-time2")[1].value != ""&&wrap.querySelectorAll(".f-time1")[0].value != "" &&wrap.querySelectorAll(".f-time2")[2].value != ""){
      wrap.querySelectorAll(".info11")[0].insertAdjacentHTML("beforebegin","勤怠報告が完了しました。");
      wrap.querySelectorAll("form")[0].style.display="none";
      document.querySelectorAll("form")[index].submit();
    }
    if(wrap.querySelectorAll(".f-time1")[0].value == "" &&wrap.querySelectorAll(".f-time2")[0].value == ""&&wrap.querySelectorAll(".f-time1")[1].value == "" &&wrap.querySelectorAll(".f-time2")[1].value == ""&&wrap.querySelectorAll(".f-time1")[0].value == "" &&wrap.querySelectorAll(".f-time2")[2].value == ""){
      wrap.querySelectorAll(".info11")[0].insertAdjacentHTML("beforebegin","勤怠報告が完了しました。");
      wrap.querySelectorAll("form")[0].style.display="none";
      document.querySelectorAll("form")[index].submit();
    }
    else{
      alert("勤務時間、休憩時間の変更申請をする際は、【全ての値を入力】してください。");   
    }
  })
})





















}}









// // 出力する場所を用意（quoteを指定）
// var area_target = document.getElementById("勤怠報告はこちらから").nextElementSibling;
// var form_area = document.createElement("div")
// area_target.after(form_area);

// var houkoku_form =''+
// '<form class="houkoku_form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdLDyYrhBECVA8Qbw_8YATYgGjH7n4nsntWg-LSx3oQKi7H3A/formResponse">'+
// '<input type="text" name="entry.709565382" class="teaid">'+
// '<input type="text" name="entry.1479770506" class="schid">'+
// '<input type="text" name="entry.390570208" class="worid">'+
// '<input type="text" name="entry.858388200" class="fd">'+
// '<input type="text" name="entry.92160164" class="houkoku">'+
// '<select name="entry.1155261595" class="ft1"><option value=""></option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>'+
// '<select name="entry.437373386" class="ft2"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>'+
// '<select name="entry.419752739" class="ft3"><option value=""></option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>'+
// '<select name="entry.114545285" class="ft4"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>'+
// '<select name="entry.780733668" class="ft5"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="96">96</option><option value="97">97</option><option value="98">98</option><option value="99">99</option><option value="100">100</option><option value="101">101</option><option value="102">102</option><option value="103">103</option><option value="104">104</option><option value="105">105</option><option value="106">106</option><option value="107">107</option><option value="108">108</option><option value="109">109</option><option value="110">110</option><option value="111">111</option><option value="112">112</option><option value="113">113</option><option value="114">114</option><option value="115">115</option><option value="116">116</option><option value="117">117</option><option value="118">118</option><option value="119">119</option><option value="120">120</option><option value="121">121</option><option value="122">122</option><option value="123">123</option><option value="124">124</option><option value="125">125</option><option value="126">126</option><option value="127">127</option><option value="128">128</option><option value="129">129</option><option value="130">130</option><option value="131">131</option><option value="132">132</option><option value="133">133</option><option value="134">134</option><option value="135">135</option><option value="136">136</option><option value="137">137</option><option value="138">138</option><option value="139">139</option><option value="140">140</option><option value="141">141</option><option value="142">142</option><option value="143">143</option><option value="144">144</option><option value="145">145</option><option value="146">146</option><option value="147">147</option><option value="148">148</option><option value="149">149</option><option value="150">150</option><option value="151">151</option><option value="152">152</option><option value="153">153</option><option value="154">154</option><option value="155">155</option><option value="156">156</option><option value="157">157</option><option value="158">158</option><option value="159">159</option><option value="160">160</option><option value="161">161</option><option value="162">162</option><option value="163">163</option><option value="164">164</option><option value="165">165</option><option value="166">166</option><option value="167">167</option><option value="168">168</option><option value="169">169</option><option value="170">170</option><option value="171">171</option><option value="172">172</option><option value="173">173</option><option value="174">174</option><option value="175">175</option><option value="176">176</option><option value="177">177</option><option value="178">178</option><option value="179">179</option><option value="180">180</option></select>'+
// '<textarea name="entry.1043875530" class="hosoku"></textarea>'+
// '<input type="text" name="entry.1236686027" class="bosscheck">'+
// '</form>';


// // 過去の日付で勤怠報告未完了のものを取得
// console.log(dbs[2]["日付"]);
// dbs[2]["日付"].forEach((element,index)=>{

//   // フォームの作成
//   if(dbs[2]["開始報告フラグ"][index]==1 && dbs[2]["会員ID"][index]==prop_object["会員ID"] ){
//   form_area.insertAdjacentHTML("beforeend", houkoku_form );
//   var ele =document.querySelectorAll("form")[document.querySelectorAll("form").length-1];
//   console.log(ele);
//   console.log(ele.getElementsByClassName("teaid")[0]);
//   ele.getElementsByClassName("teaid")[0].setAttribute("value",prop_object["会員ID"]);
//   ele.getElementsByClassName("fd")[0].setAttribute("value",dbs[2]["日付"][index]);
//   ele.getElementsByClassName("houkoku")[0].setAttribute("value","出勤");

//   var submit_button = document.createElement("button");
//   submit_button.setAttribute("type","submit");
//   submit_button.innerHTML="出勤報告する"
//   ele.appendChild(submit_button);

//   var form_iframe = document.createElement("iframe");
//   form_iframe.setAttribute("name","hidden_iframe");
//   form_iframe.setAttribute("id","hidden_iframe");
//   form_iframe.style.display="none";
//   ele.appendChild(form_iframe);
//   ele.setAttribute("method","post");
//   ele.setAttribute("target","hidden_iframe");

//   // フォームのラベル作成
//   var kinmu_info ="<p>"+dbs[2]["日付"][index]+"｜"+dbs[2]["開始時刻"][index]+"〜"+dbs[2]["終了時刻"][index]+"</p>";
//   ele.insertAdjacentHTML("afterbegin", kinmu_info );


//   // 非表示プロパティの設定
//   const death_prop = ele.querySelectorAll(".teaid, .schid, .worid, .fd, .houkoku,.bosscheck,.hosoku,.ft1,.ft2,.ft3,.ft4,.ft5");
//   death_prop.forEach(element=>{  element.style.display = 'none'; });

//   // 提出後の処理
//   submit_button.addEventListener('click',function(){
//   ele.style.display="none"

//   });}



//   // フォームの作成
//   console.log(dbs[2]["終了報告フラグ"][index])
//   if(dbs[2]["終了報告フラグ"][index]==1&& dbs[2]["会員ID"][index]==prop_object["会員ID"]){
//   form_area.insertAdjacentHTML("beforeend", houkoku_form );
//   var ele2 =document.querySelectorAll("form")[document.querySelectorAll("form").length-1];
//   ele2.getElementsByClassName("teaid")[0].setAttribute("value",prop_object["会員ID"]);
//   ele2.getElementsByClassName("fd")[0].setAttribute("value",dbs[2]["日付"][index]);
//   ele2.getElementsByClassName("houkoku")[0].setAttribute("value","退勤");

//   // var submit_button = document.createElement("button");
//   // submit_button.setAttribute("type","submit");
//   // submit_button.innerHTML="退勤報告する"
//   // ele2.appendChild(submit_button);

//   // var form_iframe = document.createElement("iframe");
//   // form_iframe.setAttribute("name","hidden_iframe");
//   // form_iframe.setAttribute("id","hidden_iframe");
//   // form_iframe.style.display="none";
//   // ele2.appendChild(form_iframe);
//   // ele2.setAttribute("method","post");
//   // ele2.setAttribute("target","hidden_iframe");

//   // フォームのラベル作成
//   var kinmu_info ="<p>"+dbs[2]["日付"][index]+"｜"+dbs[2]["開始時刻"][index]+"〜"+dbs[2]["終了時刻"][index]+"</p>";
//   ele2.insertAdjacentHTML("afterbegin", kinmu_info );

//   // 非表示プロパティの設定
//   const death_prop = ele2.querySelectorAll(".teaid, .schid, .worid, .fd, .houkoku, .bosscheck");
//   death_prop.forEach(element=>{  element.style.display = 'none'; });

//   // フォームガイド出力
//   ele2.getElementsByTagName("p")[0].style.paddingBottom="10px";
//   ele2.getElementsByClassName("ft1")[0].insertAdjacentHTML("beforebegin", "↓以下変更があった時のみ記入<br>出勤時間｜　" );
//   ele2.getElementsByClassName("ft2")[0].insertAdjacentHTML("beforebegin", " 時 " );
//   ele2.getElementsByClassName("ft2")[0].insertAdjacentHTML("afterend", " 分 <br>" );
//   ele2.getElementsByClassName("ft3")[0].insertAdjacentHTML("beforebegin", "退勤時間｜　" );
//   ele2.getElementsByClassName("ft4")[0].insertAdjacentHTML("beforebegin", " 時 " );
//   ele2.getElementsByClassName("ft4")[0].insertAdjacentHTML("afterend", " 分 <br>" );
//   ele2.getElementsByClassName("ft5")[0].insertAdjacentHTML("beforebegin", "休憩時間｜　" );
//   ele2.getElementsByClassName("ft5")[0].insertAdjacentHTML("afterend", " 分 <br>" );
//   ele2.getElementsByClassName("ft5")[0].style.marginBottom="10px";
//   ele2.getElementsByClassName("hosoku")[0].insertAdjacentHTML("beforebegin", "↓補足・備考欄変更があった場合は記入<br>" );
//   ele2.getElementsByClassName("hosoku")[0].style.width="100%";

//   // 提出後の処理
//   submit_button.addEventListener('click',function(){
//     ele2.style.display="none"
//   });}


//   })


// // フォームスタイルの設定
// document.querySelectorAll(".houkoku_form").forEach(element=>{
// element.style.border="solid 2px";
// element.style.padding="14px 15px 0 15px";
// element.style.margin="8px 0";
// })


// document.querySelectorAll(".notion-collection")[2].style.display="none";
// document.querySelectorAll(".notion-collection")[3].style.display="none";















// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // データベースの値取得準備
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// var senkou_db ={};
// if(document.getElementById("db-3") !=null){
// var db_data = document.getElementById("db-3").querySelectorAll("tr:not(#db-3-1)");
// var db_header = document.getElementById("db-3-1").querySelectorAll("th");
// console.log(db_header);
// db_header.forEach(element => {
//   senkou_db[element.innerHTML] =[];
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
//       senkou_db[db_header[index].innerHTML].push(a_db_data_n);
//     }else{// spanが一段階の時
//       var a_db_data_n =  a_db_data_n.innerHTML;
//       senkou_db[db_header[index].innerHTML].push(a_db_data_n);
//     }
//   }
// });
// console.log(senkou_db);

// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// // 選考状況による表示編集
// //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// senkou_db["TimeRex入力済"].forEach((element,index)=>{
//   if(senkou_db["TimeRex入力済"][index]==0){
//     var area_target = document.getElementById("やることリスト").nextElementSibling;

//     var TimeRexbox = document.createElement("div");
//     TimeRexbox.setAttribute("id","TRB")
//     area_target.after(TimeRexbox);
//     area_target = document.getElementById("TRB");

//     setTimeout(timefunc2,5000);
//     function timefunc2(){
//     var testrex =document.createElement("div");
//     testrex.innerHTML="タイムレックスが入力済みでないのでここにタイムレックスを表示<br><br>タイムレックス入力後は、面談の案内<br><br>面談後、合格ならシフト入力の案内<br><br>不合格の場合は何を表示しましょう？？"
//     testrex.style.height="500px"
//     testrex.style["background-color"]="#eeeeee";
//     area_target.appendChild(testrex);

//     var TimeRex = document.createElement("div");
//     TimeRex.setAttribute("id","timerex_calender");
//     TimeRex.setAttribute("data-url","https://timerex.net/s/juku-spot/5e012623");
//     area_target.appendChild(TimeRex);

//     var TimeRex = document.createElement("script");
//     TimeRex.setAttribute("id","timerex_embed");
//     TimeRex.setAttribute("src","https://asset.timerex.net/js/embed.js");
//     area_target.appendChild(TimeRex);

//     // var TimeRex = document.createElement("script");
//     // TimeRex.setAttribute("type","text/javascript");
//     // TimeRex.innerHTML="TimerexCalendar();"
//     // area_target.appendChild(TimeRex);
//     // var TimeRexdata = document.getElementById("timerex_calendar");
//     // area_target.appendChild(TimeRexdata);
//     }


//   };
//  });//選考状況終わり

// }








