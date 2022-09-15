var likes = [9, 12, 9];

var spans = [
    document.querySelector("#profile-1"),
    document.querySelector("#profile-2"),
    document.querySelector("#profile-3")
];

function like(id) {
    spans[id].innerHTML = likes[id]++ + " like(s)";
}