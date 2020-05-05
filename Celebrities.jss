$(document).ready(() => {
  let $popUps= $("#popUps")
  $popUps.hide();
  
  let $welcome = $(".welcome");
  let $getStartedButton = $("#getStarted");

  let $step1 = $(".step1");
  let $finishedCards = $("#finishedCards");
  
  let $step2 = $(".step2");
  let $beginGame = $("#beginGame");

$getStartedButton.on({
    click: () => {
      $step1.show();
      $welcome.hide();
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
      $round1.show();
      $step2.hide();
    }
});

}