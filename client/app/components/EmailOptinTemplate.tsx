
interface EmailTemplateProps {
  email: string;
}

export default function EmailOptinTemplate({ email }: EmailTemplateProps) {
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
          <span style={{ color: "#f97316" /* Tailwind orange-500 */ }}>
             Hello!
          </span>
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
          New User: {email}
        </p>

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