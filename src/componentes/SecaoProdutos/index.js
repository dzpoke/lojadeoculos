import React from "react";
import './style.css'

export default function Produtos() {
    return(
        <section>
            <div>
                <div>
                    <h1>NOSSOS PRODUTOS</h1>
                    <p>
                        Trabalhamos com oculos de grau, oculos de sol, lentes transition nos modelos masculino, feminino e infantil
                    </p>
                    <p>
                        Todos os nossos precos sao acessiveis e contam com a melhor qualidade do mercado
                    </p>
                </div>
                <div>
                    <div>
                        <h2>Oculos de grau</h2>
                        <img src="./assets/oculos01.png" alt="Modelo de oculos 01"></img>
                        <p>R$ 500,00</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Oculos de grau</h2>
                        <img src="./assets/oculos02.png" alt="Modelo de oculos 01"></img>
                        <p>R$ 500,00</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Oculos de grau</h2>
                        <img src="./assets/oculos03.png" alt="Modelo de oculos 01"></img>
                        <p>R$ 500,00</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Oculos de grau</h2>
                        <img src="./assets/oculos04.png" alt="Modelo de oculos 01"></img>
                        <p>R$ 500,00</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>Todos os nossos produtos incluem</h1>
                <ul>
                    <li>Grantia de 1 ano</li>
                    <li>Manutencao preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}