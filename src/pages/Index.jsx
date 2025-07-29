import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeartbeat, FaBrain, FaChartLine } from 'react-icons/fa'

export const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex flex-col">
      <header className="bg-primary text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Saúde Mental Conectada</h1>
        <p className="mt-2">Cuidando do bem-estar emocional</p>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaHeartbeat className="mx-auto text-6xl text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Quiz Emocional</h2>
            <p>Avalie seu estado emocional de forma rápida e segura.</p>
            <Link 
              to="/login" 
              className="mt-4 inline-block bg-secondary text-white px-4 py-2 rounded"
            >
              Começar
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaBrain className="mx-auto text-6xl text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Acompanhamento</h2>
            <p>Monitore sua evolução emocional com nossos dashboards.</p>
            <Link 
              to="/signup" 
              className="mt-4 inline-block bg-secondary text-white px-4 py-2 rounded"
            >
              Cadastrar
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaChartLine className="mx-auto text-6xl text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Análise Profunda</h2>
            <p>Insights personalizados sobre sua saúde mental.</p>
            <a 
              href="#" 
              className="mt-4 inline-block bg-secondary text-white px-4 py-2 rounded"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-emotional-blue text-white p-4 text-center">
        © 2023 Saúde Mental Conectada. Todos os direitos reservados.
      </footer>
    </div>
  )
}
