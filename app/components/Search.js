import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes' ]

class SimpleForm extends Component {
  render() {
    const {
      fields: { url },
      handleSubmit,
      resetForm,
      submitting
      } = this.props
    return (<form onSubmit={handleSubmit}>
        <div>
          <label>URL</label>
          <div>
            <input type="text" placeholder="URL" {...url}/>
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
        </div>
      </form>
    )
  }
}

SimpleForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'simple',
  fields
})(SimpleForm)
