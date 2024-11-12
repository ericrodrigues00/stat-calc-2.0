import React from 'react';
import { BookOpen, Calculator, ChartBar, Target, Lightbulb, Function } from 'lucide-react';

const LinearRegressionTheory = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      {/* Introdução */}
      <div>
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-blue-600" />
          Regressão Linear: Fundamentos e Aplicações
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          A regressão linear é um método estatístico fundamental que estabelece uma relação matemática entre 
          variáveis através de uma função linear. Este método permite não apenas compreender a relação entre 
          variáveis, mas também realizar previsões e inferências estatísticas sobre os fenômenos estudados.
        </p>
      </div>

      {/* Fundamentos Matemáticos */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Function className="h-6 w-6 text-green-600" />
          Fundamentos Matemáticos
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Modelo Matemático Base</h3>
            <p className="mb-3">
              O modelo de regressão linear simples é expresso pela equação:
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4 font-mono text-center">
              Y = β₀ + β₁X + ε
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Y: Variável dependente (resposta)</li>
              <li>X: Variável independente (preditora)</li>
              <li>β₀: Intercepto</li>
              <li>β₁: Coeficiente angular</li>
              <li>ε: Termo de erro aleatório</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Método dos Mínimos Quadrados</h3>
            <p className="mb-3">
              A estimação dos parâmetros β₀ e β₁ é realizada pelo Método dos Mínimos Quadrados (MMQ), 
              que minimiza a soma dos quadrados dos resíduos.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4 space-y-4">
              <div>
                <p className="font-mono mb-2">Coeficiente Angular (β₁):</p>
                <p className="font-mono">β₁ = Σ((x_i - x̄)(y_i - ȳ)) / Σ(x_i - x̄)²</p>
              </div>
              <div>
                <p className="font-mono mb-2">Intercepto (β₀):</p>
                <p className="font-mono">β₀ = ȳ - β₁x̄</p>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Onde x̄ e ȳ são as médias aritméticas de x e y, respectivamente.
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Medidas de Ajuste do Modelo</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">1. Coeficiente de Correlação (r)</h4>
                <p className="mb-2">
                  Mede a força e direção da relação linear entre X e Y. Varia de -1 a 1:
                </p>
                <div className="bg-gray-50 p-4 rounded-md mb-4 font-mono">
                  r = Σ((x_i - x̄)(y_i - ȳ)) / √[Σ(x_i - x̄)² * Σ(y_i - ȳ)²]
                </div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>r = 1: Correlação positiva perfeita</li>
                  <li>r = -1: Correlação negativa perfeita</li>
                  <li>r = 0: Ausência de correlação linear</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">2. Coeficiente de Determinação (R²)</h4>
                <p className="mb-2">
                  Representa a proporção da variância na variável dependente que é explicada pelo modelo.
                </p>
                <div className="bg-gray-50 p-4 rounded-md mb-4 font-mono">
                  R² = 1 - (SQE/SQT)
                </div>
                <p className="mb-2">Onde:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>SQE: Soma dos Quadrados dos Erros</li>
                  <li>SQT: Soma dos Quadrados Total</li>
                  <li>R² varia de 0 a 1 (ou 0% a 100%)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">3. Erro Padrão da Estimativa</h4>
                <p className="mb-2">
                  Mede a dispersão dos valores observados em relação à reta de regressão.
                </p>
                <div className="bg-gray-50 p-4 rounded-md mb-4 font-mono">
                  Sε = √(SQE/(n-2))
                </div>
                <p>
                  Quanto menor o erro padrão, melhor o ajuste do modelo aos dados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pressupostos e Diagnósticos */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ChartBar className="h-6 w-6 text-purple-600" />
          Pressupostos e Diagnósticos
        </h2>
        
        <div className="space-y-4">
          <p className="mb-4">
            Para que o modelo de regressão linear seja válido e suas estimativas confiáveis, 
            alguns pressupostos devem ser verificados:
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">1. Linearidade</h3>
            <p>
              A relação entre X e Y deve ser aproximadamente linear. Verificação:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Análise gráfica de dispersão</li>
              <li>Análise dos resíduos padronizados</li>
              <li>Teste RESET de Ramsey</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Normalidade dos Resíduos</h3>
            <p>
              Os resíduos devem seguir uma distribuição normal. Verificação:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Gráfico Q-Q Plot</li>
              <li>Teste de Shapiro-Wilk</li>
              <li>Teste de Kolmogorov-Smirnov</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Homocedasticidade</h3>
            <p>
              A variância dos resíduos deve ser constante. Verificação:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Gráfico de resíduos vs valores ajustados</li>
              <li>Teste de Breusch-Pagan</li>
              <li>Teste de White</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Independência dos Resíduos</h3>
            <p>
              Os resíduos não devem apresentar autocorrelação. Verificação:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Teste de Durbin-Watson</li>
              <li>Gráfico de resíduos vs ordem das observações</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Aplicações Práticas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-yellow-600" />
          Aplicações Práticas
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Análise Financeira e Mercado de Capitais</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>CAPM (Capital Asset Pricing Model):</strong>
                <p>Análise da relação entre retorno de ativos e risco de mercado</p>
              </li>
              <li>
                <strong>Análise de Sensibilidade (Beta):</strong>
                <p>Medição da volatilidade de um ativo em relação ao mercado</p>
              </li>
              <li>
                <strong>Value at Risk (VaR):</strong>
                <p>Estimativa de perdas potenciais em portfólios</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Economia e Negócios</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Análise de Demanda:</strong>
                <p>Relação entre preço e quantidade demandada</p>
              </li>
              <li>
                <strong>Previsão de Vendas:</strong>
                <p>Projeção de receitas baseada em variáveis econômicas</p>
              </li>
              <li>
                <strong>Análise de Custos:</strong>
                <p>Estimativa de custos fixos e variáveis</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Engenharia e Controle de Qualidade</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Controle de Processos:</strong>
                <p>Análise de variáveis de controle e resultados</p>
              </li>
              <li>
                <strong>Calibração de Instrumentos:</strong>
                <p>Estabelecimento de curvas de calibração</p>
              </li>
              <li>
                <strong>Análise de Desgaste:</strong>
                <p>Previsão de vida útil de equipamentos</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Ciências Sociais e Comportamentais</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Estudos Educacionais:</strong>
                <p>Relação entre horas de estudo e desempenho</p>
              </li>
              <li>
                <strong>Psicologia:</strong>
                <p>Análise de fatores que influenciam comportamentos</p>
              </li>
              <li>
                <strong>Pesquisa de Mercado:</strong>
                <p>Análise de preferências e comportamento do consumidor</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dicas para Implementação */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Target className="h-6 w-6 text-red-600" />
          Considerações Práticas para Implementação
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Análise Preliminar</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realizar análise exploratória detalhada dos dados</li>
              <li>Identificar e tratar valores ausentes</li>
              <li>Detectar e analisar outliers</li>
              <li>Verificar a necessidade de transformações nos dados</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Validação do Modelo</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar técnicas de validação cruzada</li>
              <li>Analisar resíduos sistematicamente</li>
              <li>Verificar a significância estatística dos parâmetros</li>
              <li>Considerar a relevância prática dos resultados</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Interpretação dos Resultados</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contextualizar os resultados no domínio do problema</li>
              <li>Considerar limitações e possíveis vieses do modelo</li>
              <li>Avaliar a necessidade de modelos mais complexos</li>
              <li>Documentar pressupostos e decisões tomadas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearRegr
