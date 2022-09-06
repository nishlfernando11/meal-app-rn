import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { useLayoutEffect } from "react";

import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

const MealDetailsScreen = ({ route, navigation }) => {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find(item => item.id === mealId)

    const onPressHandler = () => {
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={onPressHandler}/>
            }
        })
    }, [navigation, onPressHandler])

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