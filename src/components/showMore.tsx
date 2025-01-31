import React, { useState, ReactNode } from 'react';

interface ShowMoreProps {
    children: ReactNode;
}

const ShowMore: React.FC<ShowMoreProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div>
            <button
                onClick={toggleVisibility}
                className="border-blue-400 border shadow text-blue-300 px-4 rounded hover:bg-blue-400"
            >
                {isVisible ? 'Show Less' : 'Show More'}
            </button>
            {isVisible && <div className="mt-4">{children}</div>}
        </div>
    );
};

export default ShowMore;