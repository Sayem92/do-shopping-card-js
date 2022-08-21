const cardArray = [];

function display(cardProduct){

    // console.log(cardProduct);

    let totalPrice = 0;

    const tableBody = document.getElementById('card-products');
    tableBody.innerHTML = '';
    for( let i = 0 ; i < cardProduct.length; i++){

        // console.log(cardProduct[i].productName,cardProduct[i].productPrice);
        const name = cardProduct[i].productName;
        const price = cardProduct[i].productPrice;

        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${name}</td>
            <td>${price}</td>
        `;
        tableBody.appendChild(tr)
    };


    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th></th>
        <td>Total Price = </td>
        <td>${totalPrice}</td>
    `;

    tableBody.appendChild(tr)
}

function addToCard(element){
    // console.log(element.parentNode.parentNode.children)
    // console.log(element.parentNode.parentNode.children[0].innerText)
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText)

    const productName = element.parentNode.parentNode.children[0].innerText;
    // console.log(productName);

    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(productPrice);

    const productObj = {
        productName : productName,
        productPrice : parseFloat(productPrice),
    }

    cardArray.push(productObj);
    // console.log(cardArray);
    // console.log(cardArray.length);

    document.getElementById('total-added-product').innerText = cardArray.length;

    display(cardArray);
}
