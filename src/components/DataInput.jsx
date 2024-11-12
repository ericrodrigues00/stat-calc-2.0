// frontend/src/components/DataInput.jsx
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const DataInput = ({ onAddPoint, pointCount }) => {
    const [input, setInput] = useState({ x: '', y: '' });
    const [error, setError] = useState('');

    const isValidNumber = (value) => {
        return !isNaN(value) && value.trim() !== '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    // Handler para submissão do formulário
const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação dos inputs
    if (!isValidNumber(input.x) || !isValidNumber(input.y)) {
        setError('Por favor, insira números válidos');
        return;
    }

    // Converte para números e limita a 2 casas decimais
    const x = parseFloat(parseFloat(input.x));
    const y = parseFloat(parseFloat(input.y));
    
    // Adiciona o ponto através da função prop
    onAddPoint(x, y);

    // Adicione um log para inspecionar o ponto adicionado
    console.log("Ponto adicionado:", { x, y });

    // Limpa o formulário
    setInput({ x: '', y: '' });
};


    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Inserir Dados</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Valor de X
                    </label>
                    <input
                        type="number"
                        step="any"
                        name="x"
                        value={input.x}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Digite o valor de X"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Valor de Y
                    </label>
                    <input
                        type="number"
                        step="any"
                        name="y"
                        value={input.y}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Digite o valor de Y"
                    />
                </div>

                {error && (
                    <div className="text-red-600 flex items-center gap-2">
                        <AlertCircle size={16} />
                        <span>{error}</span>
                    </div>
                )}

                <div className="text-sm text-gray-600">
                    Pontos inseridos: {pointCount}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                    disabled={!input.x || !input.y}
                >
                    Adicionar Ponto
                </button>
            </form>
        </div>
    );
};

export default DataInput;
