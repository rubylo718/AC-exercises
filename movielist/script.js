const movies = [
  {
    title: "The Avengers",
    image:
      "https://assets-lighthouse.alphacamp.co/uploads/image/file/15305/TheAvengersPoster.jpg",
    rating: 0
  },
  {
    title: "Our Times",
    image:
      "https://assets-lighthouse.alphacamp.co/uploads/image/file/15304/OurtimesPoster.jpeg",
    rating: 0
  },
  {
    title: "Aquaman",
    image:
      "https://assets-lighthouse.alphacamp.co/uploads/image/file/15303/AquamanPoster.jpg",
    rating: 0
  }
];

const dataPanel = document.querySelector("#data-panel");

function disPlayMovieList(movies) {
  let htmlContent = `
      <table class="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>`;
  movies.forEach((movie) => {
    htmlContent += `
       <tr>
        <td>
          <img src= ${movie.image} width="70" class="img-thumbnail" />
            </td>
            <td>${movie.title}</td>
            <td>
              <span class="fa fa-thumbs-up"></span>
              <span class="fa fa-thumbs-down px-2"></span>
              <span>${movie.rating}</span>
            </td>
            <td>
              <button class="btn btn-sm btn-danger">X</button>
            </td>
          </tr> 
       `;
  });

  htmlContent += `  
        </tbody>
      </table>
  `;

  return htmlContent;
}

dataPanel.innerHTML = disPlayMovieList(movies);

dataPanel.addEventListener("click", clickFunctions);

function clickFunctions(event) {
  if (
    event.target.matches(".fa-thumbs-up") ||
    event.target.matches(".fa-thumbs-down")
  ) {
    let scoreNum = event.target.parentElement.children[2];
    let score = Number(scoreNum.innerText);
    if (event.target.matches(".fa-thumbs-up")) {
      score++;
    } else {
      score--;
      if (score < 0) score = 0;
    }
    scoreNum.innerText = score;
  } else if (event.target.matches(".btn-danger")) {
    const delItem = event.target.parentElement.parentElement;
    delItem.remove();
  }
}
