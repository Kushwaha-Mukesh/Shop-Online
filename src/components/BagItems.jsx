import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
function BagItems() {
  const bagItems = useSelector((store) => store.BagItems);
  return (
    <div>
      <BagItem bagItems={bagItems} />
      <BagSummary bagItems={bagItems} />
    </div>
  );
}

export default BagItems;
