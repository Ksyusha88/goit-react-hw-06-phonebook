import { Component } from 'react';
import shortid from 'shortid';
import style from '../Form/form.module.css';
import actions from '../../redux/contacts/actions';
import { connect } from 'react-redux';

class Form extends Component {
    state ={
        name: '',
        number: ''
    };

nameInputId = shortid.generate();
numberInputId = shortid.generate();

handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
      };
    
      
handleSubmit = evt => {
        evt.preventDefault();
        this.props.onAddContact(this.state);
        this.reset();
      };

reset =() =>{
    this.setState({ name: '', number: '' });
};

    render (){
        const { number, name } = this.state;
        return(
            <form className={style.form} onSubmit ={this.handleSubmit}>
                               
                <label className={style.label_text} htmlFor ={this.nameInputId}>
                    Name <input className={style.form_input}  type="text"
                    onChange = {this.handleChange}
                    value={name}
                    name ="name"
                    id = {this.nameInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    />
                </label>
                
                <label className={style.label_text} htmlFor ={this.numberInputId}>
                    Number <input className={style.form_input} type="tell"
                    onChange = {this.handleChange}
                    value={number}
                    name ="number"
                    id = {this.numberInputId}
                    pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                    title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                    required
                    />
                </label>                
                <button className={style.add_button} type="submit"> Add contact </button>                   
            </form>
                )}
        };

        const mapDispatchToProps = dispatch => ({
            onAddContact: ({ name, number }) => dispatch(actions.addContact({name,number})),
        })



        export default connect(null,mapDispatchToProps)(Form);