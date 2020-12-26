import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "./Payment.css";
import { Link } from "react-router-dom";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="payment">
			<div className="payment__container">
				<h2>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h2>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user.email}</p>
						<p>DKI Jakarta</p>
						<p>Jakarta Timur</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review Items and Delivery</h3>
					</div>
					<div className="payment__item">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
