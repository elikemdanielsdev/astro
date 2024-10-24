import { createDirectus, rest, } from '@directus/sdk';

type GlobalSettings = {
  title: string;
  description: string;
}

type Page = {
  title: string;
  content: string;
  slug: string;
}

type Article = {
  image: string;
  title: string;
  content: string;
  published_date: string
  slug: string;
}

type Schema = {
  articles: Article[];
  global_settings: GlobalSettings;
  pages: Page[];
}

const directus = createDirectus<Schema>(import.meta.env.DIRECTUS_REST_API_URL).with(rest());

export default directus;