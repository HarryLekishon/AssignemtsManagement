import React from "react";
import "./reports.css";
import DataTable from "../../components/datatable/DataTable";
// import { ReportsList } from "../../data/data";
import { GridColDef } from "@mui/x-data-grid";
import DataTable2 from "../../components/datatable/DataTable2";
import data2 from "../../data/data2";

const filterDataByCategory = () => {
  return data2.map((item) => item);
};

const ReportsList = filterDataByCategory();
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
function Reports() {
  return (
    <div className="Complaints">
      <p className="complaintsTitle">Detailed Report</p>
      <DataTable2 slug="reports" columns={columns} rows={ReportsList} />
    </div>
  );
}

export default Reports;
