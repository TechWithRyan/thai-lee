import React from 'react';
import "../Styles/main.css";
import banner from '../assets/55.jpg';
import image0 from '../assets/50.jpg';
import image1 from '../assets/51.jpg';
import image2 from '../assets/52.jpg';
import image3 from '../assets/53.jpg';
import image4 from '../assets/54.jpg';

const Home = () => {
    return (
        <>
            <div className="App">
                <div className="container-text">
                    <section className='text-over'>
                        <img src={banner} alt="" className='banner' />

                    </section>
                    <h1 className='centered'>Restaurang Tai Lee</h1>
                </div>

                <div className="container center home-page">
                    <h1>Vi hälsar dig varmt välkommen till Tai Lee</h1>
                    <p>
                        Din destination för en
                        autentisk asiatisk matupplevelse i hjärtat av Kungälv.
                        Vår restaurang tar dig med på en kulinarisk resa genom Asiens rika smaker
                        och kulturer.
                    </p>
                </div>
                <div className="container images">
                    <img src={image4} alt="" className='image' />
                    <img src={image3} alt="" className='image' />
                    <img src={banner} alt="" className='image' />
                    <img src={image0} alt="" className='image' />
                    <img src={image1} alt="" className='image' />
                    <img src={image2} alt="" className='image' />
                </div>
                <div className="container third-parts">
                    <p>På Tai Lee serverar vi en mångfald av rätter från olika asiatiska kök. Våra erfarna kockar använder endast färska och högkvalitativa ingredienser för att skapa smakfulla och autentiska rätter.</p>
                </div>


            </div >


        </>
    )
}

export default Home
