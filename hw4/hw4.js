var str = [];
var t1,t2;
function createCode(i) {
    var code = parseInt(Math.random()*26)+65;
    str[i] = String.fromCharCode(code) + str[i];
    return String.fromCharCode(code);
}
$(document).ready(function () {
    for (var i = 0; i < 6; i++) {
        str[i] = "";
    }
    t1 = setInterval(createImg, 2000);
    t2 = setInterval(runImg, 1);
    setInterval(stopImg(),1);
});
$(document).keydown(function (event) {
    for (var i = 0; i < 6; i++) {
        if (event.key == str[i].slice(-1)) {
            $(".pic" + i).last().remove();
            str[i] = str[i].slice(0, -1);
            break;
        }
    }
});
function createImg() {
    for (var i = 0; i < 6; i++) {
        var t=random();
        if (t>1) {
            $("#r" + i).prepend('<img class="pic' + i + ' "src ="word/' + createCode(i) + '.jpg" style="left:100px;" />');
            $("#r" + i).prepend('<img class="pic' + i + ' "src ="word/' + createCode(i) + '.jpg" />');
        } else {
            $("#r" + i).prepend('<img class="pic' + i + ' "src ="word/' + createCode(i) + '.jpg" />');
        }
    }
}
function random() {
    var num = parseInt(Math.random()*2)+1;
    return num;
}
function runImg() {
    $(".pic0").animate({ left: "+=20" }, 200);
    $(".pic1").animate({ left: "+=20" }, 200);
    $(".pic2").animate({ left: "+=20" }, 200);
    $(".pic3").animate({ left: "+=20" }, 200);
    $(".pic4").animate({ left: "+=20" }, 200);
    $(".pic5").animate({ left: "+=20" }, 200);
    setInterval(stopImg(),1);
}
function stopImg() {
    if ($(".pic0").last().offset().left > 1200||$(".pic1").last().offset().left > 1200||$(".pic2").last().offset().left > 1200||$(".pic3").last().offset().left > 1200||$(".pic4").last().offset().left > 1200||$(".pic5").last().offset().left > 1200) {
        $("img").stop(true);
        clearInterval(t1);
        clearInterval(t2);
        alert("Game over");
    }
}