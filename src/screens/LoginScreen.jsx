import { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../constants/colors';
import { loginUser } from '../services/authService';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('teste@email.com');
    const [password, setPassword] = useState('123456');
    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin() {
        if (!email || !password) {
            Alert.alert('Atenção', 'Preencha e-mail e senha.');
            return;
        }
        try {
            setIsLoading(true);
            const response = await loginUser(email, password);
            navigation.replace('Drawer', {
                user: response.user,
            });
        } catch (error) {
            Alert.alert('Erro no login', error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={styles.logo}
                            resizeMode="contain"/>
                        <Text style={styles.title}>Acesse sua Conta</Text>
                        <Text style={styles.subtitle}>
                        Entre para continuar no TerraByte!
                        </Text>
                    </View>

                    <View style={styles.form}>
                        <CustomInput
                            iconName="mail-outline"
                            placeholder="E-mail"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"/>
                        <CustomInput
                            iconName="lock-closed-outline"
                            placeholder="Senha"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry/>
                        <PrimaryButton
                            title={isLoading ? 'Entrando...' : 'Entrar'}
                            onPress={handleLogin}
                            disabled={isLoading}/>
                    </View>

                    <View style={styles.register}>
                        <Text style={styles.registerText}>Não tem conta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={styles.registerLink}>Cadastre-se!</Text></TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    keyboardView: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 36,
    },
    logo: {
        width: 180,
        height: 180,
        marginBottom: 24,
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: colors.text,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        color: colors.mutedText,
    },
    form: {
        width: '100%',
    },
    register: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 28,
    },
    registerText: {
        color: colors.mutedText,
        fontSize: 15,
    },
    registerLink: {
        color: colors.primary,
        fontWeight: '700',
        fontSize: 15,
    },
});