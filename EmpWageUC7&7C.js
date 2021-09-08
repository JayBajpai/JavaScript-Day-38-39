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
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B Daily Wage Map")
console.log(mapDayWithWageArr);
//UC 7C - Show days when full time wage of 160 earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily wage filter when fulltime wage earned");
console.log(fullDayWageArr);
