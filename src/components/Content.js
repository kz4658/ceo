import React from "react";
import './Content.css';
import img from '../assets/img/66.jpg'
import img1 from '../assets/img/j.png'
import img2 from '../assets/img/mock.jpg'
import img3 from '../assets/img/mock3.png'
import img4 from '../assets/img/о.jpg'
import WOW from 'wowjs';

class Content extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
        
            
        <div className="alert alert-primary" role="alert">
            <img src={img} className="img-fluid" />
            <section className="section-intro bg-faded text-xs-center animate__animated animate__backInUp wow">
      <div className="container">
        <h3 className="m-b-3">Разработка сайтов в Алматы.</h3>
        <p className="lead wp wp-2">Рекалама в "Google", "Instagram", "Youtube", "Facebook"</p>
        <p className="lead wp wp-2">Услуга от 15 000 тг.</p>
        
        
      </div>
    </section>
      <div className="animate__animated animate__backInUp wow">
    <a href="tel:+77071793498"><button type="button" className="btn btn-primary btn-lg">+77071793498</button></a>
    <div></div>
    <a href="tel:+77077776752"><button type="button" className="btn btn-primary btn-lg">+77077776752</button></a>
    <div></div>
    <a href="https://wa.me/+77071793498"><button type="button" className="btn btn-success btn-lg">Написать WhatsAp</button></a>
    </div>
    <img src={img1} className="img-fluid animate__animated animate__backInUp wow" />
     
    <section className="section-intro bg-faded text-xs-center animate__animated animate__backInUp wow">
      <div className="container">
        <h3 className="m-b-3">Все услуги EGOV</h3>
        <p className="lead wp wp-2">Прописка в городе Алматы</p>
        <p className="lead wp wp-2">Регистрация брака онлайн</p>
        <p className="lead wp wp-2">Налоговые декларации</p>
        <p className="lead wp wp-2">Замена водительского удостоверения</p>
        <p className="lead wp wp-2">Адресная социальная помощь</p>
        <p className="lead wp wp-2">Постановка в очередь на жилье</p>
        
        
      </div>
    </section>
    <img src={img2} className="img-fluid animate__animated animate__backInUp wow" />
    <section className="section-intro bg-faded text-xs-center animate__animated animate__backInUp wow">
      <div className="container">
        <h3 className="m-b-3">Поможем открыть ип</h3>
        <p className="lead wp wp-2">Консультация специалиста</p>
        
      </div>
    </section>
    <img src={img3} className="img-fluid animate__animated animate__backInUp wow" />
    <section className="section-intro bg-faded text-xs-center animate__animated animate__backInUp wow">
      <div className="container">
        <h3 className="m-b-3">Профессиональное обучение электронным закупкам РК. Госзакупки, Самрук.</h3>
        <p className="lead wp wp-2">Услуга от 15 000 тг.</p>
        
      </div>
    </section >
    <img src={img4} className="img-fluid animate__animated animate__backInUp wow" />
    <section className="section-intro bg-faded text-xs-center animate__animated animate__backInUp wow">
      <div className="container">
        <h3 className="m-b-3">Снятие арестов с банковских счетов</h3>
        <p className="lead wp wp-2">Отмена нотариальной надписи, снятие арестов с банковских счетов</p>
        <p className="lead wp wp-2">Услуга от 5000 тг.</p>
        
      </div>
    </section>
    
    
      </div>
   

        
    )
}
}

export default Content;