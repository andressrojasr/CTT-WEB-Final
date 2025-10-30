import api from './api';

/**
 * Inicia sesión de usuario
 * @param {string} username - Nombre de usuario
 * @param {string} password - Contraseña
 * @returns {Promise<Object>} Datos del usuario autenticado o token
 */
export const login = async (username, password) => {
  try {
    // Creamos los parámetros del cuerpo en formato x-www-form-urlencoded
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    // Hacemos la petición
    const response = await api.post('/platform-auth/token', params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data;
  } catch (error) {
    if (error.response){
      const status = error.response.status;
      const detail = error.response.data?.detail || 'Error desconocido';
      
      if (status === 400) {
        throw new Error('Usuario o contraseña incorrectos.');
      }
      if (status === 401) {
        throw new Error('No autorizado. Verifica tus credenciales.');
      }
      if (status === 422) {
        throw new Error('Datos inválidos. Verifica los campos ingresados.');
      }

      throw new Error(`Error del servidor: ${status} - ${detail}`);

    }
    console.log(error);
    throw new Error('Error de red o servidor inalcanzable.');
  }
};

export const register = async (identification, first_name, second_name, first_last_name, second_last_name, cellphone, email, address, type, password) => {
  try {
    const params = {
      identification,
      first_name,
      second_name,
      first_last_name,
      second_last_name,
      cellphone,
      email,
      address,
      type,
      password
    };
    // Corregir la llamada a axios: api.post(url, data, config)
    const response = await api.post('/platform-auth/register', params, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const detail = error.response.data?.detail || 'Error desconocido';

      if (status === 400) {
        throw new Error(detail);
      }
      if (status === 409) {
        throw new Error(detail);
      }

      throw new Error(`Error del servidor: ${status} - ${detail}`);
    }
    throw new Error('Error de red o servidor inalcanzable.');
  }
};
