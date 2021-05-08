
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { color } from 'react-native-reanimated';



export default function HomePage() {
    return (
        <ImageBackground style={{ flex: 1, width: 400, height: 900 }}
            source={{ uri: 'https://wallpapercave.com/wp/wp6263525.jpg' }}>
            <View style={styles.container}>
                <Image source={require('../../assets/image/funlogo.png')}
                    style={{ width: 300, height: 250, marginBottom: 150 }} />

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // logo: {
    //     width: 256,
    //     marginBottom: 50,
    // },
});