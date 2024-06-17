export const getWeather =async(city)=>{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=%20531f8fd528d747e797b114333242204%20&q=indore&aqi=yes`
);
const data =await response.json()
return data;
};

