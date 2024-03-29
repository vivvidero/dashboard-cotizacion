export const validateObject = (obj) => {
    for (const key in obj) {
        if (!obj[key]) {
            return false; // Retorna false si alguna clave no tiene valor
        }
    }
    return true; // Retorna true si todas las claves tienen al menos un valor
}