/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootScene from './src/RootScene'

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => RootScene);
