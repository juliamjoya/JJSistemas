import React from 'react'
import "./home.css"
import logoEmpresa from '../../assets/logo_jjsistemas.png'

const Home = () => {
  return (
    <div>
        <div className="jumbotron">
            <img className="logoEmpresa" src={logoEmpresa} alt="Logo JJsistemas" />
            <h1 className="display-4">Proximamente, Tienda Virtual JJsistemas</h1>
            <p className="lead">Cordialmente los invito en unos dias a la inauguracion de la tienda virtual JJsistemas</p>
            <hr className="my-4" />
            <p>La tienda virtual JJsistemas ofrecera venta de perifericos/accesorios para computadores y demas tambien ofrecera el servicio de desarrollos de software a la medida del cliente.</p>
        </div>
  </div>
  )
}

export default Home