import mailchimp from "@mailchimp/mailchimp_marketing";

const apiKey = process.env.MAILCHIMP_API_KEY;

const lists = {
  newsletter: "0ec90064fd",
  spinalExam: "24cdc6748f",
  facebookLeads: "9b63c7bfe1",
  injuryNetwork: "b1d2433b5d",
  clickfunnel: "c43526c3bc",
};

mailchimp.setConfig({
  apiKey,
  server: "us10",
});

export default mailchimp;
export { lists };
