/**
 * The EmptyBag function returns a React component that displays a message indicating that the bag is
 * empty and prompts the user to add products to it.
 * @returns The EmptyBag component is returning a JSX element.
 */
function EmptyBag() {
  return (
    <div className="emptyBag">
      <h1>Opps!!! Nothing in Bag.</h1>
      <h3>🫠Add the products you like in bag🫠</h3>
      <p>And place your order.</p>
    </div>
  );
}

export default EmptyBag;
