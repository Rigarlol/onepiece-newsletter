import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
/*
 * Um componente funcional React que alterna entre o tema claro e escuro.
 * O componente utiliza a preferência de esquema de cores do sistema e aplica a classe de tema correspondente ao elemento raiz HTML.
 */
export default function ToggleTheme() {
    /*
     * Determina a preferência de esquema de cores do sistema.
     */
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    /*
     * Uma referência à lista de classes do elemento raiz HTML.
     */
    const pageClasses = document.documentElement.classList

    useEffect(() => {
        // Se a preferência do sistema for escura, adicione a classe 'dark' ao elemento raiz HTML.
        systemPreference && pageClasses.add('dark')
    })
    /*
     * Alterna entre o tema claro e escuro.
     */
    function toggle() {
        // Alterna a classe 'dark' no elemento raiz HTML.
        pageClasses.toggle('dark')
    }
    
    return (
        <div className="hidden sm:block">
            <MoonIcon className='h-8 text-gray-100 block dark:hidden cursor-pointer' onClick={toggle} />
            <SunIcon className='h-8 text-gray-100 hidden dark:block cursor-pointer' onClick={toggle} />
        </div>
    )
}