import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation'
// import { BottomTabBar } from 'react-navigation-tabs';  //这个组件是配合react-navigation使用的,他是react-navigation所依赖的组件
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'

import PopularPage from '../page/PopularPage'   //最热
import TrendingPage from '../page/TrendingPage' //趋势
import FavoritePage from '../page/FavoritePage' //收藏
import MyPage from '../page/MyPage' //我的
import NavigationUtil from './NavigationUtil'

const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: "最热",
            tabBarIcon: ({tintColor,focused}) => {
                return <FontAwesome5
                    name={'hotjar'}
                    size={26}
                    style={{color:tintColor}}
                />
            }
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: "趋势",
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={"md-trending-up"}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: "收藏",
            tabBarIcon: ({tintColor,focused}) => (
                <MaterialIcons
                    name={"favorite"}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: "MyPage",
            tabBarIcon: ({tintColor,focused}) => {
                return <Foundation
                    name={"social-myspace"}
                    size={26}
                    style={{color:tintColor}}
                />
            }
        }
    },
}
//底部动态导航的页面
export default class DynamicBotTabNavigator extends Component<Props> {

    _bottomTabNavigation() {
        //在这里定义动态的底部显示
        const {PopularPage,TrendingPage,FavoritePage,MyPage} = TABS;
        //修改底部导航栏条目的 tabBarLabel
        PopularPage.navigationOptions.tabBarLabel = '最热呀'
        const showTab = {PopularPage,TrendingPage,FavoritePage};
        return createBottomTabNavigator(showTab)
    }

    render() {
        //把最外层HomePage的导航器保存为NavigationUtil的一个常量, 用于和HomePage导航器同级别的DetailPage的相互跳转
        NavigationUtil.navigation = this.props.navigation;
        const Tab = this._bottomTabNavigation();
        return <Tab/>
    }
}

//创建一个组件来重写底部导航
// class TabBarComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.theme = {
//             tintColor: props.activeTintColor,
//             updateTime:new Date().getTime()
//         }
//     }
//     render() {
//         return (
//             <BottomTabBar
//                 {...this.props}
//                 activeTintColor={this.theme.tintColor || this.props.activeTintColor}
//             />
//         )
//     }
// }