

export default class NavigationUtil  {

    /**
     * 跳转到指定页面
     * @param params
     * @param page
     */
    static goPage(params,page) {
        const navigation = NavigationUtil.navigation;
        if(!navigation) {
            console.log('navigation con not be null');
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }

    static goBack(navigation) {
        navigation.goBack();
    }

    /**
     * 跳转到首页
     * @param params
     */
    static resetToHomePage(params) {
        const {navigation} = params
        navigation.navigate('Init')
    }
}