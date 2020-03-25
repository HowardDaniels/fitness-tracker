var exerciseMonth;
var exerciseDay;
var exerciseYear;
var exerciseType;

localStorage.getItem("exerciseMonth", exerciseMonth);
localStorage.getItem("exerciseDay", exerciseDay);
localStorage.getItem("exerciseYear", exerciseYear);
localStorage.getItem("exerciseType", exerciseType);

$("#homeButton").on("click", function(){
    document.location.href="home.html";
});

$("#statsButton").on("click", function(){
    document.location.href="stats.html";
});

$("#inputGroupSelect01").on("click", function(){
    if ($(this).val() !== "MM"){
        exerciseMonth = $(this).val();
        localStorage.setItem("exerciseMonth", exerciseMonth);
        console.log(exerciseMonth + "-" + exerciseDay + "-" + exerciseYear);
    }
});

$("#inputGroupSelect02").on("click", function(){
    if ($(this).val() !== "DD"){
        exerciseDay = $(this).val();
        localStorage.setItem("exerciseDay", exerciseDay);
        console.log(exerciseMonth + "-" + exerciseDay + "-" + exerciseYear);
    }
});

$("#inputGroupSelect03").on("click", function(){
    if ($(this).val() !== "YYYY"){
        exerciseYear = $(this).val();
        localStorage.setItem("exerciseYear", exerciseYear);
        console.log(exerciseMonth + "-" + exerciseDay + "-" + exerciseYear);
    }
});

$("#inputGroupSelect04").on("click", function(){
    if ($(this).val() !== "Choose..."){
        exerciseType = $(this).val();
        localStorage.setItem("exerciseType", exerciseType);
        console.log(exerciseMonth + "-" + exerciseDay + "-" + exerciseYear);
        // if (exerciseType === "Gym workout"){
            
        // }
    }
});