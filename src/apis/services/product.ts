import infintyPaginationMergeHandler from "@/utils/infintyPaginationMergeHandler";
import api from "@/apis";
import getSerializedQueryArgs from "@/utils/getSerializedQueryArgs";
import { GetProductParams, Product } from "../@types/product";
import { PaginatedResponse } from "../@types/general";
import LIMIT from "../limit";

export const ProductApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<
      PaginatedResponse & { products: Product[] },
      GetProductParams
    >({
      query: ({ limit = LIMIT, skip = 0, q = "" }) => ({
        url: "/products/search",
        params: { limit, skip, q },
      }),
      serializeQueryArgs: getSerializedQueryArgs,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.skip !== previousArg?.skip;
      },
      merge: infintyPaginationMergeHandler,
    }),

    getSpecificProduct: build.query<Product, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),

    getProductSuggestionList: build.query<
      PaginatedResponse & { products: Product[] },
      string
    >({
      query: (search) => ({
        url: "/products/search",
        params: {
          q: search,
          select: "title,id",
          limit: 5,
        },
      }),
    }),
  }),
});

export const {
  useLazyGetProductsQuery,
  useGetSpecificProductQuery,
  useGetProductSuggestionListQuery,
  useLazyGetProductSuggestionListQuery,
  useGetProductsQuery,
} = ProductApi;
