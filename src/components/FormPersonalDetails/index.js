import { Button, Form, FormRow, Input, Label } from '../../globalStyle'
import { ButtonWrapper, RadioInput, TextArea } from './style'
import { connect } from 'react-redux'
import { nextForm, prevForm } from '../../actions/formAction'

const initialValues = {
    haveLaptopOrPc: "",
    address: "",
    mobileNumber: ""
}

const FormPersonalDetails = ({nextForm, prevForm, values, handleSubmit}) => {

    return (
        <Form
            onSubmit={() => {
                handleSubmit()
                nextForm()
            }}
        >
            <Label>Have a Laptop / PC ?</Label>
            <FormRow>
                <Label className="radio">Yes</Label>
                <RadioInput type="radio" name="haveLaptopOrPc" value="Yes" />
                <Label className="radio">No</Label>
                <RadioInput type="radio" name="haveLaptopOrPc" value="No" />
            </FormRow>
            <Label className="address">Address</Label>
            <TextArea name="address" placeholder="Address"/>
            <Label>Mobile Number</Label>
            <Input name="mobileNumber" value={values.mobileNumber} placeholder="Mobile Number" />
            <ButtonWrapper>
                <Button
                    className="cancel"
                    onClick={prevForm}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                >
                    Next
                </Button>
            </ButtonWrapper>
        </Form>
    )

}

export default connect(null, {nextForm, prevForm})(FormPersonalDetails)