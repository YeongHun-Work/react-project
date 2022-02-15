import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { SidebarNav } from "./SidebarNav";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import ReactShadowScroll from 'react-shadow-scroll';


// sidebar nav config
import navigation from "./SidebarNavList";

import { logoNegative } from "src/assets/brand/logo-negative";
import { sygnet } from "src/assets/brand/sygnet";

import logo from "src/assets/enitt-logo-white.png";

const Sidebar = () => {
	const dispatch = useDispatch();
	const unfoldable = useSelector((state) => state.sidebarUnfoldable);
	const sidebarShow = useSelector((state) => state.sidebarShow);

	return (
		<CSidebar
			position="fixed"
			unfoldable={unfoldable}
			visible={true} // visible={sidebarShow}
			onVisibleChange={(visible) => {
				dispatch({ type: "set", sidebarShow: visible });
			}}
		>
			<CSidebarBrand className="d-none d-md-flex" to="/">
				<img src={logo} className="" alt="logo" height={50}/>
				{/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} /> */}
				{/* <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
			</CSidebarBrand>

			<CSidebarNav>
				{/* <SimpleBar>
					<SidebarNav items={navigation} />
				</SimpleBar> */}
				<ReactShadowScroll scrollColor="white" isShadow>
					<SidebarNav items={navigation} />
				</ReactShadowScroll>
			</CSidebarNav>
		</CSidebar>
	);
};

export default React.memo(Sidebar);
