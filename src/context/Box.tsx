import { useThemeContext } from './ThemeContext';


const Box = () => {

    const { primary } = useThemeContext();

    return (
        <div
            className='text-center p-4'
            style={{ backgroundColor: primary.mani, color: primary.text }}
        >
            Theme Context Provider value consume for background color of this Box
        </div>
    )
}

export default Box