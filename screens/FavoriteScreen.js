import React from 'react';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';


const FavoriteScreen = props =>{
const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
return <MealList listData={favMeals} navigation = {props.navigation}/>
}

FavoriteScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
}
export default FavoriteScreen;