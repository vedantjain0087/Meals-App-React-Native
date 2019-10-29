import React from 'react';
import MealList from '../components/MealList';

import {useSelector} from 'react-redux'

const FavoriteScreen = props =>{
    const favMeals = useSelector(state => state.meals.favoriteMeals) 
return <MealList listData={favMeals} navigation = {props.navigation}/>
}

FavoriteScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
}
export default FavoriteScreen;