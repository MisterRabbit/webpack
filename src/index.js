import AppService from './modules/app.service'
import { config } from './modules/config';

console.log('Config key:' + config.key);

const service = new AppService('Hello world!')

service.log();