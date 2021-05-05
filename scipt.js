const container = document.querySelector(".container");

let limit = 20;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}?_page=${pageCount}`
  );

  const data = await res.json();

  console.log(data);

  data.map((curele, index) => {
    const htmldata = `<div class="posts">
    <div class="post-id">${postCount++}</div>
    <div class="post-title">${curele.title}</div>
    <div class="post-info">
      ${curele.body}
    </div>
  </div>`;

    container.insertAdjacentHTML("beforeend", htmldata);
  });
};

getPost();

const showdata = () => {
  setTimeout(() => {
    pageCount++;
    getPost();
  }, 100);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    showdata();
  }
});
