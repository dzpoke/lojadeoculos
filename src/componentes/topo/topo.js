import React from "react"
import './style.css'

export default function Topo() {
    return(
        <header>
            <div className="limitar-secao box-menu">
                <img src="../assets/logo.png" alt="Logo da Otica Vida"></img>
                <div>
                    <nav>
                        <a className='txt-banner' href="./conteudo/produtos/index.js">PRODUTOS</a >
                        <a className='txt-banner' href="./conteudo/produtos/index.js">SOBRE</a >
                        <a className='txt-banner' href="./conteudo/produtos/index.js">CONTATO</a >
                    </nav>
                </div>
            </div>
        </header>
    )
}