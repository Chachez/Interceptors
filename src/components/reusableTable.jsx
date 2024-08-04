import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const ReusableTable = ({ columns, data }) => {
  const memoizedColumns = useMemo(() => columns, [columns]);
  const memoizedData = useMemo(() => data, [data]);

  const table = useMaterialReactTable({
    columns: memoizedColumns,
    data: memoizedData,
    enableStickyHeader: true,
    enableRowNumbers: true,
    initialState: {
      isFullScreen: true,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default ReusableTable;
