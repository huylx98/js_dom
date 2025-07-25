const items = document.querySelector(".items");

mockData.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product-item");
  itemElement.setAttribute("data-id", item.id)
  itemElement.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.description}</p>
  `;
  items.appendChild(itemElement);
});

document.getElementById('product-list').addEventListener('click', function(e) {
    const productItem = e.target.closest('.product-item');
    if (productItem) {
        const productId = productItem.dataset.id;
        // Chuyển đến trang chi tiết
        window.location.href = `detail.html?id=${productId}`;
    }
});