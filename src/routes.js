import ExclusiveReads from "./views/ExclusiveReads";
import Fashion from "./views/Fashion";
import HealthFitness from "./views/HealthFitness";
import Home from "./views/Home";
import NicheFocal from "./views/NicheFocal";
import Gallery from "./views/Gallery";
import Contact from "./views/Contact";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVestPatches, faHeartbeat, faImages} from '@fortawesome/free-solid-svg-icons'

import {
	ContactSupportRounded,
	HomeRounded,
	ImportContactsRounded,
	MonochromePhotosRounded
} from "@material-ui/icons";

import React from 'react';

const ROUTES = [
	{
		icon: <HomeRounded/>,
		name: "Home",
		path: '/',
		component: Home,
	},
	{
		icon: <ImportContactsRounded/>,
		name: "Exclusive Reads",
		path: '/exclusive',
		component: ExclusiveReads,
	},
	{
		icon: <FontAwesomeIcon icon={faVestPatches} style={{fontSize: 22}}/>,
		name: "Fashion",
		path: '/fashion',
		component: Fashion,
	},
	{
		icon: <FontAwesomeIcon icon={faHeartbeat} style={{fontSize: 22}}/>,
		name: "Health & Fitness",
		path: '/health',
		component: HealthFitness,
	},
	{
		icon: <MonochromePhotosRounded/>,
		name: "The Niche Focal",
		path: '/focal',
		component: NicheFocal,
	},
	{
		icon: <FontAwesomeIcon icon={faImages} style={{fontSize: 22}}/>,
		name: "Gallery",
		path: '/gallery',
		component: Gallery,
	},
	{
		icon: <ContactSupportRounded/>,
		name: "Contact",
		path: '/contact',
		component: Contact,
	},
]

export default ROUTES;