import React from "react";
import { useParams } from "react-router-dom";
import './report.css'

function Report() {
  const { id } = useParams()
  return <div className="formConatiner">
    <form className="formdetails" action="">
 
      <section className="firstfrom">
        <div>
          <label htmlFor="">work_order_no: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">work_order_status:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Maintenance_type:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">App_name:</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">financial_year:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">financial_qtr:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Within:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Unit:</label>
          <input type="text" />
        </div>
      </section>

      <section className="secondform">
        <div>
        <label htmlFor="">Date_logged:</label>
        <input type="text" />
        </div>

        <div>
        <label htmlFor="">Date_due:</label>
        <input type="text" />
        </div>

        <div>
        <label htmlFor="">Date_closed:</label>
        <input type="text" />
        </div>

        <div>
        <label htmlFor="">Month</label>
        <input type="text" />
        </div>

        <div>
        <label htmlFor="">Year</label>
        <input type="text" />
        </div>
      </section>
    </form>
  </div>

}

export default Report;
