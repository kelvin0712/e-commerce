import React, {Component} from 'react';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {selectShopIsFetching, selectShopIsLoaded} from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends Component {

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const {match, isFetching, isLoaded} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={() => <CollectionsOverviewWithSpinner isLoading={isFetching}/>} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionsPageWithSpinner isLoading={!isLoaded} {...props}/>} />
            </div>
        ) 
    }
} 

const mapStateToProps = createStructuredSelector({
    isFetching: selectShopIsFetching,
    isLoaded: selectShopIsLoaded
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
          
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage); 
            