const url = 'http://starlord.hackerearth.com/recipe';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let results = data;
      console.log(results);
      console.log(results[0].id);
      console.log(results[0].name);
      console.log(results[0].image);
    return results.map(function(result) {
        var detail = document.createElement("p");
        var text = document.createTextNode("id: "+`${result.id}`+" name: "+`${result.name}`+" image: "+`${result.image}`+" category: "+`${result.category}`+" label: "+`${result.label}`+" price: "+`${result.price}`+" description: "+`${result.description}`);
        detail.appendChild(text);
        var element = document.getElementById('recipe');
        element.appendChild(detail);
    })
  })
  .catch(function(error) {
    console.log(error);
  });  
       