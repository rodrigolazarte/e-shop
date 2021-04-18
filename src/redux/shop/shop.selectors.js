import { createSelector } from 'reselect';


const shopSelector = state => state.shop;

export const shopCollections = createSelector(
    [shopSelector],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [shopCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [shopCollections],
        collections => collections[collectionUrlParam]
    )
 