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
        $round2.show;
        $gameBoard.hide;
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
    }
});




})
