setTimeout(timefunc,700);
function timefunc(){
if(prop_object["ページ表示名"]==="教室トップページ"){



var topguide =document.getElementById("スポットバイトへようこそ！").nextSibling.nextSibling;

topguide.innerHTML=prop_object["教室名"]+"様用"
topguide.style.fontWeight="bolder";


document.getElementsByClassName("notion-image")[0].style.maxWidth="400px";
document.querySelectorAll(".notion-collection")[2].style.display="none";


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

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// シフトDBの情報取得  sf_list
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// #region
// kt_listのデータ取得。
var kt_list_db = document.querySelectorAll(".notion-collection-table")[2];
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
var form_copy = '<div class="form-wrapper"><div class="form-header"><span class="header-day">勤怠承認フォーム｜X月X日(〜)</span></div><div class="form-block"><span class="info11">勤務予定のシフト：</span><br><span class="info13">教室からの補足備考：</span><br><p class="info14">〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜</p></div><form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfSYBbS4NOAjOGH1hafebiJVHKtUeHBfmvuQhjSZ5zjizfRUg/formResponse" method="post" target="hidden_iframe"><div class="form-none"><input type="text" name="entry.1294051003" class="f-day"><input type="text" name="entry.967381962" class="f-oubo"><input type="text" name="entry.1270091844" class="f-kaiin"><input type="text" name="entry.1720417205" class="f-kaiin-name"><input type="text" name="entry.2142978520" class="f-school"><input type="text" name="entry.335944105" class="f-school-name"></div><div class="form-block"><p class="info14">▼勤務予定から変更があった場合のみ記入してください。</p><span>実際の開始時間：</span><select name="entry.889221635" class="f-time1"><option value=""></option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option></select><span>時</span><select name="entry.1285381840" class="f-time2"><option value=""></option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select><span>分</span><br><span>実際の終了時間：</span><select name="entry.1419425410" class="f-time1"><option value=""></option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option></select><span>時</span><select name="entry.1563648415" class="f-time2"><option value=""></option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select><span>分</span><br><span>実際の休憩時間 ：</span><select name="entry.1369008510" class="f-time2"><option value=""></option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="96">96</option><option value="97">97</option><option value="98">98</option><option value="99">99</option><option value="100">100</option><option value="101">101</option><option value="102">102</option><option value="103">103</option><option value="104">104</option><option value="105">105</option><option value="106">106</option><option value="107">107</option><option value="108">108</option><option value="109">109</option><option value="110">110</option><option value="111">111</option><option value="112">112</option><option value="113">113</option><option value="114">114</option><option value="115">115</option><option value="116">116</option><option value="117">117</option><option value="118">118</option><option value="119">119</option><option value="120">120</option></select><span>分</span><br></div><div class="form-block"><span>補足備考（講師へメッセージ）：</span><br><textarea name="entry.2146375772" class="f-hosoku"></textarea></div><div class="form-block"><button type="submit">勤務の承認をする</button></div><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe></form></div>';
var area_target = document.getElementById("勤怠の承認はこちらから").nextElementSibling;
var form_area = document.createElement("div");
area_target.after(form_area );

kt_list["日付"].forEach((element,index)=>{
if(kt_list["勤怠ステータス"][index]=="退勤報告済み"){

form_area.insertAdjacentHTML("beforeend",form_copy);
  var wrap =document.querySelectorAll(".form-wrapper:last-child")[0];
  wrap.querySelectorAll(".header-day")[0].innerHTML= element+"｜"+kt_list["名前（グループ名）"][index]+"先生｜勤怠承認フォーム" ;
  wrap.querySelectorAll("form .f-day")[0].value= element ;
  wrap.querySelectorAll("form .f-kaiin")[0].value= prop_object["会員ID"];
  wrap.querySelectorAll("form .f-kaiin-name")[0].value= prop_object["姓"]+prop_object["名"];
  wrap.querySelectorAll("form .f-school")[0].value= prop_object["教室ID"];
  wrap.querySelectorAll("form .f-school-name")[0].value= prop_object["教室名"];
  wrap.querySelectorAll("form .f-oubo")[0].value= prop_object["応募ID"];
  wrap.querySelectorAll(".form-none")[0].style.display="none";
 
wrap.querySelectorAll(".info11")[0].innerHTML= "シフト内容｜"+kt_list["勤務依頼時刻｜開始"][index]+" 〜 "+kt_list["勤務依頼時刻｜終了"][index]+"｜休憩時間："+ kt_list["休憩時間（依頼）"][index]+" 分 <br>＊講師からの勤務時間変更の申請はありません。";

if(kt_list["備考補足退勤時"][index] !=null ){
wrap.querySelectorAll(".info14")[0].innerHTML= kt_list["備考補足退勤時"][index];
}else{
wrap.querySelectorAll(".info13")[0].nextSibling.remove()
wrap.querySelectorAll(".info13")[0].style.display="none";
wrap.querySelectorAll(".info14")[0].style.display="none";
}
if(kt_list["講師入力開始時刻"][index] !=null ||kt_list["講師入力退勤時刻"][index] !=null||kt_list["講師入力休憩時間"][index] !=null){
    wrap.querySelectorAll(".info11")[0].innerHTML= "シフト内容｜"+kt_list["勤務依頼時刻｜開始"][index]+"（"+kt_list["講師入力開始時刻"][index] +"）"+" 〜 "+kt_list["勤務依頼時刻｜終了"][index]+"（"+kt_list["講師入力終了時刻"][index] +"）"+"｜休憩時間："+ kt_list["休憩時間（依頼）"][index]+"（"+kt_list["講師休憩時間"][index] +"）"+" 分 ※()内は変更申請時間 <br>＊講師から勤務(休憩)時間変更の申請があります。";
    }

}})

document.querySelectorAll(".notion-collection-table")[1].style.width="100%";





}}

