import React, { useMemo } from "react";

import { Card } from "@mui/material";
import ReusableTable from "./components/reusableTable";
import useAddPost from "./hooks/Mutations/useAddPost";
import useGetPosts from "./hooks/Queries/useGetPosts";

const columns = [
  {
    accessorKey: "userId",
    header: "User ID",
    size: 200,
  },
  {
    accessorKey: "title",
    header: "Title",
    size: 150,
  },
  {
    accessorKey: "body",
    header: "Body",
    size: 150,
  },
];

const App = () => {
  const { posts, loadingPosts } = useGetPosts();
  const { mutate } = useAddPost();

  const data = useMemo(() => {
    return posts?.map((o) => ({ ...o, tableData: {} })) || [];
  }, [posts]);

  return (
    <>
      <h2>Posts</h2>
      <button
        onClick={() => {
          let data = {
            id: 101,
            title: "foo",
            body: "bar",
            userId: 1,
          };
          mutate(data);
        }}
      >
        Submit
      </button>
      {loadingPosts ? (
        <p>Loading....</p>
      ) : (
        <Card style={{ width: "100%" }}>
          <ReusableTable columns={columns} data={data} />
        </Card>
      )}
    </>
  );
};

export default App;
