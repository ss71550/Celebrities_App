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

  let $team1= $("#team1");
  let $team2= $("#team2");


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
      selectArray1Card();

    let currentPrint1= $team1.text();
    let currentPrint2= $team2.text();
    $team1.text(currentPrint1 + $("#name1").val());
    $team2.text(currentPrint1 + $("#name2").val());


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
    let l = 0;
let $team2Scoreboard= $("#team2Score");
    let r = 0;
let teamCounter= 0;

let array2Cards= [];//round 2 card array
$gotIt.on("click",()=>{
    //adding card to new array and taking out of old one
    let current_card = $("#celebrityName").text();
    let arrayNumb= array1Cards.indexOf("current_Card");
    let mainEvent= array1Cards["arrayNumb"];
    array2Cards.push("mainEvent");
    array1Cards.splice("arrayNumb", 1);

    //add to scoreboard. THIS IS ACTUALLY WRONG...Needs to be change in odd and even according to timer, not got it, as multiple //got its will happen per turn

    teamCounter= teamCounter+1;
    var i = 6
    var x= teamCounter;
    var y= 2;
    var c= x%y;
        if(c==0){
            i=2;
        } else{
            i=1
        }

    if (i==1){

        let l = l + 1;
        $team1Scoreboard.text(l);
        selectArray1Card();}
    else {
        let r = r + 1;
        $team2Scoreboard.text(l);
        selectArray1Card();}

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

//TEAMSUP MESSAGE goes according to odd/even thing that Grace made

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
