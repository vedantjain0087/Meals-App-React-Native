import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';

import {useSelector} from 'react-redux'

const FavoriteScreen = props =>{
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    if (favMeals.length === 0 || !favMeals){
        return <View style={styles.content}>
            <Text>No Favorite Meals Found</Text>
        </View>
    }
return <MealList listData={favMeals} navigation = {props.navigation}/>
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

FavoriteScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
}
export default FavoriteScreen;