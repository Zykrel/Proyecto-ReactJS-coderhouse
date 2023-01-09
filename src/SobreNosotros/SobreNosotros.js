import React from 'react'
import Iframe from 'react-iframe'

const SobreNosotros = () => {



    return (
        <div className='container my-2'>
            <h1>Somos Señores del Placard</h1>
            <p>Señores del Placard es una mueblería dedicada a comercializar muebles de melamina, haciendo
                énfasis en
                ofrecer los precios más bajos del mercado.
                Queremos brindarte productos que cubran tus necesidades, y que puedas recibir
                de forma sencilla y segura en tu domicilio. No dudes por favor en contactarnos y hacer todas las
                consultas que consideres necesarias, también podés visitar la sección productos donde
                encontrarás
                todos nuestros artículos a la venta. <br />
                Nuestros horarios de atención son de Lunes a Viernes de 11 a 17hs y Sábados de 11 a 13hs.</p>
                <br/>
                <h5>Nuestra Ubicación</h5>
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.14312459004!2d-58.457317969166056!3d-34.70984152479327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccc287d911c69%3A0x9ea7bcfb9a930558!2sGuamin%C3%AD%202632%2C%20B1827%20Ingeniero%20Budge%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1661470183196!5m2!1ses-419!2sar"
                        width="640px"
                        height="320px"
                        style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" />
        </div>
    )
}

export default SobreNosotros