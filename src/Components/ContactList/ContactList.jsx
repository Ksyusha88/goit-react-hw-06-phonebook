import { connect } from 'react-redux';
import style from '../ContactList/ContactList.module.css';
import actions from '../../redux/contacts/actions';

const ContactList = ({contacts, onDeleteContact}) => {
    return (
        contacts.length > 0 && (
        <ul className ={style.contactList}>
            {contacts.map(({name, id, number}) =>(
                <li key ={id} className = {style.contactItem}>
                    <p className = {style.contactName}>{name}
                        {': '}
                        {number}
                        </p>
                        <button 
                            className ={style.deleteBtm} 
                            onClick ={() => onDeleteContact(id)}>
                            Delete
                        </button>
                </li>
            ))}
        </ul>
       )
    );
  };


const getVisibleContacts =(allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({name}) => 
    name.toLowerCase().includes(normalizedFilter),
    );
};


const mapStateToProps = ({contacts:{items,filter}}) => ({
    contacts:getVisibleContacts(items,filter)
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact:(id) => dispatch(actions.deleteContact(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactList);