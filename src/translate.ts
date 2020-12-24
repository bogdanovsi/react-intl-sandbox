import { createIntl, createIntlCache } from "react-intl";

export type AppTextConst = {
  simple: string;
  greeting: string;
  plural: string;
  time: string;
};

export interface ILocalization {
  [lang: string]: {
    [textID in keyof AppTextConst]: string;
  };
}

export const messages: ILocalization = {
  en: {
    simple: "Hello world",
    greeting: "Hello, {name}",
    plural: "I have {num, plural, one {# dog} other {# dogs}}",
    time: "The time is {t, time, long}."
  },
  ru: {
    simple: "Привет мир",
    greeting: "Привет, {name}",
    plural: "Есть идея {num, plural, one {# dog} other {# dogs}}",
    time: "Время есть {t, time, long}."
  }
};

const cache = createIntlCache();

export let int = createIntl(
  {
    locale: "en",
    messages: messages["en"]
  },
  cache
);

export function changeLanguage(lang: string) {
  const newIntl = createIntl(
    {
      locale: lang,
      messages: messages[lang]
    },
    cache
  );
  int = newIntl;
}

const translate = (id: keyof AppTextConst, values?: {}) => {
  return int.formatMessage({ id }, values);
};

export default translate;
