import axios from 'axios';



export const getCoins = async() => {
    try {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        return res.data;
    } catch (error) {
        console.log('Can not get data');
    }
}