class CameraProduit {

  constructor (id, name, price, description, imageUrl, lenses, inCart){

    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.lenses = lenses;
    this.inCart = inCart;
  }
}


productContainer.innerHTML = "";
		Object.values(cartItems).map(item => {

			productContainer.innerHTML +=
			`
			<div class="product">
				<div class="titleCart title">
					<i class="fas fa-window-close"></i>
					<img src="${item.imageUrl}">
					<span>${item.name}</span>
        </div>
        
				<div class="priceCart price">
					<span>${item.price / 100} €</span>
        </div>
        	
        <div class="quantityInCart quantity">
        
				<i class="fas fa-minus-square"></i>
					<span>${item.inCart}</span>
					<i class="fas fa-plus-square"></i>
				</div>
				<div class="totalCart total">
					${item.inCart * item.price / 100} €
				</div>
			
			
			</div>	
			
		
			`
	
});
	
			