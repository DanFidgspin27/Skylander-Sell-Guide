function outputToConsole() {
    const input = document.getElementById('skylandersInput').value;
    console.log(input);
}

function calculateTotal() {
    const input = document.getElementById('skylandersInput').value;
    const lines = input.split('\n');
    let total = 0;

    fetch('price_guide.json')
        .then(response => response.json())
        .then(data => {
            lines.forEach(line => {
                data.products.forEach(product => {
                    if (line.trim().toLowerCase() === product.name.toLowerCase()) {
                        total += product.price;
                    }
                });
            });
            document.getElementById('totalPrice').innerText = `Total Price: £${total.toFixed(2)}`;
        })
        .catch(error => console.error('Error:', error));
}

