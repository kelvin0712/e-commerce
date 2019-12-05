import React, {Component} from 'react';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionPageContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';



class ShopPage extends Component {

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }

    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
            </div>
        ) 
    }
} 


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
          
export default connect(null, mapDispatchToProps)(ShopPage); 
            