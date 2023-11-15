// onmouse on avatar

var avatar = document.querySelector("#avatar");
var avatarHover = "./images/AvatarHover.png"
var avatarOut = "./images/AvatarMaker.png"
console.log(avatar);

avatar.addEventListener("mouseover", function() {
    avatar.src = avatarHover;
});

avatar.addEventListener("mouseout", function() {
    avatar.src = avatarOut;
});
