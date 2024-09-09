import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t("title")}</h1>
      <span>{t("label")} </span>
      <p>Test 1</p>
      <p>Test 2</p>
    </main>
  );
};
