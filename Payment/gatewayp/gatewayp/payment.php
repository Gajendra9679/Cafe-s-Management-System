<?php

$conn = new mysqli("localhost","root","");


?>


<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Responsive Payment getway form design in Hindi</title>
	<link rel="stylesheet" type="text/css" href="payment.css">
</head>
<body>
<header>
	<div class="container">
		<div class="left">
			<h3>BILLING ADDRESS</h3>
			<form method="post" name="google-sheet">
				Full name
				<input type="text" id="name" name="name" class="form-control" placeholder="Enter name">
				Email
				<input type="text" id="email" name="email" class="form-control" placeholder="Enter email">

				Address
				<input type="text" id="address" name="address" class="form-control" placeholder="Enter address">
				
				City
				<input type="text" id="city" name="city" class="form-control" placeholder="Enter City">
				<div id="zip">
					<label>
						State
						<select id="state" name="state" class="form-control">
							<option>Choose State..</option>
							<option>Rajasthan</option>
							<option>Hariyana</option>
							<option>Uttar Pradesh</option>
							<option>Madhya Pradesh</option>
						</select>
					</label>
						<label>
						Zip code
						<input type="number" id="zip" name="zipcode" class="form-control" placeholder="Zip code">
					</label>
				</div>
			</form>
		</div>
		<div class="right">
			<h3>PAYMENT</h3>
			<form method="post" name="google-sheet">
				Accepted Card <br>
				<img src="image/card1.png" width="100">
				<img src="image/card2.png" width="50">
				<br><br>

				Credit card number
			<input type="text" id="card" name="card" class="form-control placeholder="Enter card number">
				
				Exp month
				<input type="text" id="month" name="month" class="form-control" placeholder="Enter Month">
				<div id="zip">
					<label>
						Exp year
						<select id="year" name="year" class="form-control">
							<option>Choose Year..</option>
							<option>2022</option>
							<option>2023</option>
							<option>2024</option>
							<option>2025</option>
						</select>
					</label>
						<label>
						CVV 	
						<input type="number" id="cvv" name="cvv" class="form-control" placeholder="CVV">
					</label>
				</div>
			</form>
			<input type="submit" name="Continue to checkout" value="Proceed to Checkout">
		</div>
	</div>
</header>

</body>
</html>