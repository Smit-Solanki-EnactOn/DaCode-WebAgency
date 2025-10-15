import React from 'react'
import ButtonComponent from '../../../Core/ButtonComponent';
import "./banner-with-cta.scss";
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle';


const BannerWithCta = () => {
  return (
   <section className="banner-section">
            <div className="container">
                <div className="banner-wrapper">
                    <div className="section-head">
                   
                        <h2 className="section-title">Interested to work with us ?</h2>
                        <p className="section-description">Send a line here get and update daily</p>
                    </div>

                    <div className="section-body">
                        <ButtonComponent role="button" variant='dark' label='DaCode@example.com' />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default BannerWithCta