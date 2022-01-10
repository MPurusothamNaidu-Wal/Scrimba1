// document.getElementById("count-el").textContent = 5;

/*let count = 0;
console.log(count)
*/

/*console.log(myage)
let myage=15*/

// let first= 5
// let second= 7
// let count = first + second
// console.log(count)

// let myage = 22;
// let humanDogRatio = 7
// let mydogage = myage * humanDogRatio
// console.log(mydogage)

// let count= 5
// count = count +10
// console.log(count)

// let bonusPoints = 50;
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// let lap1 = 34
// let lap2= 33
// let lap3 = 36
// function ll(){
//     let total = lap1 + lap2 + lap3
//     console.log(total)
// }
// ll()

let countel = document.querySelector("#count-el");
console.log(countel)

let saveel = document.querySelector("#save-el");
let count1 = 0
function increment(){
    //console.log("The button was clicked");
     count1 =  count1 + 1
    countel.textContent = count1

}
function save(){
    let countstr= count1 + "-"
    console.log(count1)
    saveel.textContent += countstr
    countel.textContent = 0
    count1 = 0

}

let name="Purusotham"
let greting = " Hi, my name is "
let my = greting + name
console.log(my)