import React, { useState, useEffect, useRef } from 'react'; 
import DataInput from './DataInput';
import Graph from './Graph';
import ResultsDisplay from './ResultsDisplay';
import { Info } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import html2canvas from 'html2canvas'; // Importando a biblioteca para captura de tela
import { jsPDF } from 'jspdf'; // Importando o jsPDF

const Calculator = () => {
    // Estados principais
    const [points, setPoints] = useState([]);
    const [results, setResults] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [error, setError] = useState('');
    
    // Referência do gráfico
    const graphRef = useRef();

    // Carregar dados do localStorage ao iniciar
    useEffect(() => {
        const savedPoints = localStorage.getItem('regressionPoints');
        if (savedPoints) {
            try {
                setPoints(JSON.parse(savedPoints));
            } catch (e) {
                console.error('Erro ao carregar dados salvos:', e);
            }
        }
    }, []);

    // Salvar dados no localStorage quando houver mudanças
    useEffect(() => {
        localStorage.setItem('regressionPoints', JSON.stringify(points));
        if (points.length >= 2) {
            calculateRegression();
        } else {
            setResults(null);
        }
    }, [points]);

    // Função para adicionar novo ponto
    const handleAddPoint = (x, y) => {
        const newPoints = [...points, { x, y }];
        setPoints(newPoints);
    };

    // Função para remover um ponto
    const handleRemovePoint = (index) => {
        setPoints(points.filter((_, i) => i !== index));
    };

    // Função para limpar todos os dados
    const handleClearAll = () => {
        setPoints([]);
        setResults(null);
        localStorage.removeItem('regressionPoints');
    };

    // Cálculo da regressão linear
    const calculateRegression = () => {
        try {
            if (points.length < 2) {
                setError('São necessários pelo menos 2 pontos para calcular a regressão.');
                return;
            }

            // Cálculo das médias
            const n = points.length;
            const meanX = points.reduce((sum, p) => sum + p.x, 0) / n;
            const meanY = points.reduce((sum, p) => sum + p.y, 0) / n;

            // Cálculos para a regressão
            let sumXY = 0, sumXX = 0, sumYY = 0;
            points.forEach(p => {
                const diffX = p.x - meanX;
                const diffY = p.y - meanY;
                sumXY += diffX * diffY;
                sumXX += diffX * diffX;
                sumYY += diffY * diffY;
            });

            // Coeficientes da regressão
            const beta1 = sumXY / sumXX;
            const beta0 = meanY - beta1 * meanX;

            // Coeficiente de correlação
            const r = sumXY / Math.sqrt(sumXX * sumYY);
            const rSquared = r * r;

            setResults({
                beta0: parseFloat(beta0),
                beta1: parseFloat(beta1),
                r: parseFloat(r),
                rSquared: parseFloat(rSquared),
                steps: {
                    meanX: parseFloat(meanX),
                    meanY: parseFloat(meanY),
                    sumXY: parseFloat(sumXY),
                    sumXX: parseFloat(sumXX),
                    sumYY: parseFloat(sumYY)
                }
            });

            setError('');
        } catch (e) {
            setError('Erro ao calcular a regressão: ' + e.message);
        }
    };

    // Função para exportar os dados e o gráfico como PDF
    
    
   const handleExportPDF = () => {
    window.print();
};

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Coluna da esquerda */}
                <div className="space-y-6">
                    <DataInput 
                        onAddPoint={handleAddPoint} 
                        pointCount={points.length} 
                    />

                    {points.length > 0 && (
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="font-medium mb-3">Pontos Inseridos</h3>
                            <div className="space-y-2">
                                {points.map((point, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center justify-between bg-gray-50 p-2 rounded"
                                    >
                                        <span>
                                            ({point.x}, {point.y})
                                        </span>
                                        <button
                                            onClick={() => handleRemovePoint(index)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Remover
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={handleClearAll}
                                className="mt-4 w-full px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                            >
                                Limpar Todos os Dados
                            </button>
                        </div>
                    )}
                </div>

                {/* Coluna da direita */}
                <div className="space-y-6">
                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                            <div className="flex">
                                <Info className="h-5 w-5 text-red-500" />
                                <div className="ml-3">
                                    <p className="text-sm text-red-700">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {points.length >= 2 && (
                        <>
                            {/* Adicionando gráfico de dispersão */}
                            <div className="bg-white p-4 rounded-lg shadow-md" ref={graphRef}>
                                <h3 className="font-medium mb-3">Gráfico de Dispersão</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                        <CartesianGrid />
                                        <XAxis dataKey="x" name="X" />
                                        <YAxis dataKey="y" name="Y" />
                                        <Tooltip />
                                        <Scatter name="Pontos" data={points} fill="#8884d8" />
                                    </ScatterChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Exibindo o gráfico da regressão */}
                            <Graph 
                                points={points}
                                regressionLine={results}
                            />
                            
                            <ResultsDisplay
                                results={results}
                                points={points}
                                showDetails={showDetails}
                                setShowDetails={setShowDetails}
                            />

                            {/* Botão de exportação */}
                            <button 
                                onClick={handleExportPDF} 
                                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                            >
                                Exportar Relatório como PDF
                            </button>
                        </>
                    )}

                    {points.length === 1 && (
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                            <div className="flex">
                                <Info className="h-5 w-5 text-blue-500" />
                                <div className="ml-3">
                                    <p className="text-sm text-blue-700">
                                        Adicione mais um ponto para calcular a regressão.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
