

const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = "f2ca"

    setTimeout(() => {
        temp.innerHTML = 'f2cb';
    }, 1000);

    setTimeout(() => {
        temp.innerHTML = 'f2cb';
    }, 2000);

    setTimeout(() => {
        temp.innerHTML = 'f2cb';
    }, 3000);

    setTimeout(() => {
        temp.innerHTML = 'f2cb';
        temp.style.color = "#d6031"
    }, 4000);
}

tempLoad()
