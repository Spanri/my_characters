import "./style.scss";

interface ItemType {
  id: string;
  title: string;
  image: string;
  year: number;
  tags: string[];
  text: string;
  linkSite?: string;
  linkCode?: string;
}

// const itemsOld = [
//   {
//     link: "https://spanri.gitlab.io/westb/",
//     year: 2019,
//     technologies: "Vue.js",
//     layout: "дали макеты дизайна, адаптивный, кроссбраузерный (IE11+)",
//     descriprtion:
//       "Сайт банка, только верстка. Вход и аутентификация пройдут при любых значениях (но минимальная валидация в регистрации все равно есть).<br><br>После входа/регистрации есть кнопки Онлайн-банк/Переводы, там прикольная анимация и еще в Переводах анимация переключения 1/2/3 неплохая! <br><br>Примечание: в гитлабе если обновить страницу не по корню, выдаст ошибку (то есть с vue-router не работает).",
//   },
//   {
//     link: "https://infallible-swartz-576d6c.netlify.com",
//     year: 2019,
//     technologies: "Vue.js",
//     layout: "макет не мой, адаптивный, кроссбраузерный (IE11+)",
//     descriprtion:
//       "Тестовое задание по верстке. (На нетлифай иногда страница не загружается, а через несколько минут загружается, как я поняла, оно выходит из сна)",
//     code: "https://github.com/Spanri/card-payment-page",
//   },
//   {
//     link: "https://spanri.github.io",
//     year: 2019,
//     technologies: "нативный js, webpack",
//     layout: "свой дизайн, адаптивный, кроссбраузерный (IE11+)",
//     descriprtion: "Страничка, которую вы видите перед собой.",
//     code: "https://github.com/Spanri/Spanri.github.io",
//   },
//   {
//     link: "https://plastic-windows.herokuapp.com",
//     year: 2019,
//     technologies: "Vue.js, Flask",
//     layout: "переделанный дизайн шаблона, адаптивный, не особо кроссбраузерный",
//     descriprtion: "Интернет-магазин пластиковых окон, который не закончен.",
//     code: "https://github.com/Spanri/windows",
//   },
//   {
//     link: "http://edms-mtuci.herokuapp.com",
//     year: 2019,
//     technologies: "Vue.js, Django (DRF)",
//     layout: "свой дизайн, не адаптивный, не кроссбраузерный",
//     descriprtion: `
//       Диплом, система электронного документооборота. На сервере всё плохо, поэтому
//       на фронте некоторые кнопки работают неправильно.</p>
//       <p>Данные для входа (ломание на вашей совести!):<br>
//       Логин: opachki9v@mail.ru<br>
//       Пароль: CT8R3EAE`,
//     code: "https://github.com/Spanri/CRM-diplom",
//   },
//   {
//     link: "https://spanri.github.io/bml/",
//     year: "2019 (идея из 2017)",
//     technologies: "Nuxt.js",
//     layout: "свой дизайн, адаптивный, кроссбраузерный (IE11+)",
//     descriprtion: "Просто страничка я сама не знаю о чём.",
//     code: "https://github.com/Spanri/bml",
//   },
//   {
//     link: "https://spanri.github.io/react-landing/",
//     year: 2019,
//     technologies: "React",
//     layout: "свой дизайн, адаптивный, не особо кроссбраузерный",
//     descriprtion: "Страничка для друга.",
//     code: "https://github.com/Spanri/react-landing",
//   },
//   {
//     link: "https://spanri.github.io/design/",
//     year: 2018,
//     technologies: "без фреймворков и сборщиков",
//     layout: "свой дизайн, адаптивный, не кроссбраузерный",
//     descriprtion:
//       "Страничка о том, почему мой брат - неудачник, но там почти ничего нет.",
//     code: "https://github.com/Spanri/design",
//   },
//   {
//     link: "http://pstype.herokuapp.com",
//     year: 2018,
//     technologies: "Vue.js + Typescript, Node.js",
//     layout: "свой дизайн, не адаптивный, не кроссбраузерный",
//     descriprtion: `
//       Сервер для мобильного приложения подруги для определения
//       психотипа водителя. Можно посмотреть панель администратора,
//       написанную на Vue.js.<br><br>То, что можно посмотреть, написано без TypeScript, а новая версия еще не доделана.</p>
//       <p>Данные для входа (ломание на вашей совести!):<br>
//       Логин: admin0<br>
//       Пароль: hardpassword`,
//     code: "https://github.com/Spanri/PS-type",
//   },
//   {
//     link: "https://spanri.github.io/first-site/www/index.html",
//     year: 2017,
//     technologies: "jquery, сборщик gulp",
//     layout: "свой дизайн, удивительно, но адаптивный, не кроссбраузерный",
//     descriprtion: "Самый первый мой сайт. Там всё плохо, но ностальгично.",
//     code: "https://github.com/Spanri/first-site",
//   },
//   {
//     link: "https://spanri.github.io/first-site/www/pers/pers.html",
//     year: 2017,
//     technologies: "jquery, без сборщика",
//     layout: "свой дизайн, адаптивный, не кроссбраузерный",
//     descriprtion:
//       "Страничка о моих персонажах (из рисования). Картинки для сайта так и не дорисовала.",
//     code: "https://github.com/Spanri/first-site",
//   },
// ];

const items: ItemType[] = [
  {
    id: "bank-layout",
    title: "Сайт банка",
    image: "",
    year: 2019,
    tags: ["frontend", "Vue"],
    text: `Только верстка. Дали макеты дизайна, адаптивная, кроссбраузерная (IE11+) верстка.
        Вход и аутентификация пройдут при любых значениях (но минимальная валидация в регистрации все равно есть).
        После входа/регистрации есть кнопки Онлайн-банк/Переводы, там прикольная анимация и еще в Переводах анимация переключения 1/2/3 неплохая!
        
        Примечание: в гитлабе если обновить страницу не по корню, выдаст ошибку (то есть с vue-router не работает).`,
  },
  {
    id: "12",
    title: "Сайт банка 2",
    image: "",
    year: 2019,
    tags: ["frontend", "Vue"],
    text: "",
    linkSite: "https://github.com/Spanri/card-payment-page",
  },
];

const getItem = (item: ItemType) => `
  <div class="item">
    <img class="item__image" src="${item.image}" />

    <div class="item__content">
      <h2 class="item__title">${item.title}</h2>

      <div class="item__header-description">
        <span class="item__year">${item.year} год</span>
        <span class="item__tags">${item.tags
          .map((tag) => "#" + tag)
          .join(" ")}</span>
      </div>

      <div class="item__text">${item.text}</div>

      <div class="item__link-site">Сайт: ${
        item.linkSite
          ? `<a>${item.linkSite}</a>`
          : '<span class="item__empty">Недоступно</span>'
      }</div>
      <div class="item__link-code">Код: ${
        item.linkCode
          ? `<a>${item.linkCode}</a>`
          : '<span class="item__empty">Недоступно</span>'
      }</div>
    </div>
  </div>
`;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="header">
    <p class="header__title">Программистское портфолио</p>
    <p class="header__description">Козлова Анна<br/>@spanri<br/>github.com/Spanri</p>
  </div>

  ${items.map(getItem).join("")}
`;
