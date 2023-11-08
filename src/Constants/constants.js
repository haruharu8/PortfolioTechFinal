/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedin,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBagShopping,
	faBars,
	faDiceD6,
	faEnvelope,
	faWindowRestore,
	faX,
} from "@fortawesome/free-solid-svg-icons";

import {
	avatar,
	awsIcon,
	calculator,
	cssIcon,
	eslintIcon,
	figmaIcon,
	gitIcon,
	githubIcon,
	htmlIcon,
	javaIcon,
	jsIcon,
	plants,
	nodeIcon,
	pyIcon,
	reactIcon,
	viteIcon,
	animu,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,
	awsIcon,
	javaIcon,
	gitIcon,
	githubIcon,
	eslintIcon,
	pyIcon,
	viteIcon,
	nodeIcon,
	figmaIcon,
	avatar,
};

const icons = {
	faBars,
	faX,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faReact,
	faGithub,
	faLinkedin,
	faEnvelope,
};

const introduction = {
	text: [
		"Hi! Welcome to my page! (:",

		"My name is Kelly, and I am a front-end software developer. I have a strong passion for the tech revolving around responsiveness, design, and UI/UX.",

		"Outside of my software engineering, I perform hip hop dance and go to anime conventions.",

		"I'm continuously looking out to partner up with teams who challenge my skills!",
	],
};

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const projects = [



	{
		name: "Plants v Zombies Clone",
		description:
			"This is a plants vs zombies clone done when I just started out with basic HTML, CSS, and JavaScript",
		image: plants,
		source_code_link: "https://github.com/haruharu8/MOD1_Projecte",
		demo_link: "https://haruharu8.github.io/MOD1_Project/",
	},
	{
		name: "Anime Recs!",
		description:
			"A self guided tour on discovering what to what next for the Anime lover in you. WIP",
		image: animu,
		source_code_link: "https://github.com/haruharu8/MOD2_AnimeRec",
		demo_link:
			"https://animerecs.onrender.com",
	},
	{
		name: "Basic Budget App",
		description:
			"Dark mode budget calculator which you can edit and add expenses. WIP",
		image: calculator,
		source_code_link: "https://github.com/haruharu8/MOD3_final",
		demo_link: "https://budgetapp-k9jp.onrender.com",
	},
];

const memoji = {
	image: [avatar],
};

const skills = [
	{
		id: "html",
		title: "HTML",
		icon: htmlIcon,
		description:
			"I have a thorough understanding of HTML concepts which I can use to build static sites.",
	},
	{
		id: "css",
		title: "CSS",
		icon: cssIcon,
		description:
			"I'll use my CSS to style your websites artistically",
	},
	{
		id: "javascript",
		title: "JavaScript",
		icon: jsIcon,
		description:
			"My bread and butter for making responsive websites pop for users.",
	},
	{
		id: "react",
		title: "React",
		icon: reactIcon,
		description:
			"My best front-end framework to create dynamic sites that will impress people.",
	},
	{
		id: "java",
		title: "Java",
		icon: javaIcon,
		description:
			"Currently studying this in University. Learning Object Oriented Programming and Data Structures.",
	},
	{
		id: "aws",
		title: "Amazon Web Services",
		icon: awsIcon,
		description:
			"WIP to obtain my Associate badge",
	},
	{
		id: "figma",
		title: "Figma",
		icon: figmaIcon,
		description:
			"WIP to obtain better UI/UX mockups",
	},
	{
		id: "git",
		title: "Git",
		icon: gitIcon,
		description:
			"I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
	},
	{
		id: "github",
		title: "GitHub",
		icon: githubIcon,
		description:
			"I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
	},
	{
		id: "vite",
		title: "Vite",
		icon: viteIcon,
		description:
			"My choice when creating modern React apps.",
	},
	{
		id: "py",
		title: "Python",
		icon: pyIcon,
		description:
			"WIP to learn backend",
	},
	{
		id: "node",
		title: "Node",
		icon: nodeIcon,
		description:
			"Runtime enviorment of choice when creating webapps.",
	},
	{
		id: "eslint",
		title: "Eslint",
		icon: eslintIcon,
		description:
			"I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
	},
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills };
