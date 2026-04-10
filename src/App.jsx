import { useEffect, useMemo, useState } from "react";

const STATUS = { none: "none", inprogress: "inprogress", done: "done" };
const STATUS_LABEL = { none: "—", inprogress: "В процессе", done: "Готово" };
const STATUS_COLOR = {
  none: "#2A2A3E",
  inprogress: "#FFB800",
  done: "#00FF94",
};

const roadmap = [
  {
    phase: "ФАЗА 1 — Python Core",
    phaseColor: "#00FF94",
    weeks: [
      {
        week: 1,
        title: "Python-основы и окружение",
        days: [
          {
            day: "Пн",
            focus: "Установка окружения",
            tasks: [
              "Установи Python 3.14.x и проверь python --version / pip --version",
              "Настрой VS Code + расширения: Python, Pylance, Ruff или Black Formatter",
              "Создай папку проекта и инициализируй git",
              "Создай venv через python -m venv .venv и активируй его",
              "Установи базовые инструменты: pip install -U pip black ruff pytest",
              "Создай main.py, выведи Hello World и сделай первый commit",
            ],
          },
          {
            day: "Вт",
            focus: "Типы данных",
            tasks: [
              "Создай файл types_demo.py",
              "Покажи примеры str, int, float, bool, None",
              "Выведи значение и type(...) для каждого типа",
              "Сделай 3 примера методов строк",
              "Сделай 3 примера f-строк и форматирования",
            ],
          },
          {
            day: "Ср",
            focus: "Структуры данных",
            tasks: [
              "Потренируй list: append, pop, slicing, sort",
              "Сравни tuple vs list на 3 примерах",
              "Сделай dict с данными пользователя",
              "Потренируй get, keys, values, items",
            ],
          },
          {
            day: "Чт",
            focus: "Структуры данных 2",
            tasks: [
              "Потренируй set: union, intersection, difference",
              "Сделай вложенные структуры dict/list",
              "Сделай 3 list comprehensions",
              "Сделай 2 dict comprehensions и 2 set comprehensions",
            ],
          },
          {
            day: "Пт",
            focus: "Условия и циклы",
            tasks: [
              "Сделай 5 примеров if/elif/else",
              "Потренируй for / while",
              "Покажи break, continue, else в цикле",
              "Реши 3 небольшие задачи на циклы",
            ],
          },
          {
            day: "Сб",
            focus: "Функции",
            tasks: [
              "Напиши 5 функций с return",
              "Покажи *args и **kwargs на примерах",
              "Сделай 3 lambda-функции",
              "Разбери область видимости LEGB на мини-примерах",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Задание: написать калькулятор (+, -, *, /)",
              "Задание: реализовать FizzBuzz 1..100",
              "Задание: найти все простые числа до N",
              "Разложить каждую задачу по отдельным файлам",
              "Добавить README недели с описанием, чему научился",
            ],
          },
        ],
        topics: [
          "Типы данных: str, int, float, bool, None",
          "list, tuple, dict, set — методы и отличия",
          "f-строки, форматирование вывода",
          "Условия, циклы, break/continue",
          "Функции: args, kwargs, lambda",
          "Comprehensions",
          "Установка окружения: Python 3.14.x, venv, VS Code, инструменты разработки",
        ],
        project:
          "Консольная игра «Угадай число» с подсказками, счётчиком попыток и README",
        resources: [
          {
            type: "📖",
            name: "Марк Лутц — Изучаем Python (глава 1–6)",
            url: "https://www.ozon.ru/product/izuchaem-python-tom-1-lutz-mark/",
          },
          {
            type: "🎥",
            name: "Хекслет — Python: основы (бесплатно)",
            url: "https://ru.hexlet.io/courses/python_basics",
          },
          {
            type: "🌐",
            name: "docs.python.org — Tutorial",
            url: "https://docs.python.org/ru/3/tutorial/",
          },
          {
            type: "🎥",
            name: "YouTube: CS50P (Harvard, eng)",
            url: "https://www.youtube.com/watch?v=nLRL_NcnK-4",
          },
          {
            type: "🏋️",
            name: "Практика: Stepik — Python для начинающих",
            url: "https://stepik.org/course/58852",
          },
        ],
        questions: [
          "Чем list отличается от tuple? Когда использовать каждый?",
          "Что такое mutable и immutable типы? Приведи примеры.",
          "Как работает dict.get() в отличие от dict[]?",
          "Что выведет: [x**2 for x in range(5) if x % 2 == 0]?",
          "Чем *args отличается от **kwargs?",
          "Что такое область видимости переменной? Что такое LEGB?",
          "Как создать словарь из двух списков с помощью zip?",
          "Что выведет: print(bool(0), bool([]), bool(''), bool(None))?",
        ],
      },
      {
        week: 2,
        title: "OOP в Python",
        days: [
          {
            day: "Пн",
            focus: "Классы и объекты",
            tasks: [
              "class, __init__, self",
              "Атрибуты экземпляра и класса",
              "Методы",
            ],
          },
          {
            day: "Вт",
            focus: "Наследование",
            tasks: [
              "Простое наследование",
              "super()",
              "Переопределение методов",
            ],
          },
          {
            day: "Ср",
            focus: "Инкапсуляция",
            tasks: [
              "public, _protected, __private",
              "property, getter, setter",
              "@property декоратор",
            ],
          },
          {
            day: "Чт",
            focus: "Магические методы",
            tasks: [
              "__str__, __repr__",
              "__len__, __eq__, __lt__",
              "__add__, __contains__",
            ],
          },
          {
            day: "Пт",
            focus: "Продвинутое ООП",
            tasks: [
              "@classmethod, @staticmethod",
              "Абстрактные классы (ABC)",
              "Датаклассы @dataclass",
            ],
          },
          {
            day: "Сб",
            focus: "MRO и миксины",
            tasks: [
              "Множественное наследование",
              "MRO (C3-линеаризация)",
              "Паттерн Mixin",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Задание: реализуй Stack и Queue через классы",
              "Задание: класс BankAccount с историей операций",
            ],
          },
        ],
        topics: [
          "Классы, объекты, __init__, self",
          "Наследование, super()",
          "Инкапсуляция: public, _protected, __private",
          "@property, getter, setter",
          "Магические методы: __str__, __repr__, __len__, __eq__",
          "@classmethod, @staticmethod",
          "Абстрактные классы (ABC)",
          "@dataclass",
          "MRO, миксины",
        ],
        project:
          "Система управления библиотекой: классы Book, Author, Library с поиском, выдачей и возвратом книг",
        resources: [
          {
            type: "📖",
            name: "Real Python — OOP in Python",
            url: "https://realpython.com/python3-object-oriented-programming/",
          },
          {
            type: "🎥",
            name: "Stepik — Python ООП",
            url: "https://stepik.org/course/116056",
          },
          {
            type: "📖",
            name: "Лутц — Изучаем Python, глава 26–32 (классы)",
            url: "https://www.ozon.ru/product/izuchaem-python-tom-1-lutz-mark/",
          },
          {
            type: "🌐",
            name: "Python docs — dataclasses",
            url: "https://docs.python.org/3/library/dataclasses.html",
          },
          {
            type: "🏋️",
            name: "Практика: Exercism — Python track",
            url: "https://exercism.org/tracks/python",
          },
        ],
        questions: [
          "Что такое MRO? Как Python выбирает метод при множественном наследовании?",
          "Зачем нужен __slots__? Как он влияет на производительность?",
          "В чём разница между @classmethod и @staticmethod?",
          "Что такое абстрактный класс и когда его использовать?",
          "Чем @dataclass удобнее обычного класса?",
          "Реализуй класс Vector2D с поддержкой сложения и умножения на скаляр.",
          "Что выведет: type(obj) vs isinstance(obj, cls)?",
          "Как работает __new__ и чем отличается от __init__?",
        ],
      },
      {
        week: 3,
        title: "Продвинутый Python",
        days: [
          {
            day: "Пн",
            focus: "Декораторы",
            tasks: [
              "Функции как объекты",
              "Простой декоратор",
              "functools.wraps",
            ],
          },
          {
            day: "Вт",
            focus: "Декораторы 2",
            tasks: [
              "Декораторы с аргументами",
              "Стекирование декораторов",
              "Декораторы классов",
            ],
          },
          {
            day: "Ср",
            focus: "Генераторы",
            tasks: [
              "yield, generator expression",
              "next(), send()",
              "Бесконечные генераторы",
            ],
          },
          {
            day: "Чт",
            focus: "Контекстные менеджеры",
            tasks: [
              "with, __enter__, __exit__",
              "@contextmanager",
              "Практика: таймер, логгер",
            ],
          },
          {
            day: "Пт",
            focus: "itertools и functools",
            tasks: [
              "itertools: chain, product, groupby",
              "functools: partial, reduce, lru_cache",
              "Ленивые вычисления",
            ],
          },
          {
            day: "Сб",
            focus: "Исключения и модули",
            tasks: [
              "try/except/else/finally",
              "Кастомные исключения",
              "Структура пакетов, __init__.py",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Задание: декоратор retry с backoff",
              "Задание: генератор Фибоначчи",
              "Задание: контекстный менеджер для логирования",
            ],
          },
        ],
        topics: [
          "Декораторы: создание, аргументы, functools.wraps",
          "Генераторы: yield, generator expression, send()",
          "Контекстные менеджеры: __enter__/__exit__, @contextmanager",
          "itertools: chain, product, groupby, islice",
          "functools: partial, reduce, lru_cache",
          "Кастомные исключения, иерархия ошибок",
          "Структура пакетов Python",
        ],
        project:
          "Декоратор-менеджер: retry с экспоненциальным backoff, rate_limit, cache — применить к любому API-клиенту",
        resources: [
          {
            type: "📖",
            name: "Real Python — Decorators",
            url: "https://realpython.com/primer-on-python-decorators/",
          },
          {
            type: "📖",
            name: "Real Python — Generators",
            url: "https://realpython.com/introduction-to-python-generators/",
          },
          {
            type: "🎥",
            name: "YouTube: Corey Schafer — Decorators",
            url: "https://www.youtube.com/watch?v=FsAPt_9Bf3U",
          },
          {
            type: "🌐",
            name: "Python docs — itertools",
            url: "https://docs.python.org/3/library/itertools.html",
          },
          {
            type: "🏋️",
            name: "Практика: LeetCode Easy (generators)",
            url: "https://leetcode.com/problemset/",
          },
        ],
        questions: [
          "Напиши декоратор, который логирует время выполнения функции.",
          "В чём разница между генератором и списком? Когда использовать генератор?",
          "Что такое functools.wraps и зачем он нужен?",
          "Как передать аргументы в декоратор?",
          "Что делает lru_cache? Когда его использовать?",
          "Объясни разницу между return и yield.",
          "Напиши контекстный менеджер для измерения времени блока кода.",
          "Что такое ленивые вычисления и почему они важны?",
        ],
      },
      {
        week: 4,
        title: "Асинхронность и типизация",
        days: [
          {
            day: "Пн",
            focus: "asyncio базово",
            tasks: [
              "Event loop, coroutines",
              "async def, await",
              "asyncio.run()",
            ],
          },
          {
            day: "Вт",
            focus: "asyncio продвинуто",
            tasks: [
              "asyncio.gather, asyncio.wait",
              "asyncio.Queue",
              "asyncio.Semaphore",
            ],
          },
          {
            day: "Ср",
            focus: "aiohttp / httpx",
            tasks: [
              "Асинхронные HTTP-запросы",
              "ClientSession",
              "Параллельные запросы",
            ],
          },
          {
            day: "Чт",
            focus: "Type hints базово",
            tasks: [
              "int, str, list, dict, Optional",
              "Union, Any",
              "Callable, Tuple",
            ],
          },
          {
            day: "Пт",
            focus: "Type hints продвинуто",
            tasks: ["TypeVar, Generic", "Protocol", "TypedDict, Literal"],
          },
          {
            day: "Сб",
            focus: "mypy",
            tasks: [
              "Установка и настройка mypy",
              "Аннотация функций и классов",
              "Игнор ошибок, strict режим",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Задание: асинхронный парсер (10 URL параллельно)",
              "Задание: добавить типы во все функции прошлых проектов",
            ],
          },
        ],
        topics: [
          "asyncio: event loop, coroutines, tasks",
          "async/await синтаксис",
          "asyncio.gather, asyncio.wait, asyncio.Semaphore",
          "aiohttp / httpx — асинхронные HTTP",
          "Type hints: Optional, Union, List, Dict, Callable",
          "TypeVar, Generic, Protocol",
          "TypedDict, Literal, Final",
          "mypy — настройка и использование",
        ],
        project:
          "Асинхронный агрегатор новостей: параллельно тянуть данные с 5+ источников, кешировать, отдавать JSON",
        resources: [
          {
            type: "📖",
            name: "Real Python — Async IO in Python",
            url: "https://realpython.com/async-io-python/",
          },
          {
            type: "🌐",
            name: "mypy docs",
            url: "https://mypy.readthedocs.io/en/stable/",
          },
          {
            type: "🎥",
            name: "YouTube: ArjanCodes — Type hints",
            url: "https://www.youtube.com/watch?v=QORvB-_mbZ0",
          },
          {
            type: "🌐",
            name: "Python docs — asyncio",
            url: "https://docs.python.org/3/library/asyncio.html",
          },
          {
            type: "📖",
            name: "Статья: Python typing cheatsheet",
            url: "https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html",
          },
        ],
        questions: [
          "Что такое event loop? Как он работает?",
          "Чем asyncio.gather отличается от asyncio.wait?",
          "Когда asyncio не поможет с производительностью (GIL)?",
          "Что такое asyncio.Semaphore и зачем он нужен?",
          "Чем Optional[str] отличается от str | None?",
          "Что такое Protocol в typing? Чем отличается от ABC?",
          "Напиши функцию с полной типизацией, принимающую список и callback.",
          "Что делает mypy в strict режиме?",
        ],
      },
    ],
  },
  {
    phase: "ФАЗА 2 — Web Framework + Базы данных",
    phaseColor: "#00C2FF",
    weeks: [
      {
        week: 5,
        title: "FastAPI — основы",
        days: [
          {
            day: "Пн",
            focus: "Старт проекта",
            tasks: [
              "Установка FastAPI, uvicorn",
              "Первый endpoint",
              "Swagger UI / ReDoc",
            ],
          },
          {
            day: "Вт",
            focus: "Параметры запросов",
            tasks: ["Path params", "Query params", "Body (JSON)"],
          },
          {
            day: "Ср",
            focus: "Pydantic",
            tasks: [
              "BaseModel",
              "Валидация, типы, defaults",
              "validators, model_validator",
            ],
          },
          {
            day: "Чт",
            focus: "Роутеры и структура",
            tasks: ["APIRouter", "Prefix, tags", "Разбивка на модули"],
          },
          {
            day: "Пт",
            focus: "Dependency Injection",
            tasks: [
              "Depends()",
              "Зависимости с состоянием",
              "Иерархия зависимостей",
            ],
          },
          {
            day: "Сб",
            focus: "Middleware и CORS",
            tasks: [
              "Custom Middleware",
              "CORSMiddleware",
              "Обработка ошибок (HTTPException)",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Задание: CRUD API для задач (Task manager)",
              "Покрыть все статус-коды правильно",
            ],
          },
        ],
        topics: [
          "Установка FastAPI, uvicorn, структура проекта",
          "Path, Query, Body параметры",
          "Pydantic BaseModel: валидация, типы, validators",
          "APIRouter: разбивка на модули",
          "Dependency Injection через Depends()",
          "Middleware, CORS",
          "Обработка ошибок: HTTPException, exception handlers",
          "Swagger / OpenAPI документация",
        ],
        project:
          "Task Manager API: CRUD для задач с категориями, приоритетами, фильтрацией и пагинацией",
        resources: [
          {
            type: "🌐",
            name: "FastAPI — официальная документация",
            url: "https://fastapi.tiangolo.com/",
          },
          {
            type: "🎥",
            name: "YouTube: FastAPI full course — freeCodeCamp",
            url: "https://www.youtube.com/watch?v=7t2alSnE2-I",
          },
          {
            type: "📖",
            name: "Real Python — FastAPI tutorial",
            url: "https://realpython.com/fastapi-python-web-apis/",
          },
          {
            type: "🌐",
            name: "Pydantic v2 docs",
            url: "https://docs.pydantic.dev/latest/",
          },
          {
            type: "🎥",
            name: "YouTube: ArjanCodes — FastAPI best practices",
            url: "https://www.youtube.com/watch?v=sBVb4IB3O_U",
          },
        ],
        questions: [
          "Чем FastAPI отличается от Flask? Какие преимущества?",
          "Что такое Pydantic и зачем он нужен в FastAPI?",
          "Как работает Dependency Injection в FastAPI?",
          "Как вернуть кастомный статус-код и заголовки?",
          "Как сделать валидацию на уровне бизнес-логики (не схемы)?",
          "Что такое response_model и зачем он нужен?",
          "Как правильно обрабатывать 404 и 422 ошибки?",
          "Как сделать пагинацию через Query параметры?",
        ],
      },
      {
        week: 6,
        title: "PostgreSQL + SQLAlchemy + Alembic",
        days: [
          {
            day: "Пн",
            focus: "SQL базово",
            tasks: [
              "SELECT, WHERE, ORDER BY, LIMIT",
              "INSERT, UPDATE, DELETE",
              "Агрегации: COUNT, SUM, GROUP BY",
            ],
          },
          {
            day: "Вт",
            focus: "SQL продвинуто",
            tasks: [
              "JOIN: INNER, LEFT, RIGHT",
              "Подзапросы",
              "Индексы: B-tree, создание",
            ],
          },
          {
            day: "Ср",
            focus: "PostgreSQL",
            tasks: [
              "Установка, psql команды",
              "Типы данных Postgres (JSONB, UUID)",
              "EXPLAIN ANALYZE",
            ],
          },
          {
            day: "Чт",
            focus: "SQLAlchemy Core",
            tasks: [
              "Engine, Connection",
              "Table, Column, MetaData",
              "Основные операции",
            ],
          },
          {
            day: "Пт",
            focus: "SQLAlchemy ORM",
            tasks: [
              "DeclarativeBase, mapped_column",
              "Session, query",
              "Отношения: relationship()",
            ],
          },
          {
            day: "Сб",
            focus: "Alembic",
            tasks: [
              "Инициализация",
              "Создание миграций (autogenerate)",
              "Применение и откат",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Подключить БД к Task Manager API",
              "Реализовать всё через ORM с миграциями",
            ],
          },
        ],
        topics: [
          "SQL: SELECT, JOIN, GROUP BY, подзапросы, индексы",
          "PostgreSQL: типы данных, JSONB, UUID, psql",
          "EXPLAIN ANALYZE — анализ запросов",
          "SQLAlchemy Core и ORM (v2)",
          "DeclarativeBase, mapped_column, relationship",
          "Session management, транзакции",
          "Alembic: миграции, autogenerate, rollback",
          "N+1 проблема и selectinload/joinedload",
        ],
        project:
          "Добавить полноценную БД в Task Manager: users, tasks, categories, tags с правильными связями и миграциями",
        resources: [
          {
            type: "🌐",
            name: "SQLAlchemy 2.0 docs",
            url: "https://docs.sqlalchemy.org/en/20/",
          },
          {
            type: "🌐",
            name: "PostgreSQL Tutorial",
            url: "https://www.postgresqltutorial.com/",
          },
          {
            type: "🎥",
            name: "YouTube: SQLAlchemy 2.0 — full tutorial",
            url: "https://www.youtube.com/watch?v=Uym2DHnUEno",
          },
          {
            type: "🌐",
            name: "Alembic docs",
            url: "https://alembic.sqlalchemy.org/",
          },
          {
            type: "📖",
            name: "Use The Index, Luke (SQL индексы)",
            url: "https://use-the-index-luke.com/",
          },
          { type: "🏋️", name: "Практика: SQLZoo", url: "https://sqlzoo.net/" },
        ],
        questions: [
          "Что такое N+1 проблема? Как решить через selectinload?",
          "Чем INNER JOIN отличается от LEFT JOIN? Приведи пример.",
          "Что такое индекс? Когда стоит добавлять, когда нет?",
          "Как работает транзакция в SQLAlchemy?",
          "Что такое connection pool и зачем он нужен?",
          "Как прочитать вывод EXPLAIN ANALYZE?",
          "Чем relationship lazy='select' отличается от lazy='joined'?",
          "Напиши миграцию Alembic для добавления поля к таблице.",
        ],
      },
      {
        week: 7,
        title: "Redis + Аутентификация + Безопасность",
        days: [
          {
            day: "Пн",
            focus: "Redis базово",
            tasks: [
              "Установка, основные команды",
              "Строки, хеши, списки, множества",
              "TTL, EXPIRE",
            ],
          },
          {
            day: "Вт",
            focus: "Redis в Python",
            tasks: [
              "redis-py, aioredis",
              "Кеширование через декоратор",
              "Redis как хранилище сессий",
            ],
          },
          {
            day: "Ср",
            focus: "JWT",
            tasks: [
              "Как работает JWT (header.payload.signature)",
              "Access + Refresh токены",
              "python-jose / PyJWT",
            ],
          },
          {
            day: "Чт",
            focus: "OAuth2 + пароли",
            tasks: [
              "OAuth2PasswordBearer в FastAPI",
              "bcrypt через passlib",
              "Хеширование и проверка пароля",
            ],
          },
          {
            day: "Пт",
            focus: "Безопасность API",
            tasks: [
              "Rate limiting",
              "SQL-инъекции: защита",
              "CORS, безопасные заголовки",
            ],
          },
          {
            day: "Сб",
            focus: "RBAC",
            tasks: [
              "Role-Based Access Control",
              "Декоратор проверки роли",
              "Middleware авторизации",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Добавить регистрацию, логин, refresh в Task Manager",
              "Защитить все эндпоинты",
            ],
          },
        ],
        topics: [
          "Redis: строки, хеши, списки, TTL",
          "Кеширование в FastAPI с aioredis",
          "JWT: структура, Access + Refresh токены",
          "OAuth2PasswordBearer в FastAPI",
          "bcrypt / passlib — хеширование паролей",
          "Rate limiting",
          "RBAC: ролевая модель доступа",
          "OWASP: SQL-инъекции, XSS защита",
        ],
        project:
          "Полная система аутентификации: регистрация, логин, refresh, logout (blacklist в Redis), роли admin/user",
        resources: [
          {
            type: "🌐",
            name: "FastAPI Security docs",
            url: "https://fastapi.tiangolo.com/tutorial/security/",
          },
          { type: "🌐", name: "Redis docs", url: "https://redis.io/docs/" },
          {
            type: "📖",
            name: "Real Python — JWT authentication",
            url: "https://realpython.com/token-based-authentication-flask/",
          },
          {
            type: "🌐",
            name: "OWASP Top 10",
            url: "https://owasp.org/www-project-top-ten/",
          },
          {
            type: "🎥",
            name: "YouTube: FastAPI Auth — Amigoscode",
            url: "https://www.youtube.com/watch?v=0A_GCXRO4eI",
          },
        ],
        questions: [
          "Что хранится в Access токене и Refresh токене?",
          "Почему нельзя хранить пароли в plain text?",
          "Как инвалидировать JWT токен (logout)?",
          "Что такое RBAC? Как реализовать проверку роли через Depends()?",
          "Чем отличается аутентификация от авторизации?",
          "Как хранить секреты (SECRET_KEY) в продакшене?",
          "Что такое CSRF и как защититься?",
          "Как реализовать rate limiting в FastAPI?",
        ],
      },
      {
        week: 8,
        title: "Django + DRF",
        days: [
          {
            day: "Пн",
            focus: "Django структура",
            tasks: [
              "startproject, startapp",
              "settings.py, urls.py",
              "MVT паттерн",
            ],
          },
          {
            day: "Вт",
            focus: "Models + Admin",
            tasks: [
              "Model fields, Meta",
              "Миграции Django",
              "Django Admin: настройка",
            ],
          },
          {
            day: "Ср",
            focus: "Views + URLs",
            tasks: [
              "Function-based views",
              "Class-based views",
              "URL patterns, include",
            ],
          },
          {
            day: "Чт",
            focus: "DRF — основы",
            tasks: [
              "Serializer, ModelSerializer",
              "APIView, GenericAPIView",
              "Response, status",
            ],
          },
          {
            day: "Пт",
            focus: "DRF — ViewSets",
            tasks: [
              "ModelViewSet, Router",
              "Permissions: IsAuthenticated",
              "Pagination",
            ],
          },
          {
            day: "Сб",
            focus: "DRF — Auth + Filters",
            tasks: ["JWT через simplejwt", "django-filter", "Ordering, Search"],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Реализуй Blog API: Post, Comment, Tag через DRF",
              "Покрой роутами и документацией",
            ],
          },
        ],
        topics: [
          "Django: структура проекта, MVT паттерн",
          "Models, Migrations, Django Admin",
          "Class-based views",
          "DRF: Serializer, ModelSerializer",
          "GenericAPIView, ModelViewSet, Router",
          "Permissions, IsAuthenticated, кастомные permissions",
          "JWT через djangorestframework-simplejwt",
          "Фильтрация, поиск, пагинация в DRF",
        ],
        project:
          "Blog Platform API: посты с тегами, комментарии, лайки, авторизация, поиск, фильтрация по категориям",
        resources: [
          {
            type: "🌐",
            name: "Django docs",
            url: "https://docs.djangoproject.com/en/5.0/",
          },
          {
            type: "🌐",
            name: "DRF docs",
            url: "https://www.django-rest-framework.org/",
          },
          {
            type: "🎥",
            name: "Stepik — Django (русский)",
            url: "https://stepik.org/course/183363",
          },
          {
            type: "🎥",
            name: "YouTube: DRF — Dennis Ivy",
            url: "https://www.youtube.com/watch?v=0sOvCWFmrtA",
          },
          {
            type: "📖",
            name: "Django for APIs — William Vincent",
            url: "https://djangoforapis.com/",
          },
        ],
        questions: [
          "Что такое Django ORM? Чем отличается от SQLAlchemy?",
          "Как работает система миграций в Django?",
          "Чем GenericAPIView отличается от ViewSet?",
          "Что такое select_related и prefetch_related?",
          "Как создать кастомный permission в DRF?",
          "Как настроить JWT в Django через simplejwt?",
          "Что делает SerializerMethodField?",
          "Как Django signals работают? Приведи пример использования.",
        ],
      },
      {
        week: 9,
        title: "API Design + первый полноценный проект",
        days: [
          {
            day: "Пн",
            focus: "REST best practices",
            tasks: [
              "Версионирование (/v1/)",
              "Правильные статус-коды",
              "Именование ресурсов",
            ],
          },
          {
            day: "Вт",
            focus: "Фильтрация и пагинация",
            tasks: [
              "Cursor-based pagination",
              "Filtering через query params",
              "Sorting",
            ],
          },
          {
            day: "Ср",
            focus: "OpenAPI документация",
            tasks: [
              "Swagger в FastAPI",
              "Описание схем, примеры",
              "Теги и группировка",
            ],
          },
          {
            day: "Чт",
            focus: "Обработка ошибок",
            tasks: [
              "Единый формат ошибок",
              "Логирование (logging)",
              "Sentry — базово",
            ],
          },
          {
            day: "Пт",
            focus: "Идемпотентность и безопасность",
            tasks: [
              "Идемпотентные методы",
              "Оптимистичная блокировка",
              "ETag, If-Match",
            ],
          },
          {
            day: "Сб",
            focus: "Рефакторинг проекта",
            tasks: [
              "Применить все принципы к Task Manager",
              "Добавить документацию",
              "Почистить код",
            ],
          },
          {
            day: "Вс",
            focus: "Code review",
            tasks: [
              "Проверить архитектуру",
              "Покрытие эндпоинтов",
              "Готовить к деплою",
            ],
          },
        ],
        topics: [
          "REST: версионирование, naming conventions",
          "Правильные HTTP статус-коды для каждой операции",
          "Cursor-based и offset пагинация",
          "OpenAPI/Swagger: описание схем, примеры",
          "Единый формат ошибок",
          "Logging: structlog / loguru",
          "Идемпотентность HTTP методов",
          "Rate limiting и throttling",
        ],
        project:
          "Финализировать Task Manager: версионирование, swagger, единые ошибки, логирование, rate limit — готов к деплою",
        resources: [
          {
            type: "🌐",
            name: "REST API Design — Microsoft Azure",
            url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design",
          },
          {
            type: "📖",
            name: "HTTP Status Codes reference",
            url: "https://httpstatuses.io/",
          },
          {
            type: "🌐",
            name: "loguru docs",
            url: "https://loguru.readthedocs.io/",
          },
          {
            type: "📖",
            name: "Статья: REST API Best Practices",
            url: "https://restfulapi.net/",
          },
          {
            type: "🎥",
            name: "YouTube: API Design — ArjanCodes",
            url: "https://www.youtube.com/watch?v=1Wl-rtew1_E",
          },
        ],
        questions: [
          "Какой статус-код вернуть при создании? При удалении без контента?",
          "Чем cursor pagination лучше offset для больших данных?",
          "Что такое idempotency? Какие HTTP методы идемпотентны?",
          "Как правильно версионировать API без нарушения обратной совместимости?",
          "Как структурировать единый формат ошибок?",
          "Что такое ETag и когда его использовать?",
          "Как логировать запросы и ошибки структурированно?",
          "Задокументируй 3 эндпоинта своего API полностью через Swagger.",
        ],
      },
    ],
  },
  {
    phase: "ФАЗА 3 — Тесты + DevOps",
    phaseColor: "#FF6B6B",
    weeks: [
      {
        week: 10,
        title: "Тестирование: pytest",
        days: [
          {
            day: "Пн",
            focus: "pytest базово",
            tasks: [
              "Установка, первые тесты",
              "assert, test discovery",
              "conftest.py",
            ],
          },
          {
            day: "Вт",
            focus: "Фикстуры",
            tasks: [
              "Создание фикстур",
              "Scope: function, module, session",
              "yield-фикстуры",
            ],
          },
          {
            day: "Ср",
            focus: "Моки",
            tasks: ["unittest.mock.patch", "MagicMock", "pytest-mock"],
          },
          {
            day: "Чт",
            focus: "Интеграционные тесты",
            tasks: [
              "TestClient FastAPI",
              "Тестовая БД (SQLite / Postgres)",
              "Фикстура для БД",
            ],
          },
          {
            day: "Пт",
            focus: "Параметризация и coverage",
            tasks: ["@pytest.mark.parametrize", "pytest-cov", "HTML отчёт"],
          },
          {
            day: "Сб",
            focus: "TDD практика",
            tasks: [
              "Написать тесты до кода",
              "Red-Green-Refactor цикл",
              "Покрыть 80%+ кода",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Покрыть тестами весь Task Manager API",
              "Написать интеграционный тест для авторизации",
            ],
          },
        ],
        topics: [
          "pytest: fixtures, conftest, scope",
          "Юнит-тесты: изолированное тестирование функций",
          "unittest.mock: patch, MagicMock",
          "pytest-mock",
          "Интеграционные тесты FastAPI через TestClient",
          "Тестовая база данных",
          "@pytest.mark.parametrize",
          "pytest-cov: измерение покрытия",
          "TDD: red-green-refactor",
        ],
        project:
          "Написать полный тестовый suite для Task Manager: юниты + интеграционные + E2E с покрытием 80%+",
        resources: [
          { type: "🌐", name: "pytest docs", url: "https://docs.pytest.org/" },
          {
            type: "📖",
            name: "Real Python — pytest tutorial",
            url: "https://realpython.com/pytest-python-testing/",
          },
          {
            type: "🌐",
            name: "FastAPI Testing",
            url: "https://fastapi.tiangolo.com/tutorial/testing/",
          },
          {
            type: "📖",
            name: "Книга: Python Testing with pytest — Brian Okken",
            url: "https://pragprog.com/titles/bopytest2/python-testing-with-pytest-second-edition/",
          },
          {
            type: "🎥",
            name: "YouTube: pytest tutorial — Corey Schafer",
            url: "https://www.youtube.com/watch?v=6tNS--WetLI",
          },
        ],
        questions: [
          "Чем юнит-тест отличается от интеграционного?",
          "Что такое мок? Когда его использовать, а когда нет?",
          "Что такое фикстура в pytest? Как настроить scope?",
          "Как тестировать код, который делает HTTP запросы?",
          "Что такое TDD? В чём преимущества?",
          "Как изолировать тесты от реальной БД?",
          "Что такое test coverage и какой процент считается хорошим?",
          "Как протестировать endpoint с аутентификацией?",
        ],
      },
      {
        week: 11,
        title: "Docker + docker-compose",
        days: [
          {
            day: "Пн",
            focus: "Docker базово",
            tasks: [
              "Что такое контейнер vs VM",
              "Первый Dockerfile",
              "docker build, run, ps",
            ],
          },
          {
            day: "Вт",
            focus: "Dockerfile продвинуто",
            tasks: ["Слои и кеш", "Multi-stage builds", ".dockerignore"],
          },
          {
            day: "Ср",
            focus: "docker-compose",
            tasks: [
              "Сервисы, networks, volumes",
              "depends_on, healthcheck",
              "env_file",
            ],
          },
          {
            day: "Чт",
            focus: "Практика compose",
            tasks: [
              "FastAPI + PostgreSQL + Redis в compose",
              "Alembic в entrypoint",
              "Restart policies",
            ],
          },
          {
            day: "Пт",
            focus: "Docker best practices",
            tasks: [
              "Non-root user",
              "Минимальный базовый образ (slim)",
              "Секреты через env",
            ],
          },
          {
            day: "Сб",
            focus: "Docker Registry",
            tasks: ["Docker Hub", "Тегирование образов", "docker push/pull"],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Dockerize Task Manager полностью",
              "Запустить make up и проверить все эндпоинты",
            ],
          },
        ],
        topics: [
          "Dockerfile: FROM, RUN, COPY, CMD, ENTRYPOINT",
          "Слои, кеш, .dockerignore",
          "Multi-stage builds",
          "docker-compose: сервисы, volumes, networks",
          "healthcheck, depends_on",
          "Non-root user, минимальные образы",
          "Docker Hub: push/pull",
          "Секреты через env_file",
        ],
        project:
          "Полностью dockerize Task Manager: один docker-compose up поднимает app + postgres + redis + migrations",
        resources: [
          {
            type: "🌐",
            name: "Docker официальная документация",
            url: "https://docs.docker.com/",
          },
          {
            type: "📖",
            name: "Dockerfile best practices",
            url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
          },
          {
            type: "🎥",
            name: "YouTube: Docker tutorial — TechWorld with Nana",
            url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
          },
          {
            type: "🏋️",
            name: "Play with Docker (онлайн практика)",
            url: "https://labs.play-with-docker.com/",
          },
          {
            type: "📖",
            name: "Статья: FastAPI + Docker best practices",
            url: "https://testdriven.io/blog/dockerizing-fastapi/",
          },
        ],
        questions: [
          "Чем CMD отличается от ENTRYPOINT?",
          "Что такое multi-stage build и почему он уменьшает размер образа?",
          "Как данные PostgreSQL не теряются при перезапуске контейнера?",
          "Как передать переменные окружения в контейнер безопасно?",
          "Что такое healthcheck и зачем он нужен?",
          "Чем docker-compose networks помогают изоляции сервисов?",
          "Почему не стоит запускать контейнер от root?",
          "Как дебажить приложение внутри контейнера?",
        ],
      },
      {
        week: 12,
        title: "CI/CD + деплой",
        days: [
          {
            day: "Пн",
            focus: "GitHub Actions базово",
            tasks: [
              "workflow, job, step",
              "Триггеры: push, PR, schedule",
              "Первый pipeline",
            ],
          },
          {
            day: "Вт",
            focus: "CI pipeline",
            tasks: [
              "Запуск тестов в CI",
              "Линтер (ruff, black)",
              "Матрица тестирования",
            ],
          },
          {
            day: "Ср",
            focus: "CD pipeline",
            tasks: [
              "Docker build в CI",
              "Push на Docker Hub",
              "Deploy на Railway/Render",
            ],
          },
          {
            day: "Чт",
            focus: "Secrets и окружения",
            tasks: [
              "GitHub Secrets",
              "Environments (staging/prod)",
              "Environment variables",
            ],
          },
          {
            day: "Пт",
            focus: "Мониторинг",
            tasks: [
              "Sentry: подключение",
              "Healthcheck endpoint /health",
              "Базовые метрики",
            ],
          },
          {
            day: "Сб",
            focus: "Nginx базово",
            tasks: [
              "Reverse proxy концепция",
              "Простой nginx.conf",
              "SSL (certbot)",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Настроить полный CI/CD для Task Manager",
              "Получить живую ссылку на деплой",
            ],
          },
        ],
        topics: [
          "GitHub Actions: workflow, jobs, steps, triggers",
          "CI: тесты + линтер при каждом push",
          "CD: автодеплой при merge в main",
          "GitHub Secrets для безопасного хранения ключей",
          "Railway / Render — деплой",
          "Healthcheck endpoint",
          "Sentry — трекинг ошибок",
          "Nginx как reverse proxy",
          "SSL через Let's Encrypt / certbot",
        ],
        project:
          "Полный CI/CD: push → тесты → lint → docker build → deploy. Task Manager живёт по публичному URL",
        resources: [
          {
            type: "🌐",
            name: "GitHub Actions docs",
            url: "https://docs.github.com/en/actions",
          },
          { type: "🌐", name: "Railway.app", url: "https://railway.app/" },
          { type: "🌐", name: "Render.com", url: "https://render.com/" },
          {
            type: "📖",
            name: "Статья: CI/CD с FastAPI",
            url: "https://testdriven.io/blog/fastapi-crud/",
          },
          {
            type: "🎥",
            name: "YouTube: GitHub Actions — TechWorld with Nana",
            url: "https://www.youtube.com/watch?v=R8_veQiYBjI",
          },
        ],
        questions: [
          "Что такое CI и CD? В чём разница?",
          "Как хранить секреты (API ключи) в GitHub Actions?",
          "Напиши workflow, который запускает pytest при push в main.",
          "Что такое environment в GitHub Actions?",
          "Как настроить автодеплой только при успешных тестах?",
          "Что должен возвращать /health endpoint?",
          "Зачем нужен reverse proxy (Nginx)?",
          "Как получить SSL сертификат бесплатно?",
        ],
      },
    ],
  },
  {
    phase: "ФАЗА 4 — Архитектура + Портфолио",
    phaseColor: "#FFB800",
    weeks: [
      {
        week: 13,
        title: "Celery + очереди задач",
        days: [
          {
            day: "Пн",
            focus: "Celery базово",
            tasks: [
              "Установка, worker, broker",
              "Первая задача @app.task",
              "celery worker запуск",
            ],
          },
          {
            day: "Вт",
            focus: "Задачи",
            tasks: [
              "Передача аргументов",
              "delay() vs apply_async()",
              "Retry, max_retries",
            ],
          },
          {
            day: "Ср",
            focus: "Celery Beat",
            tasks: [
              "Периодические задачи",
              "Crontab расписание",
              "Celerybeat schedule",
            ],
          },
          {
            day: "Чт",
            focus: "Мониторинг",
            tasks: [
              "Flower: установка",
              "Просмотр задач",
              "Статистика воркеров",
            ],
          },
          {
            day: "Пт",
            focus: "Продвинуто",
            tasks: ["Chains, groups, chords", "Routing задач", "Priorities"],
          },
          {
            day: "Сб",
            focus: "RabbitMQ",
            tasks: [
              "RabbitMQ vs Redis как брокер",
              "Exchanges, queues, bindings",
              "Когда выбирать",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Добавить фоновую обработку в Task Manager",
              "Email-уведомления, отчёты по расписанию",
            ],
          },
        ],
        topics: [
          "Celery: workers, tasks, brokers",
          "delay(), apply_async(), retry",
          "Celery Beat: периодические задачи, crontab",
          "Flower: мониторинг",
          "Chains, groups, chords",
          "Redis vs RabbitMQ как брокер",
          "Routing задач по очередям",
        ],
        project:
          "Добавить в Blog API: фоновая отправка email при комментарии, еженедельный дайджест, экспорт данных в CSV",
        resources: [
          { type: "🌐", name: "Celery docs", url: "https://docs.celeryq.dev/" },
          {
            type: "📖",
            name: "Real Python — Celery + Django",
            url: "https://realpython.com/asynchronous-tasks-with-django-and-celery/",
          },
          {
            type: "🎥",
            name: "YouTube: Celery tutorial — Pretty Printed",
            url: "https://www.youtube.com/watch?v=THxCy-6EnQM",
          },
          {
            type: "🌐",
            name: "Flower docs",
            url: "https://flower.readthedocs.io/",
          },
        ],
        questions: [
          "Зачем нужен брокер сообщений? Чем отличается Redis от RabbitMQ?",
          "Чем Celery beat отличается от обычного worker?",
          "Как обработать ошибку в Celery-задаче через retry?",
          "Что такое chord в Celery? Когда использовать?",
          "Как мониторить застрявшие задачи?",
          "Как роутить разные типы задач на разные воркеры?",
          "Когда использовать Celery, а когда asyncio?",
          "Как тестировать Celery-задачи в pytest?",
        ],
      },
      {
        week: 14,
        title: "Паттерны проектирования + SOLID",
        days: [
          {
            day: "Пн",
            focus: "SOLID",
            tasks: [
              "SRP — Single Responsibility",
              "OCP — Open/Closed",
              "LSP — Liskov Substitution",
            ],
          },
          {
            day: "Вт",
            focus: "SOLID 2",
            tasks: [
              "ISP — Interface Segregation",
              "DIP — Dependency Inversion",
              "Примеры на Python",
            ],
          },
          {
            day: "Ср",
            focus: "Паттерны создания",
            tasks: [
              "Factory Method",
              "Abstract Factory",
              "Singleton (и почему осторожно)",
            ],
          },
          {
            day: "Чт",
            focus: "Паттерны структуры",
            tasks: [
              "Repository Pattern",
              "Adapter",
              "Decorator (не Python-декоратор)",
            ],
          },
          {
            day: "Пт",
            focus: "Паттерны поведения",
            tasks: ["Observer / Event system", "Strategy", "Command"],
          },
          {
            day: "Сб",
            focus: "Clean Architecture",
            tasks: [
              "Слои: Domain, Application, Infrastructure",
              "Dependency Rule",
              "Use Cases",
            ],
          },
          {
            day: "Вс",
            focus: "Рефакторинг",
            tasks: [
              "Переписать один модуль Task Manager по Clean Architecture",
              "Применить Repository",
            ],
          },
        ],
        topics: [
          "SOLID: все 5 принципов с примерами на Python",
          "Factory Method, Abstract Factory",
          "Singleton — осторожное применение",
          "Repository Pattern",
          "Observer / Event system",
          "Strategy, Command",
          "Clean Architecture: слои, Dependency Rule",
          "Service Layer паттерн",
        ],
        project:
          "Рефакторинг Task Manager по Clean Architecture: domain / application / infrastructure слои + Repository",
        resources: [
          {
            type: "🌐",
            name: "Refactoring Guru — паттерны (есть русский)",
            url: "https://refactoring.guru/ru/design-patterns",
          },
          {
            type: "📖",
            name: "Real Python — SOLID principles",
            url: "https://realpython.com/solid-principles-python/",
          },
          {
            type: "📖",
            name: "Книга: Clean Code — Robert Martin",
            url: "https://www.ozon.ru/product/chistyy-kod-sozdanie-analiz-i-refaktoring-martin-robert-s/",
          },
          {
            type: "🎥",
            name: "YouTube: Clean Architecture Python — ArjanCodes",
            url: "https://www.youtube.com/watch?v=C7MRkqP5NRI",
          },
          {
            type: "📖",
            name: "Книга: Architecture Patterns with Python (O'Reilly)",
            url: "https://www.oreilly.com/library/view/architecture-patterns-with/9781492052197/",
          },
        ],
        questions: [
          "Объясни принцип Dependency Inversion на конкретном примере.",
          "Что такое Repository паттерн? Какую проблему решает?",
          "Что нарушает Single Responsibility? Приведи пример плохого кода.",
          "В чём разница Strategy и Command паттернов?",
          "Что такое Clean Architecture? Почему Dependency Rule важен?",
          "Как написать код, который легко тестировать (testable code)?",
          "Чем Observer отличается от Event-driven architecture?",
          "Отрефактори функцию: def process(data, type, db, cache, email): ...",
        ],
      },
      {
        week: 15,
        title: "Производительность + безопасность",
        days: [
          {
            day: "Пн",
            focus: "Профилирование",
            tasks: [
              "cProfile, pstats",
              "py-spy — sampling profiler",
              "memory_profiler",
            ],
          },
          {
            day: "Вт",
            focus: "Оптимизация БД",
            tasks: [
              "EXPLAIN ANALYZE подробно",
              "Индексы: составные, частичные",
              "Partitioning",
            ],
          },
          {
            day: "Ср",
            focus: "Кеширование стратегии",
            tasks: [
              "Cache-Aside",
              "Write-Through, Write-Behind",
              "Cache invalidation",
            ],
          },
          {
            day: "Чт",
            focus: "Connection pooling",
            tasks: [
              "asyncpg + pgbouncer",
              "SQLAlchemy pool settings",
              "Нагрузочный тест (locust)",
            ],
          },
          {
            day: "Пт",
            focus: "Безопасность",
            tasks: [
              "OWASP Top 10 детально",
              "SQL injection демо",
              "XSS, CSRF защита",
            ],
          },
          {
            day: "Сб",
            focus: "Безопасные заголовки",
            tasks: [
              "Security headers (HSTS, CSP)",
              "Content-Type sniffing",
              "Secrets management",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Запустить locust на Task Manager",
              "Найти и исправить N+1",
              "Добавить составные индексы",
            ],
          },
        ],
        topics: [
          "cProfile, py-spy, memory_profiler",
          "EXPLAIN ANALYZE: детальный разбор",
          "Составные и частичные индексы",
          "Стратегии кеширования: Cache-Aside, Write-Through",
          "Cache invalidation strategies",
          "asyncpg, pgbouncer, connection pool settings",
          "Нагрузочное тестирование: locust",
          "OWASP Top 10: практические примеры",
          "Security headers, secrets management",
        ],
        project:
          "Нагрузочный тест Task Manager: найти bottleneck, оптимизировать до 2x+ RPS через индексы и кеш",
        resources: [
          {
            type: "🌐",
            name: "OWASP Top 10",
            url: "https://owasp.org/www-project-top-ten/",
          },
          { type: "🌐", name: "Locust docs", url: "https://docs.locust.io/" },
          {
            type: "📖",
            name: "Use The Index, Luke",
            url: "https://use-the-index-luke.com/",
          },
          {
            type: "🌐",
            name: "PostgreSQL EXPLAIN",
            url: "https://www.postgresql.org/docs/current/sql-explain.html",
          },
          {
            type: "🎥",
            name: "YouTube: Python Performance — mCoding",
            url: "https://www.youtube.com/watch?v=W1gu8RVZvAI",
          },
        ],
        questions: [
          "Как найти медленный участок кода с помощью cProfile?",
          "Как прочитать вывод EXPLAIN ANALYZE? На что смотреть?",
          "Что такое частичный индекс? Когда его применять?",
          "Как работает Cache-Aside? Что такое cache stampede?",
          "Что такое SQL-инъекция? Покажи пример уязвимого кода.",
          "Зачем нужен pgbouncer? Когда connection pool не хватает?",
          "Как locust помогает найти bottleneck в API?",
          "Что такое HSTS и зачем он нужен?",
        ],
      },
      {
        week: 16,
        title: "System Design — основы",
        days: [
          {
            day: "Пн",
            focus: "Масштабирование",
            tasks: [
              "Вертикальное vs горизонтальное",
              "Load balancer",
              "Stateless services",
            ],
          },
          {
            day: "Вт",
            focus: "CAP и базы данных",
            tasks: ["CAP теорема", "ACID vs BASE", "Когда NoSQL, когда SQL"],
          },
          {
            day: "Ср",
            focus: "Кеширование на уровне системы",
            tasks: [
              "CDN",
              "Distributed cache (Redis Cluster)",
              "Cache eviction policies",
            ],
          },
          {
            day: "Чт",
            focus: "Очереди и события",
            tasks: [
              "Message queues",
              "Event-driven architecture",
              "Pub/Sub паттерн",
            ],
          },
          {
            day: "Пт",
            focus: "Микросервисы",
            tasks: [
              "Монолит vs микросервисы",
              "API Gateway",
              "Service discovery",
            ],
          },
          {
            day: "Сб",
            focus: "Отказоустойчивость",
            tasks: [
              "Circuit Breaker",
              "Retry + backoff",
              "Health checks, graceful shutdown",
            ],
          },
          {
            day: "Вс",
            focus: "Практика",
            tasks: [
              "Спроектируй URL shortener (схема + компоненты)",
              "Спроектируй систему уведомлений",
            ],
          },
        ],
        topics: [
          "Горизонтальное и вертикальное масштабирование",
          "Load balancer, stateless services",
          "CAP теорема, ACID vs BASE",
          "CDN, distributed cache",
          "Cache eviction: LRU, LFU",
          "Message queues, Event-driven architecture",
          "Микросервисы: API Gateway, service discovery",
          "Circuit Breaker, retry с backoff",
          "Graceful shutdown",
        ],
        project:
          "Нарисовать архитектуру двух систем: URL shortener и система уведомлений — с компонентами и объяснением выборов",
        resources: [
          {
            type: "🌐",
            name: "System Design Primer (GitHub)",
            url: "https://github.com/donnemartin/system-design-primer",
          },
          {
            type: "📖",
            name: "Книга: Designing Data-Intensive Applications — Kleppmann",
            url: "https://dataintensive.net/",
          },
          {
            type: "🎥",
            name: "ByteByteGo — System Design YouTube",
            url: "https://www.youtube.com/@ByteByteGo",
          },
          {
            type: "🌐",
            name: "ByteByteGo Newsletter",
            url: "https://blog.bytebytego.com/",
          },
          {
            type: "🎥",
            name: "YouTube: System Design Interview — Gaurav Sen",
            url: "https://www.youtube.com/c/GauravSensei",
          },
        ],
        questions: [
          "Что такое CAP теорема? Какую комбинацию выбирает Postgres?",
          "Когда стоит выбирать микросервисы вместо монолита?",
          "Как работает Circuit Breaker? Зачем он нужен?",
          "Что такое graceful shutdown и как его реализовать в FastAPI?",
          "Чем LRU отличается от LFU вытеснения кеша?",
          "Что такое event sourcing?",
          "Как спроектировать систему, выдерживающую 10,000 RPS?",
          "Спроектируй ленту новостей для социальной сети (компоненты).",
        ],
      },
      {
        week: 17,
        title: "Финальный проект + AI-интеграция",
        days: [
          {
            day: "Пн",
            focus: "Планирование",
            tasks: [
              "Выбрать идею проекта",
              "Спроектировать архитектуру",
              "ERD диаграмма",
            ],
          },
          {
            day: "Вт",
            focus: "Базовый скелет",
            tasks: ["Структура проекта", "Модели + миграции", "Docker-compose"],
          },
          {
            day: "Ср",
            focus: "Бизнес-логика",
            tasks: ["Основные эндпоинты", "Celery задачи", "Аутентификация"],
          },
          {
            day: "Чт",
            focus: "AI интеграция",
            tasks: [
              "Anthropic / OpenAI API",
              "Streaming responses",
              "Prompt engineering основы",
            ],
          },
          {
            day: "Пт",
            focus: "Тесты + CI/CD",
            tasks: [
              "Покрыть тестами 75%+",
              "Настроить GitHub Actions",
              "Деплой",
            ],
          },
          {
            day: "Сб",
            focus: "Документация",
            tasks: [
              "README с архитектурой",
              "Swagger полностью",
              "Примеры запросов",
            ],
          },
          {
            day: "Вс",
            focus: "Финализация",
            tasks: [
              "Code review всего проекта",
              "Записать демо",
              "Добавить в резюме/GitHub",
            ],
          },
        ],
        topics: [
          "Полный стек: FastAPI + PostgreSQL + Redis + Celery + Docker",
          "Интеграция с внешними API (httpx, aiohttp)",
          "Anthropic / OpenAI API: запросы, streaming",
          "Background tasks в FastAPI",
          "README как часть портфолио",
          "Архитектурная диаграмма (draw.io / Excalidraw)",
          "Демо-видео или live-деплой",
        ],
        project:
          "AI-powered сервис: например, AI code reviewer, summarizer, Q&A бот по документам — полный стек с деплоем",
        resources: [
          {
            type: "🌐",
            name: "Anthropic API docs",
            url: "https://docs.anthropic.com/",
          },
          {
            type: "🌐",
            name: "OpenAI API docs",
            url: "https://platform.openai.com/docs",
          },
          {
            type: "🌐",
            name: "httpx docs",
            url: "https://www.python-httpx.org/",
          },
          {
            type: "🌐",
            name: "Excalidraw (диаграммы)",
            url: "https://excalidraw.com/",
          },
          {
            type: "📖",
            name: "Статья: Production-ready FastAPI",
            url: "https://testdriven.io/blog/moving-from-flask-to-fastapi/",
          },
        ],
        questions: [
          "Как сделать запрос к LLM API асинхронно с timeout?",
          "Как реализовать streaming ответа от AI в FastAPI?",
          "Что нужно описать в README проекта для работодателя?",
          "Как безопасно хранить API ключи в продакшене?",
          "Как обработать rate limit от внешнего API?",
          "Какие метрики важно отслеживать в production?",
          "Как ты объяснишь архитектуру проекта на собеседовании?",
          "Что ты сделал бы по-другому, если бы начинал снова?",
        ],
      },
      {
        week: 18,
        title: "Подготовка к собеседованию",
        days: [
          {
            day: "Пн",
            focus: "Алгоритмы",
            tasks: [
              "LeetCode: Array, String (5 задач)",
              "Сложность O(n), O(log n)",
              "Two pointers, sliding window",
            ],
          },
          {
            day: "Вт",
            focus: "Алгоритмы 2",
            tasks: [
              "LeetCode: Hash Map, Stack (5 задач)",
              "Binary search",
              "Рекурсия",
            ],
          },
          {
            day: "Ср",
            focus: "Python вопросы",
            tasks: [
              "GIL, memory model",
              "Garbage collector",
              "Углублённые вопросы по OOP",
            ],
          },
          {
            day: "Чт",
            focus: "System Design mock",
            tasks: [
              "Спроектировать систему за 45 мин",
              "Обосновать каждый выбор",
              "Q&A",
            ],
          },
          {
            day: "Пт",
            focus: "Поведенческие вопросы",
            tasks: [
              "STAR метод",
              "Расскажи о проекте",
              "Конфликты, провалы, успехи",
            ],
          },
          {
            day: "Сб",
            focus: "Резюме и GitHub",
            tasks: [
              "Оформить резюме (1 страница)",
              "GitHub: README, pinned repos",
              "LinkedIn профиль",
            ],
          },
          {
            day: "Вс",
            focus: "Mock интервью",
            tasks: [
              "Провести mock на interviewing.io",
              "Записать ответ на вопрос о проекте",
              "Подготовить вопросы работодателю",
            ],
          },
        ],
        topics: [
          "LeetCode: Array, String, HashMap, Stack, Two Pointers",
          "Временная и пространственная сложность (Big O)",
          "GIL, garbage collector, memory model Python",
          "System Design mock: 45 минут на систему",
          "STAR метод для поведенческих вопросов",
          "Оформление резюме и GitHub профиля",
          "Вопросы работодателю (что спросить на интервью)",
        ],
        project:
          "Финальная проверка: пройти 2 mock-интервью, оформить резюме, задеплоить оба пет-проекта с живыми URL",
        resources: [
          {
            type: "🏋️",
            name: "LeetCode — Top Interview 150",
            url: "https://leetcode.com/studyplan/top-interview-150/",
          },
          {
            type: "📖",
            name: "Real Python — Python Interview Questions",
            url: "https://realpython.com/interview-questions-python/",
          },
          {
            type: "🎥",
            name: "Mock интервью — interviewing.io",
            url: "https://interviewing.io/",
          },
          {
            type: "🌐",
            name: "Python Interview Questions — список",
            url: "https://github.com/alexprut/Designing-Data-Intensive-Applications-Notes",
          },
          {
            type: "📖",
            name: "Книга: Cracking the Coding Interview",
            url: "https://www.ozon.ru/product/vzlom-intervyu-po-programmirovaniyu/",
          },
          {
            type: "🏋️",
            name: "NeetCode.io (структурированный LeetCode)",
            url: "https://neetcode.io/",
          },
        ],
        questions: [
          "Объясни GIL в Python. Когда он мешает и как обойти?",
          "Как работает garbage collector в Python (reference counting + cyclic GC)?",
          "Что такое __slots__ и как влияет на память?",
          "Объясни разницу threading vs multiprocessing vs asyncio.",
          "Реши: найди два числа в массиве, дающих в сумме target (Two Sum).",
          "Спроектируй систему за 45 минут: чат-мессенджер.",
          "Расскажи о самом сложном техническом решении в своих проектах.",
          "Какие вопросы ты задашь работодателю на интервью?",
        ],
      },
    ],
  },
];

const STORAGE_KEYS = {
  topicStatus: "roadmap_topic_status_v1",
  weekDone: "roadmap_week_done_v1",
};

function readStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
}

function normalize(text) {
  return String(text ?? "")
    .toLowerCase()
    .trim();
}

function weekMatchesSearch(week, query) {
  if (!query) return true;
  const q = normalize(query);

  return (
    normalize(week.title).includes(q) ||
    normalize(week.project).includes(q) ||
    week.topics.some((topic) => normalize(topic).includes(q)) ||
    week.questions.some((question) => normalize(question).includes(q)) ||
    week.days.some(
      (day) =>
        normalize(day.day).includes(q) ||
        normalize(day.focus).includes(q) ||
        day.tasks.some((task) => normalize(task).includes(q)),
    )
  );
}

function getWeekProgress(week, topicStatus) {
  const statuses = week.topics.map(
    (_, i) => topicStatus[`${week.week}-${i}`] || "none",
  );
  const done = statuses.filter((s) => s === "done").length;
  const total = week.topics.length;
  return {
    done,
    total,
    percent: total ? Math.round((done / total) * 100) : 0,
  };
}

export default function App() {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [activeTab, setActiveTab] = useState("days");
  const [topicStatus, setTopicStatus] = useState(() =>
    readStorage(STORAGE_KEYS.topicStatus, {}),
  );
  const [weekDone, setWeekDone] = useState(() =>
    readStorage(STORAGE_KEYS.weekDone, {}),
  );
  const [expandedDay, setExpandedDay] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    writeStorage(STORAGE_KEYS.topicStatus, topicStatus);
  }, [topicStatus]);

  useEffect(() => {
    writeStorage(STORAGE_KEYS.weekDone, weekDone);
  }, [weekDone]);

  const doneTopics = Object.values(topicStatus).filter(
    (v) => v === "done",
  ).length;
  const inProgressTopics = Object.values(topicStatus).filter(
    (v) => v === "inprogress",
  ).length;
  const totalWeeks = roadmap.reduce((a, p) => a + p.weeks.length, 0);
  const doneWeeks = Object.values(weekDone).filter(Boolean).length;
  const globalProgress = Math.round((doneWeeks / totalWeeks) * 100);

  const filteredRoadmap = useMemo(() => {
    return roadmap
      .map((phase) => ({
        ...phase,
        weeks: phase.weeks.filter((week) => weekMatchesSearch(week, search)),
      }))
      .filter((phase) => phase.weeks.length > 0);
  }, [search]);

  const cycleStatus = (key) => {
    setTopicStatus((prev) => {
      const cur = prev[key] || "none";
      const next =
        cur === "none" ? "inprogress" : cur === "inprogress" ? "done" : "none";
      return { ...prev, [key]: next };
    });
  };

  const toggleWeek = (wk) => {
    setExpandedWeek(expandedWeek === wk ? null : wk);
    setActiveTab("days");
    setExpandedDay(null);
  };

  const resetProgress = () => {
    setTopicStatus({});
    setWeekDone({});
    setExpandedWeek(null);
    setExpandedDay(null);
  };

  const markWeekTopics = (week, status) => {
    setTopicStatus((prev) => {
      const next = { ...prev };
      week.topics.forEach((_, i) => {
        next[`${week.week}-${i}`] = status;
      });
      return next;
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(0,194,255,0.08), transparent 22%), #09090F",
        color: "#E2E2E2",
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
        html, body, #root {
        margin: 0;
        padding: 0;
        min-height: 100%;
        width: 100%;
        background: #09090F;
  }
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:6px}
        ::-webkit-scrollbar-thumb{background:#2a2a3e;border-radius:999px}
        .wcard{transition:background 0.18s,border-color 0.18s,transform 0.18s;cursor:pointer;box-shadow:0 8px 30px rgba(0,0,0,0.18)}
        .wcard:hover{background:#10101A !important;border-color:#2a2a3e !important;transform:translateY(-1px)}
        .tab{transition:all 0.15s;cursor:pointer;border:none;font-family:inherit}
        .trow{transition:border-color 0.15s, transform 0.15s;cursor:pointer}
        .trow:hover{border-color:#444 !important;transform:translateX(2px)}
        .day-row{transition:background 0.12s;cursor:pointer}
        .day-row:hover{background:#161622 !important}
        a{color:#9CA3AF;text-decoration:none;transition:color 0.15s}
        a:hover{color:#00FF94}
        .search{
          width:100%;
          background:#10101A;
          border:1px solid #202036;
          color:#E5E7EB;
          border-radius:10px;
          padding:12px 14px;
          font:inherit;
          outline:none;
        }
        .search:focus{
          border-color:#00C2FF;
          box-shadow:0 0 0 3px rgba(0,194,255,0.12);
        }
        .ghost-btn{
          background:#12121D;
          border:1px solid #232338;
          color:#9CA3AF;
          border-radius:8px;
          padding:9px 12px;
          font:inherit;
          cursor:pointer;
          transition:all 0.15s;
        }
        .ghost-btn:hover{
          color:#E5E7EB;
          border-color:#3a3a52;
          background:#161625;
        }
      `}</style>

      {/* HEADER */}
      
      <div
        style={{
          background: "rgba(13,13,24,0.88)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #1a1a2e",
          padding: "24px 20px 20px",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div style={{ flex: 1, minWidth: 260 }}>
              <div
                style={{
                  fontSize: 10,
                  color: "#00FF94",
                  letterSpacing: "0.25em",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                MIDDLE PYTHON BACKEND · 2026
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#FFF" }}>
                Детальный Roadmap
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#6B7280",
                  marginTop: 8,
                  lineHeight: 1.6,
                  maxWidth: 620,
                }}
              >
                18 недель · 4 фазы · прогресс сохраняется автоматически · есть
                поиск по неделям, темам, вопросам и задачам
              </div>

              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <input
                  className="search"
                  placeholder="Поиск по теме, неделе, проекту или вопросу..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ maxWidth: 420 }}
                />
                <button className="ghost-btn" onClick={resetProgress}>
                  Сбросить прогресс
                </button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  minWidth: 90,
                  padding: "10px 12px",
                  border: "1px solid #1F2937",
                  borderRadius: 10,
                  background: "#0F111B",
                }}
              >
                <div
                  style={{ fontSize: 24, fontWeight: 700, color: "#00FF94" }}
                >
                  {globalProgress}%
                </div>
                <div style={{ fontSize: 10, color: "#6B7280" }}>
                  {doneWeeks}/{totalWeeks} нед
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  minWidth: 90,
                  padding: "10px 12px",
                  border: "1px solid #1F2937",
                  borderRadius: 10,
                  background: "#0F111B",
                }}
              >
                <div
                  style={{ fontSize: 24, fontWeight: 700, color: "#FFB800" }}
                >
                  {inProgressTopics}
                </div>
                <div style={{ fontSize: 10, color: "#6B7280" }}>в процессе</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  minWidth: 90,
                  padding: "10px 12px",
                  border: "1px solid #1F2937",
                  borderRadius: 10,
                  background: "#0F111B",
                }}
              >
                <div
                  style={{ fontSize: 24, fontWeight: 700, color: "#00C2FF" }}
                >
                  {doneTopics}
                </div>
                <div style={{ fontSize: 10, color: "#6B7280" }}>тем готово</div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 16,
              height: 6,
              background: "#171A28",
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${globalProgress}%`,
                background: "linear-gradient(90deg,#00FF94,#00C2FF)",
                borderRadius: 999,
                transition: "width 0.4s",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 10,
              fontSize: 10,
              color: "#6B7280",
              flexWrap: "wrap",
            }}
          >
            <span>
              ● <span style={{ color: "#2A2A3E" }}>■</span> Не начато
            </span>
            <span>
              ● <span style={{ color: "#FFB800" }}>■</span> В процессе
            </span>
            <span>
              ● <span style={{ color: "#00FF94" }}>■</span> Готово
            </span>
            <span style={{ marginLeft: "auto" }}>
              Клик по теме меняет статус
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{ maxWidth: 920, margin: "0 auto", padding: "24px 16px 80px" }}
      >
        {filteredRoadmap.length === 0 && (
          <div
            style={{
              background: "#0D0D18",
              border: "1px solid #1a1a2e",
              borderRadius: 10,
              padding: 18,
              color: "#9CA3AF",
              marginBottom: 18,
            }}
          >
            Ничего не найдено. Попробуй другой запрос.
          </div>
        )}

        {filteredRoadmap.map((phase) => (
          <div key={phase.phase} style={{ marginBottom: 44 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
                padding: "0 4px",
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 20,
                  background: phase.phaseColor,
                  borderRadius: 999,
                }}
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: phase.phaseColor,
                  letterSpacing: "0.18em",
                }}
              >
                {phase.phase}
              </div>
            </div>

            {phase.weeks.map((w) => {
              const isOpen = expandedWeek === w.week;
              const isDone = weekDone[w.week];
              const progress = getWeekProgress(w, topicStatus);

              return (
                <div
                  key={w.week}
                  className="wcard"
                  style={{
                    background: isOpen ? "#0F0F1A" : "#0C0C16",
                    border: `1px solid ${isOpen ? "#252535" : "#181828"}`,
                    borderRadius: 14,
                    marginBottom: 10,
                    overflow: "hidden",
                  }}
                >
                  {/* Week header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "15px 16px",
                    }}
                    onClick={() => toggleWeek(w.week)}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setWeekDone((p) => ({ ...p, [w.week]: !p[w.week] }));
                      }}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 6,
                        border: `2px solid ${isDone ? phase.phaseColor : "#2a2a3e"}`,
                        background: isDone ? phase.phaseColor : "transparent",
                        cursor: "pointer",
                        flexShrink: 0,
                        color: isDone ? "#09090F" : "transparent",
                        fontSize: 13,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.15s",
                      }}
                    >
                      ✓
                    </button>

                    <span
                      style={{
                        fontSize: 10,
                        color: "#4B5563",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        minWidth: 54,
                      }}
                    >
                      НЕД {w.week}
                    </span>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: isDone ? "#6B7280" : "#E5E7EB",
                        }}
                      >
                        {w.title}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginTop: 7,
                          flexWrap: "wrap",
                        }}
                      >
                        <div
                          style={{
                            height: 4,
                            flex: 1,
                            background: "#1a1a2e",
                            borderRadius: 999,
                            maxWidth: 160,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              width: `${progress.percent}%`,
                              background: phase.phaseColor,
                              borderRadius: 999,
                              transition: "width 0.3s",
                            }}
                          />
                        </div>
                        <span style={{ fontSize: 10, color: "#6B7280" }}>
                          {progress.done}/{progress.total} тем
                        </span>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: 10,
                        color: "#4B5563",
                        transform: isOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    >
                      ▼
                    </span>
                  </div>

                  {isOpen && (
                    <div style={{ borderTop: "1px solid #181828" }}>
                      {/* Tabs */}
                      <div
                        style={{
                          display: "flex",
                          gap: 6,
                          padding: "12px 16px 0",
                          flexWrap: "wrap",
                        }}
                      >
                        {[
                          "days",
                          "topics",
                          "project",
                          "resources",
                          "questions",
                        ].map((tab) => {
                          const labels = {
                            days: "📅 По дням",
                            topics: "📋 Темы",
                            project: "🚀 Проект",
                            resources: "📚 Ресурсы",
                            questions: "❓ Вопросы",
                          };
                          const active = activeTab === tab;
                          return (
                            <button
                              key={tab}
                              className="tab"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTab(tab);
                              }}
                              style={{
                                padding: "7px 11px",
                                borderRadius: 8,
                                fontSize: 11,
                                fontWeight: 600,
                                background: active
                                  ? phase.phaseColor
                                  : "#151525",
                                color: active ? "#09090F" : "#6B7280",
                                letterSpacing: "0.03em",
                              }}
                            >
                              {labels[tab]}
                            </button>
                          );
                        })}
                      </div>

                      <div style={{ padding: "14px 16px 16px" }}>
                        {activeTab === "days" && (
                          <div>
                            {w.days.map((d, di) => (
                              <div key={di}>
                                <div
                                  className="day-row"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "10px 8px",
                                    borderRadius: 8,
                                    background:
                                      expandedDay === `${w.week}-${di}`
                                        ? "#161622"
                                        : "transparent",
                                  }}
                                  onClick={() =>
                                    setExpandedDay(
                                      expandedDay === `${w.week}-${di}`
                                        ? null
                                        : `${w.week}-${di}`,
                                    )
                                  }
                                >
                                  <div
                                    style={{
                                      minWidth: 28,
                                      fontSize: 10,
                                      fontWeight: 700,
                                      color: phase.phaseColor,
                                      letterSpacing: "0.05em",
                                    }}
                                  >
                                    {d.day}
                                  </div>
                                  <div
                                    style={{
                                      flex: 1,
                                      fontSize: 13,
                                      color: "#D1D5DB",
                                    }}
                                  >
                                    {d.focus}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 9,
                                      color: "#4B5563",
                                      transform:
                                        expandedDay === `${w.week}-${di}`
                                          ? "rotate(180deg)"
                                          : "none",
                                      transition: "transform 0.15s",
                                    }}
                                  >
                                    ▼
                                  </div>
                                </div>

                                {expandedDay === `${w.week}-${di}` && (
                                  <div
                                    style={{
                                      paddingLeft: 40,
                                      paddingBottom: 8,
                                    }}
                                  >
                                    {d.tasks.map((t, ti) => (
                                      <div
                                        key={ti}
                                        style={{
                                          display: "flex",
                                          gap: 8,
                                          fontSize: 12,
                                          color: "#A1A1AA",
                                          marginBottom: 6,
                                          lineHeight: 1.6,
                                        }}
                                      >
                                        <span
                                          style={{
                                            color: "#4B5563",
                                            flexShrink: 0,
                                          }}
                                        >
                                          ○
                                        </span>
                                        {t}
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {di < w.days.length - 1 && (
                                  <div
                                    style={{
                                      height: 1,
                                      background: "#111827",
                                      margin: "2px 0",
                                    }}
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {activeTab === "topics" && (
                          <div>
                            <div
                              style={{
                                display: "flex",
                                gap: 8,
                                flexWrap: "wrap",
                                marginBottom: 12,
                              }}
                            >
                              <button
                                className="ghost-btn"
                                onClick={() => markWeekTopics(w, "inprogress")}
                              >
                                Всё в процессе
                              </button>
                              <button
                                className="ghost-btn"
                                onClick={() => markWeekTopics(w, "done")}
                              >
                                Всё готово
                              </button>
                              <button
                                className="ghost-btn"
                                onClick={() => markWeekTopics(w, "none")}
                              >
                                Сбросить темы
                              </button>
                            </div>

                            <div
                              style={{
                                fontSize: 10,
                                color: "#6B7280",
                                marginBottom: 10,
                              }}
                            >
                              Клик по теме: не начато → в процессе → готово
                            </div>

                            {w.topics.map((t, i) => {
                              const key = `${w.week}-${i}`;
                              const st = topicStatus[key] || "none";
                              return (
                                <div
                                  key={i}
                                  className="trow"
                                  onClick={() => cycleStatus(key)}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "10px 12px",
                                    borderRadius: 8,
                                    border: `1px solid ${st === "none" ? "#151525" : STATUS_COLOR[st]}22`,
                                    marginBottom: 8,
                                    background: `${STATUS_COLOR[st]}10`,
                                    cursor: "pointer",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: 8,
                                      height: 8,
                                      borderRadius: "50%",
                                      background: STATUS_COLOR[st],
                                      flexShrink: 0,
                                    }}
                                  />
                                  <div
                                    style={{
                                      flex: 1,
                                      fontSize: 12,
                                      color:
                                        st === "done" ? "#6B7280" : "#D1D5DB",
                                      textDecoration:
                                        st === "done" ? "line-through" : "none",
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    {t}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 10,
                                      color: STATUS_COLOR[st],
                                      minWidth: 90,
                                      textAlign: "right",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {STATUS_LABEL[st]}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {activeTab === "project" && (
                          <div
                            style={{
                              background: `${phase.phaseColor}10`,
                              border: `1px solid ${phase.phaseColor}30`,
                              borderRadius: 10,
                              padding: "16px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                                color: phase.phaseColor,
                                letterSpacing: "0.15em",
                                marginBottom: 10,
                              }}
                            >
                              🚀 ПРОЕКТ НЕДЕЛИ
                            </div>
                            <div
                              style={{
                                fontSize: 14,
                                color: "#E5E7EB",
                                lineHeight: 1.8,
                              }}
                            >
                              {w.project}
                            </div>
                            <div
                              style={{
                                marginTop: 14,
                                fontSize: 11,
                                color: "#6B7280",
                                lineHeight: 1.7,
                              }}
                            >
                              ✓ Реализуй проект к концу недели
                              <br />
                              ✓ Сохрани код в GitHub
                              <br />✓ Напиши README с описанием
                            </div>
                          </div>
                        )}

                        {activeTab === "resources" && (
                          <div>
                            {w.resources.map((r, i) => (
                              <div
                                key={i}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 12,
                                  padding: "10px 8px",
                                  borderBottom: "1px solid #111827",
                                }}
                              >
                                <span style={{ fontSize: 16, flexShrink: 0 }}>
                                  {r.type}
                                </span>
                                <a
                                  href={r.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  style={{ fontSize: 12, lineHeight: 1.5 }}
                                >
                                  {r.name}
                                </a>
                              </div>
                            ))}
                          </div>
                        )}

                        {activeTab === "questions" && (
                          <div>
                            {w.questions.map((q, i) => (
                              <div
                                key={i}
                                style={{
                                  display: "flex",
                                  gap: 10,
                                  padding: "10px 0",
                                  borderBottom: "1px solid #111827",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: 10,
                                    color: "#4B5563",
                                    minWidth: 20,
                                    fontWeight: 700,
                                    paddingTop: 2,
                                  }}
                                >
                                  {i + 1}.
                                </span>
                                <span
                                  style={{
                                    fontSize: 12,
                                    color: "#D1D5DB",
                                    lineHeight: 1.7,
                                  }}
                                >
                                  {q}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        <div
          style={{
            background: "#0D0D18",
            border: "1px solid #1a1a2e",
            borderRadius: 10,
            padding: "18px",
            fontSize: 11,
            color: "#6B7280",
            lineHeight: 1.9,
          }}
        >
          <span style={{ color: "#00FF94" }}>💡 Что уже добавлено:</span>
          <br />· сохранение прогресса в localStorage
          <br />· поиск по неделям, темам, проектам, вопросам и задачам
          <br />· кнопка сброса прогресса
          <br />· массовое обновление статусов тем внутри недели
          <br />· обновлённая первая неделя под Python 3.14.x
        </div>
      </div>
    </div>
  );
}
