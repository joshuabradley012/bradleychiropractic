import { lists, marketing } from "@/lib/mailchimp";
import { subscriberSchema } from "@/lib/validation";

export default async function handle(req, res) {
  try {
    let subscriber;

    try {
      subscriber = await subscriberSchema.validate(req.body);
    } catch (err) {
      res.status(400);
      res.json({
        success: false,
        message: err?.errors?.toString() || "Validation failed",
      });
      return;
    }

    const { email } = subscriber;

    const mcResponse = await marketing.lists.addListMember(lists.newsletter, {
      email_address: email,
      status: "subscribed",
    });

    res.json({
      success: true,
      message: `${email} has been subscribed`,
    });
  } catch(err) {
    let message = "Something went wrong";
    let status = 500;

    if (err.response?.body?.title) {
      message = err.response.body.title;
    }

    if (err.response?.body?.status) {
      status = err.response.body.status;
    }

    if (message === "Member Exists") {
      message = "Already subscribed";
    }

    res.status(status);
    res.json({
      success: false,
      message: message,
    });
  }
}
