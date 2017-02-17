var totalVal = function(number1, number2, number3, number4, number5, number6) {
  return number1 + number2 + number3 + number4 + number5 + number6;
};

$(document).ready(function(){
  $("form#mainForm").submit(function(event) {
    event.preventDefault();

  var question1 = parseInt($("#question1").val());
  var question2 = parseInt($("#question2").val());
  var question3 = parseInt($("#question3").val());
  var question4 = parseInt($("#question4").val());
  var question5 = parseInt($("#question5").val());
  var question6 = parseInt($("#question6").val());
  var result = totalVal(question1, question2, question3, question4, question5, question6);
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
