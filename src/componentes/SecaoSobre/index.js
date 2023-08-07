import React from "react";
import './style.css'

export default function SecaoSobre() {
    return(
        <section className="box-SecaoSobre">
                <div className="box-sobre-nos">
                    <h1 className='txt-titulos'>QUEM SOMOS NOS?</h1>
                    <p>
                        Fundada em 2001 em Nova Iguaçu - Rio de Janeiro, a Otica vida iniciou suas atividades focadas no atendimento ao pupluco d renda mais baixa
                    </p>
                </div>
            <div className="limitar-secao box-secao-sobre" >
                <div className="box-cards-sobre">
                        
                    <div className="box-ts">
                        <img src="../assets/loja.png" alt="Imagem da Loja"></img>
                     </div>
                    <div className="box-card">
                        <h1 className='txt-titulos'>NOSSAS FILIAIS</h1>
                        <p>
                            Hoje temos amsi de 20 filias pelo brasil e na america
                        </p>
                    </div>

                    <div className="box-card">
                        <h1 className='txt-titulos'>NOSSAS FILIAIS</h1>
                        <p>
                            Hoje temos amsi de 20 filias pelo brasil e na america
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