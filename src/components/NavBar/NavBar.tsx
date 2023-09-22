import { MdMenu } from 'react-icons/md'
export function NavBar() {
    return (
        <nav className="h-12 flex items-center container">
            <a href='.' className='text-sm font-semibold'>Gustavo Sasaki</a>
            <MdMenu className='ml-auto w-7 h-7' />
        </nav>
    )
}