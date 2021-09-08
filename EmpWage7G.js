const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;

function getEmpWorkingHrs(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
    
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
    
            default:
                return 0;
    }
}

function calcEmpDailyWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            let empHrs = getEmpWorkingHrs(empCheck);
            totalEmpHrs += empHrs;
            empDailyWageArr.push(calcEmpDailyWage(empHrs));
}
let empWage = calcEmpDailyWage(totalEmpHrs);
console.log("Total Working Days: "+totalWorkingDays +" Total Working Hours: "+totalEmpHrs +" Employee Wage: "+empWage);

//Array Helper Functions
//UC-7A Calculate Total Wage Using Array forEach Traversal or Reduce Method
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC-7A Total Working Days: "+totalWorkingDays + " Total Working Hours: "+totalEmpHrs + " Employee Wage: "+totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC-7A Emp Wage With Reduce: "+empDailyWageArr.reduce(totalWages, 0));

//UC-7B Day Along With Daily Wage Using Array Map Helper Function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B Daily Wage Map")
console.log(mapDayWithWageArr);

//UC-7C Show Days When Full Time Wage of 160 were Earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC-7C Daily Wage Filter When Full Time Wage Earned");
console.log(fullDayWageArr);

//UC-7D Find the First Occurrence When Full Time Wage was Earned using Find Function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160")
}
console.log("UC-7D First Time FullTime Wage was Earned on Day: "+mapDayWithWageArr.find(findFullTimeWage));

//UC-7E Check if Every Element of Full Time Wage is Truely Holding Full Time Wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC-7E Check All Element have Time Wage: "+fullDayWageArr.every(isAllFullTimeWage));

//UC-7F Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC-7F Check If Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC-7G Find the Number of Days the Employee Workede
function totalDaysEmpWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC-7G Number of Days Employee Worked: "+empDailyWageArr.reduce(totalDaysEmpWorked, 0));