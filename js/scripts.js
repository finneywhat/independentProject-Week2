var totalVal = function(question1, question2, question3) {
  return question1 + question2 + question3;
}

$(document).ready(function(){
  $("form#mainForm").submit(function(event) {
    event.preventDefault();

  var question1 = $("#question1").val();
  var question2 = $("#question2").val();
  var question3 = $("#question3").val();
  var question4 = $("#question4").val();
  var question5 = $("#question5").val();
  var question6 = $("#question6").val();

  debugger;

    if (question1 === "1" || question2 === "1") {
        $("#suggestedTracks, #java").show();
        $("#c-sharp").hide();
        $("#php").hide();
      } else if (question1 === "2" || ) {
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
