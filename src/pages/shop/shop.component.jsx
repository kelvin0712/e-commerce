import React, {useEffect} from 'react';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionPageContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';



const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
            </div>
        ) 
    }

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
          
export default connect(null, mapDispatchToProps)(ShopPage); 
            