import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import actions from '../../redux/contacts/actions';


const contactBoock = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];



const items = createReducer(contactBoock, {
    [actions.addContact]: (state, {payload}) => [...state, payload],
    [actions.deleteContact]:(state, {payload}) => 
    state.filter(({id}) => id !== payload ),
});


const filter = createReducer('', {
    [actions.filterContact]:( _ , {payload} ) => payload,
    //поставила подчеркивание вместо state
});

export default combineReducers({
    items,
    filter,
});