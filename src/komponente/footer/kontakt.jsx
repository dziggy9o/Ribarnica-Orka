import React from 'react'
import PropTypes from "prop-types"
import axios from "axios";

class Kontakt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mailSent: false,
          error: false
        };
      }
     
      handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: "post",
          url: `${process.env.REACT_APP_API}`,
          headers: { "content-type": "application/json" },
          data: this.state
        })
          .then(result => {
            if (result.data.sent) {
              this.setState({
                mailSent: result.data.sent
              });
              this.setState({ error: false });
              this.setState({
                  firstName: '',
                  lastName: '',
                  msg: '',
                  email: ''
              })
            } else {
              this.setState({ error: true });
            }
          })
          .catch(error => this.setState({ error: error.message }));
      };
      handleChange = (e, field) => {
        const value = e.target.value;
        const updateValue = {};
        updateValue[field] = value;
        this.setState(updateValue);
      };
      handleClose = (e, razlog) => {
          if (razlog === 'clickaway') {
              return;
          }
          this.setState({mailSent: false, error: false,})
      }
    render() {
        const { successMessage, errorMessage, fieldsConfig} = this.props.config;
        
        return (
            <section>
                <form>
                    <div className="fields">
                    {fieldsConfig && fieldsConfig.map(field => {
                        return (
                            <div className="field" key={field.id}>
                                {field.type !== "textarea" ? (
                                    <React.Fragment>
                                    <label for={field.label}>{field.label}</label>
                                    <input
                                    type={field.type}
                                    name={field.label}
                                    id={field.label} 
                                     placeholder={field.placeholder}
                                     value={this.state[field.fieldName]}
                                     onChange={e => this.setState({[field.fieldName]: e.target.value})}/>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                    <label for={field.label}>{field.label}</label>
                                    <textarea
                                    rows="3"
                                    name={field.label}
                                    id={field.label} 
                                     placeholder={field.placeholder}
                                     value={this.state[field.fieldName]}
                                     onChange={e => this.setState({[field.fieldName]: e.target.value})}/>
                                    </React.Fragment>
                                )}
                            </div>
                        )
                    }
                    )}
                    </div>
                    <ul className="actions">
                    <li><button  onClick={e => this.handleFormSubmit(e)} >Pošalji</button></li>
                </ul>
                </form>
                {this.state.mailSent && <div>{successMessage}</div>}
                {this.state.error && <div>{errorMessage}</div>}
            </section>
        )
    }
}
export default Kontakt;

Kontakt.propTypes = {
    config: PropTypes.object.isRequired
};

export const Kontakt2 = props => {
    return (
        <section>
            <form method="post" action="#">
                <div className="fields">
                    <div className="field">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" rows="3"></textarea>
                    </div>
                </div>
                <ul className="actions">
                    <li><input onClick={e => this.handleFormSubmit(e)} type="submit" value="Pošalji" /></li>
                </ul>
            </form>
        </section>
    )
}