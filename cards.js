let card = [
    ["Dell Laptop", "Dell E-4650 Laptop series", 2400, "Instock","images/pic1.jpg"],
    ["hp Laptop", "hp E-4650 Laptop series", 3400, "OutOfstock","images/pic2.jpg"],
    ["lenovo Laptop", "lenovo E-4350 Laptop series", 2300, "Instock","images/pic3.jpg"]

]

document.write(`
     <div class="container">
        <div class="row"> 
            <div class="col-md-4">
                <div class="card">
  <img src="${card[0][4]}" class="card-img-top mycard" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card[0][0]}</h5>
    <p class="card-text">${card[0][1]}</p>
     <p class="card-text">${card[0][2]}pkr</p>
     <h6><span class="badge bg-success">${card[0][3]}</span></h6>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
            <div class="col-md-4">
                <div class="card">
  <img src="${card[1][4]}" class="card-img-top mycard" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card[1][0]}</h5>
    <p class="card-text">${card[1][1]}</p>
     <p class="card-text">${card[1][2]}pkr</p>
     <h6><span class="badge bg-danger">${card[1][3]}</span></h6>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
            <div class="col-md-4">
                <div class="card">
  <img src="${card[2][4]}" class="card-img-top mycard" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card[2][0]}</h5>
    <p class="card-text">${card[2][1]}</p>
     <p class="card-text">${card[2][2]}pkr</p>
     <h6><span class="badge bg-success">${card[2][3]}</span></h6>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
        </div>
    </div>

    `)