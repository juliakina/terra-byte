import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export function AppFooter() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                Produzido por TerraByte - Copyright © 2026.
            </Text>

            <Text style={styles.footerText}>
                Todos os Direitos Reservados - Direitos Autorais
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        height: 58,
        backgroundColor: colors.primaryDark,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        color: colors.white,
        fontSize: 11,
    },
});