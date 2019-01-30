import convert from 'convert-units'
import constant from '../constants/weathers'


const getTemp = kelvin => parseFloat(convert(kelvin).from('K').to('C').toFixed(2));

const getWeatherState = ( { id } ) => {
  let weatherIcon = '';
  switch (true) {
    case id < 300:
      weatherIcon = constant.THUNDER;
      break;
    case id < 400:
      weatherIcon = constant.DRIZZLE;
    break;
    case id < 600:
      weatherIcon = constant.RAIN;
    break;
    case id < 700:
      weatherIcon = constant.SNOW;
    break;
    case id === 800:
      weatherIcon = constant.SUN;
    break;
      default:
      weatherIcon = constant.CLOUDY;
        break;
  }
  return weatherIcon;
}

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data.weather[0]);
  const temperature = getTemp(temp)

  return {
    temperature,
    weatherState,
    humidity,
    wind: speed
  }
}
export default transformWeather;