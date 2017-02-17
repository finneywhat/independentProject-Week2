$(document).ready(function(){
  $("form#mainForm").submit(function(event) {

  var question1 = $("input:radio[name=question1]:checked").val();
  debugger;

    if (question1 === "1") {
        $("#suggestedTracks, #java").show();
      } else if (question1 === "2") {
        $("#suggestedTracks, #c-sharp").show();
      } else {
        $("#suggestedTracks, #php").show();
     }

     $("form#mainForm").change();

     event.preventDefault();
  });
});
