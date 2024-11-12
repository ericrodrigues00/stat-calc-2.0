// frontend/src/components/DetailedSteps.jsx
import React from 'react';

const DetailedSteps = ({ results }) => {
    if (!results) return null;

    const {
        steps: { meanX, meanY, sumXY, sumXX, sumYY },
        beta0,
        beta1,
        r,
        rSquared
    } = results;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Cálculos Detalhados</h3>
            
            <div className="space-y-6">
                {/* Médias */}
                <section>
                    <h4 className="font-medium text-gray-700 mb-2">1. Cálculo das Médias</h4>
                    <div className="bg-gray-50 p-3 rounded-md space-y-2">
                        <p>Média de X (x̄) = {meanX}</p>
                        <p>Média de Y (ȳ) = {meanY}</p>
                    </div>
                </section>

                {/* Somas */}
                <section>
                    <h4 className="font-medium text-gray-700 mb-2">2. Cálculo das Somas</h4>
                    <div className="bg-gray-50 p-3 rounded-md space-y-2">
                        <p>∑(x-x̄)(y-ȳ) = {sumXY}</p>
                        <p>∑(x-x̄)² = {sumXX}</p>
                        <p>∑(y-ȳ)² = {sumYY}</p>
                    </div>
                </section>

                {/* Coeficientes da Reta */}
                <section>
                    <h4 className="font-medium text-gray-700 mb-2">3. Coeficientes da Reta</h4>
                    <div className="bg-gray-50 p-3 rounded-md space-y-2">
                        <div>
                            <p className="font-medium">Coeficiente Angular (β₁):</p>
                            <p className="ml-4">β₁ = ∑(x-x̄)(y-ȳ) / ∑(x-x̄)²</p>
                            <p className="ml-4">β₁ = {sumXY} / {sumXX} = {beta1}</p>
                        </div>
                        <div className="mt-2">
                            <p className="font-medium">Intercepto (β₀):</p>
                            <p className="ml-4">β₀ = ȳ - β₁x̄</p>
                            <p className="ml-4">β₀ = {meanY} - ({beta1} × {meanX}) = {beta0}</p>
                        </div>
                    </div>
                </section>

                {/* Correlação */}
                <section>
                    <h4 className="font-medium text-gray-700 mb-2">4. Coeficiente de Correlação (r)</h4>
                    <div className="bg-gray-50 p-3 rounded-md space-y-2">
                        <p className="mb-2">r = ∑(x-x̄)(y-ȳ) / √[∑(x-x̄)² × ∑(y-ȳ)²]</p>
                        <p className="ml-4">r = {sumXY} / √({sumXX} × {sumYY})</p>
                        <p className="ml-4">r = {r}</p>
                    </div>
                </section>

                {/* R² */}
                <section>
                    <h4 className="font-medium text-gray-700 mb-2">5. Coeficiente de Determinação (R²)</h4>
                    <div className="bg-gray-50 p-3 rounded-md space-y-2">
                        <p>R² = r²</p>
                        <p className="ml-4">R² = ({r})² = {rSquared}</p>
                        <p className="mt-2 text-gray-600">
                            Isso significa que {(rSquared * 100)}% da variação em Y 
                            pode ser explicada pela variação em X.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DetailedSteps;