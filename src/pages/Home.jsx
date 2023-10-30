import React from 'react';
import Navbar from '../components/navbar';
import bg_video from "./../assets/Untitled.mp4";
import Footer from '../components/footer';
import phone_pic from './../assets/phone_adv.png';
import logo_light from "./../assets/so_logo.png";


function Home() {
    return (
        <>
            <div class="hero_page">
                <video autoPlay loop muted id="backgroundVideo">
                    <source src={bg_video} type="video/mp4" />
                </video>



                <div class="HeroPageContent ms-auto me-auto text-white text-center" data-aos="fade-up" data-aos-duration="1600">

{/* 
                    <img src={logo_light} alt="" srcset="" className='col-1' />
                    <h5 className='mb-5 mt-3 pb-5'>SPOT ON Trading & Services Co. W.L.L</h5> */}


                    <div className="hero_prom_content">
                        <h3 class="sm_text fs-4 mb-4"> FROM OFFICE TO CONSTRUCTION,</h3>
                        <h3 class="lg_text">WE'VE GOT YOU ALL COVERED</h3>
                    </div>
                </div>
                <div class="button_know_more_hero text-white text-center">
                    <a href="#page1_home">
                        <p class="mb-0">
                            <i class="bi bi-chevron-down text-white mb-0"></i>
                        </p>
                        <p>KNOW MORE</p>
                    </a>
                </div>

            </div>

            <div class=" text-white">
                <div class=" pt-5 col-10 ms-auto me-auto row">
                    <div className="col-md-6" data-aos="fade-right" data-aos-duration="700">
                        <h2 class="" id="page1_home">What we are?</h2>
                        <p className='fs-5'>
                            SPOT ON Trading & Services Co. W.L.L is a leading company specializing in building, concrete repair,
                            corrosion protection, insulation, MEP services, and ISO certification services. Our commitment is to
                            maintain market leadership through stringent QA/QC and HSE standards. We prioritize professional
                            workforce development, ensuring high-quality work, material, and project completion to client
                            satisfaction. <a href="#" className='text-decoration-none'>Read more</a>
                        </p>
                        <p className=' mt-5 fs-5'>
                            Choose from our wide range of <a href="#service_section" className='text-decoration-none'>services</a>.
                        </p>
                    </div>
                    <div className="col-md-6 phone_pic_home text-md-end text-center">
                        <img src={phone_pic} alt="" srcset="" className='col-8 ms-auto me-auto' data-aos="fade-up-left" data-aos-duration="700" />
                    </div>

                </div>



            </div>


            <div class="new_page bg_buildings p-5">

                <h1 class="text-white text-center mb-5 h1" id='service_section'>SERVICES</h1>

                <div class="service_section row">
                    <div class="row col-md-10 me-auto ms-auto">
                        <div class="col-md-6 text-white text-center p-0 pb-1 mb-4">
                            <div class="service_cards" data-aos="fade-up" data-aos-duration="700">
                                <h4 class="mb-5">Electrical Engineering</h4>
                                <p class="fs-6">Spot On's Electrical Engineering Division provides expert analysis and solutions
                                    for electrical issues in your structures. We cover lighting, security, fire/life safety,
                                    building automation, fiber optics, communications, premises wiring, and power quality
                                    systems. Our team is here to ensure your electrical needs are met.</p>
                                <a href="#">Read more</a>
                            </div>
                        </div>
                        <div class="col-md-6 text-white text-center p-0 pb-1 mb-4">
                            <div class="service_cards" data-aos="fade-up" data-aos-duration="900">
                                <h4 class="mb-5">Construction</h4>
                                <p class="fs-6">

                                    Spot On specializes in a diverse range of construction projects, including hospitality,
                                    finance, retail, commercial, institutional, healthcare, education, government,
                                    transportation, industrial, power generation, and residential sectors. We have the expertise
                                    and experience to deliver high-quality results for a variety of construction needs.</p>
                                <a href="#">Read more</a>
                            </div>
                        </div>
                        <div class="col-md-6 text-white text-center p-0 pb-1 mb-4">
                            <div class="service_cards" data-aos="fade-up" data-aos-duration="1100">
                                <h4 class="mb-5">Mechanical & Plumbing</h4>
                                <p class="fs-6">Spot On's Mechanical & Plumbing Division offers comprehensive solutions and
                                    expert analysis for all your mechanical and plumbing needs. Our team is equipped to handle a
                                    wide range of services, including HVAC systems, plumbing installations, maintenance, and
                                    repairs. We specialize in energy-efficient solutions and sustainable practices,
                                    ensuring systems are smooth and cost-effective.</p>
                                <a href="#">Read more</a>
                            </div>
                        </div>

                        <div class="col-md-6 text-white text-center p-0 pb-1 mb-4">
                            <div class="service_cards" data-aos="fade-up" data-aos-duration="1300">
                                <h4 class="mb-5">Certifications</h4>
                                <p class="fs-6">Spot On's Certification Division is your trusted partner for ensuring compliance
                                    and quality in your projects. We provide a range of certification services that cover
                                    various industries and standards, including ISO, safety, environmental, and product
                                    certifications. </p>
                                <a href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Home;
