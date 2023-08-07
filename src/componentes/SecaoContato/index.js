import React from "react";
import './style.css'

export default function SecaoContato(){
    return(
        <section className="box-contato">
            <div>
                <h1 className="txt-titulos">Fale conosco</h1>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>
            </div>
            <div className="limitar-secao">

                <div className="box-contato-cards center">
                    <div className="box-card">
                            <h3>Contato</h3>
                        <div>
                            <img src="./assets/local.png" alt=""></img>
                            <p>Nova Iguaçu, RJ</p>
                        </div>

                        <div>
                            <img src="./assets/telefone.png" alt=""></img>
                            <p>(21) 9999-9999</p>
                        </div>

                        <div>
                            <img src="./assets/email.png" alt=""></img>
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>

                    <div className="box-card">
                            <h3>Nossas Redes Sociais</h3>
                        <div>
                            <img src="./assets/fb.png" alt=""></img>
                            <p>/OticaVida</p>
                        </div>

                        <div>
                            <img src="./assets/ig.png" alt=""></img>
                            <p>@oticavidarj</p>
                        </div>

                        <div>
                            <img src="./assets/tt.png" alt=""></img>
                            <p>@oticavidarj</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}