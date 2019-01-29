import convert from 'convert-units'
import constant from '../constants/weathers'


const getTemp = kelvin => parseFloat(convert(kelvin).from('K').to('C').toFixed(2));

const getWeatherState = weatherData => {
  return constant.CLOUD;
}

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data);
  const temperature = getTemp(temp)

  return {
    temperature,
    weatherState,
    humidity,
    wind: speed
  }
}
export default transformWeather;