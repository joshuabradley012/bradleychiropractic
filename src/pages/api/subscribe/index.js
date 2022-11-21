import prisma from "@/lib/prisma";

export default async function handle(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(500);
      res.json({
        success: false,
        message: "Email required.",
      });
      return;
    }

    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      res.status(500);
      res.json({
        success: false,
        message: "Already subscribed.",
      });
      return;
    }

    const result = await prisma.subscriber.create({
      data: { email },
    });

    res.json({
      success: true,
      data: result,
    });
  } catch(err) {
    console.error(err);
  }
}
