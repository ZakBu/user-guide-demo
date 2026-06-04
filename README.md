# Руководство пользователя

Демо-сайт руководства пользователя: витрина продуктов, главные страниц продуктов и статьи с деревом навигации.

## Быстрый запуск

Нужен Node.js 18 или новее.

```bash
npm install
npm start
```

После запуска откройте:

[http://localhost:8000/home](http://localhost:8000/home)

Порт можно изменить:

```bash
PORT=3000 npm start
```

## Проверка проекта

```bash
npm run check
```

Проверка убеждается, что на месте основной HTML, fallback для GitHub Pages и ключевые ассеты.

## Публикация на GitHub

```bash
git add .
git commit -m "Initial user guide demo"
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

## GitHub Pages

1. Откройте репозиторий на GitHub.
2. Перейдите в `Settings` → `Pages`.
3. В `Build and deployment` выберите `Deploy from a branch`.
4. Выберите ветку `main` и папку `/root`.
5. После публикации сайт будет доступен по адресу:

```text
https://<user>.github.io/<repo>/home
```

Файл `404.html` добавлен специально для прямых переходов по вложенным маршрутам, например `/home/digital-twin-20/overview`.

## Структура

```text
.
├── assets/        # изображения и иконки сайта
├── scripts/       # служебные проверки
├── index.html     # весь сайт
├── 404.html       # GitHub Pages fallback для SPA-маршрутов
├── server.js      # локальный static server с fallback
└── package.json   # команды запуска
```
