import { useTranslation } from "react-i18next";
import TestComponent from "./testComponent";

export const About = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t("about")}</h1>
      <h3>{t("hello")}</h3>
      <span>{t("user", { name: "Bruce Wayne 🦇" })}</span>

      <TestComponent
        name={{
          VisualizationSidebarBox: { title: t("hello") },
          // RegionLabel: {
          //   isRequired: "This field is required",
          //   classSelectBoxLabel: "Field",
          //   classSelectBoxPlaceholder: "Field",
          //   tagsSelectBoxLabel: "Tags",
          //   tagsSelectBoxPlaceholder: "Tags",
          //   commentBoxLabel: "Value",
          //   commentBoxPlaceholder: "Value",
          // },
        }}
      />
    </main>
  );
};
