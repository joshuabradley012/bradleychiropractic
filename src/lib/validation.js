import * as yup from "yup";
import moment from "moment";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const messageValidation = yup.string();

export const timeValidation = yup.string().required("Time required");

export const nameValidation = yup.string().required("Name required");

export const serviceValidation = yup.string().required("Service required");

export const emailValidation = yup.string().required("Email required").email("Invalid email");

export const phoneValidation = yup.string()
  .required("Phone number required")
  .matches(
    phoneRegExp,
    "Invalid phone number"
  );

export const dateStringValidation = yup.string()
  .required("Date required")
  .test("is_date", "Invalid date", (value) => {
    const date = moment(value);
    return date.isValid();
  })
  .test("is_weekday", "Date must be a weekday", (value) => {
    const day = moment(value).day();
    return day > 0 && day < 6;
  })
  .test("is_future_or_today", `Date must be on or after ${moment().format('MM/DD/YYYY')}`, (value) => {
    const date = moment(value);
    return date.isSameOrAfter(moment(0, "HH"));
  });

export const subscriberSchema = yup.object({
  email: emailValidation,
});

export const scheduleSchema = yup.object({
  name: nameValidation,
  email: emailValidation,
  phone: phoneValidation,
  date: dateStringValidation,
  time: timeValidation,
  service: serviceValidation,
  message: messageValidation,
});
