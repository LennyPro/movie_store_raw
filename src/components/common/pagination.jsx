import lodash from 'lodash';

const Pagination = (props) => {

    const { itemsCount, pageSize } = props;
    const pageCount = Math.ceil(itemsCount / pageSize); // converts floating into int
    // create an array [1... pageCount].map() using lodash lib
    if (pageCount === 1) return null;
    const pages = lodash.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => {
                    return (
                        <li key={page} className={page === props.currentPage ? "page-item active" : "page-item"}>
                            <a onClick={() => props.onPageChange(page)} className="page-link">
                                {page}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Pagination;