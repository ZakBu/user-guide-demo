# Руководство пользователя

Демо-сайт руководства пользователя: витрина продуктов, главные страницы продуктов и статьи с деревом навигации.

Проект сделан как простой статический сайт: весь интерфейс находится в `index.html`, изображения лежат в `assets/`, а локальный запуск выполняется через маленький Node.js сервер `server.js`.

## Что нужно заранее

Для запуска нужен:

- Node.js версии 18 или новее;
- Git, если вы хотите клонировать или отправлять проект в GitHub;
- браузер Chrome, Safari, Edge или Firefox.

Проверить, установлен ли Node.js:

```bash
node -v
```

Если команда показывает версию вроде `v18.19.0`, `v20.11.0` или выше, всё готово.

Если команда не найдена, установите Node.js:

- macOS: скачайте LTS-версию с [nodejs.org](https://nodejs.org/) или установите через Homebrew: `brew install node`;
- Windows: скачайте LTS-версию с [nodejs.org](https://nodejs.org/);
- Linux: установите Node.js через менеджер пакетов вашей системы или через NodeSource.

Проверить, установлен ли Git:

```bash
git --version
```

## Как скачать проект с GitHub

Если репозиторий уже опубликован, откройте терминал и выполните:

```bash
git clone https://github.com/ZakBu/user-guide-demo.git
cd user-guide-demo
```

На Windows в PowerShell это выглядит так же:

```powershell
git clone https://github.com/ZakBu/user-guide-demo.git
cd user-guide-demo
```

Если вы скачали проект ZIP-архивом:

1. Распакуйте архив.
2. Откройте терминал.
3. Перейдите в папку проекта:

```bash
cd путь/до/папки/user-guide-demo
```

На macOS можно упростить: напишите `cd ` с пробелом, затем перетащите папку проекта в окно терминала и нажмите Enter.

На Windows проще всего так:

1. Распакуйте ZIP-архив, например в `Downloads`.
2. Откройте папку проекта в Проводнике.
3. Кликните правой кнопкой мыши по пустому месту в папке.
4. Выберите `Открыть в терминале` или `Open in Terminal`.
5. Выполните команды запуска из следующего раздела.

Если нужно перейти в папку вручную через PowerShell:

```powershell
cd "$env:USERPROFILE\Downloads\user-guide-demo"
```

Если папка называется иначе, замените `user-guide-demo` на фактическое имя папки.

Для старого Windows CMD:

```cmd
cd %USERPROFILE%\Downloads\user-guide-demo
```

## Первый запуск

Установите служебные зависимости проекта:

```bash
npm install
```

В этом проекте внешних npm-библиотек нет, но команда полезна: она проверяет `package.json` и подготавливает стандартный Node.js workflow.

Запустите локальный сервер:

```bash
npm start
```

Полный пример для Windows PowerShell:

```powershell
cd "$env:USERPROFILE\Downloads\user-guide-demo"
node -v
npm install
npm start
```

Полный пример для Windows CMD:

```cmd
cd %USERPROFILE%\Downloads\user-guide-demo
node -v
npm install
npm start
```

В терминале должно появиться:

```text
User guide demo is running at http://localhost:8000/home
```

После этого откройте в браузере:

[http://localhost:8000/home](http://localhost:8000/home)

Важно: не закрывайте терминал, пока работаете с сайтом. Сервер живёт в этом окне.

## Как остановить сайт

В окне терминала, где запущен сервер, нажмите:

```text
Ctrl + C
```

После этого `localhost:8000` перестанет открываться.

## Как запустить на другом порту

По умолчанию сайт запускается на порту `8000`.

Если порт занят, используйте другой:

```bash
PORT=3000 npm start
```

После запуска откройте:

[http://localhost:3000/home](http://localhost:3000/home)

Для Windows PowerShell:

```powershell
$env:PORT=3000; npm start
```

Для Windows CMD:

```cmd
set PORT=3000 && npm start
```

## Проверка проекта

Перед публикацией можно выполнить smoke-check:

```bash
npm run check
```

Проверка убеждается, что:

- есть `index.html`;
- есть `404.html` для GitHub Pages;
- есть сервер `server.js`;
- есть ключевые изображения в `assets/`;
- в HTML присутствуют основные части приложения: роутинг, ассеты, DotGrid и иконки.

Успешный результат:

```text
Project check passed.
```

## Основные страницы

Локально:

- витрина продуктов: [http://localhost:8000/home](http://localhost:8000/home);
- главная ЦД 2.0: [http://localhost:8000/home/digital-twin-20](http://localhost:8000/home/digital-twin-20);
- пример статьи: [http://localhost:8000/home/digital-twin-20/overview](http://localhost:8000/home/digital-twin-20/overview).

На GitHub Pages:

- витрина продуктов: `https://ZakBu.github.io/user-guide-demo/home`;
- главная ЦД 2.0: `https://ZakBu.github.io/user-guide-demo/home/digital-twin-20`;
- пример статьи: `https://ZakBu.github.io/user-guide-demo/home/digital-twin-20/overview`.

## Как опубликовать в GitHub

Если проект ещё не связан с GitHub-репозиторием:

```bash
git init
git add .
git commit -m "Initial user guide demo"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

Если репозиторий уже связан с GitHub и нужно отправить новые изменения:

```bash
git add .
git commit -m "Update user guide demo"
git push
```

Проверить, куда будет отправлен проект:

```bash
git remote -v
```

## Как включить GitHub Pages

1. Откройте репозиторий на GitHub.
2. Перейдите в `Settings`.
3. В левом меню откройте `Pages`.
4. В блоке `Build and deployment` выберите `Deploy from a branch`.
5. В `Branch` выберите `main`.
6. В папке выберите `/root`.
7. Нажмите `Save`.

Через несколько минут сайт будет доступен по адресу:

```text
https://<user>.github.io/<repo>/home
```

Для этого проекта:

[https://ZakBu.github.io/user-guide-demo/home](https://ZakBu.github.io/user-guide-demo/home)

Файл `404.html` нужен для прямых переходов по вложенным маршрутам. Благодаря ему ссылки вроде `/home/digital-twin-20/overview` открываются напрямую, а не падают в 404.

## Как обновлять сайт

1. Измените `index.html` или файлы в `assets/`.
2. Проверьте локально:

```bash
npm start
```

3. В отдельном терминале выполните проверку:

```bash
npm run check
```

4. Зафиксируйте изменения:

```bash
git add .
git commit -m "Update site"
git push
```

GitHub Pages обновится автоматически. Обычно это занимает от нескольких секунд до пары минут.

## Типовые проблемы

### `node: command not found`

Node.js не установлен или терминал не видит его в PATH. Установите LTS-версию с [nodejs.org](https://nodejs.org/) и откройте терминал заново.

### `EADDRINUSE: address already in use :::8000`

Порт `8000` уже занят другим процессом.

Вариант 1: остановите старый сервер через `Ctrl + C`.

Вариант 2: запустите на другом порту:

```bash
PORT=3000 npm start
```

На Windows PowerShell:

```powershell
$env:PORT=3000; npm start
```

На Windows CMD:

```cmd
set PORT=3000 && npm start
```

После запуска на другом порту откройте `http://localhost:3000/home`.

### `npm : File cannot be loaded because running scripts is disabled`

Такое иногда появляется в Windows PowerShell из-за политики выполнения скриптов.

Самый простой вариант: запустите проект через CMD:

```cmd
npm install
npm start
```

Или разрешите выполнение скриптов для текущего пользователя в PowerShell:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

После этого закройте PowerShell, откройте его заново и повторите:

```powershell
npm start
```

### Windows Defender или браузер спрашивает разрешение сети

При первом запуске Node.js Windows может спросить, разрешить ли доступ к сети. Для локального запуска достаточно разрешить доступ в частных сетях. Сайт работает на вашем компьютере по адресу `localhost`.

### Страница открывается, но картинки пропали

Проверьте, что папка `assets/` лежит рядом с `index.html`.

Правильная структура:

```text
user-guide-demo/
├── index.html
└── assets/
```

### Вложенная ссылка на GitHub Pages открывает 404

Проверьте, что в репозитории есть файл `404.html` и GitHub Pages настроен на ветку `main`, папку `/root`.

### После обновления GitHub Pages показывает старую версию

Сделайте hard refresh:

- macOS: `Cmd + Shift + R`;
- Windows/Linux: `Ctrl + F5`.

Если не помогло, подождите 1-2 минуты: GitHub Pages может обновляться не мгновенно.

## Структура проекта

```text
.
├── assets/        # изображения и иконки сайта
├── scripts/       # служебные проверки
├── index.html     # весь сайт
├── 404.html       # GitHub Pages fallback для SPA-маршрутов
├── server.js      # локальный static server с fallback
├── package.json   # команды запуска
├── .nojekyll      # отключает Jekyll на GitHub Pages
└── README.md      # инструкция по запуску и публикации
```

## Техническая заметка

Сайт работает как SPA без сборщика. Сервер всегда отдаёт `index.html` для неизвестных URL, поэтому маршруты вида `/home/digital-twin-20/overview` работают при прямом открытии.

На GitHub Pages такую же роль выполняет `404.html`.
