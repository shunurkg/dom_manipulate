function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName("class1"));
}

function identifyByTag() {
    console.log(document.getElementsByTagName("p"));
}

function changeBackground() {
    document.getElementById("block1").style.backgroundColor = "blue";
}

function increaseFont() {
    document.getElementById("block2").style.fontSize = "60px";
}

function changeFontColor() {
    document.getElementById("block3").style.color = "green";
}

function revertColor() {
    document.getElementById("block3").style.color = "black";
}

function hide() {
    $("#block4").hide();
}

function changeBackColor(colour, identity) {
    $("." + identity).css("background-color", colour);
}


function addAdjacent() {
    document.getElementById("para2").innerHTML = document.getElementById("para2").innerHTML + "I got generated on the fly...";
}

function removePara() {
    $("#para4").remove();
}

function animatePara() {
    $("#box5").animate({ width: "300px" });
}
function changeupper() {
    var input1 = document.getElementById("inputBox1").value;
    document.getElementById("inputBox2").value = input1.toUpperCase();
}
// function camel() {
//     document.getElementById("inputBox3").value = document.getElementById("inputBox3").value.toCamelCase();
// }
function browser() {
    console.log(document.getElementById("browsers").value);
}
function textboxcolourchange() {
    document.getElementById("inputBox4").style.backgroundColor = "green";
}
function camelcase(){
    var a=document.getElementById("inputBox3").value;
    var x=a.split(" ");
    a=x[0].toUpperCase();
    for(var i=1;i<x.length;i++){
        x[i]=x[i].charAt(0).toUpperCase()+x[i].substr(1);
        a+=x[i];
    }
    document.getElementById("inputBox3").innerHTML="";
    document.getElementById("inputBox3").value=a;
}
function numbersOnly(event){
    try{
        if(window.event){
            var charCode = window.event.keyCode;
        }
        else if(e) {
            var charCode = e.which;
        }
        else{return true;}
        if(charCode > 31 && (charCode <48 ||charCode > 57)){
            return false;
        }
        return true;
        }
    catch(err){
        alert(err.Description);
    }
}
