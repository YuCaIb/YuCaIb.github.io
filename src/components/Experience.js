import React from "react";
import './Experience.css';

function Experience() {
    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Deneyimlerim</h2>
            
            <div className="experience-item">
                <div className="experience-header">
                    <h3>Alugha GMBH</h3>
                    <span className="location">Mannheim, Almanya</span>
                    <span className="date">03/2024 - 07/2024</span>
                </div>
                <h4>Intern Research Engineer</h4>
                <ul className="experience-details">
                    <li>Alugha, Video barındırma, Dubbr, AI destekli video çevirisi ve videodan altyazı alma hizmeti sunar</li>
                    <li>Daha fazla veri elde etmeden ve model üzerinde tekrar eğitim yapılmasına gerek kalmadan, konuşma modellerini geliştirmek ve düzeltmek için araştırma takımına katılındı.</li>
                    <li>Ses dosyalarını wav formatına dönüştüren bir modüle katkıda bulunuldu.</li>
                    <li>Alugha'nın kültür çeşitliliği sayesinde farklı kültürlerden insanlarla çalışma deneyimi kazanıldı.</li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="experience-header">
                    <h3>Toros Üniversitesi</h3>
                    <span className="location">Mersin, Türkiye</span>
                    <span className="date">02/2024 - 03/2024</span>
                </div>
                <h4>Intern Bilgisayar Mühendisi</h4>
                <ul className="experience-details">
                    <li>Toros Üniversitesi Bilgi İşlem Dairesi</li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;