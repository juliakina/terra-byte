import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';

export function AppHeader({ userName, profileImage, onMenuPress }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onMenuPress}>
                <Ionicons
                    name="menu-outline"
                    size={36}
                    color={colors.primaryDark}
                />
            </TouchableOpacity>

            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <View style={styles.userBox}>
                {profileImage ? (
                    <Image
                        source={{ uri: profileImage }}
                        style={styles.avatar}
                    />
                ) : (
                    <Ionicons
                        name="person-circle-outline"
                        size={46}
                        color={colors.primaryDark}
                    />
                )}

                <Text style={styles.userName}>
                    {userName}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 110,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 95,
        height: 80,
    },
    userBox: {
        alignItems: 'center',
    },
    userName: {
        fontSize: 12,
        color: colors.primaryDark,
        marginTop: 2,
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 23,
    },
});