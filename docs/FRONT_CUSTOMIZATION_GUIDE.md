# Front Customization Guide

## Run the Project

- Start backend: `php artisan serve`
- Start frontend: `npm run dev`

## Modify Carousel Content

File: `resources/js/components/AppCarousel.vue`

- Edit the `slides` array:
  - `kicker`
  - `title`
  - `description`
  - `image`
- Keep the same object keys to preserve rendering and autoplay behavior.

## Add / Remove Feature Cards

File: `resources/js/components/FeatureGrid.vue`

- Edit the `items` array.
- Each item must include:
  - `icon`
  - `title`
  - `description`
  - optional `linkText`

## Update News Cards

File: `resources/js/components/NewsSection.vue`

- Edit the `posts` array with:
  - `date`
  - `title`
  - `excerpt`

## Change Color Scheme Safely

File: `resources/css/app.css`

- Tune variables in `@theme`:
  - `--color-brand`
  - `--color-brand-strong`
  - `--color-accent`
  - `--color-bg-start`
  - `--color-bg-end`
- For dark mode, update matching variables in `.theme-dark`.

## Theme Behavior

Files:
- `resources/js/stores/theme.js`
- `resources/js/components/AppNavbar.vue`

- Theme mode is persisted in `localStorage`.
- Toggle is exposed in the navbar button.

## Cookie Consent Behavior

Files:
- `resources/js/stores/consent.js`
- `resources/js/components/CookieConsentBar.vue`

- Consent choice is stored in `localStorage`.
- Banner only appears when no decision exists.

## Accessibility Checklist

- Keyboard nav for carousel:
  - `Left Arrow` and `Right Arrow`
- Focus states are globally visible via `:focus-visible`.
- Buttons include readable labels and semantic text.
