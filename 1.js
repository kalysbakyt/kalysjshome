// // {/* <div id="block">
// // 	<p>1</p>
// // 	<p>2</p>
// // </div>
// // Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// // Получите ссылку на первый абзац с классом www. и вывести его в консоль
// // <p class="www">text 1</p>
// // <p class="www">text 2</p> */}

// // const p = document.querySelector("p");
// // console.log(p);

// // const p2 = document.querySelectorAll(".www")[0]; 
// // console.log(p2);

// // //Задание 2
// // Дан тег <a class="link" href="#">link text html</a>
// // Вам необходимо поменять текст внутри ссылки на “link text js”
// // Заменить href, на значение https://developer.mozilla.org/ru/ 
// // Дан тег <img class="photo" src="" alt=""> 
// // Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// // const a = document.querySelector(".link");
// // a.textContent = "link text js";
// // a.href = "https://developer.mozilla.org/ru/";

// // const photo = document.querySelector(".photo");

// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// const p3 = document.createElement("p");
// p3.textContent = "Новый текстовый элемент";
// const content = document.querySelector(".content");
// content.appendChild(p3);
// // content.removeChild(p3);
// p3.remove();

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const content = document.querySelector(".content");
// const btn = document.createElement("button");
// btn.textContent = "счетчик";
// content.appendChild(btn);

// let count = 0;
// btn.onclick = () => {
//     count++;
//     console.log(`Нажата ${count} раз`);
// }

// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const content = document.querySelector(".content");
// const btn = document.createElement("button");
// btn.textContent = "Отправить";
// content.appendChild(btn);
// btn.addEventListener("click", () => {
//     btn.textContent = "Текст отправлен";
// })
