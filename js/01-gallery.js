import { galleryItems } from "./gallery-items.js";

const imgContainer = document.querySelector(".gallery");

const imgGallery = galleryItems.map((elem) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</li>`;
});

imgContainer.insertAdjacentHTML("beforeend", imgGallery.join(""));


function imgModal(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    const imageUrl = e.target.dataset.source;
    currentLightbox = basicLightbox
      .create(`<img width="1400" height="900" src="${imageUrl}">`)
      .show();
  }
}


imgContainer.addEventListener("click", imgModal);
