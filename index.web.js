import { AppRegistry } from 'react-native';
import App from './App'; // 
import appJson from './app.json'; // 

AppRegistry.registerComponent(appJson.name, () => App);

AppRegistry.runApplication(appJson.name, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});