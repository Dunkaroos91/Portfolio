import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
} from './SigninElements';

const SignIn = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">CG</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Send me a Message</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormInput type='text' required />
                            <FormButton type='submit'>Submit</FormButton>
                        </Form>
                    </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn