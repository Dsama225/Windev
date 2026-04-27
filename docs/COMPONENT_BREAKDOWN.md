# Component Breakdown

## App Structure

- `App.vue`
  - **Role:** Root shell and global overlays.
  - **Renders:** `RouterView`, `CookieConsentBar`.
  - **State:** None directly.

- `views/HomePage.vue`
  - **Role:** Landing page composition.
  - **Renders:** `AppNavbar`, `HeroSection`, `AppCarousel`, `FeatureGrid`, `DatabaseConnectors`, `NewsSection`, `CtaBanner`, `AppFooter`.

- `views/WorkspacePage.vue`
  - **Role:** Secondary route placeholder for future features.

## Reusable Components

- `components/AppNavbar.vue`
  - **Props:** None.
  - **Events:** Local click/keyboard events.
  - **Internal state:** Uses `ui` store (`mobileMenuOpen`, `activeDropdown`) and `theme` store (`isDark`).
  - **Interactions:**
    - Desktop dropdown menu.
    - Mobile menu toggle.
    - Theme toggle.
    - Click-outside dropdown close.

- `components/HeroSection.vue`
  - **Props:** None.
  - **Events:** CTA button interactions.
  - **Internal state:** None.

- `components/AppCarousel.vue`
  - **Props:** None (local slide data for now).
  - **Events:** Prev/next and dot navigation.
  - **Internal state:** `currentIndex`, autoplay interval.
  - **Interactions:**
    - Autoplay.
    - Pause on hover.
    - Keyboard navigation (left/right).

- `components/FeatureCard.vue`
  - **Props:**
    - `icon: string`
    - `title: string`
    - `description: string`
    - `linkText?: string`
  - **Events:** None.
  - **Internal state:** None.

- `components/FeatureGrid.vue`
  - **Props:** None.
  - **Events:** Through inner card links.
  - **Internal state:** Local array of feature items.

- `components/DatabaseConnectors.vue`
  - **Props:** None.
  - **Events:** None.
  - **Internal state:** Local connectors array.

- `components/NewsSection.vue`
  - **Props:** None.
  - **Events:** Through post links.
  - **Internal state:** Local news array.

- `components/CtaBanner.vue`
  - **Props:** None.
  - **Events:** CTA click.
  - **Internal state:** None.

- `components/AppFooter.vue`
  - **Props:** None.
  - **Events:** Link clicks.
  - **Internal state:** None.

- `components/CookieConsentBar.vue`
  - **Props:** None.
  - **Events:** Accept/refuse/manage actions.
  - **Internal state:** Uses `consent` store.

## Stores (Pinia)

- `stores/theme.js`
  - **State:** `mode` (`light` or `dark`).
  - **Getters:** `isDark`.
  - **Actions:** `toggleTheme`.
  - **Persistence:** `localStorage` key `pcsoft-theme`.

- `stores/ui.js`
  - **State:** `mobileMenuOpen`, `activeDropdown`.
  - **Actions:** `toggleMobileMenu`, `closeMobileMenu`, `toggleDropdown`, `closeDropdown`.

- `stores/consent.js`
  - **State:** `decision`.
  - **Getters:** `hasDecision`.
  - **Actions:** `acceptAll`, `refuseAll`, `manage`.
  - **Persistence:** `localStorage` key `pcsoft-cookie-consent`.
