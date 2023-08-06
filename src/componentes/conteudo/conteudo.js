import React from "react";
import SecaoCapa from "../SecaoCapa";
import Produtos from "../SecaoProdutos";
import SecaoSobre from "../SecaoSobre";
import SecaoContato from "../SecaoContato";
import './style.css'

export default function Banner() {
    return (
        <>

        <SecaoCapa/>
        <Produtos/>
        <SecaoSobre/>
        <SecaoContato/>
        </>
        
        
    )
}