import prisma from "@/lib/prisma";
import { removeUndefined } from "@/lib/objects";

async function createSubscriber(data) {
  const result = await prisma.subscriber.create({
    data,
  });
  return result;
}

async function findSubscriberByEmail(email) {
  const result = prisma.subscriber.findUnique({
    where: {
      email,
    },
  });
  return result;
}

async function updateSubscriber(id, data) {
  const result = prisma.subscriber.update({
    where: { id },
    data: removeUndefined(data),
  });
  return result;
}

export default async function handle(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400);
      res.json({
        success: false,
        message: "Email required.",
      });
      return;
    }

    await verifyEmail(email, "Newsletter subscriber");

    const existingSubscriber = await findSubscriberByEmail(email);

    if (existingSubscriber) {
      if (existingSubscriber.subscribed) {
        res.json({
          success: true,
          message: "Already subscribed.",
        });
        return;
      }
      const result = await updateSubscriber(existingSubscriber.id, {
        subscribed: true,
      });
      res.json({
        success: true,
        message: "Subscription renewed.",
      });
      return;
    }

    const result = await createSubscriber({ email, subscribed: true });

    res.json({
      success: true,
      message: `${email} has been subscribed.`,
    });
  } catch(err) {
    console.error(err);
  }
}
