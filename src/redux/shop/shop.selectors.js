import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectShopCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectShopIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectShopIsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
