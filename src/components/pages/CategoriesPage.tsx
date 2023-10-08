import { PageWrapper } from "../categories/containers/Wrappers";
import { Categories } from "../categories/categories/Categories";
import { TranslateButtons } from "../categories/buttons/TranslateButtons";

export function CategoriesPage() {
  return (
    <PageWrapper>
      <TranslateButtons />
      <Categories />
    </PageWrapper>
  );
}
