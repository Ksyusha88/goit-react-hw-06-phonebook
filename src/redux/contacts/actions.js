import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({name, number}) =>({
        payload: {
            id: shortid.generate(),
            name,
            number,
        },
}));

const deleteContact = createAction('contacts/delete');
const filterContact = createAction('contacts/filterContact');


//eslint-disable-next-line import/no-anonymous-default-export

export default {addContact, deleteContact, filterContact};