import { Text } from '@radix-ui/themes';
import { useStore } from '../store/useStore';

const ApproximateReadingTime = () => {
    const cleanEnteredText = useStore((state) => state.cleanEnteredText);

    const wordsPerMinute = 200;
    const minutes = cleanEnteredText.length / wordsPerMinute;

    let displayTime;
    if (!cleanEnteredText) {
        displayTime = '0 minutes';
    } else if (minutes < 1) {
        displayTime = '<1 minute';
    } else {
        displayTime = `${Math.ceil(minutes)} minutes`;
    }

    return (
        <>
            <Text size="3">Approximate reading time: {displayTime}</Text>
        </>
    );
};

export default ApproximateReadingTime;
