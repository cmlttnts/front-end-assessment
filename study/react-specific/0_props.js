// Props is a short name for 'properties', we pass an object as input and it has 'properties'
function App() {
  return (
    <div>
      <Component1 title="TITLE1" msg="Message1" />
      <Component2 title="TITLE2" msg="Message2" />
      <Component3 title="TITLE3" msg="Message3" />

      {/* Putting stuff inside of a component makes it a children prop */}
      <Component4>
        <h4>TITLE4</h4>
        <p>Message4</p>
      </Component4>

      {/* We can even pass components as props(inputs) */}
      <Component5 FirstComponent={Component1} SecondComponent={Component2} />
    </div>
  );
}

function Component1(props) {
  console.log("** Component1 props, one object version");
  console.log(props);

  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.msg}</p>
    </>
  );
}


function Component2({ title, msg }) {
  console.log("** Component2 props, destructured");
  console.log("title: ", title);
  console.log("msg: ", msg);
  return (
    <>
      <h2>{title}</h2>
      <p>{msg}</p>
    </>
  );
}


function Component3({ title: aNewNameForTitle, msg: aNewNameForMsg }) {
  console.log("** Component3 props, prop renamed");
  console.log("aNewNameForTitle: ", aNewNameForTitle);
  console.log("aNewNameForMsg: ", aNewNameForMsg);
  return (
    <>
      <h3>{aNewNameForTitle}</h3>
      <p>{aNewNameForMsg}</p>
    </>
  );
}

// children is a special propery when you put other components inside of a component
function Component4({ children }) {
  console.log("** Component4 special children prop");
  console.log("children: ", children);
  return <>{children}</>;
}

// We can even pass components as props(inputs)
function Component5({FirstComponent, SecondComponent}) {
  console.log("** Componet5 props, they are just functions");
  console.log("FirstComponent: ", FirstComponent);
  console.log("SecondComponent: ", SecondComponent);

  return (
    <>
      <FirstComponent title="TITLE5-1" msg="Message5-1"/>
      <SecondComponent title="TITLE5-2" msg="Message5-2"/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
