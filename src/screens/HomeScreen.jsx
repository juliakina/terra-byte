import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TerraByte</Text>
            <Text style={styles.subtitle}>Login realizado com sucesso!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 32,
        fontWeight: '800',
        color: colors.primaryDark,
    },

    subtitle: {
        marginTop: 12,
        fontSize: 16,
        color: colors.mutedText,
    },
});