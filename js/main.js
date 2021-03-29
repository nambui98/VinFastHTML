
function menuicon(a) {
    a.classList.toggle("change");
    var x = document.getElementById("menu");
    var y = document.getElementById("nav");
    var z=document.getElementById("a");
    if (x.style.transform === "translateX(0%)" ) {
        
        // y.style.transform = "translateX(0%)";
        x.style.transform = "translateX(100%)";
        // x.style.opacity = "0.6";
        z.style.overflowY = "scroll";
    } else {
        
        // y.style.transform = "translateX(-100%)";
        x.style.transform ="translateX(0%)";
        z.style.overflowY="hidden";
    }
}
var tenmau = document.getElementById("mauxe");
var tenmau2 = document.getElementById("mauxe2");
function change1(){
    var anh1=document.getElementById("imgdoimau");
    anh1.src = "img/mauxe/xe luxa2/red.png";
    tenmau.innerHTML = "MISTIQUE RED";
}
function change2() {
    var anh1 = document.getElementById("imgdoimau");
    anh1.src = "img/mauxe/xe luxa2/silver.png";
    tenmau.innerHTML = "DESAT SILVER";
}
function change3() {
    var anh1 = document.getElementById("imgdoimau");
    anh1.src = "img/mauxe/xe luxa2/black.png";
    tenmau.innerHTML = "JET BLACK";
}
function change4() {
    var anh1 = document.getElementById("imgdoimau");
    anh1.src = "img/mauxe/xe luxa2/brown.png";
    tenmau.innerHTML = "CORMORANT BROWN";
}
function change5() {
    var anh1 = document.getElementById("imgdoimau");
    anh1.src = "img/mauxe/xe luxa2/grey.png";
    tenmau.innerHTML = "NEPTUNE GREY CL";
}
function change6() {
    var anh1 = document.getElementById("imgdoimau");
    anh1.src = "img/mauxe/xe luxa2/orange.png";
    tenmau.innerHTML = "ACTION ORANGE";
}
function change7() {
    var anh1 = document.getElementById("imgdoimau");
    anh1.src = "img/mauxe/xe luxa2/white.png";
    tenmau.innerHTML = "BRAHMINY WHITE";
}
function change8() {
    var anh1 = document.getElementById("imgdoimau");
    anh1.src = "img/mauxe/xe luxa2/blue.png";
    tenmau.innerHTML = "LUXURY BLUE";
}
function change21() {
    var anh1 = document.getElementById("imgdoimau2");
    anh1.src = "img/mauxe/xe luxsa2/red.png";
    tenmau2.innerHTML = "MISTIQUE RED";
}
function change22() {
    var anh1 = document.getElementById("imgdoimau2");
    anh1.src = "img/mauxe/xe luxsa2/silver.png";
    tenmau2.innerHTML = "DESAT SILVER";
}
function change23() {
    var anh1 = document.getElementById("imgdoimau2");
    anh1.src = "img/mauxe/xe luxsa2/black.png";
    tenmau2.innerHTML = "JET BLACK";
}
function change24() {
    var anh1 = document.getElementById("imgdoimau2");
    anh1.src = "img/mauxe/xe luxsa2/brown.png";
    tenmau2.innerHTML = "CORMORANT BROWN";
}
function change25() {
    var anh1 = document.getElementById("imgdoimau2");
    anh1.src = "img/mauxe/xe luxsa2/grey.png";
    tenmau2.innerHTML = "NEPTUNE GREY CL";
}
function change26() {
    var anh1 = document.getElementById("imgdoimau2");
    anh1.src = "img/mauxe/xe luxsa2/orange.png";
    tenmau2.innerHTML = "DESAT SILVER";
}
function change27() {
    var anh1 = document.getElementById("imgdoimau2");
    anh1.src = "img/mauxe/xe luxsa2/white.png";
    tenmau2.innerHTML = "BRAHMINY WHITE";
}
function change28() {
    var anh1 = document.getElementById("imgdoimau2");
    anh1.src = "img/mauxe/xe luxsa2/blue.png";
    tenmau2.innerHTML = "LUXURY BLUE";
}
function chonxeluxa2(){
    var mainmau1=document.getElementById("main1");
    var mainmau2 = document.getElementById("main2");
    // mainmau2.style.display = "none";
    // if (mainmau2.style.opacity === "0" &&)
    mainmau2.style.opacity="0";
    mainmau2.style.zIndex = "-99";
    // mainmau1.style.display="block";
    mainmau1.style.opacity="1";
    
    mainmau1.style.zIndex = "99";

}
function chonxeluxsa2() {
    var mainmau2 = document.getElementById("main2");
    var mainmau1 = document.getElementById("main1");
    // mainmau1.style.display = "none";
    mainmau1.style.opacity = "0";
    mainmau1.style.zIndex = "-99";
    // mainmau2.style.display = "block";
    mainmau2.style.opacity = "1";
    mainmau2.style.zIndex = "99";
}
function checked(){
    var check=document.getElementById("check");
    var spanluxA2 = document.getElementById("spanluxA2.0");
    var check1 = document.getElementById("check1");
    var spanluxSA2 = document.getElementById("spanluxSA2.0");
    check1.style.border = "6px solid black";
    spanluxSA2.style.color = "black";
    check.style.border ="6px solid #c4161c";
    spanluxA2.style.color ="#c4161c";
    
}
function checked1() {
    var check = document.getElementById("check1");
    var spanluxSA2 = document.getElementById("spanluxSA2.0");
    var check1 = document.getElementById("check");
    var spanluxA2 = document.getElementById("spanluxA2.0");
    check1.style.border = "6px solid black";
    spanluxA2.style.color = "black";
    check.style.border = "6px solid #c4161c";
    spanluxSA2.style.color = "#c4161c";
}