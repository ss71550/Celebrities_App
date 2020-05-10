$(document).ready(() => {
  let $popUps= $(".popUps");
  $popUps.hide();
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

  let $round3 = $("#round3");
  let $start3 = $("#start3");

  let $pass= $("#pass");
  let $gotIt= $("#gotIt")


$getStartedButton.on({
    click: () => {
      $step1.show();
      $welcome.hide();
    }
});

let $round1Cards= [];//round 1 card array
$addCard.on({
    click: () => {
    let celebrity_card = $("#card_input").val();
    $round1Cards.push("celebrity_card");
    }
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
    }
});

  $start2.on({
    click: () => {
      $round2.hide();
    }
});

  $start3.on({
    click: () => {
      $round3.hide();
    }
});
})
