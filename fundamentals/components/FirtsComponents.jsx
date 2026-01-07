import MyComponent from "./Mycomponent";
const FistComponents = () => {

let soma = 1 + 2;

    return(
        <div className="test">
            <h1>My first component</h1>
            <p>{soma}</p>
            <MyComponent />
        </div>
    )

}

export default FistComponents;