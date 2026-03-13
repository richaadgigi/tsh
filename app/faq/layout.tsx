import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | Trade Signal Hive",
    description: "Frequently Asked Questions about Trade Signal Hive. Learn how to get started, secure your account, and explore our trading features.",
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
