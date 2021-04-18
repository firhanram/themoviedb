import AddIcon from '../../assets/icons/add.png'
import { Formik, FieldArray } from 'formik'
import { connect } from 'react-redux'
import { nextForm } from '../../actions/formAction'
import { Form, FormRow, FormCol, Input, Label, Select, Button} from '../../globalStyle'
import { Icon, Img } from './style'

const initialValues = {
    jobDescs: [
      {name: ""}
    ],
    firstName: "",
    lastName: "",
    gender: "",
    email: ""
};

const FormUserDetails = ({nextForm}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                localStorage.setItem('Data', JSON.stringify(values ))
                nextForm()
            }}
        >
           {({values, handleChange, handleSubmit}) => {
               console.log(localStorage.getItem('Data'))
               return (
                   <Form onSubmit={handleSubmit}>
                        <FormRow>
                            <FormCol>
                                <Label>First Name</Label>
                                <Input 
                                    placeholder="First Name" 
                                    name="firstName" 
                                    value={values.firstName} 
                                    onChange={handleChange} 
                                />
                            </FormCol>
                            <FormCol>
                                <Label>First Name</Label>
                                <Input 
                                    placeholder="First Name" 
                                    name="lastName" 
                                    value={values.lastName} 
                                    onChange={handleChange}
                                />
                            </FormCol>
                        </FormRow>
                        <Label>Job Desc</Label>
                   <FieldArray
                        name="jobDescs"
                   >
                       {({push}) => (
                           values.jobDescs.map((_, index) => (
                               <FormRow>
                                   <Input
                                        name={`jobDescs.${index}.name`}
                                        placeholder="Job Desc"
                                   />
                                   <Icon
                                        onClick={() => {
                                            push({name: ""})        
                                        }}
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
                        name="gender"
                        onChange={handleChange}
                        value={values.gender}
                    >
                       <option value="">Select Gender</option>
                       <option value="Male">Male</option>
                       <option value="Female">Female</option>
                   </Input>
                   <Label>Email</Label>
                   <Input 
                    name="email" 
                    value={values.email}
                    onChange={handleChange} 
                   />
                   <Button
                    type="submit"
                   >
                       Next
                   </Button>
               </Form>
               )
           }
               
           }

        </Formik>
    )
}

export default connect(null, {nextForm})(FormUserDetails)