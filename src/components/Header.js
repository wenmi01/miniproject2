import Navbar from './Navbar';

import { Helmet } from 'react-helmet';

function Header(props){
    return(
        <div>
            <Helmet>
               <title>BiXfer {props.pagename ? ' - ' + props.pagename : ''}</title>

               <meta name="viewport" content="width=device-width, initial-scale=1"/>

            </Helmet>
            <Navbar/>
        </div>
    );
};

export default Header;