class CurrentTimes {
  constructor (dayTime, times) {
    this.dayTime = dayTime; // просто будет хранить слово для времени суток
    this.times = times; // массив со всеми орезками времени
    this.imgTitle = document.createElement('img'); //чтобы потом мы могли изменить ссылку на картинку
  }

  render () {
    const divBody = document.createElement('div');
   // divBody.onclick = () => divBody.classList.remove('active'); // если нет класса добавить и наоборот
    divBody.classList.add('select');

    const title = document.createElement('div');
    title.classList.add('select__title');
    divBody.appendChild(title);

    this.imgTitle.classList.add('select-title__img');
    this.imgTitle.src = `./assets/images/${this.dayTime}.svg`;
    this.imgTitle.alt = this.dayTime;
    title.appendChild(this.imgTitle);

    const content = document.createElement('div');
    content.classList.add('select__content');
    divBody.appendChild(content);

    // затем 4 раза будет проход
    this.times.map(item => {
      const label = document.createElement('label');
      label.classList.add('select__label');

      label.onclick = () => {
        // мы меняем знак но нам также нужно изменить отображение imgTitle
        this.imgTitle.src = `./assets/images/${item}.svg`;
        this.imgTitle.alt = item;
        this.dayTime = item;
      };

      const imgLabel = document.createElement('img');
      imgLabel.classList.add('select__img');
      imgLabel.src = `./assets/images/${item}.svg`;
      label.appendChild(imgLabel);

      content.appendChild(label);
      return item;
    });

    return divBody;
  }
}

export default CurrentTimes;