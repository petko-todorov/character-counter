import { Checkbox, Flex, Text } from '@radix-ui/themes';
import { useStore } from '../store/useStore';

const IncludeSpaces = () => {
    const includeSpaces = useStore((state) => state.includeSpaces);
    const toggleIncludeSpaces = useStore((state) => state.toggleIncludeSpaces);

    return (
        <>
            {/* <input
                type="checkbox"
                id="include-spaces"
                checked={includeSpaces}
                onChange={(e) => toggleIncludeSpaces(e.target.checked)}
            />
            <label htmlFor="include-spaces">Include spaces</label> */}
            <Text as="label" size="3">
                <Flex gap="2">
                    <Checkbox
                        checked={includeSpaces}
                        onCheckedChange={toggleIncludeSpaces}
                        size="3"
                    />
                    Include spaces
                </Flex>
            </Text>
        </>
    );
};

export default IncludeSpaces;
