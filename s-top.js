setTimeout(timefunc,300);
function timefunc(){
if(prop_object["ページ表示名"]==="教室トップページ"){



var topguide =document.getElementById("スポットバイトへようこそ！").nextSibling.nextSibling;

topguide.innerHTML="教室用｜"+prop_object["教室名"];
topguide.style.fontWeight="bolder";


document.getElementsByClassName("notion-image")[0].style.maxWidth="400px";



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
'<select name="entry.1155261595" class="ft1"><option value=""></option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>'+
'<select name="entry.437373386" class="ft2"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>'+
'<select name="entry.419752739" class="ft3"><option value=""></option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>'+
'<select name="entry.114545285" class="ft4"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>'+
'<select name="entry.780733668" class="ft5"><option value=""></option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="96">96</option><option value="97">97</option><option value="98">98</option><option value="99">99</option><option value="100">100</option><option value="101">101</option><option value="102">102</option><option value="103">103</option><option value="104">104</option><option value="105">105</option><option value="106">106</option><option value="107">107</option><option value="108">108</option><option value="109">109</option><option value="110">110</option><option value="111">111</option><option value="112">112</option><option value="113">113</option><option value="114">114</option><option value="115">115</option><option value="116">116</option><option value="117">117</option><option value="118">118</option><option value="119">119</option><option value="120">120</option><option value="121">121</option><option value="122">122</option><option value="123">123</option><option value="124">124</option><option value="125">125</option><option value="126">126</option><option value="127">127</option><option value="128">128</option><option value="129">129</option><option value="130">130</option><option value="131">131</option><option value="132">132</option><option value="133">133</option><option value="134">134</option><option value="135">135</option><option value="136">136</option><option value="137">137</option><option value="138">138</option><option value="139">139</option><option value="140">140</option><option value="141">141</option><option value="142">142</option><option value="143">143</option><option value="144">144</option><option value="145">145</option><option value="146">146</option><option value="147">147</option><option value="148">148</option><option value="149">149</option><option value="150">150</option><option value="151">151</option><option value="152">152</option><option value="153">153</option><option value="154">154</option><option value="155">155</option><option value="156">156</option><option value="157">157</option><option value="158">158</option><option value="159">159</option><option value="160">160</option><option value="161">161</option><option value="162">162</option><option value="163">163</option><option value="164">164</option><option value="165">165</option><option value="166">166</option><option value="167">167</option><option value="168">168</option><option value="169">169</option><option value="170">170</option><option value="171">171</option><option value="172">172</option><option value="173">173</option><option value="174">174</option><option value="175">175</option><option value="176">176</option><option value="177">177</option><option value="178">178</option><option value="179">179</option><option value="180">180</option></select>'+
'<textarea name="entry.1043875530" class="hosoku"></textarea>'+
'<input type="text" name="entry.1236686027" class="bosscheck">'+
'</form>';

// 過去の日付で勤怠報告未完了のものを取得
console.log(dbs[1]["日付"]);
dbs[1]["日付"].forEach((element,index)=>{

  // フォームの作成
  if(dbs[1]["勤怠ステータス"][index]=="退勤報告済み" && dbs[1]["教室ID"][index]==prop_object["教室ID"] ){
  form_area.insertAdjacentHTML("beforeend", houkoku_form );
  var ele =document.querySelectorAll("form")[document.querySelectorAll("form").length-1];
  ele.getElementsByClassName("teaid")[0].setAttribute("value",dbs[1]["会員ID"][index]);
  ele.getElementsByClassName("fd")[0].setAttribute("value",dbs[1]["日付"][index]);
  ele.getElementsByClassName("houkoku")[0].setAttribute("value","承認");

  var submit_button = document.createElement("button");
  submit_button.setAttribute("type","submit");
  submit_button.innerHTML="勤務を承認する"
  ele.appendChild(submit_button);

  var form_iframe = document.createElement("iframe");
  form_iframe.setAttribute("name","hidden_iframe");
  form_iframe.setAttribute("id","hidden_iframe");
  form_iframe.style.display="none";
  ele.appendChild(form_iframe);
  ele.setAttribute("method","post");
  ele.setAttribute("target","hidden_iframe");

  // フォームのラベル作成
  var kinmugo_info ="<p>"+dbs[1]["日付"][index]+"</p>";
  ele.insertAdjacentHTML("afterbegin", kinmugo_info );

  if(dbs[1]["開始時刻（変更申請）"][index]!=null)
  {var kinmu_info1 = "<br>開始時刻の変更申請｜"+dbs[1]["開始時刻"][index]+"　→　"+dbs[1]["開始時刻（変更申請）"][index]}else{var kinmu_info1 =""}
  if(dbs[1]["終了時刻（変更申請）"][index]!=null)
  {var kinmu_info2 = "<br>終了時刻の変更申請｜"+dbs[1]["終了時刻"][index]+"　→　"+dbs[1]["終了時刻（変更申請）"][index]}else{var kinmu_info2 =""}
  if(dbs[1]["休憩時間（変更申請）"][index]!=null)
  {var kinmu_info3 = "<br>休憩時間の変更申請｜"+dbs[1]["休憩時間"][index]+"　→　"+dbs[1]["休憩時間（変更申請）"][index]}else{var kinmu_info3 =""}
  if(dbs[1]["勤務報告時補足"][index]!=null)
  {var kinmu_info4 = "<br>勤務後の報告・補足<br>"+dbs[1]["勤務報告時補足"][index]}else{var kinmu_info4 =""}

  var kinmu_info ="<p>"+dbs[1]["日付"][index]+"｜"+dbs[1]["開始時刻"][index]+"〜"+dbs[1]["終了時刻"][index]+kinmu_info1 +kinmu_info2 +kinmu_info3+kinmu_info4 +"</p>";
  ele.insertAdjacentHTML("afterbegin", kinmu_info );

  // 非表示プロパティの設定
  const death_prop = ele.querySelectorAll(".teaid, .schid, .worid, .fd, .houkoku, .bosscheck");
  death_prop.forEach(element=>{  element.style.display = 'none'; });

  // フォームガイド出力
  ele.getElementsByTagName("p")[0].style.paddingBottom="10px";
  ele.getElementsByClassName("ft1")[0].insertAdjacentHTML("beforebegin", "↓以下変更があった時のみ記入<br>出勤時間｜　" );
  ele.getElementsByClassName("ft2")[0].insertAdjacentHTML("beforebegin", " 時 " );
  ele.getElementsByClassName("ft2")[0].insertAdjacentHTML("afterend", " 分 <br>" );
  ele.getElementsByClassName("ft3")[0].insertAdjacentHTML("beforebegin", "退勤時間｜　" );
  ele.getElementsByClassName("ft4")[0].insertAdjacentHTML("beforebegin", " 時 " );
  ele.getElementsByClassName("ft4")[0].insertAdjacentHTML("afterend", " 分 <br>" );
  ele.getElementsByClassName("ft5")[0].insertAdjacentHTML("beforebegin", "休憩時間｜　" );
  ele.getElementsByClassName("ft5")[0].insertAdjacentHTML("afterend", " 分 <br>" );
  ele.getElementsByClassName("ft5")[0].style.marginBottom="10px";
  ele.getElementsByClassName("hosoku")[0].insertAdjacentHTML("beforebegin", "↓補足・備考欄変更があった場合は記入<br>" );
  ele.getElementsByClassName("hosoku")[0].style.width="100%";

  // 提出後の処理
  submit_button.addEventListener('click',function(){
    ele.style.display="none"
  });}

})

// フォームスタイルの設定
document.querySelectorAll(".houkoku_form").forEach(element=>{
element.style.border="solid 2px";
element.style.padding="14px 15px 0 15px";
element.style.margin="8px 0";
})

document.querySelectorAll(".notion-collection")[1].style.display="none";
// フォームここまで




var target = document.getElementById("ショートカットリスト").nextElementSibling;
target.getElementsByClassName("notion-column")[0].setAttribute("clsss","s-top-db");
target.getElementsByClassName("notion-column")[1].setAttribute("clsss","s-top-db");

var target = document.getElementById("ショートカットリスト").nextElementSibling.nextElementSibling;
target.getElementsByClassName("notion-column")[0].setAttribute("clsss","s-top-db");
target.getElementsByClassName("notion-column")[1].setAttribute("clsss","s-top-db");


}}








