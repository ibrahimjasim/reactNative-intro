
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Info() {
    const [count, setCount] = useState(0);
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello, World! {count}</Text>
            <Button title="Press me" onPress={()=> setCount(count + 1)} />

                <Button title="Next" onPress={()=> router.push(
                    { pathname: "/details",
                        params: { clicks : count }, 


                    })}/>
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
    
});