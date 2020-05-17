$(document).ready(() => {
  let $popUps= $(".popUps");
  let $gameBoard = $("#gameBoard");
  $popUps.hide();
  $gameBoard.hide();

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

  let $team1= $("team1");
  let $team2= $("team2");

  //let $teamUp1= $("#teamUp1");
  let $teamUp2= $("#teamUp2");

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

    let team_name1 =$("#name1").val();
    let team_name2 =$("#name2").val();//let's remember to make these values fill in the blanks

$beginGame.on({
    click: () => {
      $round1.show();
      $step2.hide();

    //this not working
      let $teamUp1= $("#teamUp1");
      let currentText= $teamUp1.text();
    //most likely because for some reason this value is in the wrong format when I try it on the console
      $teamUp1.text(currentText + $("#name1").val());

    }
});


 //the following hide round directions= gameboard beneath
 $start1.on({
    click: () => {
      $round1.hide();
      $gameBoard.show();
      selectArray1Card();
    $team1.text(team_name1);
    $team2.text(team_name2);
    }
});

   // let $teamName= $("#teamName");

$startTimer.on({
   click: () => {
       timerFunction();

    //  $teamName.textContent += "You're up";
     // selectArray1Card();
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
//scoreboards
let $team1Scoreboard= $("#team1Score");
let $team2Scoreboard= $("#team2Score");
let teamCounter= 0;

let array2Cards= [];//round 2 card array
$gotIt.on("click",()=>{

    let current_card = $("#celebrityName").text();
    let arrayNumb= array1Cards.indexOf("current_Card");
    let mainEvent= array1Cards["arrayNumb"];
    array2Cards.push("mainEvent");
    array1Cards.splice("arrayNumb", 1);

    //add to scoreboard
    teamCounter= teamCounter+1;
    var i = 6
    var x= teamCounter;
    var y= 2;
    var c= x%y;
        if(c==0){
            i=1;
        } else{
            i=2
        }

    if (i==1){
    let scoreboard1Value= $team1Scoreboard.text
    selectArray1Card();//is this the way to call back to the rendom # function?
});

$pass.on("click",()=>{
    selectArray1Card();//new randomly selected card
});



$start2.on({
    click: () => {
      $round2.hide();
      $gameBoard.show();
    }
});

//FIGURE OUT HOW TO SHOW TEAMSUP MESSAGE FOR MULTOPE DIFFERENT ROUNDS, but same button

//60 second count down timer
    //have it so it starts timer when randomly selected card shows

  function timerFunction() {

       let $time = $("#timer");
  timerId = setInterval(timerFunction, 10);
  let start = new Date();// current time
  let alarmInterval = 600;
  let countDown = 600;
  let alarm = start.getTime() + alarmInterval;  // Set the alarm

    // Check the time
    let now = new Date();
    let currentTime = now.getTime();

    // Update the timer text
    if (countDown < 0) {
      countDown = 0;
      clearInterval(timerId);
        //goes to next team, new card displayed
        //checks if more cards, if not, shows next round
    } else {
      countDown = countDown - .1;
    }
    $time.text(Math.floor(countDown)/10);
  }


})
