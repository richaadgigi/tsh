import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Media Library | Trade Signal Hive",
    description: "Explore the newest webinars, tutorials, live trading sessions, and analysis videos from Trade Signal Hive experts.",
};

export default function MediaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
