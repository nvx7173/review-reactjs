// Có thể pass setState xuống child component để thay đổi state thay vì callback
import { FC, memo } from 'react';

interface IProps {
    isRerender: boolean;
    setIsRerender: (val: boolean) => void;
}

const TestRerenderV: FC<IProps> = ({ setIsRerender }) => {
    return (
        <>
            <button onClick={() => setIsRerender(true)}>Test</button>
        </>
    );
};

export default memo(TestRerenderV);
