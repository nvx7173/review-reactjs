// useCallback là một react hook giúp tạo ra một memoized callback
// useCallback chỉ khởi tạo lại callback khi dependence thay đổi

import { FC, useCallback, useState } from 'react';

const UseCallback: FC = () => {
    const [text, setText] = useState('');
    const onClick = useCallback(() => {
        setText('reRender');
    }, []);

    return (
        <>
            <div>{text}</div>
            <button onClick={onClick}>Click</button>
        </>
    );
};

export default UseCallback;
