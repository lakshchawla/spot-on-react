import React from 'react';
import logo_light from "./../assets/so_logo.png";
import { useForm, ValidationError } from '@formspree/react';
import Form from "./form"

function Footer() {
    const [state, handleSubmit] = useForm("xnqkwypr");
    if (state.succeeded) {
        return <p>Thanks for your interest, our team will revert you soon!</p>;
    }
    return (
        <footer class="footer_web text-white ps-0 pe-0 p-md-5 pb-0 mb-0 pb-md-2 ms-auto me-auto">
            <h1 class="text-center" id="contact">Get in touch</h1>


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2654151006072!2d51.432871476242504!3d25.194270277712853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d12b273a825f%3A0x89fc0d252dfd1aac!2sSpotOn%20Trading%20%26%20Services%20Company%20W.L.L!5e0!3m2!1sen!2sin!4v1698598569102!5m2!1sen!2sin"
                class="col-md-10 map_frame mt-5 mb-5" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div class="row col-11 ms-auto me-auto text-center text-md-start">
                <div class="col-md-5 p-0">

                    <div class="footer_logo mb-4 ms-md-5 ms-auto me-auto">
                        <img src={logo_light} class="col-md-3 col-6 mb-3" alt="" srcset="" />
                        <h6>SPOT ON
                            Trading & Services Co. W.L.L</h6>
                    </div>

                    <ul class="contact_list">
                        <li class="mt-1">
                            <i class="bi bi-telephone-fill d-inline me-2 me-md-4"></i>


                            <p class="d-inline fs-6"><a href="tel:+974-55204432">+974-55204432</a></p>
                        </li>
                        <li class="mt-1">
                            <i class="bi bi-envelope-at d-inline me-2 me-md-4"></i>
                            <p class="d-inline fs-6"><a href="mailto:spoton.tcs@gmail.com">spoton.tcs@gmail.com</a></p>
                        </li>
                        <li class="mt-1">
                            <i class="bi bi-geo-fill d-inline me-2 me-md-4"></i>
                            <p class="d-inline fs-6">C.R No. 88156, Doha - Qatar</p>
                        </li>
                        <ul class="social_links text-white">
                            <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                            <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                            <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                            <li><a href="#"><i class="bi bi-whatsapp"></i></a></li>
                            <li><a href="#"><i class="bi bi-pinterest"></i></a></li>
                        </ul>
                    </ul>
                </div>
                <div class="col-md-7">
                    <Form></Form>
                </div>

            </div>

            <p class="text-center mb-0"> <span>2023, SPOT ON
                Trading & Services Co. W.L.L</span> </p>

        </footer>
    );
}

export default Footer;