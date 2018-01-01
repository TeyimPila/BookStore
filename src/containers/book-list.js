import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return <li
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
            </li>
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProp(state) {
    /**
     * Whatever gets returned here becomes
     * this.probs, used in the BookList component above
     */
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    /**
     * Whenever selectBook is called, the result should be passed
     * through all the reducers.
     *
     * Anything returned from this function will end up in props (as a prop) in our container
     */
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

/**
 * Promote BookList from a component to a container
 * - it needs to know about the new dispatch, selectBook.
 * Make it available as a prop
 */
export default connect(mapStateToProp, mapDispatchToProps)(BookList);