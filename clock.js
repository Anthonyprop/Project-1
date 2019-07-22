/* javascript form for clock.html */
"use strict"

document.getElementById("days").textContent = "DD";
document.getElementById("hrs").textContent = "HH";
document.getElementById("mins").textContent = "MM";
document.getElementById("secs").textContent = "SS";

runDate();
runTimer();

// Sets time to local format

setInterval(runDate, 1000);
function runDate() {
	
	
	var currentDate = new Date();
	currentDate= currentDate.toLocaleString();
	document.getElementById("dateNow").innerHTML = currentDate;
}


//calculates the days until july 22
setInterval(runTimer, 1000);
function runTimer() {
	var currentDay = new Date();
	var newYear = new Date("july 22, 2019");
	var nextYear = currentDay.getFullYear() + 1;
	newYear.setFullYear(nextYear);
	var daysLeft = (newYear - currentDay)/(1000*60*60*24);

	//claculate current hours in day
	var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

	//calculate current minutes and seconds left in  current hour
	var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
	var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

	//display the time untill new years eve
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
}