{/* <div id="Parent">
 <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h1 tag</h2>
 </div>
 <div id="child2">
    <h1>I am h1 tag</h1>
    <h2>I am h1 tag</h2>
 </div>
</div> */}


const header = React.createElement("div",
     {id:"Parent"},[
        React.createElement("div", {id:"Children"},
        [React.createElement("h1",{}, "I am h1 tag"),
        React.createElement("h2",{}, "I am h2 tag")]
        ),
        React.createElement("div", {id:"Children2"},
     [React.createElement("h3",{}, "I am h3 tag"),
     React.createElement("h4",{}, "I am h4 tag")]
     )
     ] 
     
     )

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(header);

 

