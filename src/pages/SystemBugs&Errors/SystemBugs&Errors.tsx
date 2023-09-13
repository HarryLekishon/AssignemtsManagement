import { GridColDef } from "@mui/x-data-grid";
import "./systemBugs&Errors.css";

import React from "react";
import { SysBugs } from "../../data/data";
import DataTable from "../../components/datatable/DataTable";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "sir",
    type: "string",
    headerName: "SIR",
    width: 150,
  },
  {
    field: "summary",
    type: "string",
    headerName: "Summary",
    width: 350,
  },
  {
    field: "component",
    type: "string",
    headerName: "Component",
    width: 150,
  },
  {
    field: "status",
    type: "string",
    headerName: "Status",
    width: 80,
  },
  {
    field: "resolution",
    type: "string",
    headerName: "Resolution",
    width: 250,
  },

  {
    field: "reporter",
    type: "string",
    headerName: "Reporter",
    width: 150,
  },
  {
    field: "priority",
    type: "string",
    headerName: "Priority",
    width: 75,
  },
];

function SystemBugsErrors() {
  return (
    <div className="Complaints">
      <p className="complaintsTitle">System Bugs & Errors</p>
      <DataTable slug="Customer Complaints" columns={columns} rows={SysBugs} />
    </div>
  );
}

export default SystemBugsErrors;
