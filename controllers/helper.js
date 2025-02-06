const isPrime = (num) => {
    if (num <= 1) {
        return false
    }
    if (num ===2 || num === 3) {
        return true
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false
    }
    for (let b = 5; b <= Math.sqrt(num); b += 6) {
        if (num % b === 0 || num % (b + 2) === 0) {
            return false
        }
    }
    return true;
}

const isPerectNum = (num) => {
    if (num <= 0) {
        return false
    }
    let sumDiv = 1;
    for (let b = 2; b <= Math.sqrt(num); b++) {
        if (num % b === 0) {
            sumDiv += b;
            if (b  !== Math.floor(num / b)) {
                sumDiv += Math.floor(num / b)
            }
        }
    }
    return sumDiv === num;
}

const digitSum = (num) => {
    num = Math.abs(num)
    let sum = 0;
    while (num > 0) {
        let b = num % 10;
        sum += b;
        num = Math.floor(num / 10)
    }
    return sum
}

const isArmstrong = (num) => {
    let tempNum = num;
    let sum = 0;
    let numLen = num.toString().length
    while (tempNum > 0) {
        let last_digit = tempNum % 10;
        sum += Math.pow(last_digit, numLen)
        tempNum = Math.floor(tempNum / 10)
    }
    return sum === num
    
}

const isEvenOld = (num) => {
    if (num % 2 === 0) {
        return true
    }
    return false;
}

const properties =(isArmstrong, isEvenOld, num) => {
    const armNum = isArmstrong(num);
    const numtry = isEvenOld(num);
    if ((armNum === true) && (numtry === true)) {
        return ['armstrong', 'even']
    }
    if ((armNum === true) && (numtry === false)) {
        return ['armstrong', 'old']
    }
    if ((armNum === false) && (numtry === true)) {
        return ["even"]
    }
    if ((armNum === false) && (numtry === false)) {
        return ['old']
    }
}

// armstrog num - 9474, 1634. 8208, 153, 370, 371,407
// console.log(isPrime(num))
// console.log(isPerectNum(num))
// console.log(digitSum(num))
// console.log(properties(isArmstrong, isEvenOld, num))

module.exports = {
    isPerectNum: isPerectNum,
    isPrime: isPrime,
    digitSum: digitSum,
    properties: properties,
    isArmstrong: isArmstrong,
    isEvenOld: isEvenOld
}