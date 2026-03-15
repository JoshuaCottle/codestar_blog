# Codestar Blog

Codestar Blog is a full-stack Django blogging platform built to demonstrate practical back-end and full-stack web development skills. The application allows visitors to browse published posts, authenticated users to engage through comments, and potential collaborators to submit contact requests through a dedicated About page.

This project is suitable for a portfolio or CV because it shows end-to-end delivery across database design, authentication, CRUD behaviour, form handling, media storage, automated testing, and deployment configuration.

## Project Summary

- Built with Django using a modular app structure.
- Uses PostgreSQL in configured environments and SQLite for tests.
- Supports account registration and sign-in with Django Allauth.
- Includes comment creation, editing, and deletion for signed-in users.
- Provides an About page with a collaboration request form.
- Uses Cloudinary for hosted media and WhiteNoise for static assets.
- Includes unit tests for forms and key views.

## Features

### Public User Features

- View a paginated list of published blog posts.
- Open individual post detail pages.
- Read approved and pending comment threads in reverse chronological order.
- Visit an About page with profile content and a collaboration form.

### Authenticated User Features

- Register, log in, and log out via Django Allauth.
- Submit comments on blog posts.
- Edit existing comments.
- Delete comments.

### Admin Features

- Create and manage blog posts through Django admin.
- Use Summernote as a rich text editor for post and About content.
- Manage collaboration requests in the admin panel.
- Moderate comment approval state.

## What This Project Demonstrates

- Building relational data models with Django ORM.
- Separating concerns across apps, models, views, forms, templates, and URLs.
- Implementing authentication-aware user interactions.
- Handling form validation and user feedback messages.
- Integrating third-party services including Cloudinary and Allauth.
- Writing automated tests for forms and views.
- Preparing a Django app for production with Gunicorn, PostgreSQL, and WhiteNoise.

## Tech Stack

- Python 3
- Django 4.2
- PostgreSQL
- SQLite for test runs
- Django Allauth
- Django Crispy Forms with Bootstrap 5
- Django Summernote
- Cloudinary
- Gunicorn
- WhiteNoise
- HTML, CSS, JavaScript

## Data Model

The project is centred around four main entities:

- `Post`: stores blog content, author, slug, excerpt, status, and featured image.
- `Comment`: links a user to a post and supports approval-based moderation.
- `About`: stores About page content and profile image.
- `CollaborateRequest`: captures contact requests submitted through the About page.

An ERD is included in the repository in `ERD.md`.

## Testing

The repository includes Django tests covering:

- Comment form validation
- Collaboration form validation
- Blog detail view rendering
- Comment submission flow
- About page rendering
- Collaboration request submission

Run the test suite with:

```bash
python manage.py test
```

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd codestar_blog
```

### 2. Create and activate a virtual environment

Windows:

```bash
python -m venv .venv
.venv\Scripts\activate
```

macOS or Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Set environment variables

Create local environment variables for the following:

- `SECRET_KEY`
- `DATABASE_URL`
- `CLOUDINARY_URL`
- `SECURE_SSL_REDIRECT`
- `SESSION_COOKIE_SECURE`
- `CSRF_COOKIE_SECURE`

For local development, these security flags can be set to `False`.

### 5. Apply migrations

```bash
python manage.py migrate
```

### 6. Create a superuser

```bash
python manage.py createsuperuser
```

### 7. Run the development server

```bash
python manage.py runserver
```

## Deployment Notes

The project is configured for production-style deployment using:

- Gunicorn as the WSGI server
- WhiteNoise for static file serving
- PostgreSQL via `dj-database-url`
- Cloudinary for hosted media

The included `Procfile` uses:

```bash
web: gunicorn codestar.wsgi
```

## Example User Journey

1. A visitor lands on the home page and browses published posts.
2. The user opens a post detail page to read the full content.
3. The user signs in or creates an account.
4. The user submits a comment and receives confirmation feedback.
5. The user can later edit or delete their own comment.
6. A visitor interested in working together can submit a collaboration request from the About page.

## Areas for Future Improvement

- Add post search and filtering.
- Add categories or tags.
- Add user profile pages.
- Add comment approval indicators in the UI.
- Expand automated test coverage to include model and integration tests.

## Developer Notes

This project was built as a strong full-stack portfolio piece, with an emphasis on clean Django structure, practical CRUD functionality, third-party service integration, and deployable production configuration.
