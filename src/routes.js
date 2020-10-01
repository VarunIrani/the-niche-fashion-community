import Home from "./views/Home";
import ExclusiveReads from "./views/ExclusiveReads";
import Fashion from "./views/Fashion";
import HealthFitness from "./views/HealthFitness";
import About from "./views/About";
import NicheFocal from "./views/NicheFocal";
import Gallery from "./views/Gallery";
import Contact from "./views/Contact";

const ROUTES = [
	{
		name: "HOME",
		path: '/',
		component: Home,
	},
	{
		name: "EXCLUSIVE READS",
		path: '/exclusive',
		component: ExclusiveReads,
	},
	{
		name: "FASHION",
		path: '/fashion',
		component: Fashion,
	},
	{
		name: "HEALTH & FITNESS",
		path: '/health',
		component: HealthFitness,
	},
	{
		name: "ABOUT THE NICHE",
		path: '/about',
		component: About,
	},
	{
		name: "THE NICHE FOCAL",
		path: '/focal',
		component: NicheFocal,
	},
	{
		name: "GALLERY",
		path: '/gallery',
		component: Gallery,
	},
	{
		name: "CONTACT",
		path: '/contact',
		component: Contact,
	},
]

export default ROUTES;