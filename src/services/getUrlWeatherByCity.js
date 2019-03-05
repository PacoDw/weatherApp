const getUrlWeatherByCity = (service, city) => {
  const api_key = process.env.REACT_APP_API_KEY
  const url_base_weather = process.env.REACT_APP_URL_BASE_WEATER

  return `${url_base_weather}${service}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;