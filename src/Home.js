import React from 'react'
import './Home.css'
import Product from './Product'
import home from './asets/image copy.png'
import product1 from './asets/product1.png'
import product2 from './asets/product2.png'
import product3 from './asets/product3.png'
import product4 from './asets/product4.png'
import product5 from './asets/product5.png'
import product6 from './asets/product6.png'
import product7 from './asets/product7.png'
import product8 from './asets/product8.png'
import product9 from './asets/product9.png'
import product10 from './asets/product10.png'
import product11 from './asets/product11.png'
import product12 from './asets/product12.png'
import product13 from './asets/product13.png'
import product14 from './asets/product14.png'
import product16 from './asets/product16.png'


function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' src={home} alt="" />
       
            <div className="home_row">
                
                
                <Product
                id="454"
                 title="Men's Regular Fit Polo"
                  rating={5} 
                  price={65}
                  image={product8} 

                    />
                <Product
                id="455"
                 title="Official Disney: Donald Duck Attitude Men Oversized T-"
                  rating={5} 
                  price={77}
                  image={product9} 

                    />
                <Product
                id="456"
                 title="Varsity Originals Men and Boys Long Sleeve Collared Neck"
                  rating={5} 
                  price={35}
                  image={product10} 

                    />
                
            </div>
            <div className="home_row">
            <Product
                id="457"
                 title="iQOO Neo 7 Pro 5G (Fearless Flame, 8Gb Ram, 128Gb Storage) | Snapdragon 8+ Gen 1 | Flagship 50Mp Camera | Premium Leather Design |..."
                  rating={4} 
                  price={222.72}
                  image={product6} 

                    />
            <Product
                id="458"
                 title="
                 iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 64MP Aura Light OIS Camera |..."
                  rating={4} 
                  price={282.72}
                  image={product16} 

                    />
            </div>
            <div className="home_row">
            <Product
                id="459"
                 title="Puma Unisex-Adult Smashic Casual Shoe"
                  rating={3} 
                  price={42.55}
                  image={product11} 

                    />
            <Product
                id="460"
                 title="Bata Mens I-and Laceup Casual Shoes,"
                  rating={5} 
                  price={66}
                  image={product12} 

                    />
            <Product
                id="461"
                 title="U.S. Polo Assn Mens Abor Sneaker"
                  rating={3} 
                  price={44.32}
                  image={product13} 

                    /> 
            </div>
            <div className="home_row">
            <Product
                id="470"
                 title="Puma Unisex-Adult Smashic Casual Shoe"
                  rating={3} 
                  price={199}
                  image={product3} 

                    />
            <Product
                id="471"
                 title="Bata Mens I-and Laceup Casual Shoes,"
                  rating={5} 
                  price={20}
                  image={product4} 

                    />
            <Product
                id="472"
                 title="U.S. Polo Assn Mens Abor Sneaker"
                  rating={3} 
                  price={110.32}
                  image={product5} 

                    /> 
            </div>
            <div className="home_row">
            <Product
                id="473"
                 title="U.S. Polo Assn Mens Abor t-shirt"
                  rating={3} 
                  price={99.32}
                  image={product14} 

                    /> 
            <Product
                id="453"
                 title="Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves (Also"
                  rating={5} 
                  price={88.88}
                  image={product7} 

                    />
            </div>
            <div className="home_row">
            <Product
                id="451"
                 title="Van Heusen Men's Regular Fit Polo Shirt"
                  rating={4} 
                  price={29.99}
                  image={product1} 

                    />
                <Product
                id="452"
                 title="UNITED COLORS OF BENETTON Men's T-Shirt"
                  rating={5} 
                  price={5.88}
                  image={product2} 

                    />
            </div>
        </div>
    </div>
  )
}

export default Home