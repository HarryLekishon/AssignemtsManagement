import React from "react";
import "./systemEnhancements.css";
import { GridColDef } from "@mui/x-data-grid";
// import { SysEnhancements } from "../../data/data";
import DataTable from "../../components/datatable/DataTable";

import data2 from "../../data/data2";

const filterDataByCategory = (category) => {
  return data2.filter((item) => item.cat_id === category);
};

const SysEnhancements = filterDataByCategory("Enhancement");

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "work_order_number",
    type: "string",
    headerName: "Service Request",
    width: 150,
  },
  {
    field: "work_order_description",
    type: "string",
    headerName: "Work Order Description",
    width: 350,
  },
  {
    field: "acc_id",
    type: "string",
    headerName: "Reported By",
    width: 200,
  },
  {
    field: "status_id",
    type: "string",
    headerName: "Status",
    width: 80,
  },
  {
    field: "internal_priority",
    type: "string",
    headerName: "Internal Priority",
    width: 100,
  },
  {
    field: "source",
    headerName: "Source",
    width: 75,
    type: "string",
  },
  {
    field: "severity_id",
    headerName: "Severity",
    width: 100,
    type: "string",
  },
  {
    field: "date_completed",
    type: "string",
    headerName: "Date Completed",
    width: 150,
  },
];

function SystemEnhancements() {
  return (
    <div className="Complaints">
      <p className="complaintsTitle">System Enhancements</p>
      <DataTable
        slug="Customer Complaints"
        columns={columns}
        rows={SysEnhancements}
      />
    </div>
  );
}

export default SystemEnhancements;
