"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";

interface VideoPlayerProps {
    src: string;
    title: string;
    poster: string;
}

export default function VideoPlayer({ src, title, poster }: VideoPlayerProps) {
    return (
        <MediaPlayer
            key={src}
            title={title}
            src={src}
            playsInline
            autoPlay
            logLevel="silent"
            className="w-full h-full"
        >
            <MediaProvider
                mediaProps={{
                    disableRemotePlayback: true,
                    crossOrigin: 'anonymous'
                } as any}
            >
                <Poster
                    className="absolute inset-0 block h-full w-full object-cover opacity-0 transition-opacity data-[visible]:opacity-100"
                    src={poster}
                    alt={title}
                />
            </MediaProvider>
            <DefaultVideoLayout
                icons={defaultLayoutIcons}
            />
        </MediaPlayer>
    );
}
