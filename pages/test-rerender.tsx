import TestRerenderV from '@/components/TestRerenderV';
import { NextPage } from 'next';
import { useState } from 'react';

const Index: NextPage = () => {
    const [isRerender, setIsRerender] = useState(false);
    return (
        <div>
            <TestRerenderV
                setIsRerender={setIsRerender}
                isRerender={isRerender}
            />
        </div>
    );
};

export default Index;
