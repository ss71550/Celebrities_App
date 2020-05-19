$(document).ready(() => {
  let $popUps= $(".popUps");
  let $gameBoard = $("#gameBoard");
  let $showRound2= $(".round2");

  $popUps.hide();
  $gameBoard.hide();
  $showRound2.hide();



//javascript only fetching step one for id, when should fetch all divs

  let $welcome = $("#welcome");
  let $getStartedButton = $("#getStarted");

  let $step1 = $("#step1");
  let $addCard= $("#add_Card");
  let $finishedCards = $("#finishedCards");

  let $step2 = $("#step2");
  let $beginGame = $("#beginGame");

  let $round1 = $("#round1");
  let $start1 = $("#start1");

  let $round2 = $("#round2");
  let $start2 = $("#start2");


  let $pass= $("#pass");
  let $gotIt= $("#gotIt");


  let $startTimer= $("#startTimer");

  let $team1= $("#team1");
  let $team2= $("#team2");


  let $teamUp2= $("#teamUp2");

  let $hideRound1= $(".round1");

    //round 2 buttons
  let $startTimer2 = $("#startTimer2");
  let $gotIt2 = $("#gotIt2");
  let $pass2 = $("#pass2");

$getStartedButton.on({
    click: () => {
      $step1.show();
      $welcome.hide();
    }
});

let array1Cards=[];//array 1 card array
$addCard.on("click",()=>{
    let celebrity_card = $("#card_input").val();
    array1Cards.push(celebrity_card);
});

$finishedCards.on({
    click: () => {
      $step2.show();
      $step1.hide();
    }
});

    //delete: let team_name1 =$("#name1").val();
   // let team_name2 =$("#name2").val();//let's remember to make these values fill in the blanks

$beginGame.on({
    click: () => {
      $round1.show();
      $step2.hide();

    //this is working
      let $teamUp1= $("#teamUp1");
      let currentText= $teamUp1.text();
      $teamUp1.text(currentText + $("#name1").val());


    }
});


 //the following hide round directions= gameboard beneath
 $start1.on({
    click: () => {
      $round1.hide();
      $gameBoard.show();

    //do same thing for when start 2 button pushed
    let $Round= $("#Round");
    $Round.text("Round 1");

    let currentPrint1= $team1.text();
    let currentPrint2= $team2.text();
    $team1.text(currentPrint1 + $("#name1").val());
    $team2.text(currentPrint1 + $("#name2").val());


    }
});

   // let $teamName= $("#teamName");
let teamCounter= 0;//establish counter variable
let $team1Up= $("#team1Up");
let $team2Up= $("#team2Up");

$startTimer.on({
   click: () => {
       teamCounter = teamCounter+1;
       timerStart();

 var c= teamCounter%2;//intead of teamCounter have a box that says who's turn it is
        if(c==0){
        //var i=2;//team 2's turn
            $team2Up.text("Your turn");
            $team1Up.text(" ");
        }
        else{
          //  var i=1;//team 1's turn
            $team1Up.text("Your turn");
            $team2Up.text(" ");
        }

    //  $teamName.textContent += "You're up";
      selectArray1Card();
}
});

//randomly select and display cards from array1
//happens when pass, got it, or start timer clicked
function selectArray1Card(){
 let numb= array1Cards.length;
 var randomNum= Math.floor(Math.random()*numb);
 var celebName= array1Cards[randomNum];
 let $celebrityName= $("#celebrityName");
 $celebrityName.text(celebName);
}

//60 second count down timer

let $time = $("#timer");

function timerStart() {

  let timerId = setInterval(timerFunction, 1000);

  let countDown = 60;

  function timerFunction(){

    countDown = countDown - 1;

    if (countDown < 0){
     countDown = 0;


    }

    else{
    $time.text(countDown);
    }
}

}

//scoreboards
let $team1Scoreboard= $("#team1Score");
    let l = 0;
let $team2Scoreboard= $("#team2Score");
    let r = 0;

let array2Cards= [];//round 2 card array

$gotIt.on("click",()=>{
    //adding card to new array and taking out of old one
    let current_card = $("#celebrityName").text();
    let arrayNumb= array1Cards.indexOf(current_card);
    let mainEvent= array1Cards[arrayNumb];
    array2Cards.push(mainEvent);
    array1Cards.splice(arrayNumb, 1);

    if (array1Cards.length == 0){
        //let $celebrityName= $("#celebrityName");
       // $celebrityName.text("next round");
        $round2.show();
        $gameBoard.hide();

        let $teamUp2= $("#teamUp2");
        let currentText2= $teamUp2.text();
        $teamUp2.text(currentText2 + $("#name2").val());
     }

    var c= teamCounter%2;//intead of teamCounter have a box that says who's turn it is
        if(c==0){
           var i=2;
        }
        else{
            var i=1;
        }


    if (i==1){
        l = l + 1;
        $team1Scoreboard.text(l);
        selectArray1Card();
    }
    else {
        r = r + 1;
        $team2Scoreboard.text(r);
        selectArray1Card();
    }

});


$pass.on("click",()=>{
    selectArray1Card();//new randomly selected card
});



$start2.on({
    click: () => {
      $round2.hide();
      $gameBoard.show();

      $hideRound1.hide();
      $showRound2.show();


    let $Round= $("#Round");
    $Round.text("Round 2");

    }
});


function selectArray2Card(){
 let numb2= array2Cards.length;
 var randomNum2= Math.floor(Math.random()*numb2);
 var celebName= array2Cards[randomNum2];//do we have to make this celebName2?
 let $celebrityName= $("#celebrityName");
 $celebrityName.text(celebName);
}

teamCounter2 = 1;
$startTimer2.on({
   click: () => {
       teamCounter2 = teamCounter2+1;
       timerStart2();

 var e= teamCounter2%2;//intead of teamCounter have a box that says who's turn it is
        if(e==0){
        //var e=2;//team 2's turn
            $team2Up.text("Your turn");
            $team1Up.text(" ");
        }
        else{
          //  var e=1;//team 1's turn
            $team1Up.text("Your turn");
            $team2Up.text(" ");
        }

    //  $teamName.textContent += "You're up";
      selectArray2Card();
}
});
    let $time2 = $("#timer2");

function timerStart2() {

  let timerId = setInterval(timerFunction2, 1000);

  let countDown = 60;

  function timerFunction2(){

    countDown = countDown - 1;

    if (countDown < 0){
     countDown = 0;
    }

    else{
    $time2.text(countDown);
    }
}

}


let doneCards= [];//done card array

$gotIt2.on("click",()=>{
    //adding card to new array and taking out of old one
    let current_card2 = $("#celebrityName").text();
    let arrayNumb2= array2Cards.indexOf(current_card2);
    let mainEvent2= array2Cards[arrayNumb2];
    doneCards.push(mainEvent2);
    array2Cards.splice(arrayNumb2, 1);

    if (array2Cards.length == 0){
        let $Congrats= $("#Congrats");
        $Congrats.show();
        $round2.hide();
        $gameBoard.hide();
        $showRound2.hide();

        let $winnerMessage= $("#winnerMessage");
        //Read score board, offer two diff messages
        var team1FinalScore= $team1Scoreboard.text();
        var team2FinalScore= $team2Scoreboard.text();

        if (team1FinalScore> team2FinalScore){
            $winnerMessage.text("Congrats Team__, you are the winner!");//sophie can you figure out how to get the names in the blanks?
         }
        else if (team2FinalScore> team1FinalScore){
            $winnerMessage.text("Congrats Team__, you are the winner!");
        }
        else {
            $winnerMessage.text("Congrats on a tie game! You all won!");
        }

     }

    var n= teamCounter2%2;//intead of teamCounter have a box that says who's turn it is
        if(n==0){
           var u=2;
        }
        else{
            var u=1;
        }


    if (u==1){
        l = l + 1;
        $team1Scoreboard.text(l);
        selectArray2Card();
    }
    else {
        r = r + 1;
        $team2Scoreboard.text(r);
        selectArray2Card();
    }

});




$pass2.on("click",()=>{
    selectArray2Card();//new randomly selected card
});


})
