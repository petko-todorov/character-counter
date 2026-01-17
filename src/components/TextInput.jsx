import { TextArea } from '@radix-ui/themes';
import { useStore } from '../store/useStore';

const TextInput = () => {
    return (
        <>
            <TextArea
                placeholder="Start typing here..."
                onChange={(e) =>
                    useStore.getState().setEnteredText(e.target.value)
                }
                className="h-50"
                size="3"
            />
        </>
    );
};

export default TextInput;
