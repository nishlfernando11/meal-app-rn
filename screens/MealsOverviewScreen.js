import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter(item => item.categoryIds.indexOf(categoryId) > -1);

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(item => item.id === categoryId).title
        navigation.setOptions({
            title: categoryTitle
        });

    }, [categoryId, navigation])


    return <MealsList items={displayedMeals}/>

}

export default MealsOverviewScreen;