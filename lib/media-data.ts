export interface Video {
    uid: string;
    /** 
     * The direct URL to the video file.
     * TIP: For "Data Saving" (Automatic Quality Switching), use an HLS (.m3u8) URL.
     * If you use a plain .mp4 URL, it will work but won't change quality automatically.
     */
    videoUrl: string;
    title: string;
    description: string;
    tags: string[];
    thumbnail: string;
    views: string;
    datetime: string;
    author: {
        name: string;
        avatar: string;
        verified?: boolean;
    };
}

export const videos: Video[] = [
    {
        uid: "jghd820dv3XyZ12",
        videoUrl: "https://res.cloudinary.com/xnyder/video/upload/v1773899818/tradesignalhive/videos/How_To_Deposit_CTSH_kmh6w7.mp4",
        title: "How To Deposit Into Your Account",
        description: "A comprehensive step-by-step guide on how to seamlessly deposit funds into your Trade Signal Hive account. Learn about the supported payment methods, transaction processing times, and robust security measures in place to ensure your capital is safe and ready for trading.",
        tags: ["Tutorials"],
        thumbnail: "https://res.cloudinary.com/xnyder/image/upload/v1773922087/tradesignalhive/videos/Slide_16_9_-_10_qtivbd.png",
        views: "124K views",
        datetime: "2026-03-17T12:00:00Z",
        author: {
            name: "Trade Signal Hive",
            avatar: "https://res.cloudinary.com/xnyder/image/upload/v1773928501/tradesignalhive/brand/web-app-manifest-512x512_qpytql.png",
            verified: true
        }
    },
    {
        uid: "vBx9K2mPq5L1nZ8R",
        videoUrl: "https://res.cloudinary.com/xnyder/video/upload/v1773899806/tradesignalhive/videos/How_To_Withdraw_CTSH_n2nzxg.mp4",
        title: "How To Withdraw From Your Account",
        description: "A comprehensive step-by-step guide on how to seamlessly withdraw funds from your Trade Signal Hive account. Learn about the supported withdrawal methods, transaction processing times, and robust security measures in place to ensure your capital is safe and ready for trading.",
        tags: ["Tutorials"],
        thumbnail: "https://res.cloudinary.com/xnyder/image/upload/v1773901691/tradesignalhive/videos/Slide_16_9_-_6_truaps.png",
        views: "89K views",
        datetime: "2026-03-14T15:30:00Z",
        author: {
            name: "Trade Signal Hive",
            avatar: "https://res.cloudinary.com/xnyder/image/upload/v1773928501/tradesignalhive/brand/web-app-manifest-512x512_qpytql.png",
            verified: true
        }
    },
    {
        uid: "tY4oD6fH9sC2wE7Q",
        videoUrl: "https://res.cloudinary.com/xnyder/image/upload/v1773938722/tradesignalhive/videos/Slide_16_9_-_7_wuixfd.png",
        title: "How Copy Trading Works!",
        description: "Discover the power of automated wealth generation through Copy Trading. This complete walkthrough covers how you can automatically mirror the winning trades of our top-performing experts in real-time. Learn how to allocate your capital, set risk parameters, and earn while you learn without ever needing to look at a chart.",
        tags: ["Tutorials"],
        thumbnail: "https://res.cloudinary.com/xnyder/image/upload/v1773938722/tradesignalhive/videos/Slide_16_9_-_7_wuixfd.png",
        views: "21K views",
        datetime: "2026-03-12T09:15:00Z",
        author: {
            name: "Trade Signal Hive",
            avatar: "https://res.cloudinary.com/xnyder/image/upload/v1773928501/tradesignalhive/brand/web-app-manifest-512x512_qpytql.png",
            verified: true
        }
    },
    {
        uid: "pM1uN8bV3cK5xZ2L",
        videoUrl: "https://res.cloudinary.com/xnyder/video/upload/v1773938609/tradesignalhive/videos/Intorduction_to_AI_Trading_nlr3md.mp4",
        title: "Introduction to AI Trading",
        description: "Step into the future of finance with our comprehensive introduction to AI Trading. Learn how artificial intelligence and machine learning algorithms are revolutionizing market analysis by instantly recognizing historical patterns, executing high-probability setups at lightning speed, and completely removing human emotion to deliver consistent trading results.",
        tags: ["Live Trading"],
        thumbnail: "https://res.cloudinary.com/xnyder/image/upload/v1773938725/tradesignalhive/videos/Slide_16_9_-_8_lhl6yb.png",
        views: "34K views",
        datetime: "2026-03-05T14:45:00Z",
        author: {
            name: "Trade Signal Hive",
            avatar: "https://res.cloudinary.com/xnyder/image/upload/v1773928501/tradesignalhive/brand/web-app-manifest-512x512_qpytql.png",
            verified: true
        }
    },
    {
        uid: "mN2bV4cZ6xX8kL0J",
        videoUrl: "https://res.cloudinary.com/xnyder/video/upload/v1773938713/tradesignalhive/videos/Intorduction_to_Self_Trading_ik3omd.mp4",
        title: "Introduction to Self Trading",
        description: "Master the foundational skills required to become a consistently profitable independent trader. This essential video breaks down core concepts including market structure, identifying support and resistance, building a robust trading plan, applying strict risk management, and developing the critical psychological discipline needed for successful self-trading.",
        tags: ["Analysis"],
        thumbnail: "https://res.cloudinary.com/xnyder/image/upload/v1773938727/tradesignalhive/videos/Slide_16_9_-_9_nqtazu.png",
        views: "56K views",
        datetime: "2026-02-26T18:20:00Z",
        author: {
            name: "Trade Signal Hive",
            avatar: "https://res.cloudinary.com/xnyder/image/upload/v1773928501/tradesignalhive/brand/web-app-manifest-512x512_qpytql.png",
            verified: true
        }
    }
];
