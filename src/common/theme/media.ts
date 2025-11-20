import { useEffect, useState } from 'react';
import { generateMedia } from 'styled-media-query';

export enum MediaScreenTypes {
    Mobile = 'mobile',
    Tablet = 'tablet',
    XL_Tablet = 'xltablet',
    Desktop = 'desktop',
    XL_Desktop = 'xldesktop',
    XXL_Desktop = 'xxldesktop',
}

export const mediaBreakPoints = {
    [MediaScreenTypes.Mobile]: 450,
    [MediaScreenTypes.Tablet]: 768,
    [MediaScreenTypes.XL_Tablet]: 991,
    [MediaScreenTypes.Desktop]: 1200,
    [MediaScreenTypes.XL_Desktop]: 1400,
    [MediaScreenTypes.XXL_Desktop]: 1600,
};
export const mediaQuery = generateMedia({
    mobile: `${mediaBreakPoints.mobile}px`,
    tablet: `${mediaBreakPoints.tablet}px`,
    xltablet: `${mediaBreakPoints.xltablet}px`,
    desktop: `${mediaBreakPoints.desktop}px`,
    xldesktop: `${mediaBreakPoints.xldesktop}px`,
    xxldesktop: `${mediaBreakPoints.xxldesktop}px`,
});

const getMediaTypeByWidth = (
    windowWidth: number = window.innerWidth
): MediaScreenTypes => {
    if (windowWidth < mediaBreakPoints.mobile) {
        return MediaScreenTypes.Mobile;
    } else if (
        mediaBreakPoints.mobile < windowWidth &&
        windowWidth < mediaBreakPoints.tablet
    ) {
        return MediaScreenTypes.Tablet;
    } else if (
        mediaBreakPoints.tablet < windowWidth &&
        windowWidth < mediaBreakPoints.xltablet
    ) {
        return MediaScreenTypes.XL_Tablet;
    } else if (
        mediaBreakPoints.xltablet < windowWidth &&
        windowWidth < mediaBreakPoints.desktop
    ) {
        return MediaScreenTypes.Desktop;
    } else if (
        mediaBreakPoints.desktop < windowWidth &&
        windowWidth < mediaBreakPoints.xldesktop
    ) {
        return MediaScreenTypes.XL_Desktop;
    } else if (mediaBreakPoints.xldesktop < windowWidth) {
        return MediaScreenTypes.XXL_Desktop;
    }
    return MediaScreenTypes.Desktop;
};

export const useMediaScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [mediaType, setMediaType] = useState<MediaScreenTypes>(
        getMediaTypeByWidth()
    );

    const handleResize = () => {
        setWidth(window.innerWidth);
        setMediaType(getMediaTypeByWidth(window.innerWidth));
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return { mediaType, width };
};
