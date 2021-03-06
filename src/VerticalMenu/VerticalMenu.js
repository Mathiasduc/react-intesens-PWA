import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const VerticalMenu = (props)=> (
		<div>
		    <IconMenu
		    	iconStyle={{width: '2.5rem', height:'2.5rem'}}
				iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
				anchorOrigin={{horizontal: 'left', vertical: 'top'}}
				targetOrigin={{horizontal: 'left', vertical: 'top'}}
		    >

				<MenuItem onTouchTap={props.newInstall} primaryText="Faire une nouvelle installation" />
				{/*here you can add items to the menu. ie:*/}
				{/*<MenuItem primaryText="Se rendre sur IDIAG web" />
				<MenuItem primaryText="Options" />*/}
				<MenuItem href="https://idiag.intesens.com" primaryText="Se rendre sur IDIAG Web" />
				<MenuItem onTouchTap={props.logout} primaryText="Se déconnecter" />
		    </IconMenu>
	    </div>
    );
export default VerticalMenu;