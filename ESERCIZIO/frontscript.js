const URL = "https://striveschool-api.herokuapp.com/api/product/";


window.onload = async () => {
  const response = await fetch(URL, {
    headers: {
      authorization:
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFjZjg0YWJiZDU2YTAwMTVlZjRjZWMiLCJpYXQiOjE3MzAxMDE2OTcsImV4cCI6MTczMTMxMTI5N30.BtLK24W_K6CqK0pZUdyBCiImuAKcVmkqxAS4Q9lPdvk"
    },
  });


  const products = await response.json();
  const row = document.querySelector("#products-row");

  /*GENERA CARD*/
  products.forEach((prod) => {
    row.innerHTML += `<div class="card m-4" style="width: 18rem;">
                          <img class="card-img-top" src="${prod.imageUrl}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${prod.name}</h5>
                                <p class="card-text">${prod.description}</p>
                                <p class="card-text" id="display-price">${prod.price} €</p>
                                <a href="./backoffice.html?id=${prod._id}" class="btn btn-primary">Details</a>
                            </div>
                        </div>`;
  });
};
