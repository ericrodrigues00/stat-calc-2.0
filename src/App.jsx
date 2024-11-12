// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Calculator from './components/Calculator';
import Theory from './components/Theory';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navigation />
                
                <main className="container mx-auto px-4 py-8">
                    <Routes>
                        {/* Rota principal - Calculadora */}
                        <Route path="/" element={<Calculator />} />
                        
                        {/* Rota da teoria */}
                        <Route path="/teoria" element={<Theory />} />
                        
                        {/* Redirecionar rotas não encontradas para a calculadora */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="bg-white border-t mt-auto">
                    <div className="container mx-auto px-4 py-6 text-center text-gray-600">
                        <p className="text-sm">
                            Calculadora de Regressão Linear © {new Date().getFullYear()}
                        </p>
                        <p className="text-xs mt-2">
                            Desenvolvido para fins educacionais
                        </p>
                    </div>
                </footer>
            </div>
        </Router>
    );
};

export default App;