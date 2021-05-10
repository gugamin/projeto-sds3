import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChance: Function;
}

const Pagination = ( { page, onPageChance } : Props ) => {
  return (
    <div className="row d-flex justify-content-center">
      <nav>
        <ul className="pagination">
            <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => onPageChance( 0 ) }> &laquo; </button>
            </li>

            <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => onPageChance(page.number - 1 ) }>Anterior</button>
            </li>

            <li className="page-item disabled">
                <span className="page-link">{ page.number + 1} / { page.totalPages }</span>
            </li>

            <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                <button className="page-link"  onClick={() => onPageChance(page.number + 1 ) }>Próxima</button>
            </li>

            <li className={`page-item ${page.last ? 'disabled' : ''}`}>
            <button className="page-link"  onClick={() => onPageChance(page.totalPages -1) }> &raquo; </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
