import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Trade Signal Hive",
    description: "Get in touch with Trade Signal Hive. Our support team is available via email or live chat 24/7 to assist you.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
