import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import './Contact.css'; // Ayrı bir CSS dosyası kullanacağız
import { TbBrandWhatsapp } from 'react-icons/tb';
import { FaKaggle } from 'react-icons/fa6';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">İletişim</h2>

            <div className="contact-items">
                <a href="mailto:y.canfee@gmail.com" className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>y.canfee@gmail.com</span>
                </a>
                <a href="tel:+905530122015" className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span>+90 553 012 2015</span>
                </a>
                <a href='https://wa.me/905530122015' className='contact-item'>
                    <TbBrandWhatsapp className="contact-icon" />
                    <span>Whatsapp</span>
                </a>

                <a href="https://www.linkedin.com/in/yucaib/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaLinkedin className="contact-icon" />
                    <span>LinkedIn Profilim</span>
                </a>

                <a href="https://github.com/yucaib" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaGithub className="contact-icon" />
                    <span>GitHub Profilim</span>
                </a>

                <a href='https://kaggle.com/yucaib' className='contact-item'>
                    <FaKaggle className="contact-icon" />
                    <span> Kaggle Profilim</span>
                </a>



            </div>
        </section>
    );
}

export default Contact;