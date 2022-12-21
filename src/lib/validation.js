import * as yup from "yup";

export const emailValidation = yup.string().email("Invalid email").required("Email required");

export const subscriberSchema = yup.object({
  email: emailValidation,
});

