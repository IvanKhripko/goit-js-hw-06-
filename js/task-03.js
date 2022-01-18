const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
galleryEl.classList.add('gallery-js');
// console.log(galleryEl);

const galleryContainerEl = document.querySelector('.gallery-js');
console.log(galleryContainerEl);

const makeGalleryMarkup = ({ url, alt }) => {
  return `
  <li>
  <img class='gallery-image' src='${url}' alt='${alt}' width = 320 height = 220/>
  </li>
  `;
};

const makeGalleryList = images.map(makeGalleryMarkup).join('');
console.log(makeGalleryList);

galleryContainerEl.insertAdjacentHTML('afterbegin', `${makeGalleryList}`);

// ----------- СОЗДАНИЕ С ПОМОЩЬЮ createElement --------------------------

// const makeGallery = ({ url, alt }) => {
//   const imageItemEl = document.createElement('li');

//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 320;
//   imageEl.height = 220;

//   imageItemEl.append(imageEl);

//   return imageItemEl;
// };

// const elements = images.map(makeGallery);
// galleryContainerEl.append(...elements);

// const elements = images.map(element => {
//   const imageItemEl = document.createElement('li');

//   const imageEl = document.createElement('img');
//   imageEl.src = element.url;
//   imageEl.alt = element.alt;

//   imageItemEl.append(imageEl)

//   return imageItemEl;
// });

// galleryContainerEl.append(...elements);

// const elements = [];

// for (let i = 0; i < images.length; i+=1) {
//   const element = images[i];
//   // console.log(element);

//   const imageItemEl = document.createElement('li');

//   const imageEl = document.createElement('img');
//   imageEl.src = element.url;
//   imageEl.alt = element.alt;

//   imageItemEl.append(imageEl)
//   // console.log(imageItemEl);

//   elements.push(imageItemEl);
// }

// galleryContainerEl.append(...elements)
