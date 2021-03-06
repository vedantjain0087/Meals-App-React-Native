import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useDispatch} from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import {setFilters} from '../store/actions/meals';

const FilterSwitch = props =>{
    return (
        <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
        trackColor={{true: Colors.primaryColor}}
        value={props.state} 
        onValueChange={props.onChange}/>
    </View>
    )
}
const FilterScreen = props =>{
    const {navigation} = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback( () => {
        const appliedFilters = {
            glutenFree:isGlutenFree,
            lactoseFree:isLactoseFree,
            vegan:isVegan,
            Vegeterian:isVegeterian
        }
        dispatch(setFilters(appliedFilters))
    }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian]);

    useEffect(() => {
        navigation.setParams({save:saveFilters})
    },[saveFilters])
return (
    <View style={styles.screen}>
        <Text style={styles.title}>Avaialable Filters / Restrictions</Text>
        <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
        <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
        <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)}/>
        <FilterSwitch label='Vegeterian' state={isVegeterian} onChange={newValue => setIsVegeterian(newValue)}/>
    </View>
)
}
const styles = StyleSheet.create({
screen:{
    flex:1,
    alignItems:'center'
},
title:{
    fontFamily:'open-sans-bold',
    fontSize:22,
    margin:20,
    textAlign:'center'
},
filterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',
    marginVertical:15
}
});

FilterScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Filters',
    headerLeft:( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Meanu" iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer();
        }}/>
    </HeaderButtons>
    ),
    headerRight:( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save" iconName='ios-save' onPress={navData.navigation.getParam('save')}/>
    </HeaderButtons>
    )
}
}
export default FilterScreen;