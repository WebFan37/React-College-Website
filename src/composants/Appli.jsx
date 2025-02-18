import './Appli.scss';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import Principal from './Principal';

function Appli() {

  return (
    <div className='Appli'>
      <Entete/>
      <Principal/>
      <Pied2Page/>
    </div>
  )
}

export default Appli;
