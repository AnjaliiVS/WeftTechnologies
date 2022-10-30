/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/navigators/BottomTab/Home'
import Login from './src/navigators/Stack/Login';
AppRegistry.registerComponent(appName, () => App);
