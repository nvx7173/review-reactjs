import ReactMemo from "@/components/ReactMemo";
import UseCallback from "@/components/UseCallback";
import { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div className="flex">
      <ReactMemo />
      <UseCallback />
    </div>
  );
};

export default Index;
