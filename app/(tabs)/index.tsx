import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={PlaceholderImage} style={styles.image}/>
            </View>
            <Text style={styles.text}>Home Screen</Text>
            <Link href="/about" style={styles.button}>Go to About Screen</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    text: {
        color: '#ffffff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#ffffff'
    },
});
