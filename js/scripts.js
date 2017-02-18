var totalVal = function(number1, number2, number3, number4, number5, number6) {
  return number1 + number2 + number3 + number4 + number5 + number6;
};

$(document).ready(function(){
  $("form#mainForm").submit(function(event) {
    event.preventDefault();

  var answer1 = parseInt($("#question1").val());
  var answer2 = parseInt($("#question2").val());
  var answer3 = parseInt($("#question3").val());
  var answer4 = parseInt($("#question4").val());
  var answer5 = parseInt($("#question5").val());
  var answer6 = parseInt($("#question6").val());
  var result = totalVal(answer1, answer2, answer3, answer4, answer5, answer6);
  debugger;

    if (result <= 9) {
        $("#suggestedTracks, #java").show();
        $("#c-sharp").hide();
        $("#php").hide();
      } else if (result <= 14) {
        $("#suggestedTracks, #c-sharp").show();
        $("#php").hide();
        $("#java").hide();
      } else {
        $("#suggestedTracks, #php").show();
        $("#c-sharp").hide();
        $("#java").hide();
      }
      
     $("form#mainForm").change();

  });
});
