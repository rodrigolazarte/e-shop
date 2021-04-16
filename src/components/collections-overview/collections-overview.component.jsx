import React from 'react';
import './collections-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {shopCollections} from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: shopCollections
})

export default connect(mapStateToProps)(CollectionsOverview)