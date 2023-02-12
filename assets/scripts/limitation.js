var i;
var divs = document.getElementsByTagName('p');
for (i = 0; i < divs.length; i++) {
    if (divs[i].className == 'conditionsText') {
        divs[i].innerHTML = divs[i].innerHTML.substring(0, 200) + '...';
    }
}

document.addEventListener("copy", (evt) => {
    // evt.clipboardData.setData("text/plain", "Копирование запрещено");
    evt.preventDefault();
}, false);