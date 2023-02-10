import React from 'react';
import * as RiIcons from 'react-icons/ri';
import { BiRocket } from 'react-icons/bi';

export const SidebarData = [
	{
		title: 'Projects',
		path: '/dashboard/celebrity-nfts',
		icon: <BiRocket />,
	},
	{
		title: 'Staking',
		path: '/dashboard/staking',
		icon: <RiIcons.RiCoinFill />,
	},
	{
		title: 'AI Training',
		path: '/dashboard/aiTraining',
		icon: <RiIcons.RiCoinFill />,
	},
	{
		title: 'Celebrity',
		path: '/dashboard/celebrity',
		icon: <RiIcons.RiCoinFill />,
	},
];
