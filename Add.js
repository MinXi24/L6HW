import React, { useState } from 'react';
import { datasource } from './Data';
import { TextInput, View, Text, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('Clothes');

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Name: </Text>
                <TextInput
                    style={{ borderWidth: 1}}
                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Brand: </Text>
                <TextInput
                    style={{ borderWidth: 1}}
                    onChangeText={(text) => setBrand(text)}
                />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image URL: </Text>
                <TextInput
                    style={{ borderWidth: 1}}
                    onChangeText={(uri) => setImage(uri)}
                    value={image}
                />
            </View>
            <View style={{ padding: 10 }}>
                <RNPickerSelect
                    value={category}
                    onValueChange={(value) => setCategory(value)}
                    items={[
                        { label: 'Clothes', value: 'Clothes' },
                        { label: 'Shoes', value: 'Shoes' },
                        { label: 'Accessories', value: 'Accessories' },
                    ]}
                />
            </View>
            <Button
                title="ADD"
                onPress={() => {
                    const item = { name, brand, imageUrl: image }; // Use `imageUrl` for consistency
                    let indexNum = 1; // Default to Shoes
                    if (category === 'Clothes') {
                        indexNum = 0;
                    } else if (category === 'Accessories') {
                        indexNum = 2;
                    }
                    datasource[indexNum].data.push(item);
                    console.log(datasource[indexNum].data); // Debugging
                    navigation.navigate('Home');
                }}
            />
        </View>
    );
};

export default Add;
