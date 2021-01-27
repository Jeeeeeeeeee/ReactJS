import header from './style.module.css';
import { ReactComponent as ReactLogo } from '../../access/Trees.svg'

const HeaderBlock = (props) => {
    // const styleRoot = hideBackground ? {backgroundImage: 'none'} : {};
    return (
        <header className={header.root}>
            <div className={header.forest}>
            <ReactLogo />
            </div>
            <div className={header.container}>
                <h1>{props.title}</h1>
                <p>{props.descr}</p>
            </div>
        </header>
    )
}

export default HeaderBlock;