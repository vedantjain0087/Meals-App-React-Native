import React from 'react';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import Colors from '../constants/Colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';


const DefaultNavOptions = {
    headerStyle:{
        backgroundColor: Platform.OS == 'android'? Colors.primaryColor :'white',
    },
    headerTintColor:Platform.OS == 'android'? "white": Colors.primaryColor
}

const MealsNavigator = createStackNavigator({
    Categories:{
        screen: CategoriesScreen,
    },
    CategoryMeals:{
        screen:CategoryMealsScreen,
    },
    MealDetail:MealDetailScreen
}, {
    mode:'modal',
    defaultNavigationOptions:DefaultNavOptions
}
)

const FavNavigator =  createStackNavigator({
    Favorites:FavoriteScreen,
    MealDetail:MealDetailScreen
}, {
    defaultNavigationOptions:DefaultNavOptions
})

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: { screen: MealsNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
            }
        }
    },
    Favorites: {screen: FavNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
            }
        }
    }
}, {
    tabBarOptions:{
        activeTintColor: Colors.accentColor
    }
})

export default createAppContainer(MealsFavTabNavigator)
