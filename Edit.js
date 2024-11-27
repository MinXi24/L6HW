import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
    const [name,setName] = useState(route.params.name);
    const [brand,setBrand] = useState(route.params.brand);
    return(
        <View style ={{padding:10}}>
            <Text>Name:</Text>
            <TextInput value={name} style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
            <Text>Brand:</Text>
            <TextInput value={brand} style={{borderWidth:1}} onChangeText={(text)=>setBrand(text)}/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{margin:10,flex:1}}>
                    <Button title='SAVE'
                            onPress={()=>{
                                let indexNum = 1
                                if (route.params.type=="Clothes"){
                                    indexNum = 0;
                                } else if (route.params.type=="Accessories") {
                                    indexNum = 2;
                                }
                                datasource[indexNum].data[route.params.index].name = name;
                                datasource[indexNum].data[route.params.index].brand = brand;
                                navigation.navigate("Home")
                            }
                            }
                    />
                </View>
                <View style={{margin:10,flex:1}}>
                    <Button title='DELETE'
                            onPress={()=>{
                                let indexNum = 1
                                if (route.params.type=="Clothes"){
                                    indexNum = 0;
                                } else if (route.params.type=="Accessories") {
                                    indexNum = 2;
                                }
                                Alert.alert("Confirmed?",'',
                                    [{text:'Yes', onPress:()=>{
                                            datasource[indexNum].data.splice(route.params.index,1);
                                            navigation.navigate("Home")
                                        }},
                                        {text:'No'}])

                            }
                            }
                    />
                </View>
            </View>
        </View>
    );
};


export default Edit;
