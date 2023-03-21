import React, { useState } from "react";
import "./App.css";
import { User } from "./types";
import { ListItem } from "./components/ListItem/ListItem";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { Loader } from "./components/Loader/Loader";

function App() {
  const { data, loading, error, maxPage, fetchNextPage } = useFetchUsers();
  const [page, setPage] = useState(0);

  function handlePrevious() {
    if (page === 0) {
      return;
    }
    setPage((prev) => prev - 1);
  }

  function handleNext() {
    if (page + 1 > maxPage) {
      fetchNextPage();
    }
    setPage((prev) => prev + 1);
  }

  if (error) {
    return <div>Error:{error}</div>;
  }

  return (
    <div className="app">
      <div className="users-container">
        {loading ? (
          <Loader />
        ) : (
          <>
            {data &&
              data[page] &&
              data[page].map((user: User) => (
                <ListItem key={user.ID} user={user} />
              ))}
          </>
        )}
      </div>
      <div className="button-container">
        <button
          className="button"
          disabled={page === 0 || loading}
          onClick={() => handlePrevious()}
        >
          Previous
        </button>
        <button
          className="button"
          disabled={loading}
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
