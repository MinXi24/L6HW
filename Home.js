import React from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {datasource} from "./Data"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    sectionHeader: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    sectionIcon: {
        marginRight: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        borderColor: 'black',
    },
    itemContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    name: {
        fontSize: 16,
        textAlign: 'left'
    },
    brand: {
        fontSize: 12,
        color: 'darkred',
        textDecorationLine: 'underline',
    },
    image: {
        width: 150,
        height: 140,
        marginLeft: 10,
    },
});
const Home = ({navigation}) => {
    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.itemContainer}
                              onPress ={() =>
                              {
                                  navigation.navigate('Edit', {index:index, type:section.category, name:item.name, icon:item.icon, brand:item.brand, img:item.imageUrl });
                              }
                              }
            >
                <Image
                    source={{uri:item.imageUrl}}
                    style={styles.image}/>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.name}>Name: {item.name}</Text>


            </TouchableOpacity>
        );
    };
    return (
        <View>
            <StatusBar/>
            <Button title='Add Items'
                    onPress={() => {navigation.navigate("Add")}}
            />
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{category,icon,bgcolor}})=>(
                             <View style={[styles.sectionHeader, { backgroundColor: bgcolor }]}>
                                 <Text style={styles.sectionTitle}>{category}</Text>
                                 <Icon
                                     name={icon}
                                     size={30}
                                     color="#fff"
                                     style={styles.sectionIcon}/>
                             </View>
                         )}/>
        </View>
    );
};

export default Home;
