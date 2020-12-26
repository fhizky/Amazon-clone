import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="home_IMG"
			/>

			<div className="home__row">
				<Product
					id="12321341"
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
				/>
				<Product
					id="149538094"
					title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass"
					price={211.96}
					rating={4}
					image="https://o.remove.bg/downloads/da48120c-730f-46b4-842e-b3a4e7e2d8aa/kenwood-kmix-kmx50-kenwood-limited-kenwood-kmix-kmx750-food-processor-robot-robot-removebg-preview.png"
				/>
			</div>
			<div className="home__row">
				<Product
					id="4903850"
					title="Samsung 49' Curved LED Gaming Monitor"
					price={22.96}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg"
				/>
				<Product
					id="23445930"
					title="Amazon Echo Smart Speaker with Alexa"
					price={141.96}
					rating={3}
					image="https://www.powerhouse.je/images/amazon-echo-2nd-gen-smart-speaker-with-alexa-p14550-37548_image.jpg"
				/>
				<Product
					id="325435678"
					title="New Apple iPad Pro"
					price={100.96}
					rating={5}
					image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583553704156"
				/>
			</div>
			<div className="home__row">
				<Product
					id="3468788"
					title="Laptop Asus ROG Zephyrus"
					price={211.96}
					rating={4}
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg570RAOuZXJacOI5-kdwHwu--tkny_QoZfgNY2MQNBNOGhQJ_zhxjDc8WAQck2BTAJhmeudmnjQI3Zc2yOJYcS32v7Vb6IiRFfQ&usqp=CAU&ec=45732300"
				/>
			</div>
		</div>
	);
}

export default Home;
