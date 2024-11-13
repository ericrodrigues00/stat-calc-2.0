import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown, ChevronRight } from 'lucide-react';

const LinearRegressionTheory = () => {
  const [openSections, setOpenSections] = useState({
    intro: true,
    applications: false,
    calculation: false,
    example: false
  });

  // Dados de exemplo para o gráfico de vendas
  const salesData = [
    { month: 1, investment: 1000, sales: 1200 },
    { month: 2, investment: 2000, sales: 2300 },
    { month: 3, investment: 3000, sales: 3400 },
    { month: 4, investment: 4000, sales: 4600 },
    { month: 5, investment: 5000, sales: 5500 }
  ];

  // Dados de exemplo para o exercício prático
  const heightWeightData = [
    { height: 160, weight: 50 },
    { height: 165, weight: 55 },
    { height: 170, weight: 63 },
    { height: 175, weight: 68 },
    { height: 180, weight: 72 }
  ];

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Entendendo Regressão Linear
      </h1>

      {/* Seção 1: Introdução */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <button
          onClick={() => toggleSection('intro')}
          className="flex items-center justify-between w-full text-xl font-semibold mb-4"
        >
          <span>O que é Regressão Linear?</span>
          {openSections.intro ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
        </button>

        {openSections.intro && (
          <div className="space-y-4">
            <p>
              A regressão linear é uma técnica estatística que busca estabelecer uma relação 
              matemática entre duas variáveis: uma variável independente (X) e uma variável 
              dependente (Y).
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Conceitos Fundamentais:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Variável Independente (X): A variável que usamos para fazer previsões</li>
                <li>Variável Dependente (Y): A variável que queremos prever</li>
                <li>Linha de Regressão: Y = a + bX (onde 'a' é o intercepto e 'b' é a inclinação)</li>
                <li>R²: Mede a qualidade do ajuste da linha aos dados (varia de 0 a 1)</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Seção 2: Aplicações Práticas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <button
          onClick={() => toggleSection('applications')}
          className="flex items-center justify-between w-full text-xl font-semibold mb-4"
        >
          <span>Aplicações no Mundo Real</span>
          {openSections.applications ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
        </button>

        {openSections.applications && (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">1. Marketing e Vendas</h3>
              <p>Relação entre investimento em publicidade e volume de vendas:</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" label={{ value: 'Investimento (R$ mil)', position: 'bottom' }} />
                    <YAxis label={{ value: 'Vendas (R$ mil)', angle: -90, position: 'left' }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#2563eb" name="Vendas" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Outras Aplicações Comuns:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Previsão de preços imobiliários baseado na área</li>
                <li>Estimativa de consumo de energia baseado na temperatura</li>
                <li>Previsão de desempenho escolar baseado em horas de estudo</li>
                <li>Análise da relação entre altura e peso em estudos médicos</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Seção 3: Cálculos e Fórmulas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <button
          onClick={() => toggleSection('calculation')}
          className="flex items-center justify-between w-full text-xl font-semibold mb-4"
        >
          <span>Como Calcular?</span>
          {openSections.calculation ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
        </button>

        {openSections.calculation && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="font-semibold">Passo a Passo do Cálculo:</h3>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <span className="font-semibold">Calcular as médias:</span>
                  <div className="mt-2 pl-6">
                    <p>X̄ = Σx ÷ n</p>
                    <p>Ȳ = Σy ÷ n</p>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Calcular o coeficiente angular (b):</span>
                  <div className="mt-2 pl-6">
                    <p>b = Σ((x - X̄)(y - Ȳ)) ÷ Σ((x - X̄)²)</p>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Calcular o intercepto (a):</span>
                  <div className="mt-2 pl-6">
                    <p>a = Ȳ - bX̄</p>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Calcular o R²:</span>
                  <div className="mt-2 pl-6">
                    <p>R² = (Σ((x - X̄)(y - Ȳ)))² ÷ (Σ((x - X̄)²)Σ((y - Ȳ)²))</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>

      {/* Seção 4: Exemplo Prático */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <button
          onClick={() => toggleSection('example')}
          className="flex items-center justify-between w-full text-xl font-semibold mb-4"
        >
          <span>Exemplo Prático: Altura vs Peso</span>
          {openSections.example ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
        </button>

        {openSections.example && (
          <div className="space-y-6">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-2 border">Altura (cm)</th>
                  <th className="p-2 border">Peso (kg)</th>
                </tr>
              </thead>
              <tbody>
                {heightWeightData.map((data, index) => (
                  <tr key={index}>
                    <td className="p-2 border text-center">{data.height}</td>
                    <td className="p-2 border text-center">{data.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="space-y-4">
              <h3 className="font-semibold">Resolução:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Médias: X̄ = 170 cm, Ȳ = 61.6 kg</li>
                <li>Coeficiente angular (b) = 0.88</li>
                <li>Intercepto (a) = -88.0</li>
                <li>Equação: Peso = -88.0 + 0.88 × Altura</li>
                <li>R² = 0.97 (97% da variação é explicada pelo modelo)</li>
              </ol>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Interpretação:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Para cada 1 cm de altura adicional, espera-se um aumento de 0.88 kg no peso</li>
                <li>O R² de 0.97 indica um ajuste muito bom do modelo aos dados</li>
                <li>O modelo pode ser usado para estimar o peso de uma pessoa conhecendo sua altura</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinearRegressionTheory;
