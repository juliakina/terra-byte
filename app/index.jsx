import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';

export default function Index() {
    useEffect(() => {
        const timer = setTimeout(() => {
        router.replace('/login');
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/logo.jpeg')}
                style={styles.logo}
                resizeMode="contain"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F7F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 220,
        height: 220,
    },
});