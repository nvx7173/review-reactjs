// Có thể pass setState xuống child component để thay đổi state

import { FC, memo, MouseEvent, useCallback, useState } from "react";

interface IProps {
  isRerender: boolean;
  setIsRerender: (val: boolean) => void;
}

const TestRerenderV: FC<IProps> = ({ setIsRerender }) => {
  const [star, setStar] = useState<number>(0);
  const items = [1, 2, 3, 4, 5];
  const onMouseOver = useCallback((evt: MouseEvent<HTMLParagraphElement>) => {
    setStar(Number(evt.currentTarget.id));
  }, []);
  return (
    <>
      <button onClick={() => setIsRerender(true)}>Test</button>
      <div style={{ display: "flex", gap: "10px" }}>
        {items.map((i) => (
          <p
            key={i}
            onMouseOver={onMouseOver}
            onMouseLeave={() => setStar(0)}
            id={String(i)}
            style={{ color: star >= i ? "yellow" : "black" }}
          >
            {i}
          </p>
        ))}
      </div>
    </>
  );
};

export default memo(TestRerenderV);
