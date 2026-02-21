import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
title: "AI Workflow Automation for Modern Businesses",
description: "Automate your business workflows in minutes with AI-powered orchestration systems.",
keywords: [
"AI automation",
"workflow automation",
"business automation",
"AI systems",
],
openGraph: {
title: "Automate Your Business Workflows",
description: "Eliminate repetitive work and scale with AI automation.",
type: "website",
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}