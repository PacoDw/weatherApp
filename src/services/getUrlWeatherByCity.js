import { url_base_weather, api_key } from './../constants/api_url';

let getUrlWeatherByCity = (service, city) => {
  return `${url_base_weather}${service}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;