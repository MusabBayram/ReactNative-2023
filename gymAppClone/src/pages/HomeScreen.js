import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Calendar from '../components/Calendar';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{flexDirection: 'row'}}>
            <View style={{ 
                justifyContent: 'center', 
                backgroundColor: 'black', 
                alignItems: 'center', 
                width: 40, 
                height: 40, 
                borderRadius: 40, 
                marginLeft: 20 
                }}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', width: 40 , height: 40, marginTop: 12}}>YG</Text>
            </View>
            <Text style={{fontSize: 18, fontWeight: '600', marginLeft: 20, marginTop: 10}}>İyi akşamlar</Text>

            </View>
            <Calendar />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        </SafeAreaView>
    );
}
