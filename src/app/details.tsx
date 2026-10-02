import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {
    const router = useRouter();
    const { clicks } = useLocalSearchParams();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Details Screen</Text>
            <Text style={styles.text}>Clicks: {clicks}</Text>
            <Button title="Go Back" onPress= {() => router.back()}/>
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
    },
})