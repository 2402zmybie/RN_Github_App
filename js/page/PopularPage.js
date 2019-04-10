import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation'

import NavigationUtil from '../navigator/NavigationUtil'

//底部导航为最热的页面
export default class PopularPage extends Component<Props> {

    constructor(props) {
        super(props)
        console.disableYellowBox = true
        this.tabNames = ['Java','Android','Ios','React','React Native','Php']
    }

    _genTabs() {
        const tabs = {};
        this.tabNames.forEach((item,index) => {
            tabs[`tab${index}`] = {
                //TODO 这个技巧  在这里配置各个页面的时候 可以向页面传递参数
                screen: props => <PopularTopPage {...props} tabLabel={item}/>,
                navigationOptions: {
                    title:item
                }
            }
        })
        return tabs;
    }

    render() {
        const TabTopNavigator = createMaterialTopTabNavigator(this._genTabs(),{
            tabBarOptions: {
                upperCaseLabel: false,   //是否使标签大写
                tabStyle: {mindWidth: 50},
                scrollEnabled:true,   //不是挤在一行,而是可以滑动
                style: {backgroundColor: '#678'},
                indicatorStyle: {height:2,backgroundColor:'white'},
                labelStyle: {fontSize: 13,marginTop:6,marginBottom:6}
            }
        });
        return <TabTopNavigator />
    }
}

//定义显示的页面
class PopularTopPage extends Component {

    render() {
        const {tabLabel} = this.props;
        return (
            <View>
                <Text>{tabLabel}</Text>
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
