import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)

  if (!res.ok) {
    console.log("API> Error: " + res.statusText)
    const error = new Error(res.statusText);
    throw error;
  }

  return res.json();
}

export default function GetData(id) {
    const { data, error } = useSWR(`/api/data/${id}`, fetcher, { refreshInterval: 10, revalidateIfStale: false, dedupingInterval: 10 })
    return {
      returndata: data,
      isLoading: !error && !data,
      isError: error
    }
}