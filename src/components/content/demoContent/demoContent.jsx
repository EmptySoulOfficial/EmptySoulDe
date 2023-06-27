import './demoContent.scss'
import { getLang } from '../../../assets/js/ELanguage/ELanguage.js'

function DemoContent (){

    const eLang = getLang()

    return(
        <>
        <div className="DemoContent" >
            <h2 id="democontent">{eLang.DemoTitle}</h2>
            <div className="DemoContent-container">

            </div>
        </div>
        </>
    );
}

export default DemoContent;