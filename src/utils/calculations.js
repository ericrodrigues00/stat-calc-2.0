// frontend/src/utils/calculations.js

/**
 * Calcula as médias de X e Y
 */
export const calculateMeans = (points) => {
    const n = points.length;
    const meanX = points.reduce((sum, p) => sum + p.x, 0) / n;
    const meanY = points.reduce((sum, p) => sum + p.y, 0) / n;
    return { meanX, meanY };
};

/**
 * Calcula as somas necessárias para a regressão
 */
export const calculateSums = (points, meanX, meanY) => {
    return points.reduce((sums, p) => {
        const diffX = p.x - meanX;
        const diffY = p.y - meanY;
        return {
            sumXY: sums.sumXY + (diffX * diffY),
            sumXX: sums.sumXX + (diffX * diffX),
            sumYY: sums.sumYY + (diffY * diffY)
        };
    }, { sumXY: 0, sumXX: 0, sumYY: 0 });
};

/**
 * Calcula os coeficientes da regressão (β₀ e β₁)
 */
export const calculateCoefficients = (sumXY, sumXX, meanX, meanY) => {
    const beta1 = sumXY / sumXX;
    const beta0 = meanY - (beta1 * meanX);
    return { beta0, beta1 };
};

/**
 * Calcula o coeficiente de correlação (r) e determinação (R²)
 */
export const calculateCorrelation = (sumXY, sumXX, sumYY) => {
    const r = sumXY / Math.sqrt(sumXX * sumYY);
    const rSquared = r * r;
    return { r, rSquared };
};

/**
 * Interpreta a força da correlação
 */
export const interpretCorrelation = (r) => {
    const abs = Math.abs(r);
    let strength = '';
    
    if (abs >= 0.9) strength = 'muito forte';
    else if (abs >= 0.7) strength = 'forte';
    else if (abs >= 0.5) strength = 'moderada';
    else if (abs >= 0.3) strength = 'fraca';
    else strength = 'muito fraca';

    const direction = r > 0 ? 'positiva' : 'negativa';
    return `Correlação ${strength} e ${direction}`;
};

/**
 * Calcula todos os resultados da regressão
 */
export const calculateRegression = (points) => {
    if (points.length < 2) {
        throw new Error('São necessários pelo menos 2 pontos para calcular a regressão');
    }

    const { meanX, meanY } = calculateMeans(points);
    const { sumXY, sumXX, sumYY } = calculateSums(points, meanX, meanY);
    const { beta0, beta1 } = calculateCoefficients(sumXY, sumXX, meanX, meanY);
    const { r, rSquared } = calculateCorrelation(sumXY, sumXX, sumYY);


};