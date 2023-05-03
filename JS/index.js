let closeMenu = document.getElementById('close-menu');
let burguerMenu = document.getElementById('burguer-menu');
let mobileMenu = document.getElementById('mobile-menu');
let productoPrueba = document.getElementById('product-1');
let productContainer = document.getElementById('productContainer');
let closeProductDetail = document.getElementById('closeProductDetail');
let shoppingCart = document.getElementById('shoppingCart');
let shoppingCartDesktop = document.getElementById('shoppingCartDesktop');
let shoppingCartMobile = document.getElementById('shoppingCartMobile');
let closeShoppingCart = document.getElementById('closeShoppingCart');


burguerMenu.addEventListener('click',e=>{
    mobileMenu.classList.add('show');
})

closeMenu.addEventListener('click',e=>{
    mobileMenu.classList.remove('show');
})

productoPrueba.addEventListener('click',e=>{
    productContainer.classList.add('show');
})  

closeProductDetail.addEventListener('click',e=>{
    productContainer.classList.remove('show');
})

shoppingCartDesktop.addEventListener('click',e=>{
    shoppingCart.classList.add('show')
})
shoppingCartMobile.addEventListener('click',e=>{
    shoppingCart.classList.add('show')
})

closeShoppingCart.addEventListener('click',e=>{
    shoppingCart.classList.remove('show');
}) 