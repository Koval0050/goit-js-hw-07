import { galleryItems } from "./gallery-items.js";

const imgContainer = document.querySelector(".gallery");

const imgGallery = galleryItems.map((elem) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${elem.original}">
      <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" title="${elem.description}" />
   </a>
</li>`;
});

imgContainer.insertAdjacentHTML("beforeend", imgGallery.join(""));

const lightBox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
