import React from 'react';

import PreviewCollection from '../preview-collection/preview-collection.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionsOverview = ({collections}) => {
    return (<div className="collection-overview">
         {collections.map(({id, ...otherCollectionProps}) => <PreviewCollection key={id} {...otherCollectionProps} />)}
    </div>)
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
})
 
export default connect(mapStateToProps, null)(CollectionsOverview); 
            