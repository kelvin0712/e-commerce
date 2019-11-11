import React from 'react';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className="collection-overview">
         {collections.map(({id, ...otherCollectionProps}) => <PreviewCollection key={id} {...otherCollectionProps} />)}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps, null)(CollectionsOverview); 
            