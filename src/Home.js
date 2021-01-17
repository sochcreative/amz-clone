import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Coolie/launch/1500x600_Hero-Tall_np._CB411102619_.jpg" 
                alt="banner" 
                className="homeImage"/>

                <div className="homeRow">
                    <Product
                    id={1}
                    title='Motorola Edge+ (Thunder Grey, 256 GB)  (12 GB RAM)'
                    info='12 GB RAM | 256 GB ROM
17.02 cm (6.7 inch) Full HD+ Display
108MP + 16MP + 8MP | 25MP Front Camera
5000 mAh Lithium-ion Battery
Qualcomm Snapdragon 865 Processor
90 Degree Curved Endless Edge Display
90 Hz Refresh Rate'
                    price={2022.9}
                    img='https://image01.realme.net/general/20201006/1601976041520.jpg'
                    rating={4}
                     />
                    <Product
                    id={2}
                    title='Adidas Womens Potentio W Running Shoe'
                    info='Sole: Rubber Closure: Lace Up
Shoe Width: Medium
These are Women Running Shoes
These are Women Running Shoes'
                    price={2022.9}
                    img='https://images-na.ssl-images-amazon.com/images/I/71rR1V%2B9FqL._UY500_.jpg'
                    rating={3}
                    
                     />
                    
                </div>

                <div className="homeRow">
                <Product
                id={2}
                    title='Lenovo IdeaPad S540 10th Gen Intel Core i5 15.6-inch Full HD IPS Thin and Light Laptop '
                    info='(8GB/1TB HDD + 256GB SSD/Windows 10/MS Office 2019/NVIDIA MX250 2GB Graphics/Mineral Grey/1.8Kg)'
                    price={2022.9}
                    img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtm9Z3vWOYj41Z5hI01PAQ3BOcyJlyBOAhQ&usqp=CAU'
                    rating={4} />
                <Product 
                    id={2}
                    title='Legend of Suheldev: The King Who Saved India Paperback – 20 June 2020 '
                    info='Amish is a 1974-born, IIM (Kolkata)-educated, boring banker turned happy author.'
                    price={2022.9}
                    img='https://images-na.ssl-images-amazon.com/images/I/51UNiQJBLEL._SX326_BO1,204,203,200_.jpg'
                    rating={5}
                />
                <Product 
                    id={2}
                    title='Satva-The Brand Full Black LED Display Smart '
                    info='Watch Look LED Silicone Strap Wrist Watch for Men Boys Girls Women'
                    price={2022.9}
                    img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTah12v9kD9hhBsgxTNr8zAXTCSvaL6CZ-zaA&usqp=CAU'
                    rating={5}
                />
                </div>
                <div className="homeRow">
                <Product 
                    id={2}
                    title='Carrier 1.2 Ton 5 Star Split Inverter AC with PM 2.5 Filter - White  (14K 5 STAR ESTER NEO-i INVERTER R32 SPLIT AC, Copper Condenser)'
                    info='This is very important phone for our Industry'
                    price={2022.9}
                    img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBK1WimotlDJ6PuTG9b709g_DGtfLeXdWAw&usqp=CAU'
                    rating={5}
                />
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
