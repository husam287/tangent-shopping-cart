/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

const infintyPaginationMergeHandler = (currentCache: any, newItems: any) => {
  // first page
  if (!newItems?.previous) {
    return {
      ...newItems,
      next: newItems?.skip < newItems?.total,
    };
  }

  if (currentCache?.next) {
    currentCache.next = newItems?.skip < newItems?.total;
    currentCache.products.push(...newItems.products);
  }
};

export default infintyPaginationMergeHandler;
