import React from 'react'
import Image from "next/image"
function Hotels() {
    return (
        <div>
            {/* /* Popular Hotels Section */}
            <section className="section__container popular__container" id='card'>
                <h2 className="section__header text-white">Popular Hotels</h2>
                <div className="popular__grid">
                    <div className="popular__card">
                        <Image src="/hotel-1.jpg" alt="The Plaza Hotel" width={500} height={300} />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>The Plaza Hotel</h4>
                                <h4>$499</h4>
                            </div>
                            <p>New York City, USA</p>
                        </div>
                    </div>
                    <div className="popular__card">
                        <Image src="/hotel-2.jpg" alt="Ritz Paris" width={500} height={300} />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>Ritz Paris</h4>
                                <h4>$549</h4>
                            </div>
                            <p>Paris, France</p>
                        </div>
                    </div>
                    <div className="popular__card">
                        <Image src="/hotel-3.jpg" alt="The Peninsula" width={500} height={300} />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>The Peninsula</h4>
                                <h4>$599</h4>
                            </div>
                            <p>Hong Kong</p>
                        </div>
                    </div>
                    <div className="popular__card">
                        <Image src="/hotel-4.jpg" alt="Atlantis The Palm" width={500} height={300} />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>Atlantis The Palm</h4>
                                <h4>$449</h4>
                            </div>
                            <p>Dubai, United Arab Emirates</p>
                        </div>
                    </div>
                    <div className="popular__card">
                        <Image src="/hotel-5.jpg" alt="The Ritz-Carlton" width={500} height={300} />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>The Ritz-Carlton</h4>
                                <h4>$649</h4>
                            </div>
                            <p>Tokyo, Japan</p>
                        </div>
                    </div>
                    <div className="popular__card">
                        <Image src="/hotel-6.jpg" alt="Marina Bay Sands" width={500} height={300} />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>Marina Bay Sands</h4>
                                <h4>$549</h4>
                            </div>
                            <p>Singapore</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hotels