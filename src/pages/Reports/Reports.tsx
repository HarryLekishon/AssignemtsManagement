import React from "react";
import "./reports.css";
import DataTable from "../../components/datatable/DataTable";
import { ReportsList } from "../../data/data";
import { GridColDef } from "@mui/x-data-grid";
import DataTable2 from "../../components/datatable/DataTable2";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "workOrderNo",
    type: "string",
    headerName: "Work Order No",
    width: 150,
  },
  {
    field: "maintenanceType",
    type: "string",
    headerName: "MaintenanceType",
    width: 150,
  },
  {
    field: "appName",
    type: "string",
    headerName: "App Name",
    width: 250,
  },
  {
    field: "month",
    type: "string",
    headerName: "Month",
    width: 80,
  },
  {
    field: "workOrderStatus",
    type: "string",
    headerName: "Work Order Status",
    width: 150,
  },
  {
    field: "within",
    type: "string",
    headerName: "Within",
    width: 75,
  },
  {
    field: "unit",
    type: "string",
    headerName: "Unit",
    width: 150,
  },
];
function Reports() {
  return (
    <div className="Complaints">
      <p className="complaintsTitle">Detailed Report</p>
      <DataTable2 slug="reports" columns={columns} rows={ReportsList} />
    </div>
  );
}

export default Reports;
