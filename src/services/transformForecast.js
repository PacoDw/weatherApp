import moment from 'moment'
import transformWeather from './transformWeather'

// If you want to change de language, use the following
// import 'moment/local/es'

const transformForecast = data => (
  data.list
    .filter( item => (
      moment.unix(item.dt).hour() === 6 ||
      moment.unix(item.dt).hour() === 12 ||
      moment.unix(item.dt).hour() === 18
    ))
    .map(item => (
      {
        weekDaty: moment.unix(item.dt).format('ddd'),
        hour: moment.unix(item.dt).hour(),
        data: transformWeather(item)
      }
    ))
    
) 
export default transformForecast