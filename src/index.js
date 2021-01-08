import AppService from './modules/app.service'
import { config } from './modules/config';
import './modules/header.component'
import './styles/main.css'
import './styles/main.scss'

console.log('Config key:' + config.key);

const service = new AppService('Hello world')

service.log();

let moon = (param) => {
  console.log(param);
}

moon('sdfd');