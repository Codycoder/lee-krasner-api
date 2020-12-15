


//     const url = "https://www.brooklynmuseum.org/api/v2/leekrasner";
// fetch(url, {
//   method: "GET",
//   headers: {
//     "X-Auth-Token": "MQmlbbxap0QRJC8De7ZhTTHB9kkHg2q5",
//     "Content-Type": "application/json"

//   },
//     })
//     .then(Response => Response.json())
//     .then(data => {
//         console.log(data);
//         // const planetName = planet.results[0].name;
//         // appDiv.innerText = planetName;
     
//     })
//     .catch(err => console.log(err))

    // ajax({
    //     url: 'https://www.brooklynmuseum.org/api/v2/leekrasner',
    //     type: 'GET',
    //     beforeSend: function (xhr) {
    //       xhr.setRequestHeader('api_key', 'MQmlbbxap0QRJC8De7ZhTTHB9kkHg2q5');
    //     },
    //     data: {},
    //     success: function () { },
    //     error: function () { },
    //   });


      var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Get JSON from the returned string
    const res = JSON.parse(xhr.responseText)
    // Typical action to be performed when the document is ready:
    document.getElementById("asideContent").innerHTML = `<h2>${res}</h2>`
  }
}
/*
 ** Notice in this example we are hitting and actual url
 ** and returning whatever we get from the API we're accessing
 */
xhr.open("GET", "https://www.brooklynmuseum.org/api/v2/", true)
xhr.send()
     
