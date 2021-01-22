class InLocalStorage { 
  constructor(){
    this.queryString = window.location.search;
	console.log(queryString);
	  this.urlParams = new URLSearchParams(queryString);
	console.log(urlParams);
	  this.id = urlParams.get('id');
	console.log(id);
	  this.detailCamera = await Ajax('cameras/' + id, 'GET');
	console.log(detailCamera);
    this.cartItems = localStorage.getItem('productInCart');
    this.productNumbers = localStorage.getItem("cartNumbers");
    this.cartCost = localStorage.getItem("totalCost");
  }
}
localStorage.setItem('cartNumbers', detailCamera.);





class InApi{
  constructor(){

  }
}