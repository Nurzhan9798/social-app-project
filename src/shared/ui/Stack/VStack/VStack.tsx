import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { ...others } = props;

    return (
        <Flex direction="column" {...others} />
    );
};
