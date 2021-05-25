import React from 'react'
import Header from './Components/Header'
import Section from './Components/Section'
import Footer from './Components/Footer'
import './App.css'

export default function App() {
  return (
    <div>
      <header className="cabecera">
        <Header/>
      </header>
      <main className="seccion">
        <Section/>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  )
}
