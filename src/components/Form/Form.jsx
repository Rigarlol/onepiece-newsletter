import Input from "../Input/Input"

export default function Form({ onSubmit }) {
    function safeSubimit(event) {
        event.preventDefault()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({ name, email })

    }

    return (
        <form onSubmit={safeSubimit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
            <Input
                type="text"
                placeholder="Insira seu nome..."
                required
            />
            <Input
                type="email"
                placeholder="Insira seu e-mail..."
                required
            />
            <button type="submit" className="onepiece-button">SEGUIR</button>
        </form>
    )
}