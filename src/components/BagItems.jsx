/* This code is a React component called `BagItems`. */
import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import EmptyBag from "./EmptyBag";
function BagItems() {
  const bagItems = useSelector((store) => store.BagItems);
  return (
    <>
      {bagItems.length > 0 ? (
        <div className="bagItems">
          <div className="bagItem">
            {bagItems.map((bagItem) => (
              <BagItem key={bagItem.id} bagItem={bagItem} />
            ))}
          </div>

          <BagSummary bagItems={bagItems} />
        </div>
      ) : (
        <EmptyBag />
      )}
    </>
  );
}

export default BagItems;
