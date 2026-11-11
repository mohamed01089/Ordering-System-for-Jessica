let orders = JSON.parse(localStorage.getItem("orders")) || [];
let ordersBox = document.querySelector(".orders");
if(orders.length === 0){
    ordersBox.textContent = "You've ordered nothing yet";
}
orders.forEach(function(order,index){
    let orderDiv = document.createElement("div");
    let heading = document.createElement("h2");
    heading.textContent = "order" + (index + 1);
    let date = document.createElement("p");
    date.textContent = "Date: " + order.date;
    let itemsList = document.createElement("ul");
    order.items.forEach(function(item){
        let li = document.createElement("li");
        li.textContent = item.name + "-$" + item.price.toFixed(2);
        itemsList.appendChild(li);
    });
    let total = document.createElement("h3");
    total.textContent = "Total: $" + order.total;
    orderDiv.appendChild(heading);
    orderDiv.appendChild(date);
    orderDiv.appendChild(itemsList);
    orderDiv.appendChild(total);
    ordersBox.appendChild(orderDiv);
});