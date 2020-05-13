$(document).ready(() => {
  let $popUps= $(".popUps");
  let $gameBoard = $("#gameBoard");
  let $teamUp= $("#teamUp")
  $popUps.hide();
  $gameBoard.hide();
  $teamUp.hide();
//javascript only fetching step one for id, when should fetch all divs

  let $welcome = $("#welcome");
  let $getStartedButton = $("#getStarted");

  let $step1 = $("#step1");
  let $addCard= $("#add_card");
  let $finishedCards = $("#finishedCards");

  let $step2 = $("#step2");
  let $beginGame = $("#beginGame");

  let $round1 = $("#round1");
  let $start1 = $("#start1");

  let $round2 = $("#round2");
  let $start2 = $("#start2");


  let $pass= $("#pass");
  let $gotIt= $("#gotIt")


  let $startTimer= $("#startTimer")

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

$beginGame.on({
    click: () => {
      let team_name1 = $("#name1").val();
      let team_name2 = $("#name2").val();//let's remember to make these values fill in the blanks
      $round1.show();
      $step2.hide();
    }
});


 //the following hide round directions= gameboard beneath
 $start1.on({
    click: () => {
      $round1.hide();
      $teamUp.show();
    }
});

    let $teamName= $("#teamName");

  $startTimer.on({
    click: () => {
      $teamUp.hide();
      $teamName.textContent += "You're up";
      $gameBoard.show();
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
 //check that += thing right
 $celebrityName.textContent += "celebName";
}


let array2Cards= [];//round 2 card array
$gotIt.on("click",()=>{
    //should name this function so can just call it rather than have all code here
    {let current_card = $("#card_input").val();//instead of having the celebrtiy_card, which is the input of the text box, make it be the item that was randomly selected. So,
    array2Cards.push(current_card);
    array1Cards.pop(current_card);}
    //add pt to scoreboard
    selectArray1Card();
});

$pass.on("click",()=>{
//new randomly selected card
    selectArray1Card();
});

$start2.on({
    click: () => {
      $round2.hide();
    }
});

//FIGURE OUT HOW TO SHOW TEAMSUP MESSAGE FOR MULTOPE DIFFERENT ROUNDS, but same button

//60 second count down timer
    //have it so it starts timer when randomly selected card shows
  let $time = $("#timer");
  timerId = setInterval(timerFunction, 10);
  let start = new Date();// current time
  let alarmInterval = 600;
  let countDown = 600;
  let alarm = start.getTime() + alarmInterval;  // Set the alarm

  function timerFunction() {
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
