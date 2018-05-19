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
        <a href="#" class="btn btn-danger" name="delete">Delete</a>
      </div>
    <div>`;
    productList.appendChild(element);
  }
  resetForm(){
    document.getElementById("product-form").reset();
  }

  deleteProduct(element){
    if(element.name === "delete"){
      element.parentElement.parentElement.parentElement.remove();
    }
  }
  showMessage(message){
    const div = document.createElement("div");
    div.className = "alert alert-success mt-4";
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");
    container.insertBefore(div, app);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);

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
  ui.resetForm();
  ui.showMessage("Product added sucessfully");
  e.preventDefault();
});

document.getElementById("product-list").addEventListener("click",function(e){
  const ui = new UI();
  ui.deleteProduct(e.target)
});
