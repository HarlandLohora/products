class Product{
  constructor(name,price,quantity,year){
    this.name     = name;
    this.price    = price;
    this.quantity = quantity;
    this.year     = year;
  }
}
class UI{
  addProduct(){

  }
  deleteProduct(){

  }
  showMessage(){

  }
}
document.getElementById('product-form').addEventListener("submit",function(e){
  const productName  = document.getElementById("name").value;
  const productPrice = document.getElementById("price").value;
  const productQuan  = document.getElementById("quantity").value;
  const productYear  = document.getElementById("year").value;

  const product = (new Product( productName,productPrice,productQuan,productYear));

  e.preventDefault();

});
