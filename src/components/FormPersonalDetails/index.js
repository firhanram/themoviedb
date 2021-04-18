import { Formik } from 'formik'
import { Button, Form, FormRow, Input, Label } from '../../globalStyle'
import { ButtonWrapper, RadioInput, TextArea } from './style'
import { connect } from 'react-redux'
import { nextForm, prevForm } from '../../actions/formAction'

const initialValues = {
    haveLaptopOrPc: "",
    address: "",
    mobileNumber: ""
}

const FormPersonalDetails = ({nextForm, prevForm}) => {
    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({values}) => (
                <Form>
                    <Label>Have a Laptop / PC ?</Label>
                    <FormRow>
                       <Label id="yes" className="radio" htmlFor="yes">Yes</Label>
                       <RadioInput type="radio" name="haveLaptopOrPc" id="yes" value="Yes" />
                       <Label id="yes" className="radio" htmlFor="yes">No</Label>
                       <RadioInput type="radio" name="haveLaptopOrPc" id="yes" value="Yes" />
                    </FormRow>
                    <Label className="address">Address</Label>
                    <TextArea placeholder="Address" name="address" />
                    <Label>Mobile Number</Label>
                    <Input type="text" name="mobileNumber" placeholder="Mobile Number" />
                    <ButtonWrapper>
                        <Button 
                            className="cancel"
                            onClick={prevForm}
                        >
                            Cancel
                        </Button>
                        <Button type="submit">Next</Button>
                    </ButtonWrapper>
                </Form>
            )}
        </Formik>
    )
}

export default connect(null, {nextForm, prevForm})(FormPersonalDetails)