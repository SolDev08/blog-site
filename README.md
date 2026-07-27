# Blog Site

A full-stack blog application built to practice and demonstrate modern web development skills — covering routing, database design, server actions, and UI implementation.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Database:** SQLite + Prisma ORM
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui

## Features

- 📝 Browse and read blog posts
- 🗂️ Archive page for older posts
- ⬆️ Upvote system for posts
- 🕒 Recently viewed posts tracking
- ✍️ Create new posts

## Screenshots

_Home page_

![Home page](./public/screenshots/home.png)

_Create post page_

![Create post page](./public/screenshots/create-post.png)

_Edit post page_

![Edit post page](./public/screenshots/edit-post.png)

_Post detail - header info_

![Post detail](./public/screenshots/post-detail-1.png)

_Post detail - content_

![Post detail](./public/screenshots/post-detail-2.png)

_Post detail - upvote & actions_

![Post detail](./public/screenshots/post-detail-3.png)

## Getting Started

```bash
git clone <https://github.com/SolDev08/blog-site.git>
cd blog-site
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  posts/            # Post pages (list, detail, archive, new)
  api/posts/        # API routes
components/         # Reusable UI components
lib/
  types/            # Shared TypeScript types
  utils/            # Utility functions
  actions.ts        # Server actions
  prisma.ts         # Prisma client instance
prisma/
  schema.prisma     # Database schema

```

## Technical Highlights

- Implemented server-side data fetching with Prisma and proper type-safe query parameters
- Built reusable, type-safe components (e.g. upvote button with optimistic UI updates)
- Structured layout with nested routing and dynamic segments (\`[id]\`)
- Handled edge cases around interactive elements nested inside navigational links

## About This Project

Built as a personal project to strengthen full-stack fundamentals — from database schema design to frontend component architecture.
