import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './components/form/Form';
import ContactList from './components/contactsList/contactsList';
import Filter from './components/filter/Filter';
import styles from './global.module.css';
import AppTitle from '../src/components/appTitle/AppTitle';
import contactsOperations from '../src/redux/contacts-operations';
import contactsSelectors from './redux/contacts-selectors';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <AppTitle />
        {this.props.isLoading && <h1>Still Loading...</h1>}
        <Form />

        <Filter></Filter>

        <ContactList></ContactList>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.loading(state),
});
const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
