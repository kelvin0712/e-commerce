import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {selectShopIsLoaded} from '../../redux/shop/shop.selectors';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectShopIsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;