const Event = () => {

                      {/*Events*/}
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Events done");
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Click here</button>
            </div>
            <div>
                <button onClick={() => console.log("*POP*")}>Click here</button>
            </div>
        </div>
    )
}

export default Event