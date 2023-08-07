import React from "react";
import './style.css'

export default function SecaoSobre() {
    return(
        <section className="box-SecaoSobre">
                <div className="box-sobre-nos">
                    <h1 className='txt-titulos'>QUEM SOMOS NÓS?</h1>
                        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                </div>
            <div className="limitar-secao box-secao-sobre" >
                <div className="box-cards-sobre">
                        
                    <div className="box-ts">
                        <img src="../assets/loja.png" alt="Imagem da Loja"></img>
                     </div>
                    <div className="box-card">
                        <h1 className='txt-titulos'>Nossas Filiais</h1>
                        <p>
                            Hoje temos mais de 20 filiais pelo Brasil e na América
                        </p>
                    </div>

                    <div className="box-card">
                        <h1 className='txt-titulos'>Atendimento flexível</h1>
                        <p>
                            Nossa equipe possui é treinada para te atender
                        </p>
                    </div>
                    <div className="box-ts">
                        <img src="../assets/atendimento.png" alt="Imagem da Loja"></img>
                    </div>

                </div>
            </div>
        </section>
    )
}