async function traigoTablaUno() {
    const response = await fetch('http://localhost:7711/Jugadores',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    console.log(response)
    
    const result = await response.json()
    console.log(result)

    for (let i = 0; i < result.length; i++) {

        
    }
}