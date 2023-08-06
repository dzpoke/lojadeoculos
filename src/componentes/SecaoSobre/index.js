import React from "react";
import './style.css'

export default function SecaoSobre() {
    return(
        <section>
            <div>
                <div>
                    <h1 className='txt-titulos'>QUEM SOMOS NOS?</h1>
                    <p>
                        Fundada em 2001 em Nova Iguaçu - Rio de Janeiro, a Otica vida iniciou suas atividades focadas no atendimento ao pupluco d renda mais baixa
                    </p>
                </div>
                <div>
                    <div>
                        <img src="../assets/loja.png" alt="Imagem da Loja"></img>

                        <div>
                            <h1 className='txt-titulos'>NOSSAS FILIAIS</h1>
                            <p>
                                Hoje temos amsi de 20 filias pelo brasil e na america
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="../assets/atendimento.png" alt="Imagem da Loja"></img>

                        <div>
                            <h1 className='txt-titulos'>NOSSAS FILIAIS</h1>
                            <p>
                                Hoje temos amsi de 20 filias pelo brasil e na america
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}