const axios = require('axios')
const fetchFunFact = async (num) => {
    const url = `http://numbersapi.com/${num}/math`;
    try {
        const { data } = await axios.get(url)
        // console.log(data);
        return data
    } catch (error) {
        console.log(error)
        console.log('Mad!!!!!!!!!!!!!!!!!!!!!!')
    }
}

// fetchFunFact(415)
module.exports = fetchFunFact;