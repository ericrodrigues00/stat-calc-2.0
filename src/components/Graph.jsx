// frontend/src/components/Graph.jsx
import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Scatter
} from 'recharts';

const Graph = ({ points, regressionLine }) => {
    console.log("Pontos:", points)
    const generateRegressionPoints = () => {
        if (!points.length || !regressionLine) return [];
        
        const xMin = Math.min(...points.map(p => p.x));
        const xMax = Math.max(...points.map(p => p.x));
        
        return [
            { x: xMin, y: regressionLine.beta0 + regressionLine.beta1 * xMin },
            { x: xMax, y: regressionLine.beta0 + regressionLine.beta1 * xMax }
        ];
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border rounded shadow-lg">
                    <p className="text-sm">X: {payload[0].payload.x}</p>
                    <p className="text-sm">Y: {payload[0].payload.y}</p>
                </div>
            );
        }
        return null;
    };

    
    return (
        <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Gráfico da Linha de Regressão</h2>
            
            {points.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={points}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis 
        dataKey="x" 
        type="number"
        label={{ value: 'X', position: 'bottom' }}
    />
    <YAxis
        label={{ value: 'Y', angle: -90, position: 'left' }}
    />
    <Tooltip content={<CustomTooltip />} />
    <Legend />
    
    {/* Pontos de dispersão */}
    <Scatter name="Pontos" data={points} fill="#8884d8">
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
</Scatter>


    {/* Linha de regressão */}
    {regressionLine && (
        <Line
            name="Linha de Regressão"
            data={generateRegressionPoints()}
            type="linear"
            dataKey="y"
            stroke="#ff7300"
            dot={false}
        />
    )}
</LineChart>

                </ResponsiveContainer>
            ) : (
                <div className="h-[300px] flex items-center justify-center text-gray-500">
                    Insira pontos para visualizar o gráfico
                </div>
            )}
            
           
        </div>
    );
};

export default Graph;
