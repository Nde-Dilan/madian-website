
document.addEventListener('DOMContentLoaded', function () {
  const cardData = [
    {
      imgSrc: 'assets/images/features1.jpg',
      description: 'WIGS',
      name: 'Kinky hair available',
      price: 'XAF 135 000',
    },
    {
      imgSrc: 'assets/images/features16.jpg',
      description: 'WIGS',
      name: 'BODY WAVES hair available',
      price: 'XAF 135 000',
    },
    {
      imgSrc: 'assets/images/features15.jpg',
      description: 'WIGS',
      name: '26 INCHES available',
      price: 'XAF 90 000',
    },
    {
      imgSrc: 'assets/images/features6-1.jpg',
      description: 'WIGS',
      name: 'BODY WAVES available',
      price: 'XAF 125 000',
    },
    {
      imgSrc: 'assets/images/features4.jpg',
      description: 'WIGS',
      name: 'BOUNCY CURLS available',
      price: 'XAF 35 000',
    },
    {
      imgSrc: 'assets/images/Coup water wave 35k.jpg',
      description: 'WIGS',
      name: 'Coup water wave available',
      price: 'XAF 35 000',
    },
    {
      imgSrc: 'assets/images/Water wave 35k.jpg',
      description: 'WIGS',
      name: 'Water wave available',
      price: 'XAF 35 000',
    },
    {
      imgSrc: 'assets/images/Straight hair 35k.jpg',
      description: 'WIGS',
      name: 'Straight hair available',
      price: 'XAF 35 000',
    },
    {
      imgSrc: 'assets/images/manequin.jpg',
      description: 'WIGS',
      name: 'Coup water wave available',
      price: 'XAF 35 000',
    },
    {
      imgSrc: 'assets/images/Beautiful Wheat.jpg',
      description: 'WIGS',
      name: 'Beautiful Wheat Hair available',
      price: 'XAF 35 000',
    },
  ];

  const container = document.getElementById('card-container');

  cardData.forEach(card => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-6 col-sm-4 d-flex align-items-center justify-content-center mb-5';

    const itemContentDiv = document.createElement('div');
    itemContentDiv.className = 'item-content width';

    const imgItemDiv = document.createElement('div');
    imgItemDiv.className = 'img-item';

    const img = document.createElement('img');
    img.src = card.imgSrc;
    img.alt = '';
    img.className = 'responsive-img';

    const span = document.createElement('span');
    span.className = 'effectHover';

    imgItemDiv.appendChild(img);
    imgItemDiv.appendChild(span);

    const itemTextDiv = document.createElement('div');
    itemTextDiv.className = 'item-text';

    const p = document.createElement('p');
    p.className = 'mbr-fonts-style mt-3 descr display-7';
    p.textContent = card.description;

    itemTextDiv.appendChild(p);

    const h3 = document.createElement('h3');
    h3.className = 'd-flex justify-content-between mt-3';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = card.name;

    const priceSpan = document.createElement('span');
    priceSpan.textContent = card.price;

    h3.appendChild(nameSpan);
    h3.appendChild(priceSpan);

    const button = document.createElement('button');
    button.className = 'btn btn-primary mt-3';
    button.textContent = 'Book Now';
    button.addEventListener('click', () => {
      const message = `Hello, I am interested in ${card.name} with a cost of around ${card.price} and would like us to discuss more about it.`;
      const whatsappUrl = `https://wa.me/237673443068/?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
    });

    itemContentDiv.appendChild(imgItemDiv);
    itemContentDiv.appendChild(itemTextDiv);
    itemContentDiv.appendChild(h3);
    itemContentDiv.appendChild(button);

    colDiv.appendChild(itemContentDiv);
    container.appendChild(colDiv);
  });
});
