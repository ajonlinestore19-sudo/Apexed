
interface EmailTemplateProps {
  name: string;
  message: string
}

export default function ContactEmailTemplate({ name, message }: EmailTemplateProps) {
  return (
    <div
      className="w-full bg-black text-white urbanist"
      style={{
        backgroundColor: "#000000",
        padding: "40px 20px",
      }}
    >
      <div
        className="max-w-xl mx-auto text-center"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "32px" }}>
          <img
            src="/assets/image/apexed-logo.webp"
            alt="Apexed Logo"
            width="80"
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Heading */}
        <h1
          className="text-3xl font-bold"
          style={{
            fontSize: "28px",
            marginBottom: "24px",
          }}
        >
          Hello{" "}
          <span style={{ color: "#f97316" /* Tailwind orange-500 */ }}>
            {name}
          </span>{" "}
          👋
        </h1>

        {/* Body Text */}
        <p
          style={{
            color: "#d4d4d8",
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "24px",
          }}
        >
          Thank you for reaching out to <strong className="text-gradient-orange">Apexed</strong>. We’re excited
          to connect with you and explore how AI automation can elevate your
          systems and workflows.
        </p>

        <p
          style={{
            color: "#d4d4d8",
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "40px",
          }}
        >
          Our team is currently reviewing your message. You can expect a
          response shortly with insights tailored specifically to your needs.
        </p>

        <p
          style={{
            color: "#d4d4d8",
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "40px",
          }}
        >
          Your message: <br/>
          {message}
        </p>

        {/* CTA Button */}
        <a
          href="https://yourdomain.com"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            backgroundColor: "#ea580c",
            color: "#ffffff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Visit Our Website
        </a>

        {/* Footer */}
        <div
          style={{
            marginTop: "60px",
            fontSize: "14px",
            color: "#71717a",
          }}
        >
          © {new Date().getFullYear()} Apexed. All rights reserved.
        </div>
      </div>
    </div>
  );
}