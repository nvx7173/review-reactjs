import CustomTestV from "@/components/CustomTestV";
import { NextPage } from "next";
import { useState } from "react";

const Index: NextPage = () => {
  const [isRerender, setIsRerender] = useState(false);
  return <CustomTestV isRerender={isRerender} setIsRerender={setIsRerender} />;
};

export default Index;
