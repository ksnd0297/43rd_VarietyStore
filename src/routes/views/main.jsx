import React, { useState } from "react";
import MainTemplate from "../../components/mainTemplate/MainTemplate";
import ReactPageScroller from "react-page-scroller";

const MainView = () => {
	const [currentPage, setCurrentPage] = useState();

	const handlePageChange = (number) => setCurrentPage(number);
	const handleBeforePageChange = (number) => console.log(number);

	const getPagesNumber = () => {
		const pageNumbers = [];
	};
	return (
		<ReactPageScroller
			pageOnChange={handlePageChange}
			onBeforePageScroll={handleBeforePageChange}
			customPageNumber={currentPage}
		>
			<MainTemplate></MainTemplate>
			<MainTemplate></MainTemplate>
			<MainTemplate></MainTemplate>
		</ReactPageScroller>
	);
};
export default MainView;
