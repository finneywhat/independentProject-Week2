$(document).ready(function(){
  $("form#mainForm").submit(function(event) {

  var question1 = $("input:radio[name=question1]:checked").val();
  debugger;

    if (question1 === "1") {
        $("#suggestedTracks, #java").show();
        $("#c-sharp").hide();
        $("#php").hide();
      } else if (question1 === "2") {
        $("#suggestedTracks, #c-sharp").show();
        $("#php").hide();
        $("#java").hide();
      } else {
        $("#suggestedTracks, #php").show();
        $("#c-sharp").hide();
        $("#java").hide();
     }

     $("form#mainForm").change();

     event.preventDefault();
  });
});
