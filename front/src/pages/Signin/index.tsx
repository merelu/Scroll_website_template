import ScrollToTop from "@components/ScrollToTop";
import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./styles";

function Signin() {
  return (
    <>
      <ScrollToTop />
      <Container>
        <FormWrap>
          <Icon to="/">GGyu</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="password" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="email" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default Signin;
