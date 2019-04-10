import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation'

import NavigationUtil from '../navigator/NavigationUtil'

//底部导航为最热的页面
export default class PopularPage extends Component<Props> {

    constructor(props) {
        super(props)
        console.disableYellowBox = true
    }

    render() {
        const TabTopNavigator = createMaterialTopTabNavigator({
            PopularTopPage1: {
                screen: PopularTopPage,
                navigationOptions: {
                    tabBarLabel: "PopularTopPage1"
                }
            },
            PopularTopPage2: {
                screen: PopularTopPage,
                navigationOptions: {
                    tabBarLabel: "PopularTopPage2"
                }
            },
            PopularTopPage3: {
                screen: PopularTopPage,
                navigationOptions: {
                    tabBarLabel: "PopularTopPage3"
                }
            }
        },{
            tabBarOptions: {
                upperCaseLabel: false,
                tabStyle: {mindWidth: 50},
                scrollEnabled:true,
                style: {backgroundColor: '#678'},
                indicatorStyle: {height:2,backgroundColor:'pink'},
                labelStyle: {fontSize: 13,marginTop:6,marginBottom:6}
            }
        });
        return <TabTopNavigator />
    }
}

//定义显示的页面
class PopularTopPage extends Component {
    render() {
        return (
            <View>
                <Text>{'PolularPage'}</Text>
                <Button title={'跳转到详情页'} onPress={() => {
                    NavigationUtil.goPage(
                        {navigation: this.props.navigation},
                        "DetailPage")
                }}/>
            </View>
        )
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
