/*komen*/
const form = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  const now = new Date();
  const time = now.toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

/*tombol keats*/

  const div = document.createElement("div");
  div.className = "comment-item";
  div.innerHTML = `
    <strong>${name}</strong>
    <small style="display:block; color:#aaa;">${time}</small>
    <p>${comment}</p>
  `;

  commentList.appendChild(div);
  form.reset();
});


const btn = document.getElementById("toTop");

window.onscroll = () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/*soundtrack*/
const music = document.getElementById("bgMusic");
const btnMusic = document.getElementById("toggleMusic");

btnMusic.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btnMusic.innerText = "⏸ Soundtrack";
  } else {
    music.pause();
    btnMusic.innerText = " ▶ Soundtrack";
  }
});

