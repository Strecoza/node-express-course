document.getElementById('btn').addEventListener('click', () => {
    fetch('/api/v1/products')
        .then(res => res.json())
        .then(products => {
            document.getElementById('productList').innerHTML = products
            .map(product => `<div>${product.name} - $${product.price}</div>`)
            .join('');
        });
});