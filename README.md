# Что это?

Это фуллстек мессенджер, написанный на JavaScript и на его родных и близких.

# Зачем?

"А вот бы чёнить на жс запилить."

# Get started

0. [Install Node.js (ver >= 10.0.0)](https://nodejs.org/).
1. [Install MongoDB](https://www.mongodb.com/download-center/community).
2. Copy and paste the appSettings.template.json file contents into a new appSettings.json in the same folder.\
    Optionally, you can edit some of the settings.\
    Read more details on configuration files [here](docs/configuration-files.md).
3. `npm run setup`
4. `npm run dev:both`

# Как всё устроено

Приложение — [монорепо на Lerna](https://lerna.js.org/).

Его модули:

## `server`

Бэкенд приложения на Node.js.\
Из библиотек: Koa, MongoDB + Mongoose.

## `web`

Веб-фронтенд приложения.

React.

В корне есть автосгенерированный [README](packages/web/README.md), можно его почитать даже немного.

## `shared`

Общее.

### Чему здесь быть:

Классы, интерфейсы, функции, которые можно использовать из любого модуля, описанного выше.

### Чего здесь быть не должно:
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