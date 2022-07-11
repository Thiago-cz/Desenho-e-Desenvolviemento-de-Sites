var count =1;
document.getElementById('radio1').checked = true;

setInterval( function() {
    nextImage();
    nextImage1();
    nextImage2();
}, 5000)

function nextImage() {
    count++;
    if(count>5) {
        count=1;
    }
    document.getElementById('radio'+count).checked = true;
}
document.getElementById('radio11').checked = true;

var count1 = 1;

function nextImage1() {
    count1++;
    if (count1>5) {
        count1=1;
    }
    document.getElementById('radio1'+count1).checked = true;
}
document.getElementById('radio21').checked = true;
var count2 = 1;

function nextImage2(){
    count2++;
    if(count2>5){
        count2=1;
    }
    document.getElementsById('radio2'+count2).checked = true;
}
