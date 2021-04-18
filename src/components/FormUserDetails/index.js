import AddIcon from '../../assets/icons/add.png'
import { Formik, FieldArray } from 'formik'
import { connect } from 'react-redux'
import { nextForm } from '../../actions/formAction'
import { Form, FormRow, FormCol, Input, Label, Select, Button} from '../../globalStyle'
import { Icon, Img } from './style'

const FormUserDetails = ({nextForm, values, handleChange, handleSubmit}) => {
    return (
        <Form
            onSubmit={(values) => {
                nextForm()
                handleSubmit()
            }}
        >
            <FormRow>
                <FormCol>
                    <Label>First Name</Label>
                    <Input
                        placeholder="First Name"
                        name="firstName"
                        value={values.firstName}
                    />
                </FormCol>
                <FormCol>
                    <Label>Last Name</Label>
                    <Input
                        placeholder="Last Name"
                        name="lastName"
                        value={values.lastName}
                    />
                </FormCol>
            </FormRow>
            <Label>Job Desc</Label>
            <FieldArray name="jobDescs">
                {({push}) => (
                    values.jobDescs.map((_, index) => (
                        <FormRow key={index}>
                            <Input
                               placeholder="Job Desc"
                               name={`jobDescs.${index}.name`} 
                            />
                            <Icon
                                onClick={() => push({name: ""})}
                            >
                                <Img src={AddIcon} />
                            </Icon>
                        </FormRow>
                    ))
                )}
            </FieldArray>
            <Label>Gender</Label>
            <Input
                as="select"
                onChange={handleChange}
                name="gender"
                value={values.gender}
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Input>
            <Label>Email</Label>
            <Input name="email" value={values.email} placeholder="Email" />
            <Button type="submit">Next</Button>
        </Form>
    )

}

export default connect(null, {nextForm})(FormUserDetails)