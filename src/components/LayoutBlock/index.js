import layout from './style.module.css'
import classNames from 'classnames';
import '../../access/bg.jpg'

const LayoutBlock = (props) => {
    console.log(props.urlBg);
    const styleRoot = props.colorBg ? {backgroundColor: 'f8f8f8'} : props.urlBg ? {backgroundImage: "url("+props.urlBg+")"} : {};
    return (
        <section className={layout.root} style={styleRoot} id={props.id}>
            <div className={layout.wrapper}>
                <article>
                    <div className={layout.title}>
                        <h3>
                            {props.title}</h3>
                        <span className={layout.separator}>
                        </span>
                    </div>
                    <div className={classNames(layout.desc, layout.full)}>
                        <p>
                            {props.descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default LayoutBlock;