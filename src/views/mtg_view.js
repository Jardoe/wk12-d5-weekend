const CardView = function (cardContainer){
  this.cardContainer = cardContainer;
}

CardView.prototype.renderCard = function (cardData) {
  console.log(cardData.cards[0].name);
  this.cardContainer.innerHTML = "";
  cardData.cards.forEach((card) => {
    const cardList = document.createElement('li');
    cardList.textContent = card.name;
    this.cardContainer.appendChild(cardList)
  })
};

module.exports = CardView;
