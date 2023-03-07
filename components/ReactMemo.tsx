// react.memo là một memorization function giúp tránh việc rerender không cần thiết của component.
// react.memo là một HOC
// react.memo bỏ qua việc rerender của component khi props truyền vào không thay đổi
// component được bọc bằng react.memo vẫn rerender khi state hoặc context của component thay đổi (useState, useReducer or useContext)

import { FC, memo } from 'react';

const ReactMemo: FC = () => {
    return <div> React.memo</div>;
};

export default memo(ReactMemo);
