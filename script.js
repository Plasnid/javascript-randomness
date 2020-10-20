let weirdPlaceNames  = ["Accident, Maryland, USA", "Big Arm, Montana, USA", "Chicken, Alaska, USA", "Dogtown, Alabama, USA", "Embarrass, Minnesota, USA","Frankenstein, Missouri, USA", "Hazard, Nebraska, USA", "Batman, Turkey", "Christmas Island", "Inexpressible Island, Antarctica"]

let placeClicker = document.querySelector("#getName");
placeClicker.addEventListener("click", ()=>{
    // * check out the line of code below.  This is a template for how to get a random element from an array
    let weirdPlace = weirdPlaceNames[Math.floor(weirdPlaceNames.length*Math.random())];
    document.querySelector("#weirdNameSpot").innerHTML = weirdPlace;
});