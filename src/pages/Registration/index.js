import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { FormContainer } from './style'
import { FormPersonalDetails, FormUserDetails } from '../../components'
import { Formik } from 'formik'

const RegistrationPage = ({step}) => {

    const initialValues = {
        jobDescs: [{name: ""}],
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        haveLaptopOrPc: "",
        address: "",
        mobileNumber:""
    }

    return (
        <FormContainer>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
            >
                {(props) => {
                    switch(step) {
                        case 1:
                            return (
                                <FormUserDetails {...props} />
                            )
                        case 2:
                            return (
                                <FormPersonalDetails {...props} />
                            )
                        case 3:
                            return <h3>Confirmation</h3>
                        case 4:
                            return <h3>Success</h3>
                    }
                }}
            </Formik>
        </FormContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        step: state.form.step
    }
}

export default withRouter(connect(mapStateToProps)(RegistrationPage))