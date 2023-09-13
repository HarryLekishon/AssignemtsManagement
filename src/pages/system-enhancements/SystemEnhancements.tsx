import React from "react";
import "./systemEnhancements.css";
import { GridColDef } from "@mui/x-data-grid";
import { SysEnhancements } from "../../data/data";
import DataTable from "../../components/datatable/DataTable";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "serviceRequest",
    type: "string",
    headerName: "Service Request",
    width: 150,
  },
  {
    field: "classDescription",
    type: "string",
    headerName: "Class Description",
    width: 150,
  },
  {
    field: "details",
    type: "string",
    headerName: "Details",
    width: 250,
  },
  {
    field: "status",
    type: "string",
    headerName: "Status",
    width: 80,
  },
  {
    field: "internalPriority",
    type: "string",
    headerName: "Internal Priority",
    width: 150,
  },
  {
    field: "source",
    type: "string",
    headerName: "Source",
    width: 75,
  },
  {
    field: "summary",
    type: "string",
    headerName: "Summary",
    width: 350,
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
