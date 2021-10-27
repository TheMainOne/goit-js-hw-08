import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';



let gallery = document.querySelector('.gallery');

const markup = galleryItems.map(item => `
 <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
    </a>
  </div>
`).join('');

gallery.innerHTML = markup;


gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
