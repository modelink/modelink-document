$(function(){function t(){$(".s1-04, .s1-05, .s1-06, .s1-07, .s1-08").removeClass("animated pulse cycle Rotation");setTimeout(function(){$(".s1-04").addClass("animated bounceOutUp")},100);setTimeout(function(){$(".s1-03").addClass("animated bounceOutDown")},100);setTimeout(function(){$(".s1-04").addClass("animated bounceOutUp")},200);setTimeout(function(){$(".s1-05").addClass("animated bounceOutUp")},300);setTimeout(function(){$(".s1-06").addClass("animated bounceOutUp")},400);setTimeout(function(){$(".s1-07").addClass("animated bounceOutUp")},
500);setTimeout(function(){$(".s1-08").addClass("animated bounceOutUp")},600);setTimeout(function(){$(".s1-02").addClass("animated bounceOutLeft")},500);setTimeout(function(){$(".s1-09").addClass("animated bounceOutRight")},500)}function u(){$(".full-canvas, .step-2").fadeIn(300);$(".step-1").html("");setTimeout(function(){$(".step-2 img").eq(0).removeClass("hide fadeOut").addClass("animated bounceInUp")},100);setTimeout(function(){$(".step-2 img").eq(1).removeClass("hide fadeOut").addClass("animated bounceInRight")},
300);setTimeout(function(){$(".step-2 img").eq(2).removeClass("hide fadeOut").addClass("animated bounceInRight")},400);setTimeout(function(){$(".step-2 img").eq(3).removeClass("hide fadeOut").addClass("animated bounceInDown")},500);setTimeout(function(){$(".step-2 img").eq(4).removeClass("hide fadeOut").addClass("animated bounceInRight")},600);setTimeout(function(){$(".step-2 img").eq(5).removeClass("hide fadeOut").addClass("animated bounceInLeft")},700);setTimeout(function(){$(".step-2 img").eq(6).removeClass("hide fadeOut").addClass("animated bounceInRight")},
800);setTimeout(function(){$(".step-2 img").eq(7).removeClass("hide fadeOut").addClass("animated bounceInRight")},800);setTimeout(function(){$(".step-2 img").eq(8).removeClass("hide fadeOut").addClass("animated bounceInRight")},1200);setTimeout(function(){$(".step-2 img").eq(9).removeClass("hide fadeOut").addClass("animated bounceInRight")},1200);setTimeout(function(){f.show()},2E3)}function g(){for(var d=[0,1,2,3,4,5,6,7],b="bounceOutUp bounceOutUp bounceOutDown zoomOutDown bounceOutRight bounceOutLeft bounceOutUp bounceOutLeft".split(" "),
m="bounceInUp bounceInUp bounceInDown zoomInDown bounceInRight bounceInLeft bounceInUp bounceInLeft".split(" "),a=0;8>a;a++)$(".step-2 img").eq(d[a]).addClass(b[a]),$(".step-2 img").eq(d[a]).removeClass("bounceInLeft bounceInRight bounceInUp bounceInDown"),$(".step-2 img").eq(d[a]).addClass(m[a]);setTimeout(function(){for(var a=0;8>a;a++)$(".step-2 img").eq(d[a]).removeClass(b[a]),$(".step-2 img").eq(d[a]).addClass(m[a])},500);setTimeout(function(){for(var a=0;8>a;a++)$(".step-2 img").eq(d[a]).removeClass(m[a])},
1E3);setTimeout(function(){$(".step-2 img").eq(3).addClass("pulse cycleslow")},1500);$(".chat").fadeOut(500);$(".pagenumber").html(c-1+"/5");8<c&&$(".pagenumber").hide();setTimeout(function(){8>c&&$(".pagenumber").show()},2E3)}function y(){setTimeout(function(){$(".step-2 img").eq(8).removeClass("hide").addClass("animated bounceOutRight")},100);setTimeout(function(){$(".step-2 img").eq(9).removeClass("hide").addClass("animated bounceOutLeft")},100)}function q(d,c){function m(){v(b.data[a].type,b.data[a].bearing,
b.data[a].display);var d=".st-"+b.data[a].type+"-"+b.data[a].bearing,l=".st-"+b.data[a].type+"-"+b.data[a].bearing+"-t",k=".st-"+b.data[a].type+"-"+b.data[a].bearing+"-n",g=b.data[a].speed;$(l).html("");$(d).show();$(l).css("font-size",b.data[a].fontsize);$(l).css("line-height",b.data[a].lineheight);$(l).css("margin",b.data[a].margin);$(l).css("text-align",b.data[a].textalign);$(l).html(b.data[a].text).show();$(k).show();"l"==b.data[a].bearing?"play"==b.data[a].animation&&$(".step-2 img").eq(5).addClass("animated tada cycleslowfast"):
"play"==b.data[a].animation&&$(".step-2 img").eq(4).addClass("animated tada cycleslowfast");setTimeout(function(){5!=a&&12!=a&&20!=a&&30!=a&&31!=a&&$(".s2-07, .s2-06").removeClass("tada cycleslowfast")},g);console.log(a+"__"+g+"__no_ui"+n);12==a&&0==n?(setTimeout(function(){$(".s2-07, .s2-06").removeClass("tada cycleslowfast")},4E3),clearInterval(e),setTimeout(function(){0==n&&(n=1,clearInterval(e),$(".s2-07, .s2-06").removeClass("tada cycleslowfast"),$(".st-dh-l-t, .st-dh-l-n, .st-dh-l, .st-nx-r, .st-nx-r-t").hide(),
$(".st-dh-r-t, .st-dh-r-n, .st-dh-r, .st-nx-l, .st-nx-r-l").hide(),$(".chat").hide(),$(".misicmask").hide(),$(".tip-toend").show(),p.hide(),f.hide(),h=1)},6E3)):a==z?clearInterval(e):(a==c?clearInterval(e):(clearInterval(e),e=setInterval(m,g)),a++)}7==d&&$(".step-2 img").eq(5).addClass("animated tada cycleslowfast");var a=d;e=setInterval(m,1E3)}function v(d,b,c){console.log(c);"dh"==d&&("l"==b?($(".st-dh-r-t, .st-dh-r").hide(),$(".st-nx-r, .st-nx-r-t").hide(),$(".st-dh-r-n").hide()):($(".st-dh-l-t, .st-dh-l").hide(),
$(".st-nx-l, .st-nx-l-t").hide(),$(".st-dh-l-n").hide()));"nx"==d&&("l"==b&&"normal"==c?$(".st-nx-r, .st-nx-r-t").hide():"r"==b&&"normal"==c&&$(".st-nx-l, .st-nx-l-t").hide())}var w,r=$(".s1-03"),p=$(".btn-down"),f=$(".btn-up"),c=1,n=0,e=0,h=0;$(".step-2, .tip-toend, .tip-appointment, .tip-share, .btn-down, .btn-up, .full-canvas").hide();(new Image).src="i/musicstop.png";var b=function(){var b;$.ajax({type:"get",url:"js/data.json",dataType:"json",async:!1,success:function(c){b=c}});return b}(),z=
function(b){var c=0,d;for(d in b)c++;return c}(b.data),x=navigator.userAgent,k=document.getElementById("audio");document.addEventListener("WeixinJSBridgeReady",function(){0<x.indexOf("iPhone")?k.play():0<x.indexOf("Android")&&(k.play(),0===k.currentTime&&k.play())});k.play&&$(".music").addClass("animated Rotation cycle");timer1=setInterval(function(){r.html("\u5851\u6599\u59d0\u59b9\u89c1\u9762\uff0c\u683c\u5916\u7cbe\u5f69\uff01\u597d\u620f\uff0c\u6b63\u8981\u5f00\u573a".substring(0,w));w++;if("\u5851\u6599\u59d0\u59b9\u89c1\u9762\uff0c\u683c\u5916\u7cbe\u5f69\uff01\u597d\u620f\uff0c\u6b63\u8981\u5f00\u573a"==
r.html()){clearInterval(timer1);for(var b=0;5>=b;b++)(function(b){setTimeout(function(){r.html("\u5851\u6599\u59d0\u59b9\u89c1\u9762\uff0c\u683c\u5916\u7cbe\u5f69\uff01\u597d\u620f\uff0c\u6b63\u8981\u5f00\u573a"+".....".substring(0,b))},600*b)})(b);timer2=setInterval(function(){"\u5851\u6599\u59d0\u59b9\u89c1\u9762\uff0c\u683c\u5916\u7cbe\u5f69\uff01\u597d\u620f\uff0c\u6b63\u8981\u5f00\u573a....."==$(".s1-03").html()&&(clearInterval(timer2),t(),u(),setTimeout(function(){f.show();c=2},3E3))},200)}},
200);$("body").on("touchstart",function(b){startX=b.originalEvent.changedTouches[0].pageX;startY=b.originalEvent.changedTouches[0].pageY});$("body").on("touchend",function(d){moveEndX=d.originalEvent.changedTouches[0].pageX;moveEndY=d.originalEvent.changedTouches[0].pageY;X=moveEndX-startX;Y=moveEndY-startY;console.log("\u7ed3\u679c"+X+"_"+Y);0!=X&&0==h?(4==c&&(n=1),$(".s2-07, .s2-06").removeClass("tada cycleslowfast"),$(".pagenumber").hide(),setTimeout(function(){clearInterval(e)},100),7==c&&(clearInterval(e),
$(".pagenumber").hide(),g(),p.hide(),f.hide(),h=1,setTimeout(function(){clearInterval(e);$(".st-dh-l-t, .st-dh-l-n, .st-dh-l, .st-nx-r, .st-nx-r-t").hide();$(".st-dh-r-t, .st-dh-r-n, .st-dh-r, .st-nx-l, .st-nx-r-l").hide();$(".tip-appointment").show();$(".pagenumber").hide();c++;return!1},1500)),7>c&&2<=c&&0==h?(3<=c?(p.hide(),$(".tip-toend").hide()):2==c&&(p.hide(),y()),h=0,$(".tip-toend").hide(),v(b.data[c].type,b.data[c].bearing,b.data[c].display),setTimeout(function(){q(b.scene[c].start,b.scene[c].end);
console.log("\u4e0a\u6ed1_"+c);c++;f.show()},500),g()):f.hide()):console.log("\u70b9\u51fb_"+c)});$(".btn-reload").click(function(){$(".step-2 img").addClass("fadeOut");h=0;$(".step-2 img").eq(3).removeClass("pulse cycleslow");$(".step-2 img").eq(8).removeClass("bounceOutRight");$(".step-2 img").eq(9).removeClass("bounceOutLeft");$(".tip-share").hide();t();u();setTimeout(function(){f.show();c=2;$(".step-2 img").removeClass("fadeOut")},2E3)});$(".btn-continue").click(function(){$(".pagenumber").hide();
f.show();g();$(".pagenumber").html("3/5");$(".tip-toend").hide();setTimeout(function(){q(13,20);c++},500);h=0});$(".btn-end").click(function(){$(".pagenumber").hide();f.show();g();$(".tip-toend").fadeOut(1500);q(21,28);c=6;h=0;setTimeout(function(){$(".pagenumber").html("4/5")},500)});$(".misicmask").click(function(){document.getElementById("audio").paused&&($("#audio").trigger("play"),$(".music").addClass("animated Rotation cycle"),$(".music").attr("src","i/music.png"));$(".misicmask").hide()});
$(".music").click(function(){document.getElementById("audio").paused?($("#audio").trigger("play"),$(".music").addClass("animated Rotation cycle"),$(".music").attr("src","i/music.png")):($("#audio").trigger("pause"),$(".music").removeClass("animated Rotation cycle"),$(".music").attr("src","i/musicstop.png"))})});