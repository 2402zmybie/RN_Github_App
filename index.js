/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//导入导航器
import {AppNavigator} from './js/navigator/AppNavigator'

AppRegistry.registerComponent(appName, () => AppNavigator);
