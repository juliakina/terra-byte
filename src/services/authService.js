import { mockUser } from '../mocks/users';

export async function loginUser(email, password) {
    if (email === mockUser.email && password === mockUser.password) {
        return {
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
        user: mockUser,
        };
    }
    throw new Error('E-mail ou senha inválidos.');
}