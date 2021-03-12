import React, { useEffect, useState } from 'react'
import "./Home.css"
import Product from './Product'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { db } from './firebase';


function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState();
    
    useEffect(() => {
        db.collection('products')
        .orderBy('price', 'desc')
        .onSnapshot(snapshot => {
            setProducts(snapshot.docs.map(doc => ({
                id:doc.id,
                data:doc.data()
            })))
        })
        console.log(products);
    }, [])
    return (
        <div className="home">
            <div className="home__container">
                
                <Carousel>
                    <img  className="home__image" src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2FGWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?alt=media&token=8986f8da-b895-4379-85d7-038581276614" alt=""/>
                    <img  className="home__image" src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2FGWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?alt=media&token=8986f8da-b895-4379-85d7-038581276614" alt=""/>
                    <img  className="home__image" src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2FGWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?alt=media&token=8986f8da-b895-4379-85d7-038581276614" alt=""/>
                </Carousel>
                {products?.map((product) =>
                    <div>
                        {/* <script>console.log("product", product)</script> */}
                        <div className="row__name">
                            <h4>{product.category}</h4>
                        </div>
                        <div className="home__row">
                        
                            <Product 
                                className="home__product" 
                                id={product.id} 
                                    title={product.data.title} 
                                    price={product.data.price} 
                                    image={product.data.image}
                                    rating={product.data.rating}
                            />
                        </div>
                    </div>
                    )}
                    
                    {/* <Product className="home__product" id="234332424" title="The a a a startup" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92" rating={5} />
                    <Product className="home__product" id="23432342443" title="second product" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/>
                    <Product className="home__product" id="234323342443" title="second product" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/>
                    <Product className="home__product" id="2343342443" title="second product" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/> */}

                {/* </div> */}
                <div className="row__name">
                        <h4>Category</h4>
                    </div>
                <div className="home__row">
                    <Product className="home__product" id="234324246" title="The lean startup" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/>
                    <Product className="home__product" id="23432424436" title="The lean startup" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/>
                    <Product className="home__product" id="23432423446" title="The lean startup" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/>
                    <Product className="home__product" id="23432353424" title="The lean startup" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/>

                </div>
                <div className="row__name">
                        <h4>Category</h4>
                    </div>
                <div className="home__row">
                    <Product className="home__product" id="234324434666" title="The lean startup" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/>
                    <Product className="home__product" id="2343244643466" title="The lean startup" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/>
                    <Product className="home__product" id="2343244436466" title="The lean startup" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/>
                    <Product className="home__product" id="2343244346466" title="The lean startup" price={19.99} image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-batyr.appspot.com/o/images%2F51Zymoq7UnL._SX325_BO1%2C204%2C203%2C200_.jpg?alt=media&token=0a40463c-1d57-4dbb-91c0-ddde72f18d92"rating={5}/>

                </div>
            </div>
        </div>
        
    )
}

export default Home
