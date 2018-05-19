class Product{
  constructor(name,price,quantity,year){
    this.name     = name;
    this.price    = price;
    this.quantity = quantity;
    this.year     = year;
  }
}
class UI{
  addProduct(product){
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="card text-center mb-4">
      <div class="card-body">
        <strong>Product</strong>: ${product.name}
        <strong>Price</strong>: ${product.price}
        <strong>Quantity</strong>: ${product.quantity}
        <strong>Year</strong>: ${product.year}
      </div>
    <div>`;
    productList.appendChild(element);
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

  const product = new Product( productName,productPrice,productQuan,productYear);
  const ui      = new UI();
  ui.addProduct(product);
  e.preventDefault();

});
