
export default function Input( props ){
    return(
        <input className="py-1 pl-5 outline-none w-full max-w-lg dark:bg-dark-200 text-dark-200 dark:text-zinc-200 rounded-full placeholder:text-zinc-600 placeholder:dark:text-zinc-300 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 focus:invalid:border-2 focus:invalid:border-red-400 " {...props} />
    )
}