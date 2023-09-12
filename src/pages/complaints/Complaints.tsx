import React from "react";
import "./complaints.css";
import { GridColDef } from "@mui/x-data-grid";
import { CustomerComplaints } from "../../data/data";
import DataTable from "../../components/datatable/DataTable";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "serviceRequest",
    type: "string",
    headerName: "Service Requests",
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
    headerName: "Source",
    width: 75,
    type: "string",
  },
  {
    field: "summary",
    headerName: "Summary",
    width: 350,
    type: "string",
  },
];

function Complaints() {
  return (
    <div className="Complaints">
      <p className="complaintsTitle">Customer Complaints</p>
      <DataTable
        slug="Customer Complaints"
        columns={columns}
        rows={CustomerComplaints}
      />
    </div>
  );
}

export default Complaints;
