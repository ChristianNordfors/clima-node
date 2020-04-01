const axios = require('axios');



const getClima = async( lat, lng ) => {

    const  resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=040e980403b85e2cdcb6f68a47554c14&units=metric`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}
