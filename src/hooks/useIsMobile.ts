import React from 'react';

export const DEFAULT_MOBILE_DEVICE_WIDTH_THRESHOLD = 750;

const useIsMobile = (mobileWidthThreshold=DEFAULT_MOBILE_DEVICE_WIDTH_THRESHOLD) => {
    const [isMobile, setIsMobile] = React.useState<boolean>(window.innerWidth < mobileWidthThreshold);

    const eventListener = () => {
        setIsMobile(window.innerWidth <= mobileWidthThreshold);
    };

    React.useEffect(() => {
        // add event listener for window resize
        window.addEventListener('resize', eventListener);
        
        // remove event listener in cleanup function
        return () => {
            window.removeEventListener('resize', eventListener);
        };
    }, [mobileWidthThreshold]);

    return isMobile;
};

export default useIsMobile;