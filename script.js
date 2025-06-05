let  userInp = document.getElementById("birthDate");
userInp.max = new Date().toISOString().split("T")[0]; // Set max date to today


const calculateAge = () => {
let birthDate = new Date(userInp.value);
let today = new Date();

let d1 = birthDate.getDate();
let m1 = birthDate.getMonth() + 1; // Months are zero-based in JavaScript
let y1 = birthDate.getFullYear();

let d2 = today.getDate();
let y2 = today.getFullYear();
let m2 = today.getMonth() + 1; // Months are zero-based in JavaScript

let ageYears = y2 - y1; 
let ageMonths = m2 - m1; 
let ageDays = d2 - d1;
 // Adjust for negative months/days
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        let prevMonth = new Date(y2, m2 - 1, 0).getDate();
        ageMonths--;
        ageDays += prevMonth;
    }

    document.getElementById("result").innerText = 
        `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}

console.log("Age Calculator Loaded");
