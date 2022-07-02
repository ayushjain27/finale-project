import React from 'react'

const Carousel = () => {
    const carouselItem = {
        width: '100%',
        height: '24rem',
    }

    return (
        <div style={{border: '2px solid black'}}>
            <div  id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                </div>
                <div className="carousel-inner">
                    <div style={carouselItem} className="carousel-item active" data-bs-interval="10000">
                        <img src="./images/food_recipe.webp" className="d-block w-100 h-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div style={carouselItem} className="carousel-item" data-bs-interval="2000">
                        <img src="./images/food.jpeg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    {/* <div className="carousel-item">
                        <img  src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span>Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span>Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
