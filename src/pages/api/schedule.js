import prisma from "@/lib/prisma";
import { transactional } from "@/lib/mailchimp";
import { scheduleSchema } from "@/lib/validation";

async function createAppointment(data) {
  const appointment = await prisma.appointment.create({
    data,
  });
  return appointment;
}

export default async function handle(req, res) {
  try {
    let appointment;

    try {
      appointment = await scheduleSchema.validate(req.body);
    } catch (err) {
      res.status(400);
      res.json({
        success: false,
        message: err?.errors?.toString() || "Validation failed",
      });
      return;
    }

    await createAppointment(appointment);

    const {
      name,
      email,
      phone,
      date,
      time,
      service,
      message,
    } = appointment;

    const emailBody = {
      from_email: "no-reply@bradleychiropracticnutrition.com",
      subject: `Schedule for a new appointment from ${name}`,
      to: [
        {
          email: "destiny@bradleychiropracticnutrition.com",
          name: "Destiny Tarango",
          type: "to",
        },
        {
          email: "brendon@bradleychiropracticnutrition.com",
          name: "Brendon Bradley",
          type: "cc",
        },
      ],
      text: `
Hello,

Somebody requested an appointment using the online form.

Appointment details
--------------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Time: ${time}
Service: ${service}
Message: ${message}

Please confirm their appointment through email.
      `,
    };

    const response = await transactional.messages.send({ message: emailBody });

    res.json({
      success: true,
      message: "Appointment scheduled",
    });
  } catch (err) {
    res.status(500);
    res.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
