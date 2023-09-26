import React from 'react'
import "../Styles/main.css"
import photo1 from "../assets/images/55.JPG";
import photo2 from "../assets/images/54.JPG";
import photo3 from "../assets/images/53.JPG";
import photo4 from "../assets/images/52.JPG";
import photo5 from "../assets/images/51.JPG";
import photo6 from "../assets/images/50.JPG";



const Home = () => {
    return (
        <>
            <div className="App">
                <div className="container-text">
                    <section className='text-over'>
                        <img src={photo1} alt="" className='banner' />

                    </section>
                    <div className='centered'>Restaurang Tai Lee</div>
                </div>

                <div className="container home-page">


                    <div className='welcome-text'>Vi hälsar dig varmt välkommen till Tai Lee</div>
                    <p >
                        Din destination för en
                        autentisk asiatisk matupplevelse i hjärtat av Kungälv.
                        Vår restaurang tar dig med på en kulinarisk resa genom Asiens rika smaker
                        och kulturer.
                    </p>
                </div>
                <div className="container">
                    <div className='second-part'>
                        <img src={photo1} alt="" className='image' />
                        <img src={photo2} alt="" className='image' />
                        <img src={photo3} alt="" className='image' />
                        <img src={photo4} alt="" className='image' />
                        <img src={photo5} alt="" className='image' />
                        <img src={photo6} alt="" className='image' />

                    </div>
                </div>
                <div className="container">
                    <div className="third-part center">
                        <div className='dish-text'>På Tai Lee serverar vi en mångfald av rätter från olika asiatiska kök. Våra erfarna kockar använder endast färska och högkvalitativa ingredienser för att skapa smakfulla och autentiska rätter.</div>
                    </div>
                </div>
            </div >


        </>
    )
}

export default Home
