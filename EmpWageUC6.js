//UC-6 store daily wage along with total wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOURS = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOURS;
}

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
                default:
                    return 0;
    }
}
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
 totalWorkingDays++;
 let empCheck = Math.floor(Math.random() * 10) % 3;
 let empHrs = getWorkingHours(empCheck);
 totalEmpHrs += empHrs;
 empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Monthly Working Hours:  " + empDailyWageArr);
console.log("Total Working Days: " + totalWorkingDays + " Total Working Hours: " + totalEmpHrs + " Total Emp Wage: "  + empWage);