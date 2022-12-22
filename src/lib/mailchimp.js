import marketing from "@mailchimp/mailchimp_marketing";
import transactionalClient from "@mailchimp/mailchimp_transactional";

const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
const mandrillApiKey = process.env.MANDRILL_API_KEY;

const lists = {
  newsletter: "0ec90064fd",
  spinalExam: "24cdc6748f",
  facebookLeads: "9b63c7bfe1",
  injuryNetwork: "b1d2433b5d",
  clickfunnel: "c43526c3bc",
};

marketing.setConfig({
  apiKey: mailchimpApiKey,
  server: "us10",
});

const transactional = transactionalClient(mandrillApiKey);

export { marketing, transactional, lists };
