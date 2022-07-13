import './Home.scss'
import Stage from '../../components/content/stage/stage'
import DemoContent from '../../components/content/demoContent/demoContent.jsx'

function Home () {

    return(
    <>  
        <Stage/>
        <div className="mainEntity Home">
          <DemoContent />
        </div>
    </>
    );
}

export default Home