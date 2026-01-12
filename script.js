let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + ' telah ditambahkan ke keranjang!');
    console.log('Keranjang: ', cart);
}
function addToCart(productName, productPrice, productImage) {
    // Tambahkan produk ke dalam keranjang
    cart.push({ productName, productPrice, productImage });
    
    // Update total harga
    totalPrice += productPrice;
    
    // Update jumlah produk di keranjang
    document.getElementById('cart-count').innerText = cart.length;

    // Update tampilan keranjang
    displayCart();
}

function displayCart() {
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Bersihkan cart sebelum menambah item baru
    
    cart.forEach((item, index) => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.productImage}" alt="${item.productName}" width="50">
            <span>${item.productName}</span>
            <span>Rp ${item.productPrice}</span>
            <button onclick="removeFromCart(${index})">Hapus</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Update total harga
    document.getElementById('total-price').innerText = totalPrice;
}

function removeFromCart(index) {
    // Hapus produk dari keranjang
    totalPrice -= cart[index].productPrice;
    cart.splice(index, 1);
    
    // Update jumlah produk di keranjang
    document.getElementById('cart-count').innerText = cart.length;

    // Update tampilan keranjang
    displayCart();
}

function clearCart() {
    // Kosongkan keranjang dan reset total harga
    cart = [];
    totalPrice = 0;
    
    // Update jumlah produk di keranjang
    document.getElementById('cart-count').innerText = 0;

    // Update tampilan keranjang
    displayCart();
}