# Front end

## Начальная настройка
`` npm run start `` -- обновить версии пакетов, скачать node_modules, запустить задачу npm run dev

## Gulp задачи
### Production mode !!!ДЛЯ ВЕРСТАЛЬЩИКА!!!
``npm run prod:serve`` - запуск сервера. Запускаем задачу и начинаем внедрение правок. Компилиться все кроме html.

### Development mode (не нужны после сдачи верстки)
``npm run prod:dev`` - компиляция всего проекта, с удаления выходной папки + запуск сервера (уже с минификацией файлов и т.д.)
``npm run prod:build`` - тоже самое, что npm run prod:dev, только не запускается сервер
``npm run dev`` - компиляция всего проекта, с удалением выходной папки + запуск сервера (без минификации и т.д.)
``npm run dev:build`` - тоже самое, что npm run dev, только не запускается сервер
      
## Библиотеки
   1. Модальные окна - fancybox (http://fancyapps.com/fancybox/3/docs)
   2. Слайдер - slick-slider (https://kenwheeler.github.io/slick/)
   3. Шаблон ввода в input - jQuery Masked Input Plugin (https://github.com/digitalBush/jquery.maskedinput)
   4. Таймер - easytimer.js (https://github.com/albert-gonzalez/easytimer.js)
   5. Выпадающий список - select2 (https://github.com/select2/select2)
   6. 
   7. 
   8. 
   
## Особенности сайта
1. 
2.       
      
## Особенности конфига
  1. Если нужно поменять папку, куда будут идти скомпилированные файлы, то в gulp/config.js есть переменная outDir = "dist";
  2. Есть npm скрипты для выполнения отдельных задач gulp (см. файл package.json)
  3. На гитлабе должен сработать npm run prod:build + задача должна быть успешной
  4. Все файлы подключаются с папки dist, но не из scr.
  5. Либы, которые нужно вставить в общий файл стилей кладется в src/less/libs, но обязательно файл должен быть .less (можно просто переименовать .css в .less)
  6. 
  
## Cтруктура проекта
- dist - папка с выходными файлами, формируется только gulp'ом
    - css - общий файл стилей для сайта
    - include-libs - либы, которые будут подключаться на отдельных страницах (.js,.css)
    - include-scripts - скрипты, которые будут запускать либы выше
    - js - общий файл .js для сайта
    - min-img - все картинки, прошедшие минификацию размера
    - pages - страницы html
    - svg - минифицированные svg иконки для подключения через ссылку
    - webp-img - изображения, конвертируемые в формат .webp
- src - папка с исходниками
    - /favicons - фавиконы, манифесты, сгенерируемые сайтом: https://realfavicongenerator.net/
    - /fonts - шрифты сайта
    - /img - изображения png, jpg, jpeg
    - /js
        - 00_libs - библиотеки, которые пойдут в общий бандл сайта
        - 01_scripts - скрипты для текущего сайта
        - 02_custom - шаблонные скрипты, которые часто используются на сайтах
        - include-libs - либы, которые не идут в общий бандл сайта, а подключаются на нужных страницах
        - include-scripts - аналогично выше, только скрипт для запуска либы
    - less
        - common - заготовки для сайтов
        - custom - стили для скриптов, которые часто используются на сайтах
        - include - стили для включения на отдельных страницах
        - layout - header,footer,aside...
        - libs - либы для общего файла стилей
        - pages - стили для каждой страницы
        - utils - стили переходящие из проекта в проект
        - main.less - файл, который подключает все нужные файлы стилей и он же и компилируется gulp задачей.
        - new-styles.less - файл стилей для нового верстальщика проекта, если лень искать нужный файл стилей.
    - pug
        - include - то, что будет подключатся через include (breadcrumbs, menu ...)
        - mixins - pug миксины
        - page-layout - блоки подключаемые на каждой странице странице (footer,header,aside)
        - pages - страницы, которые будут открываться в браузере
        - page-template - шаблоны для страниц
        - 
    - svg - svg иконки
- gulp
    - img - минификация и преобразования в webp изображений
    - clean - удаление папки с выходными файлами
    - config - пути к файлам, которые используются в остальных gulp задачах
    - favicons - копирования фавиконок
    - fonts - копирование шрифтов
    - pug2html - компиляция всех страниц pug    
    - include_pug2html - компиляция нужных страниц, над которыми работаешь.
    - include-libs - копирования библиотек подключаемых на отдельных страницах
    - include-scripts - скрипт для запуска подключаемых либ (см. задача выше)
    - script - собрать общий js бандл для сайта
    - serve - запуск задач, при изменении файлов
    - style - собрать общий бандл стилей
    - svgSprite - собрать свг-спрайт
    - webpack-script - отвечает за js (пока не используется)
## Помощь
Если совсем что-то непонятно, то можно мне написать vk - https://vk.com/moshkin_denis, или telegram - @denis_moshkin

# from Backend for FrontEnd Все что ниже нужно заполнить.

1. Где лежит локально сервер и есть ли он.
2. Структура папок и особенно где лежит весь html код сайта Пр. страницы, включаемый код html и т.д.
3. Где подгружаеются скипты, стили в php
4. Информацию для обратной связи.
5. 
 

