const comics = [
    { title: "One Piece", author: "Eiichiro Oda", genre: "Adventure" },
    { title: "Naruto", author: "Masashi Kishimoto", genre: "Action" },
    { title: "Attack on Titan", author: "Hajime Isayama", genre: "Drama" },
    { title: "Demon Slayer", author: "Koyoharu Gotouge", genre: "Fantasy" }
];

const comicList = document.getElementById("comic-list");
const searchInput = document.getElementById("search");

function displayComics(data) {
    comicList.innerHTML = "";
    data.forEach(comic => {
        const div = document.createElement("div");
        div.className = "comic";
        div.innerHTML = `
            <h3>${comic.title}</h3>
            <p>ผู้แต่ง: ${comic.author}</p>
            <p>แนว: ${comic.genre}</p>
        `;
        comicList.appendChild(div);
    });
}

searchInput.addEventListener("keyup", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = comics.filter(c =>
        c.title.toLowerCase().includes(keyword)
    );
    displayComics(filtered);
});

displayComics(comics);
