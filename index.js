import CurrentTimes from './js/components/CurrentTimes.js';

const app = document.querySelector('#app');

const date = new Date();
const times = ['night', 'morning', 'day', 'evening'];
const dayTimes = times[Math.floor(date.getHours() / 6)]; // это мы получаем время суток для показа картинок

// загрузка изображения

// скачивание изображения

//можно сделать чисто компонент для показа времени на экране и всё. Сведения с него не нужны.

const currentTimeClass = new CurrentTimes(dayTimes, times);
//currentTimeClass.dayTime - просто поднимать данную отметку и проверять на изменения, если они были изменять настройки

// название приложения

// развертка на фулл приложения

// переход на следующее изображение

// фильтры

// канвас главный

//собранные сеты других фильтров наложения

app.appendChild(currentTimeClass.render());
