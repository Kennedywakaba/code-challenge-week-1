const prompt = require("prompt-sync")({ sigint: true });

function calculateNHIIF(salary) {
    if ($salaryAmount >= 0 && $salary <= 5999) {
        return 150;
    } elseif ($salary >= 6000 && $salary <= 7999) {
        return 300;
    } elseif ($salary >= 8000 && $salary <= 11999) {
        return 400;
    } elseif ($salary >= 12000 && $salary <= 14999) {
        return 500;
    } elseif ($salary >= 15000 && $salary <= 19999) {
        return 600;
    } elseif ($salary >= 20000 && $salary <= 24999) {
        return 750;
    } elseif ($salary >= 25000 && $salary <= 29999) {
        return 850;
    } elseif ($salary >= 30000 && $salary <= 34999) {
        return 900;
    } elseif ($salary >= 35000 && $salary <= 39999) {
        return 950;
    } elseif ($salary >= 40000 && $salary <= 44999) {
        return 1000;
    } elseif ($salary >= 45000 && $salary <= 49999) {
        return 1100;
    } elseif ($salary >= 50000 && $salary <= 59999) {
        return 1200;
    } elseif ($salary >= 60000 && $salary <= 69999) {
        return 1300;
    } elseif ($salary >= 70000 && $salary <= 79999) {
        return 1400;
    } elseif ($salary >= 80000 && $salary <= 89999) {
        return 1500;
    } elseif ($salary >= 90000 && $salary <= 99999) {
        return 1600;
    } elseif ($salary >= 100000) {
        return 1700;
    }


    
    

