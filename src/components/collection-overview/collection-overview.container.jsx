import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {selectShopIsFetching} from '../../redux/shop/shop.selectors';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectShopIsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionOverview);

export default CollectionOverviewContainer;