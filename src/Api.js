
const api="http://localhost:5000";

export const getUers=`${api}/user`;
export const getExchanges="https://api.coingecko.com/api/v3/exchanges";
export const getCoins= "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=200&page=1&sparkline=false"
export const getGlobaldata= "https://api.coingecko.com/api/v3/global";
export const getTrendingcoins= "https://api.coingecko.com/api/v3/search/trending";
