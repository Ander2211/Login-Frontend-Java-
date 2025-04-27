import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const registerUser = async (userData) => {
    try {
        // Verificar si el usuario ya existe
        const response = await axios.get(`${API_URL}?email=${userData.email}`);
        if (response.data.length > 0) {
            throw new Error('El usuario ya existe');
        }

        // Crear nuevo usuario
        const newUser = {
            username: userData.username,
            email: userData.email,
            password: userData.password // En producción, esto debería estar encriptado
        };

        const createResponse = await axios.post(API_URL, newUser);
        return createResponse.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.get(`${API_URL}?email=${credentials.email}`);
        if (response.data.length === 0) {
            throw new Error('Usuario no encontrado');
        }

        const user = response.data[0];
        if (user.password !== credentials.password) {
            throw new Error('Contraseña incorrecta');
        }

        return user;
    } catch (error) {
        throw error;
    }
};