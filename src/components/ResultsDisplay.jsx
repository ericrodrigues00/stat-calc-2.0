import React from 'react';
import { AlertCircle } from 'lucide-react';

const ResultsDisplay = ({ results, points = [] }) => {
    // Função auxiliar para formatar números
    const formatNumber = (num) => {
        // Verifica se o número é inteiro
        if (Number.isInteger(num)) {
            return num.toString();
        }
        // Se não for inteiro, mostra duas casas decimais
        return num.toFixed(2);
    };

    if (!results || !points.length) {
        return (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                            Insira pelo menos dois pontos para ver os resultados da regressão.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Encontrar o menor e maior valor de X
    const xValues = points.map(point => point.x);
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-mono text-lg">
                Y est. = {formatNumber(results.beta0)} {results.beta1 >= 0 ? '+' : ''} {formatNumber(results.beta1)}X ; 
                D=[{formatNumber(minX)};{formatNumber(maxX)}] ; 
                R² = {(results.rSquared * 100).toFixed(2)}%
            </p>
        </div>
    );
};

export default ResultsDisplay;
