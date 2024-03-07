import api from "@/apis";
import { Category } from "../@types/category";
import { Product } from "../@types/product";
import { PaginatedResponse, PaginationParams } from "../@types/general";
import getSerializedQueryArgs from "@/utils/getSerializedQueryArgs";
import infintyPaginationMergeHandler from "@/utils/infintyPaginationMergeHandler";
import LIMIT from "../limit";

export const CategoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => ({
        url: "/products/categories",
      }),
    }),

    getCategoryProducts: build.query<
      PaginatedResponse & { products: Product[] },
      PaginationParams & { category: string }
    >({
      query: ({ limit = LIMIT, skip = 0, category }) => ({
        url: `/products/category/${category}`,
        params: { limit, skip },
      }),
      serializeQueryArgs: getSerializedQueryArgs,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.skip !== previousArg?.skip;
      },
      merge: infintyPaginationMergeHandler,
    }),
  }),
});

export const { useGetCategoriesQuery, useLazyGetCategoryProductsQuery } =
  CategoryApi;
