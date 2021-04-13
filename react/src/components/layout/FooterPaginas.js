import React, { useState, useEffect } from 'react';
import ClienteAxios from '../../config/servidor';
import ImgFacebook from '../../imagenes/facebook.png';
import ImgGithub from '../../imagenes/github.png';
import ImgGmail from '../../imagenes/gmail.png';

const FooterPaginas = () => {

    const [terminoscondiciones, setTerminosCondiciones] = useState([]);

    const ListarTerminosCondiciones = async () => {
        const response = await ClienteAxios.get('/terminos_condiciones')
        setTerminosCondiciones(response.data.terminos_condiciones)
    }

    useEffect(() => {
        ListarTerminosCondiciones()
    }, [])

    return (
        <div>

            <footer class="bg-dark text-center text-white">

                <div class="container p-4">

                    <section class="mb-4">

                        <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button">
                            <img src={ImgFacebook}/>
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="https://mail.google.com/" role="button">
                            <img src={ImgGmail}/>
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/JuanEstebanOrtiz/CoffeTalk" role="button">
                            <img src={ImgGithub}/>
                        </a>
                    </section>
                    
                    <section class="mb-4">
                        {terminoscondiciones ?
                            terminoscondiciones.map(terminoscondicione => {
                                return(
                                    <p>{terminoscondicione.politicas}</p>
                                )
                            })
                        :null}
                    </section>

                    <section class="">
                        
                        <div class="row">
                            
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>

                </div>



                <div class="text-center p-3" style={{ background: 'black' }}>
                    © 2020 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>

        </div>
    )
}

export default FooterPaginas
