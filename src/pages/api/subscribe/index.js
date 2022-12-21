import prisma from "@/lib/prisma";
import mailchimp, { lists } from "@/lib/mailchimp";
import { removeUndefined } from "@/lib/objects";

export default async function handle(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400);
      res.json({
        success: false,
        message: "Email required",
      });
      return;
    }

    const mcResponse = await mailchimp.lists.addListMember(lists.newsletter, {
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
