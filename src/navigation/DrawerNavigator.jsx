import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation, user }) {
    function handleLogout() {
        navigation.closeDrawer();
        navigation.getParent()?.replace('Login');
    }

    return (
        <View style={styles.drawerContainer}>
            <View style={styles.drawerHeader}>
                <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                    <Ionicons name="close-outline" size={42} color={colors.white} />
                </TouchableOpacity>

                <Text style={styles.greeting}>
                    Olá, {user?.name || 'Usuário'}
                </Text>

                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.avatar}
                />
            </View>

            <Text style={styles.sectionTitle}>Configurações da Conta</Text>

            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Alterar foto</Text>
                <Ionicons name="chevron-forward" size={30} color={colors.white} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Alterar dados</Text>
                <Ionicons name="chevron-forward" size={30} color={colors.white} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                <Text style={styles.menuText}>Sair</Text>
                <Ionicons name="chevron-forward" size={30} color={colors.white} />
            </TouchableOpacity>
        </View>
    );
}

export default function DrawerNavigator({ route }) {
    const user = route.params?.user;

    return (
        <Drawer.Navigator
            drawerContent={(props) => (
                <CustomDrawerContent {...props} user={user} />
            )}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                initialParams={{ user }}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        backgroundColor: colors.primary,
        paddingTop: 32,
        paddingHorizontal: 24,
        paddingBottom: 32,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        elevation: 8,
    },
    drawerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 34,
    },
    greeting: {
        flex: 1,
        marginLeft: 8,
        fontSize: 28,
        color: colors.white,
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 27,
        backgroundColor: colors.white,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.white,
        marginBottom: 14,
    },
    menuItem: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuText: {
        fontSize: 21,
        color: colors.white,
    },
});