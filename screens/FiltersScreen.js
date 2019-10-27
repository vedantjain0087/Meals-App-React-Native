import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/HeaderButton';

const FilterScreen = props =>{
return (
    <View style={styles.screen}>
        <Text>The FilterScreen</Text>
    </View>
)
}
const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
});

FilterScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Filters',
    headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Meanu" iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer();
        }}/>
    </HeaderButtons>
}
}
export default FilterScreen;