$(document).ready(() => {
  let $popUps= $("#popUps");
  $popUps.hide();
//javascript only fetching step one for id, when should fetch all divs

  let $welcome = $(".welcome");
  let $getStartedButton = $("#getStarted");

  let $step1 = $(".step1");
  let $addCard= $("#add_card");
  let $finishedCards = $("#finishedCards");

  let $step2 = $(".step2");
  let $beginGame = $("#beginGame");


$getStartedButton.on({
    click: () => {
      $step1.show();
      $welcome.hide();
    }
});

let $round1= [];//round 1 card array
$addCard.on({
    click: () => {
    let celebrity_card = $("#card_input").val();
    $round1.push("celebrity_card");
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

})
