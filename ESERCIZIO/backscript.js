const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/"

let param = new URLSearchParams(window.location.search)
let id = param.get("id")
window.onload = async () => {
  if (id) {
    const res = await fetch(BASE_URL + id, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFjZjg0YWJiZDU2YTAwMTVlZjRjZWMiLCJpYXQiOjE3MzAxMDE2OTcsImV4cCI6MTczMTMxMTI5N30.BtLK24W_K6CqK0pZUdyBCiImuAKcVmkqxAS4Q9lPdvk",
      },
    })
    const product = await res.json()
    document.querySelector("#name").value = product.name
    document.querySelector("#description").value = product.description
    document.querySelector("#imageUrl").value = product.imageUrl
    document.querySelector("#brand").value = product.brand
    document.querySelector("#price").value = product.price
    document.querySelector(".btn-success").remove()
  } else {
    document.querySelector(".btn-danger").remove()
    document.querySelector(".btn-secondary").remove()
  }
}

const createNew = async () => {
  const product = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  }
  let res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFjZjg0YWJiZDU2YTAwMTVlZjRjZWMiLCJpYXQiOjE3MzAxMDE2OTcsImV4cCI6MTczMTMxMTI5N30.BtLK24W_K6CqK0pZUdyBCiImuAKcVmkqxAS4Q9lPdvk",
    },
    body: JSON.stringify(product),
  })
  if (res.ok) {
    alert("Product created")
  }
}

const editProduct = async () => {
  const product = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  }
  let res = await fetch(BASE_URL + id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFjZjg0YWJiZDU2YTAwMTVlZjRjZWMiLCJpYXQiOjE3MzAxMDE2OTcsImV4cCI6MTczMTMxMTI5N30.BtLK24W_K6CqK0pZUdyBCiImuAKcVmkqxAS4Q9lPdvk",
    },
    body: JSON.stringify(product),
  })
  if (res.ok) {
    alert("Product created")
  }
}

const deleteProduct = async () => {
  let res = await fetch(BASE_URL + id, {
    method: "DELETE",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFjZjg0YWJiZDU2YTAwMTVlZjRjZWMiLCJpYXQiOjE3MzAxMDE2OTcsImV4cCI6MTczMTMxMTI5N30.BtLK24W_K6CqK0pZUdyBCiImuAKcVmkqxAS4Q9lPdvk",
    },
  })
  if (res.ok) {
    alert("Product deleted")
  }
}
