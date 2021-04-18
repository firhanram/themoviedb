import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { FormContainer } from './style'
import { FormPersonalDetails, FormUserDetails } from '../../components'

const RegistrationPage = ({step}) => {

    const renderMultistepForm = () => {
        // eslint-disable-next-line default-case
        switch(step){
            case 1:
                return (
                    <FormUserDetails />
                )
            case 2:
                return (
                    <FormPersonalDetails />
                )
            case 3: 
                return <h3>Confirmation</h3>
            case 4:
                return <h3>Success</h3>
        }
    }

    return (
        <FormContainer>
            {renderMultistepForm()}
        </FormContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        step: state.form.step
    }
}

export default withRouter(connect(mapStateToProps)(RegistrationPage))