

function printHello(){
    console.log("Hello!")
}
function Button (){
    return (
        <div>
            <button onClick = {printHello}>
                Click me!
            </button>
        </div>
    )
}


export default Button;