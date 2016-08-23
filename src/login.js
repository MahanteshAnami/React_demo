var React = require('react')
  , ReactRouter = require('react-router')

var Login = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return {email: "", password: ""}
  },

  handleSubmit: function(e) {
    e.preventDefault()

    if (this.state.email === 'stefan@example.com' && this.state.password === 'secret') {
      window.User = {name: 'Stefan'}
      this.history.pushState(null, '/')
    } else {
      this.setState({errors: true})
    }
  },

  handleChange: function(event) {
    if (event.target.type === "password") {
      this.setState({password: event.target.value})
    } else if (event.target.type === "text") {
      this.setState({email: event.target.value})
    }
  },

  render: function() {
    if (this.state.errors) {
      var errors = (
        <div className="Login-errors">
          Wrong email or password. Please, try again.
        </div>
      )
    }

    return (
      <form className="Login" onSubmit={ this.handleSubmit }>
        { errors }

        <input type="text" placeholder="Email" onChange={ this.handleChange } />
        <input type="password" placeholder="Password" onChange={ this.handleChange } />
        <input type="submit" value="Sing In" />
      </form>
    )
  }
})

module.exports = Login