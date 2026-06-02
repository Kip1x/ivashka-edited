
function checkQuiz() {
    let resultDiv = document.getElementById('quiz-result');
    let score = 0;
    let checked = document.querySelectorAll('input[type="radio"]:checked');
    if (checked.length < 8) {
        resultDiv.style.color = "#df451e";
        resultDiv.innerHTML = `Пожалуйста, ответьте на все вопросы. (Отвечено: ${checked.length} из 8)`;
        return;
    }
    checked.forEach(function(кнопка) {
    score = score + parseInt(кнопка.value);
    });
    resultDiv.innerHTML = `Ваш результат: ${score} из 8 правильных ответов.`;
    if (score === 8) {
        resultDiv.style.color = "green";
        resultDiv.innerHTML += " <br>Великолепно!";
    } else if (score >= 5) {
        resultDiv.style.color = "#f39c12";
        resultDiv.innerHTML += " <br>Неплохо, но можно пересмотреть материал.";
    } else {
        resultDiv.style.color = "#e74c3c";
        resultDiv.innerHTML += " <br>Стоит очень внимательно изучить материал страницы.";
    }
}


//модальное окно
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById("fullImage");
    const captionText = document.getElementById("caption");

    const reformImages = document.querySelectorAll('#reform img');
    const galleryImages = document.querySelectorAll('#gallery img');
    const BioImages = document.querySelectorAll('#Bio img');
    const vnechnaiapolitika = document.querySelectorAll('#vnechnaiapolitika img');


    reformImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
    galleryImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
    BioImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
    vnechnaiapolitika.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});