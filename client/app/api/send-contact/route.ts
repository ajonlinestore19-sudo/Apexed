import { Resend } from "resend";
import ContactEmailTemplate from "@/app/components/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, message } = body;

    // For user
    const { data: UserData, error: UserError } = await resend.emails.send({
      from: "Apexed Team <apexed.ai@gmail.com>", // must be verified domain
      to: [email],
      subject: "We received your message!",
      react: ContactEmailTemplate({
        name: name,
        message: message,
      }),
    });

    // For admin
    const { data: AdminData, error: AdminError } = await resend.emails.send({
      from: "Apexed Team <apexed.ai@gmail.com>", // must be verified domain
      to: ["apexed.ai@gmail.com"],
      subject: "New Message From Website!",
      react: ContactEmailTemplate({
        name: name,
        message: message,
      }),
    });

    if (UserError || AdminError) {
      return Response.json({ UserError }, { status: 500 });
    }

    console.log("User Emailed: ", Response.json({ success: true, UserData }));
    console.log("Admin Emailed: ", Response.json({ success: true, AdminData }));
  } catch (error) {
    return Response.json({ error: error instanceof Error ?  error.message : error }, { status: 500 });
  }
}