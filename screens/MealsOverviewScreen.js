import { Text, View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter(item => item.categoryIds.indexOf(categoryId) > -1);

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(item => item.id === categoryId).title
        navigation.setOptions({
            title: categoryTitle
        });

    }, [categoryId, navigation])


    const renderMealItem = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }
        return <MealItem {...mealItemProps} />
    };

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals}
                renderItem={renderMealItem}
                keyExtractor={item => item.id} />
        </View>
    )

}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    }
})