const MAX_HRS_IN_MONTH = 160;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOURS = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

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
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOURS;
console.log("total working days: " + totalWorkingDays + " total working Hrs: " + totalEmpHrs + " emp wage: "+empWage );