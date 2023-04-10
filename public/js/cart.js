let carts = document.querySelectorAll('.list-item .item');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-add-cart')) {}
    })
}

// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if (productNumbers) {
//         document.querySelector('.cart span').textContent = productNumbers;
//     }
// }

// function cartNumbers(product) {
//     let productNumbers = localStorage.getItem('cartNumbers');

//     productNumbers = parseInt(productNumbers);
//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector('.cart span').textContent = productNumbers + 1;
//     } else {
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector('.cart span').textContent = 1;
//     }

//     setItems(product);
// }

// function setItems(product) {
//     let cartItems = localStorage.getItem('productsInCart');
//     if (cartItems != null) {
//         if (cartItems[product.slug] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.slug]: product
//             }
//         }
//         cartItems[product.slug].inCart += 1;
//     }
//     product.inCart = 1;
//     cartItems = {
//         [product.slug]: product
//     }
//     localStorage.setItem('productsInCart', cartItems);
// }

// function totalCost(product) {
//     let cartCost = localStorage.getItem('totalCost');
//     if (cartCost != null) {
//         cartCost = parseInt(cartCost);
//         localStorage.setItem('totalCost', cartCost + product.price);
//     } else {
//         localStorage.setItem('totalCost', product.price);
//     }
// }

// function displayCart() {
//     let cartItems = localStorage.getItem('productsInCart');
//     let productContainer = document.getElementsByTagName('tbody');
//     if (cartItems && productContainer) {
//         Object.values(cartItems).map(function(item) {
//             let itemContainer = document.createElement('tr')
//             itemContainer.innerHTML = '<td class="align-middle"><img src="<%=item.picture1%>" alt="" style="width: 50px;"><%=item.productName%></td>\
//             <td class="align-middle"><%=item.price%></td>\
//             <td class="align-middle">\
//                 <div class="input-group quantity mx-auto" style="width: 100px;">\
//                     <div class="input-group-btn">\
//                         <button class="btn btn-sm btn-primary btn-minus">\
//                         <i class="fa fa-minus"></i>\
//                         </button>\
//                     </div>\
//                     <input type="text" class="form-control form-control-sm bg-secondary text-center" value="<%=item.inCart%>">\
//                     <div class="input-group-btn">\
//                         <button class="btn btn-sm btn-primary btn-plus">\
//                             <i class="fa fa-plus"></i>\
//                         </button>\
//                     </div>\
//                 </div>\
//             </td>\
//             <td class="align-middle"><%=item.inCart * item.price%></td>\
//             <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>';
//             productContainer.append(itemContainer);
//         });
//     }
// }

// onLoadCartNumbers();
// displayCart();