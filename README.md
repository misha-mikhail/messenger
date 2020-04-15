# Что это?

Это фуллстек мессенджер, написанный на JavaScript и на его родных и близких.

# Зачем?

"А вот бы ченить на жс запилить."

# Get started

0. [Install Node.js (ver >= 10.0.0)](https://nodejs.org/).
1. `npm run setup`
2. `npm run bs:server` // Build-start server
3. In another terminal instance:\
   `npm run rs:start` // Start React development server.


# Как всё устроено

Приложение — [монорепо на Lerna](https://lerna.js.org/).

Его модули:

1. `server`

    Бэкенд приложения на Node.js.\
    Из библиотек: Koa, MongoDB + Mongoose.

2. `web`

    Веб-фронтенд приложения.

    React.

    В корне есть автосгенерированный [README](packages/web/README.md), можно его почитать даже немного.

3. `shared`

    Общее.

    **Чему здесь быть:**\
    Классы, интерфейсы, функции, которые можно использовать из любого модуля, описанного выше.

    **Чего здесь быть не должно:**\
    Frontend-specific или backend-specific вещей.

    Например:
    1. Энтитей (с БД у нас работает только бэкенд!)\
        Вместо энтитей (`User`, `Message`, ...) здесь лучше всего хранить их интерфейсы (`IUser`, `IMessage`, ...).
    2. Импортов `mongoose` в код (с БД у нас работает только бэкенд!)
    3. Если наступлю на грабли, то допишу здесь пункт.


# How can I contribute?

Press ⭐.

# Any questions?

[![telegram](https://img.shields.io/badge/chat-on%20Telegram-%230088cc)](https://t.me/sheefoo25)