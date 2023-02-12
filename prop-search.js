
//プロパティ格納divに名前をつける


const prop_wrap = document.querySelectorAll('.notion-page__property-name');
prop_wrap.forEach(element => {
    console.log(element);
    const page_name = element.getElementsByTagName("span")[0].innerHTML;
    console.log(page_name); 
});


//var span2 = pageproperty.getElementsByTagName("span")[1];
//var span3 = span2.getElementsByTagName("span")[0].innerHTML;
//console.log(span3);


