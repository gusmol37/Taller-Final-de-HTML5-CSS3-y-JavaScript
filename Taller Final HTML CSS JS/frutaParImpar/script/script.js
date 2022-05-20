const selectElement = document.getElementById('selector');
const fruits = document.querySelectorAll('li');

selectElement.addEventListener('change', (event) => {
    switch(event.target.value) {
        case "1":
            location.reload();
            break;
        case "2":
            for (let i = 0; i < 10;i++) {
                if (fruits[i].value % 2 === 0) {
                    fruits[i].style.color = "red";
                } else {
                    fruits[i].style.color = "white";
                }
            }
            break;
        case "3":
            for (let i = 0; i < 10;i++) {
                if (fruits[i].value % 2 !== 0) {
                    fruits[i].style.color = "red";
                } else {
                    fruits[i].style.color = "white";
                }
            }
            break;
        default:
            document.getElementById("maracuya").style.color = "white";
            break;
    }
});