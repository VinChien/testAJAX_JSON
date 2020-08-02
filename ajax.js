// test 連接data.txt
let content = document.getElementById('content');
let xhr = new XMLHttpRequest();
xhr.open("GET", "data.txt");
xhr.send();
xhr.onload = () => {
    content.innerText = xhr.responseText;
}

// JSON

let product = document.getElementById('product');
let price = document.getElementById('price');

let xhrJson = new XMLHttpRequest();
xhrJson.open("GET", "./data.json");
xhrJson.send();

xhrJson.onload = () => {
    // 將資料轉換成JSON格式
    let json = JSON.parse(xhrJson.responseText);
    product.innerText = json["product"];
    price.innerText = json["price"];
}

