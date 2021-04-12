import React, { useContext, useEffect } from 'react';
import MenuAdmin from './LayoutAdmin/MenuAdmin';
import FooterPaginas from '../../../components/layout/FooterPaginas';
import { Carousel } from 'react-bootstrap';

const Admin = () => {

    return (
        <div>
            <MenuAdmin/>
            <h1>Hola Admin</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dam.ngenespanol.com/wp-content/uploads/2019/10/datos-sobre-el-cafe.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dam.ngenespanol.com/wp-content/uploads/2019/10/datos-sobre-el-cafe.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dam.ngenespanol.com/wp-content/uploads/2019/10/datos-sobre-el-cafe.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <FooterPaginas/>
        </div>
    )
}

export default Admin
