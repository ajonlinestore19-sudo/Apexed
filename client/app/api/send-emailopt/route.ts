import { Resend } from "resend";
import EmailOptinTemplate from "@/app/components/EmailOptinTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    // For user
    const { data: UserData, error: UserError } = await resend.emails.send({
      from: "Apexed Team <apexed.ai@gmail.com>", // must be verified domain
      to: [email],
      subject: "New Lead!",
      react: EmailOptinTemplate({
        email: email
      }),
    });

    if (UserError) {
      return Response.json({ UserError }, { status: 500 });
    }

    console.log("User Emailed: ", Response.json({ success: true, UserData }));
  } catch (error) {
    return Response.json({ error: error instanceof Error ?  error.message : error }, { status: 500 });
  }
}