import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

let gallery = document.querySelector('.gallery');

const markup = galleryItems.map(item => `
<a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
`).join('');

gallery.innerHTML = markup;


gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
