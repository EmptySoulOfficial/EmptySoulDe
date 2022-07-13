import './demoContent.scss'
import useParseLanguages from '../../../assets/js/parseLanguages.asset.jsx'

function DemoContent (){

    const lang_text = useParseLanguages();

    return(
        <>
        <div className="DemoContent" >
            <h2 id="democontent">{lang_text.DemoTitle}</h2>
            <div className="DemoContent-container">

            </div>
        </div>
        </>
    );
}

export default DemoContent;