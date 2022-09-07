// import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
// import { FavContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
    // const mealsFavCtx = useContext(FavContext);
    // const favMeals = MEALS.filter(m => mealsFavCtx.ids.includes(m.id));

    const favMealIds = useSelector(state => state.favMeals.ids);
    const favMeals = MEALS.filter(m => favMealIds.includes(m.id));


    if(favMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet!</Text>
        </View>
    }

    return <MealsList items={favMeals}/>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white'

    }
});