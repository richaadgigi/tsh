"use client";

import React, { useEffect, useRef, memo } from 'react';

function TradingViewNews() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;

        // Check if the script is already added to avoid duplicates in development (Strict Mode)
        if (container.current.querySelector('script')) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            displayMode: "regular",
            feedMode: "all_symbols",
            colorTheme: "dark",
            isTransparent: true,
            locale: "en",
            width: "100%",
            height: 600,
        });

        container.current.appendChild(script);
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/news/top-providers/tradingview/" rel="noopener nofollow" target="_blank">
                    <span className="text-primary font-bold">Top stories</span>
                </a>
                <span className="text-muted-foreground ml-1">by TradingView</span>
            </div>
        </div>
    );
}

export default memo(TradingViewNews);
