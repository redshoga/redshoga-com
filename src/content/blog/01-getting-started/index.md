---
title: "Getting started"
description: "Hit the ground running."
date: "2024-03-22"
tags:
  - tutorial
---

---

## Install astro-micro

Clone the [Astro Micro repository](https://github.com/trevortylerlee/astro-micro.git).

```sh
git clone https://github.com/trevortylerlee/astro-micro.git my-astro-micro
```

```sh
cd my-astro-micro
```

```sh
npm i
```

```sh
npm run build
```

```sh
npm run dev
```

## Customize the website metadata

To change the website metadata, edit `src/consts.ts`.

```ts
// src/consts.ts

export const SITE: Site = {
  NAME: "Astro Micro",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
  EMAIL: "trevortylerlee@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};
```

| Field        | Req | Description                                          |
| :----------- | :-- | :--------------------------------------------------- |
| TITLE        | Yes | Displayed in header and footer. Used in SEO and RSS. |
| DESCRIPTION  | Yes | Used in SEO and RSS.                                 |
| EMAIL        | Yes | Displayed in contact section.                        |
| NUM_POSTS    | Yes | Limit number of posts on home page.                  |
| NUM_PROJECTS | Yes | Limit number of projects on home page.               |

---

## Customize metadata for individual pages

```ts
// src/consts.ts

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Astro Micro is a fork of Astro Nano.",
};
```

| Field       | Req | Description                                    |
| :---------- | :-- | :--------------------------------------------- |
| TITLE       | Yes | Displayed in browser tab. Used in SEO and RSS. |
| DESCRIPTION | Yes | Used in SEO and RSS.                           |

---

## Add your social media links

```ts
// src/consts.ts

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/boogerbuttcheeks",
  },
  {
    NAME: "github",
    HREF: "https://github.com/trevortylerlee",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/trevortylerlee",
  },
];
```

| Field | Req | Description                             |
| :---- | :-- | :-------------------------------------- |
| NAME  | Yes | Displayed in contact section as a link. |
| HREF  | Yes | External url to social media profile.   |

## Deploy the site

To set up RSS and Giscus, it's easier if the site is deployed and has a URL for you to use. Instantly deploy to Vercel or Netlify by clicking the buttons below.

To deploy manually see [Astro's docs](https://docs.astro.build/en/guides/deploy/).
