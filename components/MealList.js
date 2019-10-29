import React from 'react'
import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from '../components/MealItem';


const MealList = props =>{
    const renderMealItem = itemData => {
        return (
            <MealItem title={itemData.item.title}
             duration={itemData.item.duration}
             image={itemData.item.imageUrl}
             complexity={itemData.item.complexity}
             affordability={itemData.item.affordability}
              onSelectMeal={() => {
                  props.navigation.navigate({routeName:'MealDetail', params:{
                      mealId:itemData.item.id,
                      mealTitle:itemData.item.title
                  }})
              }}/>
        );
    }   
    return     <View style={styles.list}>
    <FlatList style={{width:'95%'}}
     data={props.listData}
     keyExtractor={(item, index) => item.id}
     renderItem={renderMealItem}/>
</View>
}
const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default MealList;