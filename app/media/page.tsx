import { Metadata } from "next";
import { videos } from "@/lib/media-data";
import MediaClient from "./MediaClient";

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
    { searchParams }: Props
): Promise<Metadata> {
    const params = await searchParams;
    const v = params.v as string | undefined;

    if (v) {
        const video = videos.find((vid) => vid.uid === v);
        if (video) {
            return {
                title: `${video.title} - Trade Signal Hive`,
                description: video.description,
                openGraph: {
                    title: video.title,
                    description: video.description,
                    images: [video.thumbnail],
                    type: "video.other",
                },
                twitter: {
                    card: "summary_large_image",
                    title: video.title,
                    description: video.description,
                    images: [video.thumbnail],
                },
            };
        }
    }

    return {
        title: "Media Library - Trade Signal Hive",
        description: "Watch our comprehensive trading tutorials, webinars, and live analysis sessions.",
    };
}

export default function MediaPage() {
    return <MediaClient />;
}
