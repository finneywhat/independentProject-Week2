var totalVal = function(number1, number2, number3) {
  return number1 + number2 + number3;
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
  var result = totalVal(question1, question2, question3);
  debugger;

    if (result <= 4) {
        $("#suggestedTracks, #java").show();
        $("#c-sharp").hide();
        $("#php").hide();
      } else if (result <= 7) {
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
