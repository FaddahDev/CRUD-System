let productName= document.getElementById('productName');
let productCategory= document.getElementById('productCategory');
let productPrice= document.getElementById('productPrice');
let productAmount= document.getElementById('productAmount');
let productDescription= document.getElementById('productDescription');
let tbody= document.getElementById('tbody');
let update= document.getElementById('update');



if (localStorage.getItem("products")==null
){
    var products = [];

}else{
   var products = JSON.parse(localStorage.getItem('products'));
   displayProduct();

}


function addProduct(){
    let product={
        name: productName.value,
        category: productCategory.value,
        price: productPrice.value,
        amount: productAmount.value,
        description: productDescription.value,
    
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    displayProduct();
    clearProduct();

}

function clearProduct(){
    productName.value='';
    productCategory.value='';
    productPrice.value='';
    productAmount.value='';
    productDescription.value='';

}

function displayProduct(){
    products = JSON.parse(localStorage.getItem('products'))
    let container='';
    for(let i=0; i<products.length; i++){
        container  +=`<tr>
            <td>${i+1}</td>
            <td>${products[i].name}</td>
            <td>${products[i].category}</td>
            <td>${products[i].price}</td>
            <td>${products[i].amount}</td>
             <td>${products[i].description}</td>
            <td> <button class="btn btn-danger" onclick="updateProduct(${i})">update</button> </td>
            <td> <button class="btn btn-warning" >delete</button> </td>            
            </tr>
        `
    }


tbody.innerHTML=container
}

function updateProduct(k){
    
    productName.value=products[k].name,
    productCategory.value=products[k].category,
    productPrice.value=products[k].price,
    productAmount.value=products[k].amount,
    productDescription.value=products[k].description
    update.innerHTML='Update Product';
    update.classList.add('bg-secondary','text-white');
    update.onclick=function(){
    console.log(products[k].name)
    products[k].name=productName.value;
    products[k].category=productCategory.value;
    products[k].price=productPrice.value;
    products[k].amount=productAmount.value;
    products[k].description=productDescription.value;
    localStorage.setItem('products', JSON.stringify(products));
    displayProduct();
    clearProduct();
    update.innerHTML='add Product';
    update.classList.remove('bg-secondary','text-white');
    update.onclick= function(){
        addProduct();
    }
        
    }


}

