const axios = require('axios');

axios
.get('https://example.com/todos')
.then(res => {
    console.log(res.status);
    console.log(res)
})
.catch(error => {
    console.error(error);
})