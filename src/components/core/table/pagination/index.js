import ReactPaginate from "react-paginate";

const Pagination = ({totalPages, setCurrentPage}) => {

    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1);
    }

    return (
        <ReactPaginate
            className="cmsDashboardTablePagination"
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"cmsDashboardTablePaginationPageSingle"}
            pageLinkClassName={"cmsDashboardTablePaginationPageSingleTxt"}
            previousClassName={"cmsDashboardTablePaginationAction"}
            previousLinkClassName={"cmsDashboardTablePaginationActionTxt"}
            nextClassName={"cmsDashboardTablePaginationAction"}
            nextLinkClassName={"cmsDashboardTablePaginationActionTxt"}
            breakClassName={"cmsDashboardTablePaginationAction"}
            breakLinkClassName={"cmsDashboardTablePaginationActionTxt"}
            activeClassName={"active"}
        />
    );
}

export default Pagination;