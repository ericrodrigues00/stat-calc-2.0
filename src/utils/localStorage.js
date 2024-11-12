// frontend/src/utils/localStorage.js

const STORAGE_KEY = 'regression_calculator_data';

/**
 * Salva os dados no localStorage
 */
export const saveData = (points) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            points,
            lastUpdated: new Date().toISOString()
        }));
        return true;
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        return false;
    }
};

/**
 * Carrega os dados do localStorage
 */
export const loadData = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return null;
        
        const parsed = JSON.parse(data);
        return {
            points: parsed.points || [],
            lastUpdated: new Date(parsed.lastUpdated)
        };
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        return null;
    }
};

/**
 * Limpa os dados do localStorage
 */
export const clearData = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    } catch (error) {
        console.error('Erro ao limpar dados:', error);
        return false;
    }
};

/**
 * Verifica se existem dados salvos
 */
export const hasData = () => {
    return !!localStorage.getItem(STORAGE_KEY);
};

/**
 * Adiciona um novo ponto aos dados existentes
 */
export const addPoint = (x, y) => {
    const currentData = loadData();
    const points = currentData ? currentData.points : [];
    points.push({ x: parseFloat(x), y: parseFloat(y) });
    return saveData(points);
};

/**
 * Remove um ponto específico
 */
export const removePoint = (index) => {
    const currentData = loadData();
    if (!currentData) return false;
    
    const points = currentData.points.filter((_, i) => i !== index);
    return saveData(points);
};