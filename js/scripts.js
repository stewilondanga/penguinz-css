var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var style = document.querySelector(".code pre style");
var card = document.querySelector(".front face back face");


script = "\nHello there!\n we are going to make a penguine using css\nfirst you need to difine these classes \nin your html code\n  <div class=\"penguin\">\n  <div class=\"penguin-bottom\">\n    <div class=\"right-hand\"></div>\n    <div class=\"left-hand\"></div>\n    <div class=\"right-feet\"></div>\n    <div class=\"left-feet\"></div>\n  </div>\n  <div class=\"penguin-top\">\n    <div class=\"right-cheek\"></div>\n    <div class=\"left-cheek\"></div>\n    <div class=\"belly\"></div>\n    <div class=\"right-eye\">\n      <div class=\"sparkle\"></div>\n    </div>\n    <div class=\"left-eye\">\n      <div class=\"sparkle\"></div>\n    </div>\n    <div class=\"blush-right\"></div>\n    <div class=\"blush-left\"></div>\n    <div class=\"beak-top\"></div>\n    <div class=\"beak-bottom\"></div>\n  </div>\n</div>\n\nafter that lets add css\n :root {\n    --penguin-size: 300px;\n    --penguin-skin: gray;\n    --penguin-belly: white;\n    --penguin-beak: orange;\n  }\n  \n  @media (max-width: 350px) {\n    :root {\n      \n      /* add code below */\
n\ n /* add code above */ \ n\ n
}\
n
}\
n\ n.penguin {\
  n position: relative;\
  n margin: auto;\
  n display: block;\
  n margin - top: 5 % ;\
  n width: var (--penguin - size, 300 px);\
  n height: var (--penguin - size, 300 px);\
  n
}\
n\ n.right - cheek {\
  n top: 15 % ;\
  n left: 35 % ;\
  n background: var (--penguin - belly, white);\
  n width: 60 % ;\
  n height: 70 % ;\
  n border - radius: 70 % 70 % 60 % 60 % ;\
  n
}\
n\ n.left - cheek {\
  n top: 15 % ;\
  n left: 5 % ;\
  n background: var (--penguin - belly, white);\
  n width: 60 % ;\
  n height: 70 % ;\
  n border - radius: 70 % 70 % 60 % 60 % ;\
  n
}\
n\ n.belly {\
  n top: 60 % ;\
  n left: 2.5 % ;\
  n background: var (--penguin - belly, white);\
  n width: 95 % ;\
  n height: 100 % ;\
  n border - radius: 120 % 120 % 100 % 100 % ;\
  n
}\
n\ n.penguin - top {\
  n top: 10 % ;\
  n left: 25 % ;\
  n background: var (--penguin - skin, gray);\
  n width: 50 % ;\
  n height: 45 % ;\
  n border - radius: 70 % 70 % 60 % 60 % ;\
  n
}\
n\ n.penguin - bottom {\
  n top: 40 % ;\
  n left: 23.5 % ;\
  n background: var (--penguin - skin, gray);\
  n width: 53 % ;\
  n height: 45 % ;\
  n border - radius: 70 % 70 % 100 % 100 % ;\
  n
}\
n\ n.right - hand {\
  n top: 5 % ;\
  n left: 25 % ;\
  n background: var (--penguin - skin, black);\
  n width: 30 % ;\
  n height: 60 % ;\
  n border - radius: 30 % 30 % 120 % 30 % ;\
  n transform: rotate(130 deg);\
  n z - index: -1;\
  n animation - duration: 3 s;\
  n animation - name: wave;\
  n animation - iteration - count: infinite;\
  n transform - origin: 0 % 0 % ;\
  n animation - timing - function: linear;\
  n
}\
n\ n @keyframes wave {\
  n 10 % {\
    n transform: rotate(110 deg);\n
  }\
  n 20 % {\
    n transform: rotate(130 deg);\n
  }\
  n 30 % {\
    n transform: rotate(110 deg);\n
  }\
  n 40 % {\
    n transform: rotate(130 deg);\n
  }\
  n
}\
n\ n.left - hand {\
  n top: 0 % ;\
  n left: 75 % ;\
  n background: var (--penguin - skin, gray);\
  n width: 30 % ;\
  n height: 60 % ;\
  n border - radius: 30 % 30 % 30 % 120 % ;\
  n transform: rotate(-45 deg);\
  n z - index: -1;\
  n
}\
n\ n.right - feet {\
  n top: 85 % ;\
  n left: 60 % ;\
  n background: var (--penguin - beak, orange);\
  n width: 15 % ;\
  n height: 30 % ;\
  n border - radius: 50 % 50 % 50 % 50 % ;\
  n transform: rotate(-80 deg);\
  n z - index: -2222;\
  n
}\
n\ n.left - feet {\
  n top: 85 % ;\
  n left: 25 % ;\
  n background: var (--penguin - beak, orange);\
  n width: 15 % ;\
  n height: 30 % ;\
  n border - radius: 50 % 50 % 50 % 50 % ;\
  n transform: rotate(80 deg);\
  n z - index: -2222;\
  n
}\
n\ n.right - eye {\
  n top: 45 % ;\
  n left: 60 % ;\
  n background: black;\
  n width: 15 % ;\
  n height: 17 % ;\
  n border - radius: 50 % ;\
  n
}\
n\ n.left - eye {\
  n top: 45 % ;\
  n left: 25 % ;\
  n background: black;\
  n width: 15 % ;\
  n height: 17 % ;\
  n border - radius: 50 % ;\
  n
}\
n\ n.sparkle {\
  n top: 25 % ;\
  n left: -23 % ;\
  n background: white;\
  n width: 150 % ;\
  n height: 100 % ;\
  n border - radius: 50 % ;\
  n
}\
n\ n.blush - right {\
  n top: 65 % ;\
  n left: 15 % ;\
  n background: pink;\
  n width: 15 % ;\
  n height: 10 % ;\
  n border - radius: 50 % ;\
  n
}\
n\ n.blush - left {\
  n top: 65 % ;\
  n left: 70 % ;\
  n background: pink;\
  n width: 15 % ;\
  n height: 10 % ;\
  n border - radius: 50 % ;\
  n
}\
n\ n.beak - top {\
  n top: 60 % ;\
  n left: 40 % ;\
  n background: var (--penguin - beak, orange);\
  n width: 20 % ;\
  n height: 10 % ;\
  n border - radius: 50 % ;\
  n
}\
n\ n.beak - bottom {\
  n top: 65 % ;\
  n left: 42 % ;\
  n background: var (--penguin - beak, orange);\
  n width: 16 % ;\
  n height: 10 % ;\
  n border - radius: 50 % ;\
  n
}\
n\ n body {\
  n background: #c6faf1;\
  n
}\
/*n\ n.penguin * {\
  n position: absolute;\n
}\
n ";

var counter = 0;

var intervalID = setInterval(function() {
  counter++;
  style.textContent = script.substring(0, counter);
  style.scrollTop = style.scrollHeight;
  if (counter > script.length) {
    clearInterval(intervalID);
  }
}, 30);
