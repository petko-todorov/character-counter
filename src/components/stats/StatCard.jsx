import { Card, Text } from '@radix-ui/themes';

const StatCard = ({ label, value, color }) => {
    return (
        <>
            <Card className={`w-[31%] max-sm:w-full ${color}`} size="3">
                <Text as="div" size="7" weight="bold" className="text-black">
                    {value}
                </Text>
                <Text as="div" size="2" weight="bold" className="text-black">
                    {label}
                </Text>
            </Card>
        </>
    );
};

export default StatCard;
