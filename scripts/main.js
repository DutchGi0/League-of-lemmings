var position = 200;
var ballfired = false;
var speed = 0;
var lemmingPos = [0, 50, 100, 150, 200, 250, 300];
var CollisionCheck = false;

setInterval(gameEngine, 30);

function gameEngine(){ 
    //walkLemming();
    if(ballfired ) {
        speed = $("#ball").position().left;
        speed += 50;
        ballColCheck();
    }
    if(speed < 800) {
        $("#ball").css("left", speed + "px")
        }else {
            ballfired = false;
            $("#ball").remove();
        } 
    }


$(document).on("keydown", function (event) {
    //W
    if (event.which == 87 && position > 0){
        position -= 50;
    }
    //S
    if (event.which == 83 && position < 350){
        position += 50;
    }
    //Space
    if (event.which == 32 && !ballfired) {
        createBall();
        ballfired = true;
    }

    $(".player").css("top", position + "px")
});

function createBall(){
    $(".gamearea").append("<div class='dot'></div");
    $(".dot").attr("id", "ball")
    $(".dot").css("top", position + "px")
}

function ballColCheck(){
    var ballTop = $('#ball').position().top;
    var ballLeft = $('#ball').position().left;
    var lemmingTop = $('.lemming').position().top;
    var lemmingLeft = $('.lemming').position().left;

    if(ballTop == lemmingTop && ballLeft >= lemmingLeft){
       moveLemming();
       console.log('hit');
        ballfired = false;
        $('#ball').remove();
    }
}
// Need to fix!
// function playerColCheck(){
//     var playerLeft = $('.player').position().left;
//     var playerTop = $('.player').position().top;
//     var lemmingTop = $('.lemming').position().top;
//     var lemmingLeft = $('.lemming').position().left;

//     if(lemmingLeft - 620 <= playerLeft){
//         console.log('playerhit');
//      };
// }

function moveLemming(){
    var r = Math.floor(Math.random() * lemmingPos.length);
    var lpos = lemmingPos[r];
    $(".lemming").css("top", lpos + "px")
    
}

// function walkLemming(){
//     var walk = $('.lemming').css({'left': '630px'}).animate({'left': '0px'}, 5000).clone(true);
//     playerColCheck();
//     if (CollisionCheck = true){ 
//         walk.replaceWith(walk);
//     }
// }