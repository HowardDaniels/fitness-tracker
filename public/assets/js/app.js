$("#newExerciseSubmit").click(function(){
    $.post("/home.html",
    {
      date: $("#date").value().trim(),
      time: $("#time").value().trim(),
      type: $("#type").value().trim(),
      distance: $("#distance").value().trim(),
      duration: $("#duration").value().trim()
    },
    function(data, status){
      $("#destination").append(`<div>${data.date}</div>`);
      alert("success");
    });
  });