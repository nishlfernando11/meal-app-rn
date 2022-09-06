import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';


const CategoriesScreen = ({navigation}) => {
    const renderCategoryItem = (itemData) => {
        const onPressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id // passed as params
            });
        }
    
        return <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPress={onPressHandler}/>
    }

    return <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2}/>;
};

export default CategoriesScreen;