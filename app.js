const express = require('express');
const cors = require('cors');

const {isPerectNum, isPrime, digitSum, properties, isArmstrong, isEvenOld} = require('./controllers/helper');
const fetchFunFact = require('./controllers/fun_fact');


const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to HNG Backend Stade 1')
})

app.get('/api/classify-number', async (req, res) => {
    const { num } = req.query
    let parsedNum = parseInt(num);
    if (isNaN(parsedNum)) {
       return  res.status(400).json({number: num, error: true})
    }
    const funFact = await fetchFunFact(num)
    res.status(200).json(   { 
                number: parsedNum,
                is_prime: isPrime(num),
                is_perfet: isPerectNum(num),
                digit_sum: digitSum(num),
                properties: properties(isArmstrong, isEvenOld, num),
                fun_fact: funFact
            })
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})