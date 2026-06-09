import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppFooter } from '../components/AppFooter';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../constants/colors';

const mockLands = [
    {
        id: 1,
        name: 'Terreno 1',
    },
    {
        id: 2,
        name: 'Terreno 2',
    },
];

export default function HomeScreen({ navigation, route }) {
    const user = route.params?.user;
    const lands = mockLands;

    function handleOpenMenu() {
        navigation.openDrawer();
    }

    function handleOpenLand(land) {
        console.log('Abrir terreno:', land);
    }

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader
                userName={user?.name}
                onMenuPress={handleOpenMenu}
            />

            <View style={styles.content}>
                <Text style={styles.title}>Meus terrenos</Text>

                {lands.length === 0 ? (
                    <Text style={styles.emptyText}>
                        Nenhum terreno cadastrado.
                    </Text>
                ) : (
                    lands.map((land) => (
                        <TouchableOpacity
                            key={land.id}
                            style={styles.landCard}
                            onPress={() => handleOpenLand(land)}
                        >
                            <Text style={styles.landText}>{land.name}</Text>

                            <Ionicons
                                name="chevron-forward"
                                size={32}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    ))
                )}

                {lands.length > 2 && (
                    <Ionicons
                        name="chevron-down"
                        size={30}
                        color={colors.primary}
                        style={styles.downIcon}
                    />
                )}
            </View>

            <View style={styles.servicesArea}>
                <Text style={styles.title}>Serviços</Text>
                <View style={styles.servicesGrid}>
                    <TouchableOpacity style={styles.serviceCard}>
                        <Text style={styles.serviceText}>Lavoura</Text>
                        <Ionicons
                            name="search-outline"
                            size={36}
                            color={colors.white}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.serviceCard}>
                        <Text style={styles.serviceText}>Clima</Text>
                        <Ionicons
                            name="search-outline"
                            size={36}
                            color={colors.white}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.serviceCard}>
                        <Text style={styles.serviceText}>Terreno</Text>
                        <Ionicons
                            name="add-outline"
                            size={42}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <AppFooter />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 14,
        marginTop: 10,
        color: colors.text,
    },
    landCard: {
        height: 68,
        backgroundColor: colors.primary,
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    landText: {
        color: colors.white,
        fontSize: 20,
    },
    emptyText: {
        color: colors.mutedText,
        fontSize: 16,
        marginBottom: 16,
    },
    downIcon: {
        marginTop: 2,
        marginBottom: 4,
    },
    servicesArea: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 24,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    servicesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
    },
    serviceCard: {
        width: 140,
        height: 120,
        backgroundColor: colors.primary,
        borderRadius: 12,
        padding: 14,
        justifyContent: 'space-between',
    },
    serviceText: {
        color: colors.white,
        fontSize: 22,
        fontWeight: '600',
    },
});