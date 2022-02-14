import React from "react";
import { CFooter } from "@coreui/react";

const Footer = () => {
	return (
		<CFooter>
			<div className="ms-auto">
				<a href="https://enitt.co.kr" target="_blank" rel="noopener noreferrer">
					ENITT
				</a>
				<span className="ms-1">&copy; 2022.</span>
			</div>
		</CFooter>
	);
};

export default React.memo(Footer);
