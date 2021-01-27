// import logo from './logo.svg';
// import './App.css';
import HeaderBlock from "./components/HeaderBlock";
import LayoutBlock from "./components/LayoutBlock";
import FooterBlock from "./components/FooterBlock";

import bg from './access/bg.jpg'

const App = () => {
    return (
        <>
            <HeaderBlock
                title="Header Title"
                descr="Some Title description"
            />
            {/*В первом Layout должна быть картинка на background*/}
            <LayoutBlock
                id="1"
                title="Layout Title 1"
                descr="Some Layout 1 description "
                urlBg={bg}
                colorBg={false}
            />
            {/*У второго Layout должен быть передан фон цветом*/}
            <LayoutBlock
                id="2"
                title="Layout Title 2"
                descr="Some Layout 2 description"
                urlBg={false}
                colorBg
            />
            {/*У второго Layout должен быть передан фон цветом*/}
            <LayoutBlock
                id="3"
                title="Layout Title 3"
                descr="Some Layout 3 description"
                urlBg={false}
                colorBg
            />
            <FooterBlock/>
        </>
    );
}

export default App;