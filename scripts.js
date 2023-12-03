let btn = document.querySelector(".btn_search");

btn.onclick = function(){
    
    var section_id = Math.floor(Math.random() * (15 - 1) + 1); 

    var scrollDiv = document.getElementById(section_id).offsetTop;

    window.scrollTo({
        top:scrollDiv,
        behavior:"smooth"
    });

    console.log(section_id);

};
    
let btn_2 = document.querySelector(".search-btn");

btn_2.onclick = function(){
    
    var section_id = Math.floor(Math.random() * (15 - 1) + 1); 

    var scrollDiv = document.getElementById(section_id).offsetTop;

    window.scrollTo({
        top:scrollDiv,
        behavior:"smooth"
    });

    console.log(section_id);

};
