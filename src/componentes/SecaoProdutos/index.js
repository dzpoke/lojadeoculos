import React from "react";
import './style.css'

export default function Produtos() {
    return(
        <section className="box-Produtoss">
            <div className="limitar-secao box-produtos">
                <div className="box-introducao">
                    <h1 className="txt-titulos">NOSSOS PRODUTOS</h1>
                    <p>
                        Trabalhamos com oculos de grau, oculos de sol, lentes transition nos modelos masculino, feminino e infantil
                    </p>
                    <p>
                        Todos os nossos precos sao acessiveis e contam com a melhor qualidade do mercado
                    </p>
                </div>

                <div className="box-produtos-cards">

                    <div className="boxCards">
                         <h3>Oculos de grau</h3>
                        <img src="./assets/oculos01.png" alt="Modelo de oculos 01"></img>
                        <p>R$ 588,34</p>
                    </div>
                        
                    <div className="boxCards">
                        <h3>Oculos de grau</h3>
                        <img src="./assets/oculos02.png" alt="Modelo de oculos 01"></img>
                        <p>R$ 295,98</p>
                    </div>
                        
                    <div className="boxCards">
                        <h3>Oculos de grau</h3>
                        <img src="./assets/oculos03.png" alt="Modelo de oculos 01"></img>
                        <p>R$ 1500,00</p>
                    </div>
                        
                    <div className="boxCards">
                        <h3>Oculos de grau</h3>
                        <img src="./assets/oculos04.png" alt="Modelo de oculos 01"></img>
                        <p>R$ 475,66</p>
                    </div>

                </div>
            
                <div className="box-beneficios">
                    <h1>Todos os nossos produtos incluem</h1>
                    <ul className="box-lista-beneficios">
                        <li>Grantia de 1 ano</li>
                        <li>Manutencao preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}