import ScreenWrapper from "@/components/templates/ScreenWrapper";
import CategoriesList from "@/components/organisms/CategoriesList";
import { useGetCategoriesQuery } from "@/apis/services/category";

export default function CategoriesScreen() {
  const { data: categories, isFetching: isCategoriesLoading } =
    useGetCategoriesQuery();

  return (
    <ScreenWrapper>
      <CategoriesList categories={categories} isLoading={isCategoriesLoading} />
    </ScreenWrapper>
  );
}
