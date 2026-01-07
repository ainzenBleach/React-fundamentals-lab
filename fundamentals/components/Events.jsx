const Event = () => {

                      {/*Events*/}
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Events done");
    }

    const rederSomething = (x) => {
        if(x){
            return <h2>Reder this</h2>;
        } else{
            return  <h2>Reder that</h2>;
        }
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Click here</button>
            </div>
            <div>
                <button onClick={() => console.log("*POP*")}>Click here</button>
            </div>
            {rederSomething(false)}
        </div>
    )
}

export default Event