// React convention is to use pascal/Upper camel case for components
function HelloCullen() {
  return (
    // JSX fragment
    // An element with no name <></>
    <>
      <h1>Hello Cullen!!!</h1>
      <h2>How are you?</h2>
    </>
  );
}

// in node/server side
// module.exports = HelloCullen;

// client side export
export default HelloCullen;

// Conventions:
// - Components are PascalCased
// - One component per file
// component returns something that is rendered on DOM
// components can only return a single element
