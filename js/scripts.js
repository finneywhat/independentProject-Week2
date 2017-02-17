$(document).ready(function(){
  $("form#mainForm").submit(function(event){
    debugger;
    // $(".btn").click(function() {
      $("#suggestedTracks, #java").show();
    // });
    event.preventDefault();
  });
});
