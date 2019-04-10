//App导航组件

import {createStackNavigator,createSwitchNavigator} from 'react-navigation'

import Welcome from '../page/Welcome'
import HomePage from '../page/HomePage'  //首页变成动态的了
import DetailPage from '../page/DetailPage'
import DynamicBotTabNavigator from './DynamicBotTabNavigator'


const WelcomeNavigator = createStackNavigator({
    Welcome: {
        screen:Welcome,
        navigationOptions: {
            header:null   //不需要导航条
        }
    }
})

const InitApp = createStackNavigator({
    DynamicBotTabNavigator: {
        screen: DynamicBotTabNavigator,
        navigationOptions: {
            header: null
        }
    },
    DetailPage: {
        screen:DetailPage,
        navigationOptions: {

        }
    }
})

export const AppNavigator = createSwitchNavigator({
    Welcome: WelcomeNavigator,
    Init:InitApp
})

