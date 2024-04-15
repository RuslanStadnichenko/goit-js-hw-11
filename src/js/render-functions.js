export function createGallery(images) {
    return images.map(image =>
` <li class="gallery-item">
      <a class="gallery-link js-gallery-link" href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}">
      </a>
      <div class="image-details">
        <ul class="details-title">
         <li class="details-title-det">
           <h3>Likes:</h3>
           <p>${image.likes}</p>
         </li>
         <li class="details-title-det">
           <h3>Views:</h3>
           <p>${image.views}</p>
         </li>  
         <li class="details-title-det">
           <h3>Comments:</h3>
           <p>${image.comments}</p>
         </li>  
         <li class="details-title-det">
           <h3>Downloads:</h3>
           <p>${image.downloads}</p>
         </li>
        </ul>
      </div>
    </li>`).join('');
}
