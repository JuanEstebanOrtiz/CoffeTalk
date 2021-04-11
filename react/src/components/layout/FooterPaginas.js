import React from 'react';
import ImgFacebook from '../../imagenes/facebook.png';
import ImgGithub from '../../imagenes/github.png';
import ImgGmail from '../../imagenes/gmail.png';

const FooterPaginas = () => {
    return (
        <div>

            <footer class="bg-dark text-center text-white">

                <div class="container p-4">

                    <section class="mb-4">

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <img src={ImgFacebook}/>
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <img src={ImgGmail}/>
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <img src={ImgGithub}/>
                        </a>
                    </section>


                    <section class="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
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
