import React from 'react';
import { BookOpen, PieChart, BarChart, DollarSign, CreditCard } from 'lucide-react';

const LinearRegressionTheory = () => {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Teoria Abrangente da Regressão Linear</h1>
        <BookOpen className="inline-block h-12 w-12 mr-2 text-gray-500" />
        <p className="text-lg">
          A regressão linear é uma técnica estatística amplamente utilizada para modelar a relação entre uma variável dependente (variável resposta) e uma ou mais variáveis independentes (variáveis preditoras). O objetivo principal da regressão linear é encontrar a equação que melhor descreve essa relação, permitindo fazer previsões e entender o impacto das variáveis independentes na variável dependente. Essa técnica é essencial em diversas áreas, como economia, finanças, ciências sociais e engenharia, pois permite quantificar e analisar a dependência entre fenômenos.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Modelo de Regressão Linear Simples</h2>
        <PieChart className="inline-block h-10 w-10 mr-2 text-gray-500" />
        <p>
          O modelo de regressão linear simples é usado quando temos apenas uma variável independente que se relaciona linearmente com a variável dependente. A equação do modelo é dada por:
        </p>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="font-mono">Y = β₀ + β₁X + ε</p>
        </div>
        <p>
          Onde:
          <ul className="list-disc pl-6">
            <li>Y é a variável dependente (variável resposta)</li>
            <li>X é a variável independente (variável preditora)</li>
            <li>β₀ é o intercepto (valor de Y quando X = 0)</li>
            <li>β₁ é o coeficiente angular (inclinação da reta)</li>
            <li>ε é o termo de erro (diferença entre o valor observado e o valor previsto)</li>
          </ul>
        </p>
        <p>
          O modelo de regressão linear simples assume que a relação entre X e Y é linear, ou seja, um aumento unitário em X resulta em um aumento ou diminuição constante em Y. Essa suposição deve ser verificada antes de aplicar o modelo.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Estimação dos Coeficientes</h2>
        <BarChart className="inline-block h-10 w-10 mr-2 text-gray-500" />
        <p>
          Para estimar os coeficientes β₀ e β₁, utilizamos o método dos mínimos quadrados, que consiste em minimizar a soma dos quadrados dos resíduos (diferença entre os valores observados e os valores previstos). As fórmulas para calcular os coeficientes são:
        </p>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="font-mono">
            β₁ = Σ(X_i - Ẋ)(Y_i - Ȳ) / Σ(X_i - Ẋ)²<br />
            β₀ = Ȳ - β₁Ẋ
          </p>
        </div>
        <p>
          Onde:
          <ul className="list-disc pl-6">
            <li>Ẋ é a média da variável independente X</li>
            <li>Ȳ é a média da variável dependente Y</li>
            <li>Σ representa o somatório</li>
          </ul>
        </p>
        <p>
          O método dos mínimos quadrados garante que os coeficientes estimados sejam os melhores estimadores lineares não enviesados (BLUE - Best Linear Unbiased Estimator), ou seja, são os melhores estimadores possíveis com as informações disponíveis.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Interpretação dos Resultados</h2>
        <DollarSign className="inline-block h-10 w-10 mr-2 text-gray-500" />
        <p>
          Após a estimação dos coeficientes, podemos interpretar os resultados da regressão linear:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Intercepto (β₀):</strong> Representa o valor médio de Y quando X é igual a zero. Esse valor indica o valor médio de Y quando nenhuma das variáveis independentes está presente no modelo.
          </li>
          <li>
            <strong>Coeficiente angular (β₁):</strong> Representa a variação média em Y para cada unidade de variação em X. Esse coeficiente indica a magnitude e a direção (positiva ou negativa) do efeito da variável independente X sobre a variável dependente Y.
          </li>
          <li>
            <strong>Coeficiente de determinação (R²):</strong> Mede a proporção da variância de Y que é explicada pelas variáveis independentes no modelo. Varia de 0 a 1, sendo que valores mais próximos de 1 indicam um melhor ajuste do modelo, ou seja, uma maior capacidade de as variáveis independentes explicarem a variação da variável dependente.
          </li>
        </ul>
        <p>
          Essas informações são importantes para entender a relação entre as variáveis e fazer previsões com o modelo de regressão linear. Elas permitem quantificar o impacto das variáveis independentes na variável dependente e avaliar a qualidade do ajuste do modelo aos dados observados.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Suposições do Modelo</h2>
        <CreditCard className="inline-block h-10 w-10 mr-2 text-gray-500" />
        <p>
          Para que o modelo de regressão linear simples seja válido, algumas suposições devem ser atendidas:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Linearidade:</strong> A relação entre a variável dependente Y e a variável independente X deve ser linear.
          </li>
          <li>
            <strong>Homocedasticidade:</strong> A variância dos resíduos deve ser constante (independente dos valores de X).
          </li>
          <li>
            <strong>Normalidade:</strong> Os resíduos devem seguir uma distribuição normal.
          </li>
          <li>
            <strong>Independência:</strong> Os resíduos devem ser independentes entre si.
          </li>
          <li>
            <strong>Ausência de multicolinearidade:</strong> Quando há mais de uma variável independente, elas não devem ser altamente correlacionadas entre si.
          </li>
        </ul>
        <p>
          É importante verificar essas suposições antes de confiar nos resultados da regressão linear. Caso alguma dessas suposições não seja atendida, os resultados podem ser enviesados ou as inferências estatísticas podem não ser válidas.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Extensões e Aplicações</h2>
        <BarChart className="inline-block h-10 w-10 mr-2 text-gray-500" />
        <p>
          O modelo de regressão linear simples aqui apresentado é a base para extensões e aplicações mais complexas da regressão linear, como:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Regressão linear múltipla:</strong> Quando há mais de uma variável independente influenciando a variável dependente.
          </li>
          <li>
            <strong>Regressão polinomial:</strong> Quando a relação entre X e Y não é linear, mas pode ser modelada por um polinômio.
          </li>
          <li>
            <strong>Regressão logística:</strong> Utilizada quando a variável dependente é binária (0 ou 1, sim ou não).
          </li>
          <li>
            <strong>Análise de séries temporais:</strong> Aplicação da regressão linear para analisar a evolução de uma variável ao longo do tempo.
          </li>
          <li>
            <strong>Modelagem de equações estruturais:</strong> Técnica que combina regressão linear com análise fatorial para avaliar relações complexas entre variáveis.
          </li>
        </ul>
        <p>
          Essas extensões permitem modelar uma ampla gama de fenômenos e são amplamente utilizadas em diversas áreas do conhecimento.
        </p>
      </div>
    </div>
  );
};

export default LinearRegressionTheory;