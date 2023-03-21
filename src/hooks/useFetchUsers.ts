import { useEffect, useState } from "react";
import { ApiResponse, User } from "../types";
interface IData {
  [page: number]: User[];
}
export const useFetchUsers = () => {
  const [data, setData] = useState<IData | null>(null);
  const [maxPage, setMaxPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://give-me-users-forever.vercel.app/api/users/${maxPage}/next`
        );
        if (!res.ok) {
          throw new Error(
            `An Error with the request occured with status: ${res.status}`
          );
        }
        let actualData: ApiResponse = await res.json();
        setData((prev) => {
          return { ...prev, [maxPage]: actualData.users };
        });
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [maxPage]);

  function fetchNextPage() {
    setMaxPage((prev) => prev + 1);
  }

  return { data, maxPage, loading, error, fetchNextPage };
};
