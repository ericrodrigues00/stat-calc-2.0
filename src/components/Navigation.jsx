// frontend/src/components/Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, BookOpen } from 'lucide-react';

const Navigation = () => {
    const location = useLocation();

    // Função para verificar se o link está ativo
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Classe base para os links
    const baseLinkClass = "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors";
    
    // Classe adicional quando o link está ativo
    const activeLinkClass = "bg-blue-100 text-blue-700";
    
    // Classe para link inativo
    const inactiveLinkClass = "text-gray-600 hover:bg-gray-100";

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo e título */}
                    <div className="flex items-center">
                        <span className="text-xl font-semibold text-gray-800">
                            Regressão Linear
                        </span>
                    </div>

                    {/* Links de navegação */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className={`${baseLinkClass} ${
                                isActive('/') ? activeLinkClass : inactiveLinkClass
                            }`}
                        >
                            <Calculator size={20} />
                            <span>Calculadora</span>
                        </Link>

                        <Link
                            to="/teoria"
                            className={`${baseLinkClass} ${
                                isActive('/teoria') ? activeLinkClass : inactiveLinkClass
                            }`}
                        >
                            <BookOpen size={20} />
                            <span>Teoria</span>
                        </Link>
                    </div>

                    {/* Informação adicional */}
                    <div className="flex items-center text-sm text-gray-500">
                        v1.0.0
                    </div>
                </div>
            </div>

            {/* Barra de progresso opcional para cálculos em andamento */}
            <div className="h-1 bg-gray-100">
                <div 
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: '0%' }}  // Pode ser controlado por prop
                />
            </div>
        </nav>
    );
};

export default Navigation;