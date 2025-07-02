import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage}/>
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
    text: {
        color: '#ffffff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#ffffff'
    },
});
