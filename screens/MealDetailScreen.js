import React, {useEffect} from 'react';
import {ScrollView,View, Image, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux'

import CustomHeaderButton from '../components/HeaderButton';

const ListItem = props =>{
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const MealDetailScreen = props =>{
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    // useEffect(() => {
    //     props.navigation.setParams({mealTitle: selectedMeal.title})
    // }, [selectedMeal])
    
return (
    <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
    </View>
    <Text style={styles.title}>Ingredients</Text>
    {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
    <Text style={styles.title}>Steps</Text>
    {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
    </ScrollView>
)
}
const styles = StyleSheet.create({
image:{
    width:'100%',
    height:200
},
details:{
    flexDirection:'row',
    padding:15,
    justifyContent:'space-around'
},
title:{
    fontFamily:'open-sans-bold',
    fontSize:22,
    textAlign:'center'
},
listItem:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor:'#ccc',
    borderWidth:1,
    padding:10
}
});

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    return {
        headerTitle:mealTitle,
        headerRight:(
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}> 
            <Item title='Favorite' iconName='ios-star' onPress={() => {
                console.log("Marked")
            }}/>
        </HeaderButtons>
        )
    }


}
export default MealDetailScreen;