fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    let bodycontainer = document.createElement("div");
    bodycontainer.classList.add("bodycontainer");
    let container = document.createElement("div");
    container.classList.add("wrap");
    let title = document.createElement("h1");
    title.classList.add("title");
    title.innerHTML = "Our Products";
    bodycontainer.appendChild(title);
    for (let i = 0; i < data.products.length; i += 1) {
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `<div class="card"> 
      <img src="${data.products[i].thumbnail}" class="card-img-top" alt="...">
      <div class="card-body">
      <div>
        <h5 class="card-title" style="font-weight: bold;">${data.products[i].title}</h5>
        <p class="card-text">${data.products[i].description}</p>
      </div>
      <div>
        <div class="card-info"> <div> price: ${data.products[i].price}$</div> <div>Rating: ${data.products[i].rating}  </div> </div>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
      </div>
    </div>`;
      container.appendChild(newDiv.children[0]);
    }
    bodycontainer.appendChild(container);

    document.body.appendChild(bodycontainer);
  });
