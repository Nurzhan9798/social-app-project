import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>
export const HStack = (props: HStackProps) => {
    const { ...others } = props;

    return (
        <Flex direction="row" {...others} />
    );
};
