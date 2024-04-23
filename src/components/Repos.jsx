import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

function Repos() {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/patiee-Lyop92/repos"
        );
        if (!response.ok) {
          throw new Error("fetching data failed");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {}
    };

    fetchRepos();
  }, []);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterLanguage(e.target.value);
    setCurrentPage(1);
  };

  const filteredRepos = repos.filter((repo) => {
    return (
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterLanguage === "" || repo.language === filterLanguage)
    );
  });

  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(filteredRepos.length / itemsPerPage);

  return (
    <ErrorBoundary>
      <div className="repos">
        {/* DISPLAY DETAILS */}
        <Outlet />

        {/* FILTER */}
        <div className="filter">
          <input
            className="search"
            type="search"
            placeholder="Search by repository name..."
            value={searchQuery}
            onChange={handleSearchQuery}
          />

          <select
            className="select"
            value={filterLanguage}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Sass">Sass</option>
            <option value="Typescript">Typescript</option>
            <option value="Python">Python</option>
            <option value="Ruby">Ruby</option>
            <option value="HTML">Html</option>
          </select>
        </div>

        {/* REPOLIST */}
        <div className="list">
          {filteredRepos.length > 0 ? (
            filteredRepos.slice(startIndex, endIndex).map((repo) => {
              return (
                <h3 key={repo.name}>
                  <Link to={`/repos/${repo.name}`} state={{ repo }}>
                    {repo.name}
                  </Link>
                </h3>
              );
            })
          ) : (
            <h4>Not Found</h4>
          )}
        </div>

        {/* PAGINATION */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="pageNumber">
            {currentPage} / {totalPages}
          </div>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Repos;
