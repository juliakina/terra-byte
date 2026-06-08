import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomInput } from '../src/components/CustomInput';
import { PrimaryButton } from '../src/components/PrimaryButton';
import { colors } from '../src/constants/colors';
import { registerUser } from '../src/services/authService';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister() {
        if (!name || !email || !password) {
            Alert.alert('Atenção', 'Preencha todos os campos.');
            return;
        }
        if (password.length < 6) {
            Alert.alert('Atenção', 'A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        try {
            Alert.alert('Sucesso', 'Cadastro criado com sucesso.');
            router.replace('/login');
        } catch (error) {
            Alert.alert('Erro no cadastro', error.message);
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled">
                    <View style={styles.header}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.logo}
                            resizeMode="contain"/>
                        <Text style={styles.title}>Crie sua Conta</Text>
                        <Text style={styles.subtitle}>Cadastre-se para acessar o TerraByte!</Text>
                    </View>

                    <View style={styles.form}>
                        <CustomInput
                            iconName="person-outline"
                            placeholder="Nome completo"
                            value={name}
                            onChangeText={setName}/>
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
                        <PrimaryButton title="Cadastrar" onPress={handleRegister}/>
                    </View>

                    <View style={styles.login}>
                        <Text style={styles.loginText}>Já tem conta? </Text>
                        <TouchableOpacity onPress={() => router.replace('/login')}><Text style={styles.loginLink}>Entre!</Text></TouchableOpacity>
                    </View>
                </ScrollView>
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
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 28,
    },
    logo: {
        width: 130,
        height: 130,
        marginBottom: 16,
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
        textAlign: 'center',
    },
    form: {
        width: '100%',
    },
    login: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 28,
    },
    loginText: {
        color: colors.mutedText,
        fontSize: 15,
    },
    loginLink: {
        color: colors.primary,
        fontWeight: '700',
        fontSize: 15,
    },
});