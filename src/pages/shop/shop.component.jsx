import React, {Component} from 'react';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import {updateCollections} from '../../redux/shop/shop.actions';

import { firestore, converCollectionsSnapshotToMap } from '../../firebase/firebase.ultils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends Component {
    state = {
        loading: true
    };

    unsubcribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollection } = this.props; 

        const collectionRef = firestore.collection('collections');
        
        this.unsubcribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = converCollectionsSnapshotToMap(snapshot)
            updateCollection(collectionMap);
            this.setState({loading: false});
        } )
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={() => <CollectionsOverviewWithSpinner isLoading={loading}/>} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props}/>} />
            </div>
        ) 
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionsMap => dispatch(updateCollections(collectionsMap))
})
          
export default connect(null, mapDispatchToProps)(ShopPage); 
            