import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
// import { FavContext } from "../store/context/favorites-context";

import { addFav, removeFav } from '../store/redux/favorites';

const MealDetailsScreen = ({ route, navigation }) => {

    const { mealId } = route.params;
    const selectedMeal = MEALS.find(item => item.id === mealId)

    // const favMealsCtx = useContext(FavContext);
    // const mealIsFav = favMealsCtx.ids.includes(mealId);

    const dispatch = useDispatch();
    const favMealIds = useSelector(state => state.favMeals.ids);

    const mealIsFav = favMealIds.includes(mealId);

    const changeFavHandler = () => {
        if (mealIsFav) {
            // favMealsCtx.removeFav(mealId);
            dispatch(removeFav({ id: mealId }))
        } else {
            // favMealsCtx.addFav(mealId);
            dispatch(addFav({ id: mealId }))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFav ? "star" : "star-outline"} color="white" onPress={changeFavHandler} />
            }
        })
    }, [navigation, changeFavHandler, mealIsFav])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                affordability={selectedMeal.affordability}
                duration={selectedMeal.duration} complexity={selectedMeal.complexity}
                textStyle={styles.detailText} />
            <View style={styles.listOutContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )

}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 12
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOutContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }

});