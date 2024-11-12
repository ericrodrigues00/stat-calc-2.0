// frontend/src/components/ResultsDisplay.jsx
import React from 'react';
import { Download, ChevronDown, ChevronRight, AlertCircle } from 'lucide-react';
import DetailedSteps from './DetailedSteps';

const ResultsDisplay = ({ results, showDetails, setShowDetails, onExportPDF }) => {
    if (!results) {
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

    // Função para interpretar a correlação
    const interpretCorrelation = (r) => {
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

    return (
        <div className="space-y-6">
            {/* Cabeçalho com título e botão de exportar */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Resultados da Análise</h2>
                
            </div>

            {/* Resultados principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Equação da Reta */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Equação da Reta</h3>
                    <p className="text-lg font-mono">
                        y = {results.beta1.toFixed(2)}x {results.beta0 >= 0 ? '+' : ''} {results.beta0.toFixed(2)}
                    </p>
                </div>

                {/* Coeficiente de Correlação */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Coeficiente de Correlação (r)</h3>
                    <p className="text-lg">{results.r.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">{interpretCorrelation(results.r)}</p>
                </div>

                {/* Coeficiente de Determinação */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Coeficiente de Determinação (R²)</h3>
                    <p className="text-lg">{results.rSquared.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">
                        {(results.rSquared * 100).toFixed(2)}% da variação é explicada pelo modelo
                    </p>
                </div>

               
            </div>

            {/* Botão para mostrar/esconder detalhes */}
            <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
                {showDetails ? (
                    <>
                        <ChevronDown size={20} />
                        Ocultar Detalhes
                    </>
                ) : (
                    <>
                        <ChevronRight size={20} />
                        Mostrar Detalhes do Cálculo
                    </>
                )}
            </button>

            {/* Detalhes dos cálculos */}
            {showDetails && (
                <DetailedSteps results={results} />
            )}
        </div>
    );
};

export default ResultsDisplay;