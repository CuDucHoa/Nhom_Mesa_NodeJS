let cart = null;

module.exports = class Cart {
    static save(product) {
        if (cart === null) {
            cart = { products: [], totalPrice: 0, totalItem: 0 };
        }
        const existingProductIndex = cart.products.findIndex(p => p.slug == product.slug); // to check product is existing in cart
        if (existingProductIndex >= 0) { // exist in cart already
            const exsitingProduct = cart.products[existingProductIndex];
            exsitingProduct.quantity += 1;
            cart.totalItem += 1;
        } else { //not exist
            product.quantity = 1;
            cart.totalItem += 1;
            cart.products.push(product);
        }
        cart.totalPrice += product.price;
    }

    static getCart() {
        return cart;
    }

    static delete(productSlug) {
        const isExisting = cart.products.findIndex(p => p.slug == productSlug);
        if (isExisting >= 0) {
            const deletedProduct = cart.products[isExisting];
            cart.totalItem -= deletedProduct.quantity;
            cart.totalPrice -= deletedProduct.price * deletedProduct.quantity;
            cart.products.splice(isExisting, 1);
        }
    }
}