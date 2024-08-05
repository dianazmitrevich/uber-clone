import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const RideOptionsCard = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                    <Icon name="chevron-left" type='fontawesome' />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-lg`}>Select a ride</Text>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard