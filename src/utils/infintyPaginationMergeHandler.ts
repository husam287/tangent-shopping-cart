/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

const infintyPaginationMergeHandler = (currentCache: any, newItems: any) => {
  if (!newItems?.skip) {
    return {
      ...newItems,
    };
  }
  if (currentCache?.skip || currentCache?.skip === 0) {
    currentCache.skip = newItems?.skip;
    currentCache.products.push(...newItems.products);
  }
};

export default infintyPaginationMergeHandler;
