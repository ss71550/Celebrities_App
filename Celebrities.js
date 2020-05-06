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

$("#add_card").click(() => {
    let celebrity_card = $("#card_input").val();
    addItem(celebrity_card);
});
        function addItem(val){
            let $celebs = $("<li><li>");
            $celebs.text(val);
            $celebs.addClass("Round1_Cards");
            $("#list").append($celebs);
        }
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
