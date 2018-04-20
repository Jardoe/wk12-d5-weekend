const MTGData = require('./models/mtg_data.js');
const CardView = require('./views/mtg_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.querySelector('#ul');
  const cardView = new CardView(cardContainer);


  const nameSearch = document.querySelector('#name-search');
  const nameSearchButton = document.querySelector('#name-search-button');

  nameSearchButton.addEventListener('click', (event) => {
    const mtgData = new MTGData();
      let searchTerm = mtgData.urlBuilder(nameSearch.value);
      console.log(nameSearch.value);
      mtgData.getData((data) => cardView.renderCard(data))
  });
});
