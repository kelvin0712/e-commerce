import React, {Component} from 'react';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import {updateCollections} from '../../redux/shop/shop.actions';

import { firestore, converCollectionsSnapshotToMap } from '../../firebase/firebase.ultils';

class ShopPage extends Component {
    unsubcribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollection } = this.props; 

        const collectionRef = firestore.collection('collections');
        
        this.unsubcribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = converCollectionsSnapshotToMap(snapshot)
            updateCollection(collectionMap);
        } )
    }

    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
            </div>
        ) 
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionsMap => dispatch(updateCollections(collectionsMap))
})
          
export default connect(null, mapDispatchToProps)(ShopPage); 
            