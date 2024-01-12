function BagSummary({ bagItems }) {
  let MRP = 0;
  let totalDiscount = 0;
  bagItems.forEach((bagItem) => {
    MRP += bagItem.price;
    let discount = (bagItem.discountPercentage / 100) * bagItem.price;
    totalDiscount = Math.round((totalDiscount + discount) * 100) / 100;
  });
  return (
    <div className="card bagSummary">
      <div className="card-body">
        <h5>Bag Summary</h5>
        <hr />
        <p>
          <span>Total Items:</span>
          <span>{bagItems.length}</span>
        </p>
        <p>
          <span>Total MRP:</span>
          <span>${MRP}</span>
        </p>
        <p>
          <span>Discount on MRP:</span>
          <span>${totalDiscount}</span>
        </p>
        <p>
          <span>Delivery Fee:</span>
          <span>$100</span>
        </p>
        <hr />
        <p>
          <span>Total Amount:</span>
          <span>${MRP - totalDiscount + 100}</span>
        </p>
        <button className="btn btn-success">PLACE ORDER</button>
      </div>
    </div>
  );
}

export default BagSummary;
