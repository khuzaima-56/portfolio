import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const style = {
    backgroundColor: "black",
  };

 useEffect(() => {
   if(response) {
    onOpen(response.type, response.message)
    if(response.type === 'success') {
      formik.resetForm();
    }
   }
 }, [response]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    email: Yup.string().required("Email is Required"),
    type: Yup.string().oneOf([
      "Freelance project proposal",
      "Open source consultancy session",
      "Other",
    ]),
    comment: Yup.string().required("Comment is Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: validationSchema,
  });


  function handleSubmit(e) {
    e.preventDefault();
    submit({
      firstName: formik.values.firstName,
      email: formik.values.email,
      type: formik.values.type,
      comment: formik.values.comment,
    })

  }
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}>
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  formik.touched.firstName &&
                  formik.errors.firstName
                }>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  {...formik.getFieldProps("firstName")}
                  id="firstName"
                  name="firstName"
                />
                <FormErrorMessage>
                  {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.email && formik.errors.email
                }>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  {...formik.getFieldProps("email")}
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage>
                  {formik.errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option style={style} value="hireMe">
                    Freelance project proposal
                  </option>
                  <option style={style} value="openSource">
                    Open source consultancy session
                  </option>
                  <option style={style} value="other">
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.comment && formik.errors.comment
                }>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button 
                    type="submit" 
                    isLoading={isLoading} 
                    colorScheme="purple" 
                    width="full"
                    isDisabled={formik.values.comment.length === 0 || 
                                      formik.values.firstName.length === 0 ||
                                       formik.values.email.length === 0}
                >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
