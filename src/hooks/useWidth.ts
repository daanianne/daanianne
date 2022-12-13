import * as React from 'react';

const useWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    const eventListener = () => {
        setWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener('resize', eventListener);

        return () => {
            window.removeEventListener('resize', eventListener);
        };
    });

    return width;
};

export default useWidth;

