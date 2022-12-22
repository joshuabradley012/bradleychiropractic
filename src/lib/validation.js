import * as yup from "yup";
import moment from "moment";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const nameValidation = yup.string().required("Name required");

export const emailValidation = yup.string().email("Invalid email").required("Email required");

export const phoneValidation = yup.string().matches(
  phoneRegExp,
  "Invalid phone number"
).required("Phone number required");

export const dateStringValidation = yup.string()
  .test("is_date", "Invalid date", (value) => {
    const date = moment(value);
    return date.isValid();
  })
  .test("is_weekday", "Date must be a weekday", (value) => {
    const day = moment(value).day();
    return day > 0 && day < 6;
  })
  .test("is_future", `Date must be after ${moment().format('MM/DD/YYYY')}`, (value) => {
    const date = moment(value);
    return date.isAfter(moment());
  })
  .required("Date required");

export const timeValidation = yup.string().required("Time required");

export const messageValidation = yup.string();

export const subscriberSchema = yup.object({
  email: emailValidation,
});

export const scheduleSchema = yup.object({
  name: nameValidation,
  email: emailValidation,
  phone: phoneValidation,
  date: dateStringValidation,
  time: timeValidation,
  message: messageValidation,
});
