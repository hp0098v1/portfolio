import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASSWORD ||
    !process.env.EMAIL_RECEIVER
  ) {
    throw Error('One of env vars is missing');
  }

  try {
    const transporter = createTransport({
      service: 'Gmail',
      host: process.env.SMTP_HOST as string,
      port: parseInt(process.env.SMTP_PORT as string),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER, // ایمیل شما
      subject: subject,
      text: message,
    });

    // return new Response(
    //   JSON.stringify({ success: true, message: 'Email sent successfully' }),
    //   {
    //     status: 200,
    //   },
    // );
    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Email error: ', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send email',
      },
      { status: 500 },
    );
  }
}
