const express = require('express');
const cors = require('cors');

const { isPerectNum, isPrime, digitSum, isArmstrong, properties, isEvenOld } = require('./controllers/helper');
const fetchFunFact = require('./controllers/fun_fact');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to HNG Backend Stage 1 Task - Number Classfication API Developed by Oyelami Sekinat')
})

app.get('/api/classify-number', async (req, res) => {
    const { number } = req.query
    if (isNaN(number) || !number) {
       return  res.status(400).json({number: number, error: true})
    }
    let parsedNum = parseInt(number);

    const funFact = await fetchFunFact(number)

    res.status(200).json(   { 
            number: parsedNum,
            is_prime: isPrime(parsedNum),
            is_perfet: isPerectNum(parsedNum),
            properties: properties(isArmstrong, isEvenOld, parsedNum),
            digit_sum: digitSum(parsedNum),
            fun_fact: funFact
            })
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})