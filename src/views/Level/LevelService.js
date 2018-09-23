const axios = require('axios');

export const getQuestion = async(difficulty,type) =>{
    let question = null
    await axios.get('https://opentdb.com/api.php?amount=1&category=19&difficulty='+difficulty+'&type='+type)
    .then(function (response) {
      question = response.data.results
    })
    .catch(function (error) {
      console.log('Get Question Error', error);
    });
    return question[0]
}