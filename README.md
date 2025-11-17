# Centria TKI News Platform

A modern, responsive news web application built with **Next.js**, **Tailwing**, **Zustand**, and **Axios**. Users can browse news by category, paginate articles, view single articles, and search with live suggestions.

---

## Features

- **Category Browsing**: Top News, Business, Sports, Entertainment, Technology, Science, Health  
- **Single Article Pages**: Full details including title, image, content, author, source, and date  
- **Search Suggestions**: Live results as users type  
- **Responsive Design**: Mobile and desktop friendly  
- **State Management**: Categories and pagination handled via **Zustand**

---

## Technologies

- **Frontend**: Next.js, React, Tailwind CSS  
- **State**: Zustand  
- **API Requests**: Axios  
- **Deployment**: Vercel compatible  

---


## Create a .env file:

BASE_URL=https://newsapi.org/v2
API_KEY=your_api_key

---

## Usage

- Browsing Articles

  -  Select category to filter articles.

  - Featured article and list of additional articles displayed.

- Pagination

  - Navigate pages via Next / Previous.

  - Page state updates dynamically.

- Single Article View

   - Open via /article?title=....

   - Shows full content, image, author, source, and date.

- Search Suggestions

  -  Typing triggers live article suggestions.

  -  Click suggestion to open single article page.


## API Routes

| Route                      | Method | Description                       |
| -------------------------- | ------ | --------------------------------- |
| `/api/article-metadata`    | GET    | Fetch articles by category        |
| `/api/single-article`      | GET    | Fetch single article by title/URL |
| `/api/article-suggestions` | GET    | Search suggestion results         |


## Installation

```bash
git clone https://github.com/yourusername/centria-tki-news.git
cd centria-tki-news
npm install
npm run dev

