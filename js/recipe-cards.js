//var tasks = [{
//        "title": "home",
//        "color": "blue",
//    },
//    {
//        "title": "city",
//        "color": "green",
//    }
//];

var images = [
  { "src" : "../images/img1.jpg" },
    { "src" : "../images/img2.jpg" },
    { "src" : "../images/img3.jpg" },
    { "src" : "../images/img4.jpg" },
    { "src" : "../images/img5.jpg" },
    { "src" : "../images/img6.jpg" },
    { "src" : "../images/img7.jpg" },
    { "src" : "../images/img8.jpg" },
    { "src" : "../images/img1.jpg" },
    { "src" : "../images/img2.jpg" }
];

const url = 'https://starlord.hackerearth.com/recipe';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    var recipes = data;
      console.log(recipes);
      
      var imageIndex = 0;
     
    return recipes.map(function(recipe) {
       
        let cardContainer;

        let createTaskCard = (recipe) => {

            let card = document.createElement('div');
            card.className = 'card shadow cursor-pointer col-md-3 d-inline-block p-3 m-4';

            let cardImage = document.createElement('img');
            cardImage.className = 'card-img-top';
            cardImage.src = images[imageIndex++].src;
            
            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            let title = document.createElement('h5');
            title.innerText = recipe.name;
            title.className = 'card-title text-center font-weight-bold';

            cardBody.appendChild(title);
            card.appendChild(cardImage);
            card.appendChild(cardBody);
            cardContainer.appendChild(card);

        }

        let initListOfTasks = () => {
            if (cardContainer) {
                document.getElementById('card-container').replaceWith(cardContainer);
                return;
            }

            cardContainer = document.getElementById('card-container');
            createTaskCard(recipe);
            
        };

        initListOfTasks();
        
        
    })
  })
  .catch(function(error) {
    console.log(error);
  }); 




