const Chanllenge = () => {

    let A = 15
    let B = 42
    let C = A + B

    const handleSum = () => {
        console.log(`A soma deu ${C}`)
    }

    return(
        <div>
            <h1>Soma de valores</h1>

            <div> {A} e {B}</div>
            
            <button onClick={handleSum}>Clique para somar</button>
        </div>

    )
}

export default Chanllenge