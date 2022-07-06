import React from 'react'

const Carousel = () => {
    const carouselItem = {
        width: '100%',
        height: '24rem',
        // backgroundColor: 'black',
    }

    const img = {
        height: '100%',
        // padding: '12px',
        // opacity: '0.8',
    }

    const previous = {
        backgroundColor: 'brown',
        border: '2px solid black',
        position: 'fixed',
        left: '0',
    }

    const next = {
        backgroundColor: 'brown',
        border: '2px solid black',
        position: 'fixed',
        right: '0',
    }

    const button = {
        backgroundColor: 'black',
        height: '6px',
        
        // border: '2px solid black',
        // position: 'fixed',
        // right: '0',
    }

    return (
        <div style={{marginTop: '12px'}}>
            <div  id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button style={button} type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button style={button} type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button style={button} type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div style={carouselItem} className="carousel-item active" data-bs-interval="2000">
                        <img style={img} src="https://img.freepik.com/free-vector/people-carrying-donation-charity-related-icons_53876-43091.jpg?w=2000" className="d-block w-100 h-100" alt="..." />
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div> */}
                    </div>
                    <div style={carouselItem} className="carousel-item" data-bs-interval="2000">
                        <img style={img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRkGDxnBEtn6sXa_91FjhiZff9eFS5hx7-g&usqp=CAU" className="d-block w-100" alt="..." />
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div> */}
                    </div>
                    <div style={carouselItem} className="carousel-item">
                        <img style={img}  src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2017/10/05/USATODAY/usatsports/glass-jar-full-of-cois-with-donate-written-on-it-charity-donation-philanthropy_large.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" className="d-block w-100" alt="..." />
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div> */}
                    </div>
                </div>
                <button  className="carousel-control-prev" type="button" data-bs-target="#myCarousel"  data-bs-slide="prev">
                    <span style={previous} className="carousel-control-prev-icon" aria-hidden="true"></span>
                    {/* <span >Previous</span> */}
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span style={next} className="carousel-control-next-icon" aria-hidden="true"></span>
                    {/* <span>Next</span> */}
                </button>
            </div>
        </div>
    )
}

export default Carousel
