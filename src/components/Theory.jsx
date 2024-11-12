import React from 'react';
import { BookOpen, PieChart, BarChart, DollarSign, Target, Lightbulb } from 'lucide-react';

const LinearRegressionTheory = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-blue-600" />
          Entendendo a Regressão Linear
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          A regressão linear é uma das ferramentas estatísticas mais poderosas e amplamente utilizadas para compreender 
          a relação entre variáveis e fazer previsões. Imagine que você quer entender como diferentes fatores influenciam 
          um resultado específico - é exatamente para isso que a regressão linear serve.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Target className="h-6 w-6 text-green-600" />
          Conceitos Fundamentais
        </h2>
        <p className="mb-4">
          Em sua forma mais simples, a regressão linear busca encontrar uma linha reta que melhor se ajusta aos seus dados.
          Esta linha pode ser descrita pela equação:
        </p>
        <div className="bg-gray-50 p-4 rounded-md mb-4 font-mono text-center">
          Y = a + bX
        </div>
        <p>Onde:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Y é o que queremos prever (variável dependente)</li>
          <li>X é o que usamos para fazer a previsão (variável independente)</li>
          <li>a é onde a linha cruza o eixo Y (intercepto)</li>
          <li>b é a inclinação da linha (coeficiente angular)</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-yellow-600" />
          Exemplos Práticos
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Mercado Imobiliário</h3>
            <p className="mb-2">Previsão de preços de imóveis:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Variável dependente (Y): Preço do imóvel</li>
              <li>Variáveis independentes (X): Área, número de quartos, localização</li>
              <li>Aplicação: Avaliar o valor justo de um imóvel</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Vendas e Marketing</h3>
            <p className="mb-2">Análise de campanhas publicitárias:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Variável dependente (Y): Volume de vendas</li>
              <li>Variáveis independentes (X): Investimento em marketing, tempo de campanha</li>
              <li>Aplicação: Otimizar orçamento de marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Recursos Humanos</h3>
            <p className="mb-2">Análise de desempenho:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Variável dependente (Y): Produtividade do funcionário</li>
              <li>Variáveis independentes (X): Horas de treinamento, anos de experiência</li>
              <li>Aplicação: Planejar programas de desenvolvimento</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BarChart className="h-6 w-6 text-purple-600" />
          Interpretando os Resultados
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Coeficiente de Determinação (R²)</h3>
            <p>
              Varia de 0 a 1, onde:
            </p>
            <ul className="list-disc pl-6">
              <li>R² próximo a 1: Modelo explica bem os dados</li>
              <li>R² próximo a 0: Modelo não explica bem os dados</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Coeficiente Angular (b)</h3>
            <ul className="list-disc pl-6">
              <li>Positivo: Y aumenta quando X aumenta</li>
              <li>Negativo: Y diminui quando X aumenta</li>
              <li>Magnitude: Indica o quanto Y muda para cada unidade de X</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-red-600" />
          Aplicações no Mercado Financeiro
        </h2>
        <div className="space-y-4">
          <p>A regressão linear é amplamente utilizada em análises financeiras:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Análise de Ações:</strong> Comparar o desempenho de uma ação com índices de mercado
            </li>
            <li>
              <strong>Gestão de Risco:</strong> Avaliar a sensibilidade de um ativo a fatores de mercado
            </li>
            <li>
              <strong>Precificação de Ativos:</strong> Determinar o preço justo de instrumentos financeiros
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <PieChart className="h-6 w-6 text-indigo-600" />
          Dicas Práticas
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Visualize seus dados:</strong> Sempre faça um gráfico de dispersão antes de aplicar a regressão
          </li>
          <li>
            <strong>Verifique outliers:</strong> Pontos muito distantes podem distorcer os resultados
          </li>
          <li>
            <strong>Valide pressupostos:</strong> Verifique se a relação é realmente linear
          </li>
          <li>
            <strong>Use dados suficientes:</strong> Quanto mais dados, mais confiável será sua análise
          </li>
          <li>
            <strong>Interprete com contexto:</strong> Os resultados devem fazer sentido no mundo real
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LinearRegressionTheory;
