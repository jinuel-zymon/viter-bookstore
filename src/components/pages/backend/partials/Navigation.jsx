import { Award, LibraryBig, ReceiptText } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../frontend/partials/Logo";

const Navigation = ({menu=""}) => {
  return (
    <div className="p-4 ">

      <Logo/>

      <nav className="mt-7">
        <ul className="space-y-5">

          <li>
            <Link
              to="/admin/books"
              className={`${menu === "books" ? "active" : ""} nav-link`}
            >
              <LibraryBig size={18} strokeWidth={1}/>
                Books
            </Link>
          </li>

          <li>
            <Link
              to="/admin/bestsellers"
              className={`${menu === "bestsellers" ? "active" : ""} nav-link`}
            >
              <Award size={18} strokeWidth={1}/>
                Best Sellers
            </Link>
          </li>

          <li>
            <Link
              to="/admin/transaction"
              className={`${menu === "transaction" ? "active" : ""} nav-link`}
            >
              <ReceiptText size={18} strokeWidth={1}/>
                Transaction
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

