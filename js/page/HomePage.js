import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'

import PopularPage from './PopularPage'   //最热
import TrendingPage from './TrendingPage' //趋势
import FavoritePage from './FavoritePage' //收藏
import MyPage from './MyPage' //我的
import NavigationUtil from '../navigator/NavigationUtil'

//首页, 做一个底部导航的页面
export default class HomePage extends Component<Props> {

    _bottomTabNavigation() {
        return createBottomTabNavigator({
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
        })
    }

    render() {
        //把最外层HomePage的导航器保存为NavigationUtil的一个常量, 用于和HomePage导航器同级别的DetailPage的相互跳转
        NavigationUtil.navigation = this.props.navigation;
        const Tab = this._bottomTabNavigation();
        return <Tab/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
