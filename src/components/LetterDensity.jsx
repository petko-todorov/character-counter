import { Text } from '@radix-ui/themes';
import { useStore } from '../store/useStore';
import { useState } from 'react';

const LetterDensity = () => {
    const [limit, setLimit] = useState(5);
    const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

    const cleanEnteredText = useStore((state) => state.cleanEnteredText);
    const totalCharacters = useStore((state) => state.totalCharacters);

    let data = {};
    for (let i = 0; i < cleanEnteredText.length; i++) {
        data[cleanEnteredText[i].toUpperCase()] =
            (data[cleanEnteredText[i].toUpperCase()] || 0) + 1;
    }

    const sortedData = Object.entries(data).sort(
        (a, b) => b[1] - a[1] || a[0] - b[0],
    );

    if (totalCharacters === 0) return <Text color="gray">No data yet...</Text>;

    return (
        <>
            <h1 className="text-2xl mb-3">Letter Dentity</h1>
            {sortedData.slice(0, limit).map(([letter, count]) => {
                const percentage = ((count / totalCharacters) * 100).toFixed(2);
                return (
                    <div key={letter} className="flex items-center gap-4">
                        <h2 className="text-gray-300 font-semibold w-4">
                            {letter}
                        </h2>

                        <div className="flex-12 h-3 bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-red-300 rounded-full transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>

                        <div className="text-gray-400 text-right flex-1">
                            {count}
                            <span className="ml-1">({percentage}%)</span>
                        </div>
                    </div>
                );
            })}

            {limit < sortedData.length && !isShowMoreClicked && (
                <button
                    onClick={() => {
                        setLimit(totalCharacters);
                        setIsShowMoreClicked(true);
                    }}
                    className="mt-4 flex items-center"
                >
                    See more
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            )}

            {limit > 5 && isShowMoreClicked && sortedData.length > 5 && (
                <button
                    onClick={() => {
                        setLimit(5);
                        setIsShowMoreClicked(false);
                    }}
                    className="mt-4 flex items-center"
                >
                    Show Less
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            )}
        </>
    );
};

export default LetterDensity;
