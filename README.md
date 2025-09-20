# DudeShape

## 📜 Лицензия
Этот проект распространяется под лицензией **MIT**.  
Подробнее см. [LICENSE](LICENSE).

**Описание проекта**: House — это сайт мебельного магазина с модальными окнами, регистрацией(авторизацией) и fsd архитектурой, он написан на NextJS(TypeScript), NestJS и Scss.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NextJS](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)](https://nextjs.org/)
[![NestJS Version](https://img.shields.io/badge/NestJS-9%2B-E0234E?logo=nestjs)](https://nestjs.com)

### Функционал

- Адаптивный дизайн
- На мобильных устройствах бургер меню
- Анимации при наведении, фокусировании и нажатии
- Регистрация
- Авторизация
- JWT
- Модальные окна
- Валидация данных
- Автоматическая прокрутка
- Бизнес логика

### Технологии
- **Frontend**: React 18, TypeScript, Zustand, React Router 6, React Query, Axios, Vite, SCSS, SVGR.
  [![NextJS](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)](https://nextjs.org/) 
  [![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-%233178C6?logo=typescript)](https://www.typescriptlang.org/)  
  [![Zustand](https://img.shields.io/badge/Zustand-4.4-%23000000?logo=zustand)](https://github.com/pmndrs/zustand) 
  [![React Query](https://img.shields.io/badge/React_Query-5-%23FF4154?logo=react-query)](https://tanstack.com/query/latest/)  
  [![Zod](https://img.shields.io/badge/Zod-1.0-%23007ACC?logo=zod)](https://github.com/colinhacks/zod)
  [![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.0-%2361DAFB?logo=react)](https://react-hook-form.com/)
  [![Axios](https://img.shields.io/badge/Axios-1.x-%235A29E4?logo=axios)](https://axios-http.com/)   
  [![SCSS](https://img.shields.io/badge/SCSS-1.65%2B-%23CC6699?logo=sass)](https://sass-lang.com/)  
  [![SVGR](https://img.shields.io/badge/SVGR-8-%23FF4785?logo=svg)](https://react-svgr.com/)  
  [![FSD](https://img.shields.io/badge/FSD-Architecture-%23007EC6)](https://feature-sliced.design/)
- **Backend**: Express, MySQL, TypeORM.
   [![NestJS](https://img.shields.io/badge/NestJS-10-%23E0234E?logo=nestjs)](https://nestjs.com/)  
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-%23336791?logo=postgresql)](https://www.postgresql.org/)  
  [![TypeORM](https://img.shields.io/badge/TypeORM-0.3-%23FE0909?logo=typeorm)](https://typeorm.io/)   
- **Дизайн**: Figma.
  [![Figma](https://img.shields.io/badge/Figma-Design-%23F24E1E?logo=figma)](https://figma.com/)

### Установка

1. Клонирование репозитория:

   ```bash
   git clone https://github.com/BlackDarkes/DudeShape.git

   ```

2. Запустите проект:
   
    Node.js >= 18.x
    npm >= 9.x
   ```bash
   cd api && npm install && npm start
   cd frontend && npm install && npm run dev
   ```

### Пример кода

1. React

```TypeScript
"use client";

import { useStore } from "@/app/store/store";
import { FlashButton } from "../FlashButton/FlashButton";
import { useTimeClose } from "@/features/flashMessage";
import styles from './FlashMessage.module.scss'

export const FlashMessage = () => {
  const { message, flashIsOpen } = useStore();

  useTimeClose();

  return (
    <section className={`${styles.flash} ${flashIsOpen ? styles.flashShow : ""}`}>
      <FlashButton />

      <p className={styles.flashText}>{message}</p>
    </section>
  );
};

```

### Структура проекта:
    project/  
    ├── frontend/       
    ├── api/        
    └── README.md  

## Изображения проекта:
1. **Desktop изображения:**
  ![Главная страница (десктоп)](images/desctop/home.png)
  *Рис. 1: Главная страница сайта в десктопной версии.* 

  ![Бургер меню (десктоп)](images/desctop/burger.png)
  *Рис. 2: Бургер меню в десктопной версии.* 

  ![Форма авторизации (десктоп)](images/desctop/form.png)
  *Рис. 3: Форма авторизации.*

  ![Форма авторизации с валидацией (десктоп)](images/desctop/validationpng.png)
  *Рис. 4: Форма авторизации с валидацией.*

1. **Mobile изображения:**
   
   ![Главная страница (мобильный)](images/mobile/home.png)

   *Рис. 5: Главная страница сайта в мобильной версии.*

   ![Бургер меню (мобильный)](images/mobile/burger.png)

   *Рис. 6: Бургер меню в мобильной версии.*

   ![Бургер меню в авторизованном режиме (мобильный)](images/mobile/burger_auth.png)

   *Рис. 7: Бургер меню в авторизованном режиме в мобильной версии.*

   ![Форма авторизации с валидацией (мобильный)](images/mobile/form.png)

   *Рис. 8: Форма авторизации с валидацией в мобильной версии.*

   ![Flash сообщение от успешной авторизацией (мобильный)](images/mobile/flash.png)

   *Рис. 9: Flash сообщение от успешной авторизацией в мобильной версии.*

   ![Бургер меню при авторизации (мобильный)](images/mobile/burger_auth.png)

   *Рис. 10: Бургер меню при авторизации в мобильной версии.*