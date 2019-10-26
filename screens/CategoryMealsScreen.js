import React from 'react';
import {View, Text, FlatList, StyleSheet, Platform} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props =>{
const renderMealItem = itemData => {
    return (
        <MealItem title={itemData.item.title}
         duration={itemData.item.duration}
         image={itemData.item.imageUrl}
         complexity={itemData.item.complexity}
         affordability={itemData.item.affordability}
          onSelectMeal={() => {
              props.navigation.navigate({routeName:'MealDetail', params:{
                  mealId:itemData.item.id
              }})
          }}/>
    );
}    
const catId = props.navigation.getParam('categoryId');
// const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

return (
    <View style={styles.screen}>
        <FlatList style={{width:'95%'}}data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem}/>
    </View>
)
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
 const catId = navigationData.navigation.getParam('categoryId');
 const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
 return {
     headerTitle: selectedCategory.title
 }
}
const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
});
export default CategoryMealsScreen;