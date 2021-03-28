import Polyglot from "node-polyglot";

export type I18NProvider = {
  translate: (phrase: string) => string;
};

export type I18NProviderOptions = {
  locale: string;
  messages: any;
};

export const createI18NProvider = (
  options: I18NProviderOptions
): I18NProvider => {
  const { locale = "ru", messages } = options;
  const polyglot = new Polyglot({
    locale,
    phrases: messages[locale],
  });

  return {
    translate: (phrase: string) => polyglot.t(phrase),
  };
};
