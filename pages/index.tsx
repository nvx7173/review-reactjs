import ReactMemo from '@/components/ReactMemo';
import UseCallback from '@/components/UseCallback';
import { NextPage } from 'next';
import { twMerge } from 'tailwind-merge';

const Index: NextPage = () => {
    return (
        <div
            className={twMerge(
                'bg-sky-700 p-12 text-white hover:bg-sky-800',
                ' pb-10',
            )}
        >
            <ReactMemo />
            <UseCallback />
        </div>
    );
};

export default Index;
