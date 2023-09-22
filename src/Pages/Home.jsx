import React from 'react'
import "../Styles/main.css"

const Home = () => {
    return (
        <>
            <div className="App">
                <div className="box">
                    <section className='container'>
                        <img src="/public/logo.png" alt="" className='logotype' />
                    </section>
                </div>

                <div className="container center home-page">
                    <h1>
                        Varmt Välkomna
                    </h1>
                </div>
                <div className="container">
                    <section className='second-part'>
                        <img src="/src/assets/images/12.JPG" alt="" className='image' />
                        <img src="/src/assets/images/22.JPG" alt="" className='image' />
                        <img src="/src/assets/images/11.JPG" alt="" className='image' />
                    </section>
                </div>
                <div className="container">
                    <section className="third-part box">
                        <h1>Tai Lee är en del av Kungälv.</h1>
                    </section>
                </div>
            </div>


        </>
    )
}

export default Home
