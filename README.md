## vanilla javascript for fetching/searching

first add the div element with user id into body, script should add end of the body

```html
<div class="container"><div id="cards"></div></div>
<script src="app.js"></script>
```

then we can fetch from user.json then place the stringfied albums into user div vy using inner html.

```javascript
fetch("albums.json")
  .then((res) => res.json())
  .then((albums) => {
    const albumElement = document.getElementById("cards");
    albumElement.innerText = JSON.stringify(albums);
  });
```

now we can see all the fetched data on localhost
then create a string template

```javascript
const createCard = ({ title, href, url }) =>
  `<div class="card">
     <img src="${url}" class="card-img-top" />
     <div class="card-body">
       <h5 class="card-title">${title}</h5>
       <a href="${href}" class="btn btn-primary">Check it out!</a>
     </div>
   </div>`;
```

then change the innerText in fetch function with innerHTM and map them

```javascript
albumElement.innerHTML = albums.map((album) => createCard(album)).join("");
```
