import React from 'react'
import "../Styles/main.css"

const Home = () => {
    return (
        <>
            <div className="App">
                <div className="container-text">
                    <section className='text-over'>
                        <img src={"/src/assets/55.JPG"} alt="" className='banner' />

                    </section>
                    <h1 className='centered'>Restaurang Tai Lee</h1>
                </div>

                <div className="container home-page">


                    <h1>Vi hälsar dig varmt välkommen till Tai Lee</h1>
                    <p>
                        Din destination för en
                        autentisk asiatisk matupplevelse i hjärtat av Kungälv.
                        Vår restaurang tar dig med på en kulinarisk resa genom Asiens rika smaker
                        och kulturer.
                    </p>
                </div>
                <div className="container">
                    <section className='second-part'>
                        <img src={"/src/assets/54.JPG"} alt="" className='image' />
                        <img src={"/src/assets/53.JPG"} alt="" className='image' />
                        <img src={"/src/assets/55.JPG"} alt="" className='image' />
                        <img src={"/src/assets/50.JPG"} alt="" className='image' />
                        <img src={"/src/assets/51.JPG"} alt="" className='image' />
                        <img src={"/src/assets/52.JPG"} alt="" className='image' />
                    </section>
                </div>
                <div className="container">
                    <section className="third-part center">
                        <h1>På Tai Lee serverar vi en mångfald av rätter från olika asiatiska kök. Våra erfarna kockar använder endast färska och högkvalitativa ingredienser för att skapa smakfulla och autentiska rätter.</h1>
                    </section>
                </div>
            </div >


        </>
    )
}

export default Home
