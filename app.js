const cardMaker = ({ img, title, href }) =>
  `<div class="card">
     <img src="${img}" class="card-img-top" alt="${img}">
     <div class="card-body">
       <h5 class="card-title">${title}</h5>
       <a href="https://via.placeholder.com/150${href}" class="btn btn-primary">Check it out!</a>
     </div>
</div>`;

fetch("colors.json")
  .then((resp) => resp.json())
  .then((movies) => {
    movies.sort((a, b) => a.title.localeCompare(b.title));

    const elCards = document.getElementById("cards");
    const elRow = document.createElement("div");
    elRow.className = "row";
    elCards.appendChild(elRow);

    const updateMovies = (movies) => {
      elRow.innerHTML = movies
        .map((children) => `<div class="col-6 col-lg-3">${children}</div>`)
        .join("");
    };

    updateMovies(movies.slice(0, 20).map((movie) => cardMaker(movie)));

    document.querySelector(".search").addEventListener("keyup", (evt) => {
      const text = evt.target.value.toLowerCase();
      updateMovies(
        movies
          .filter(({ title }) => title.toLowerCase().includes(text))
          .slice(0, 20)
          .map((movie) => cardMaker(movie))
      );
    });
  });
