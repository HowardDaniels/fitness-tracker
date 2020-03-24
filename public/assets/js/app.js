document.getElementById("calendarSpan").innerText = moment().format('MMMM YYYY');

var month = moment().format('MMMM');
var day = moment().format('DD');
var year = moment().format('YYYY');
var olympiad = parseInt(year)/4;
var century = parseInt(year)/100;
var div400 = parseInt(year)/400;
if (olympiad - Math.floor(olympiad) === 0){
  if(century - Math.floor(century) === 0 && div400 - Math.floor(div400) > 0){
      var isLeapYear = false;
  }
  else{
    var isLeapYear = true;
  }
}
else {
    var isLeapYear = false;
}
var subtractDays = day - 1;
var firstOfMonth = moment().subtract(subtractDays, 'days').calendar();
var firstOfMonthWeekday = moment(firstOfMonth).format('dddd');

if (firstOfMonthWeekday === "Sunday") {
    document.getElementById("a1").textContent = "1";
    document.getElementById("a2").textContent = "2";
    document.getElementById("a3").textContent = "3";
    document.getElementById("a4").textContent = "4";
    document.getElementById("a5").textContent = "5";
    document.getElementById("a6").textContent = "6";
    document.getElementById("a7").textContent = "7";
    document.getElementById("b1").textContent = "8";
    document.getElementById("b2").textContent = "9";
    document.getElementById("b3").textContent = "10";
    document.getElementById("b4").textContent = "11";
    document.getElementById("b5").textContent = "12";
    document.getElementById("b6").textContent = "13";
    document.getElementById("b7").textContent = "14";
    document.getElementById("c1").textContent = "15";
    document.getElementById("c2").textContent = "16";
    document.getElementById("c3").textContent = "17";
    document.getElementById("c4").textContent = "18";
    document.getElementById("c5").textContent = "19";
    document.getElementById("c6").textContent = "20";
    document.getElementById("c7").textContent = "21";
    document.getElementById("d1").textContent = "22";
    document.getElementById("d2").textContent = "23";
    document.getElementById("d3").textContent = "24";
    document.getElementById("d4").textContent = "25";
    document.getElementById("d5").textContent = "26";
    document.getElementById("d6").textContent = "27";
    document.getElementById("d7").textContent = "28";
    
    if (month === "January" || "March" || "May" || "July" || "August" || "October" || "December"){
        document.getElementById("e1").textContent = "29";
        document.getElementById("e2").textContent = "30";
        document.getElementById("e3").textContent = "31";
    }

    else if (month === "April" || "June" || "September" || "December"){
        document.getElementById("e1").textContent = "29";
        document.getElementById("e2").textContent = "30";
    }

    if (month === "February" && isLeapYear === true){
        document.getElementById("e1").textContent = "29";
    }

}

else if (firstOfMonthWeekday === "Monday") {
    document.getElementById("a2").textContent = "1";
    document.getElementById("a3").textContent = "2";
    document.getElementById("a4").textContent = "3";
    document.getElementById("a5").textContent = "4";
    document.getElementById("a6").textContent = "5";
    document.getElementById("a7").textContent = "6";
    document.getElementById("b1").textContent = "7";
    document.getElementById("b2").textContent = "8";
    document.getElementById("b3").textContent = "9";
    document.getElementById("b4").textContent = "10";
    document.getElementById("b5").textContent = "11";
    document.getElementById("b6").textContent = "12";
    document.getElementById("b7").textContent = "13";
    document.getElementById("c1").textContent = "14";
    document.getElementById("c2").textContent = "15";
    document.getElementById("c3").textContent = "16";
    document.getElementById("c4").textContent = "17";
    document.getElementById("c5").textContent = "18";
    document.getElementById("c6").textContent = "19";
    document.getElementById("c7").textContent = "20";
    document.getElementById("d1").textContent = "21";
    document.getElementById("d2").textContent = "22";
    document.getElementById("d3").textContent = "23";
    document.getElementById("d4").textContent = "24";
    document.getElementById("d5").textContent = "25";
    document.getElementById("d6").textContent = "26";
    document.getElementById("d7").textContent = "27";
    document.getElementById("e1").textContent = "28"
    
    if (month === "January" || "March" || "May" || "July" || "August" || "October" || "December"){
        document.getElementById("e2").textContent = "29";
        document.getElementById("e3").textContent = "30";
        document.getElementById("e4").textContent = "31";
    }

    else if (month === "April" || "June" || "September" || "December"){
        document.getElementById("e2").textContent = "29";
        document.getElementById("e3").textContent = "30";
    }

    else if (month === "February" && isLeapYear === true){
        document.getElementById("e2").textContent = "29";
    }

}

else if (firstOfMonthWeekday === "Tuesday") {
    document.getElementById("a3").textContent = "1";
    document.getElementById("a4").textContent = "2";
    document.getElementById("a5").textContent = "3";
    document.getElementById("a6").textContent = "4";
    document.getElementById("a7").textContent = "5";
    document.getElementById("b1").textContent = "6";
    document.getElementById("b2").textContent = "7";
    document.getElementById("b3").textContent = "8";
    document.getElementById("b4").textContent = "9";
    document.getElementById("b5").textContent = "10";
    document.getElementById("b6").textContent = "11";
    document.getElementById("b7").textContent = "12";
    document.getElementById("c1").textContent = "13";
    document.getElementById("c2").textContent = "14";
    document.getElementById("c3").textContent = "15";
    document.getElementById("c4").textContent = "16";
    document.getElementById("c5").textContent = "17";
    document.getElementById("c6").textContent = "18";
    document.getElementById("c7").textContent = "19";
    document.getElementById("d1").textContent = "20";
    document.getElementById("d2").textContent = "21";
    document.getElementById("d3").textContent = "22";
    document.getElementById("d4").textContent = "23";
    document.getElementById("d5").textContent = "24";
    document.getElementById("d6").textContent = "25";
    document.getElementById("d7").textContent = "26";
    document.getElementById("e1").textContent = "27";
    document.getElementById("e2").textContent = "28";
    
    if (month === "January" || "March" || "May" || "July" || "August" || "October" || "December"){
        document.getElementById("e3").textContent = "29";
        document.getElementById("e4").textContent = "30";
        document.getElementById("e5").textContent = "31";
    }

    else if (month === "April" || "June" || "September" || "December"){
        document.getElementById("e3").textContent = "29";
        document.getElementById("e4").textContent = "30";
    }

    else if (month === "February" && isLeapYear === true){
        document.getElementById("e3").textContent = "29";
    }

}

else if (firstOfMonthWeekday === "Wednesday") {
    document.getElementById("a4").textContent = "1";
    document.getElementById("a5").textContent = "2";
    document.getElementById("a6").textContent = "3";
    document.getElementById("a7").textContent = "4";
    document.getElementById("b1").textContent = "5";
    document.getElementById("b2").textContent = "6";
    document.getElementById("b3").textContent = "7";
    document.getElementById("b4").textContent = "8";
    document.getElementById("b5").textContent = "9";
    document.getElementById("b6").textContent = "10";
    document.getElementById("b7").textContent = "11";
    document.getElementById("c1").textContent = "12";
    document.getElementById("c2").textContent = "13";
    document.getElementById("c3").textContent = "14";
    document.getElementById("c4").textContent = "15";
    document.getElementById("c5").textContent = "16";
    document.getElementById("c6").textContent = "17";
    document.getElementById("c7").textContent = "18";
    document.getElementById("d1").textContent = "19";
    document.getElementById("d2").textContent = "20";
    document.getElementById("d3").textContent = "21";
    document.getElementById("d4").textContent = "22";
    document.getElementById("d5").textContent = "23";
    document.getElementById("d6").textContent = "24";
    document.getElementById("d7").textContent = "25";
    document.getElementById("e1").textContent = "26";
    document.getElementById("e2").textContent = "27";
    document.getElementById("e3").textContent = "28";
    
    if (month === "January" || "March" || "May" || "July" || "August" || "October" || "December"){
        document.getElementById("e4").textContent = "29";
        document.getElementById("e5").textContent = "30";
        document.getElementById("e6").textContent = "31";
    }

    else if (month === "April" || "June" || "September" || "December"){
        document.getElementById("e4").textContent = "29";
        document.getElementById("e5").textContent = "30";
    }

    else if (month === "February" && isLeapYear === true){
        document.getElementById("e4").textContent = "29";
    }

}

else if (firstOfMonthWeekday === "Thursday") {
    document.getElementById("a5").textContent = "1";
    document.getElementById("a6").textContent = "2";
    document.getElementById("a7").textContent = "3";
    document.getElementById("b1").textContent = "4";
    document.getElementById("b2").textContent = "5";
    document.getElementById("b3").textContent = "6";
    document.getElementById("b4").textContent = "7";
    document.getElementById("b5").textContent = "8";
    document.getElementById("b6").textContent = "9";
    document.getElementById("b7").textContent = "10";
    document.getElementById("c1").textContent = "11";
    document.getElementById("c2").textContent = "12";
    document.getElementById("c3").textContent = "13";
    document.getElementById("c4").textContent = "14";
    document.getElementById("c5").textContent = "15";
    document.getElementById("c6").textContent = "16";
    document.getElementById("c7").textContent = "17";
    document.getElementById("d1").textContent = "18";
    document.getElementById("d2").textContent = "19";
    document.getElementById("d3").textContent = "20";
    document.getElementById("d4").textContent = "21";
    document.getElementById("d5").textContent = "22";
    document.getElementById("d6").textContent = "23";
    document.getElementById("d7").textContent = "24";
    document.getElementById("e1").textContent = "25";
    document.getElementById("e2").textContent = "26";
    document.getElementById("e3").textContent = "27";
    document.getElementById("e4").textContent = "28";
    
    if (month === "January" || "March" || "May" || "July" || "August" || "October" || "December"){
        document.getElementById("e5").textContent = "29";
        document.getElementById("e6").textContent = "30";
        document.getElementById("e7").textContent = "31";
    }

    else if (month === "April" || "June" || "September" || "December"){
        document.getElementById("e5").textContent = "29";
        document.getElementById("e6").textContent = "30";
    }

    else if (month === "February" && isLeapYear === true){
        document.getElementById("e5").textContent = "29";
    }

}

else if (firstOfMonthWeekday === "Friday") {
    document.getElementById("a6").textContent = "1";
    document.getElementById("a7").textContent = "2";
    document.getElementById("b1").textContent = "3";
    document.getElementById("b2").textContent = "4";
    document.getElementById("b3").textContent = "5";
    document.getElementById("b4").textContent = "6";
    document.getElementById("b5").textContent = "7";
    document.getElementById("b6").textContent = "8";
    document.getElementById("b7").textContent = "9";
    document.getElementById("c1").textContent = "10";
    document.getElementById("c2").textContent = "11";
    document.getElementById("c3").textContent = "12";
    document.getElementById("c4").textContent = "13";
    document.getElementById("c5").textContent = "14";
    document.getElementById("c6").textContent = "15";
    document.getElementById("c7").textContent = "16";
    document.getElementById("d1").textContent = "17";
    document.getElementById("d2").textContent = "18";
    document.getElementById("d3").textContent = "19";
    document.getElementById("d4").textContent = "20";
    document.getElementById("d5").textContent = "21";
    document.getElementById("d6").textContent = "22";
    document.getElementById("d7").textContent = "23";
    document.getElementById("e1").textContent = "24";
    document.getElementById("e2").textContent = "25";
    document.getElementById("e3").textContent = "26";
    document.getElementById("e4").textContent = "27";
    document.getElementById("e5").textContent = "28";
    
    if (month === "January" || "March" || "May" || "July" || "August" || "October" || "December"){
        document.getElementById("e6").textContent = "29";
        document.getElementById("e7").textContent = "30";
        document.getElementById("f1").textContent = "31";
    }

    else if (month === "April" || "June" || "September" || "December"){
        document.getElementById("e6").textContent = "29";
        document.getElementById("e7").textContent = "30";
    }

    else if (month === "February" && isLeapYear === true){
        document.getElementById("e6").textContent = "29";
    }

}

else if (firstOfMonthWeekday === "Saturday") {
    document.getElementById("a7").textContent = "1";
    document.getElementById("b1").textContent = "2";
    document.getElementById("b2").textContent = "3";
    document.getElementById("b3").textContent = "4";
    document.getElementById("b4").textContent = "5";
    document.getElementById("b5").textContent = "6";
    document.getElementById("b6").textContent = "7";
    document.getElementById("b7").textContent = "8";
    document.getElementById("c1").textContent = "9";
    document.getElementById("c2").textContent = "10";
    document.getElementById("c3").textContent = "11";
    document.getElementById("c4").textContent = "12";
    document.getElementById("c5").textContent = "13";
    document.getElementById("c6").textContent = "14";
    document.getElementById("c7").textContent = "15";
    document.getElementById("d1").textContent = "16";
    document.getElementById("d2").textContent = "17";
    document.getElementById("d3").textContent = "18";
    document.getElementById("d4").textContent = "19";
    document.getElementById("d5").textContent = "20";
    document.getElementById("d6").textContent = "21";
    document.getElementById("d7").textContent = "22";
    document.getElementById("e1").textContent = "23";
    document.getElementById("e2").textContent = "24";
    document.getElementById("e3").textContent = "25";
    document.getElementById("e4").textContent = "26";
    document.getElementById("e5").textContent = "27";
    document.getElementById("e6").textContent = "28";
    
    if (month === "January" || "March" || "May" || "July" || "August" || "October" || "December"){
        document.getElementById("e7").textContent = "29";
        document.getElementById("f1").textContent = "30";
        document.getElementById("f2").textContent = "31";
    }

    else if (month === "April" || "June" || "September" || "December"){
        document.getElementById("e7").textContent = "29";
        document.getElementById("f1").textContent = "30";
    }

    else if (month === "February" && isLeapYear === true){
        document.getElementById("e7").textContent = "29";
    }

}