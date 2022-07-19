import './Home.scss'
import classNames from 'classnames';
import Stage from '../../components/content/stage/stage'
import DemoContent from '../../components/content/demoContent/demoContent.jsx'

function Home ({setMenuOpen,menuOpen}) {

    return(
    <>  
      <div className={classNames('Home', {'Home-menuOpen': menuOpen,'': !menuOpen })}>
        <Stage/>
        <div className="Home-MainEntity">
          <DemoContent />
        </div>
      </div>
    </>
    );
}

export default Home