
import React from 'react';
import Footer from "../Footer"
import RatedIcon from '../shared/icons/RatedIcon';
import UnratedIcon from '../shared/icons/UnratedIcon';

function Products(props) {
    return (
        <>
        <section className='product-section'>
            <h2>jorax foods</h2>
            <div className="flex-container-2">
                <div className="flex-item">
                    <p>
                        At Jorax Healthcare, our mission transcends the conventional; it's about uplifting communities, preserving tradition, and redefining the landscape of palm oil production. Rooted in the heart of Ndiagu-Akpaka, Ngbo, our home town, we recognize the abundance of skill in palm oil production, especially among the dedicated women who tirelessly engage in this craft. In response to the challenges faced by these skilled artisans, many of whom produce palm oil on a part-time basis due to financial constraints, Jorax Healthcare is on a transformative journey. Instead of relying on automated machines, we choose to empower these women, providing them with not just employment but a sense of purpose and pride. Jorax Premium Palm Oil stands as a testament to the dedication of these women. By eschewing unnecessary additives and embracing the native and traditional methods of production, we deliver an unparalleled product that transcends the ordinary. Each purchase of Jorax oil becomes a direct contribution to the salaries of these remarkable women, as we passionately adhere to a people -oriented approach. Our production factories are strategically located in rural areas, aligning with our vision of fostering job creation in these communities, particularly among the youth. By choosing Jorax oil, you become a patron of tradition, a supporter of local economies, and a contributor to the livelihoods of the women who pour their skill and passion into every drop of our premium oil. We also have Jorax Promax Palm Oil which is produced and delivered with 24 hours of demand and Jorax Palm Kernel Oil. Jorax Healthcare envisions a future where palm oil production isn't just a trade but a source of empowerment. Our commitment to the native and natural way of production, with minimal use of machines except during packaging, ensures that every purchase of Jorax oil resonates with a purpose – the sustenance of tradition, the creation of jobs, and the preservation of a heritage that goes beyond culinary delight. Experience the difference, embrace the mission – with Jorax Premium Palm Oil, you're not just buying oil; you're investing in communities, empowering women, and savoring the essence of tradition with every drop.
                    </p>
                </div>
                <div className="flex-item">
                    <div className="img-container">
                        <img src={`/assets/about/about-banner-image.svg`} alt="palm fruit" />
                    </div>
                </div>
            </div>
            <div className="jorax-foods-products">
                <h3>jorax food products</h3>
                <div className="grid-container-3">
                    <figure className="card product-card">
                        <div className="top-section">
                            <div className="img-container">
                                <img src={`assets/products/p-1.svg`} alt="palm oil product" />
                            </div>
                        </div>
                        <div className="bottom-section">
                          <h5>jorax premium oil</h5>
                          <p>Jorax Palm Oil the best processed and packaged oil sold across the globe.</p>
                          <div className="rates">
                            <RatedIcon/>
                            <RatedIcon/>
                            <RatedIcon/>
                            <UnratedIcon/>
                            <span>(30)</span>
                          </div>
                          <div className="flex-container-2 price">
                            <div className="flex-item">
                                <p>$5.00</p>
                            </div>
                            <div className="flex-item">
                             <div className="cta-btn-container">
                                <button className='cta-btn-primary'>add to cart</button>
                             </div>
                            </div>
                          </div>
                        </div>
                    </figure>
                    
                    {/* p-2 */}
                    <figure className="card product-card">
                        <div className="top-section">
                            <div className="img-container">
                                <img src={`assets/products/p-2.svg`} alt="palm oil product" />
                            </div>
                        </div>
                        <div className="bottom-section">
                          <h5>jorax premium oil</h5>
                          <p>Jorax Palm Oil the best processed and packaged oil sold across the globe.</p>
                          <div className="rates">
                            <RatedIcon/>
                            <RatedIcon/>
                            <RatedIcon/>
                            <UnratedIcon/>
                            <span>(30)</span>
                          </div>
                          <div className="flex-container-2 price">
                            <div className="flex-item">
                                <p>$5.00</p>
                            </div>
                            <div className="flex-item">
                             <div className="cta-btn-container">
                                <button className='cta-btn-primary'>add to cart</button>
                             </div>
                            </div>
                          </div>
                        </div>
                    </figure>

                    {/* p-3 */}
                    <figure className="card product-card">
                        <div className="top-section">
                            <div className="img-container">
                                <img src={`assets/products/p-3.svg`} alt="palm oil product" />
                            </div>
                        </div>
                        <div className="bottom-section">
                          <h5>jorax premium oil</h5>
                          <p>Jorax Palm Oil the best processed and packaged oil sold across the globe.</p>
                          <div className="rates">
                            <RatedIcon/>
                            <RatedIcon/>
                            <RatedIcon/>
                            <UnratedIcon/>
                            <span>(30)</span>
                          </div>
                          <div className="flex-container-2 price">
                            <div className="flex-item">
                                <p>$5.00</p>
                            </div>
                            <div className="flex-item">
                             <div className="cta-btn-container">
                                <button className='cta-btn-primary'>add to cart</button>
                             </div>
                            </div>
                          </div>
                        </div>
                    </figure>

                    {/* p-4 */}
                    <figure className="card product-card">
                        <div className="top-section">
                            <div className="img-container">
                                <img src={`assets/products/p-4.svg`} alt="palm oil product" />
                            </div>
                        </div>
                        <div className="bottom-section">
                          <h5>jorax premium oil</h5>
                          <p>Jorax Palm Oil the best processed and packaged oil sold across the globe.</p>
                          <div className="rates">
                            <RatedIcon/>
                            <RatedIcon/>
                            <RatedIcon/>
                            <UnratedIcon/>
                            <span>(30)</span>
                          </div>
                          <div className="flex-container-2 price">
                            <div className="flex-item">
                                <p>$5.00</p>
                            </div>
                            <div className="flex-item">
                             <div className="cta-btn-container">
                                <button className='cta-btn-primary'>add to cart</button>
                             </div>
                            </div>
                          </div>
                        </div>
                    </figure>

                    {/* p-5 */}
                    <figure className="card product-card">
                        <div className="top-section">
                            <div className="img-container">
                                <img src={`assets/products/p-5.svg`} alt="palm oil product" />
                            </div>
                        </div>
                        <div className="bottom-section">
                          <h5>jorax premium oil</h5>
                          <p>Jorax Palm Oil the best processed and packaged oil sold across the globe.</p>
                          <div className="rates">
                            <RatedIcon/>
                            <RatedIcon/>
                            <RatedIcon/>
                            <UnratedIcon/>
                            <span>(30)</span>
                          </div>
                          <div className="flex-container-2 price">
                            <div className="flex-item">
                                <p>$5.00</p>
                            </div>
                            <div className="flex-item">
                             <div className="cta-btn-container">
                                <button className='cta-btn-primary'>add to cart</button>
                             </div>
                            </div>
                          </div>
                        </div>
                    </figure>

                    {/* p-6 */}
                    <figure className="card product-card">
                        <div className="top-section">
                            <div className="img-container">
                                <img src={`assets/products/p-6.svg`} alt="palm oil product" />
                            </div>
                        </div>
                        <div className="bottom-section">
                          <h5>jorax premium oil</h5>
                          <p>Jorax Palm Oil the best processed and packaged oil sold across the globe.</p>
                          <div className="rates">
                            <RatedIcon/>
                            <RatedIcon/>
                            <RatedIcon/>
                            <UnratedIcon/>
                            <span>(30)</span>
                          </div>
                          <div className="flex-container-2 price">
                            <div className="flex-item">
                                <p>$5.00</p>
                            </div>
                            <div className="flex-item">
                             <div className="cta-btn-container">
                                <button className='cta-btn-primary'>add to cart</button>
                             </div>
                            </div>
                          </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>

        <Footer/>
        </>
    );
}

export default Products;