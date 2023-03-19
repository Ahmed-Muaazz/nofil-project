import React from "react";
import { useState } from "react";
import "./Api.css";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Api = ({ data }) => {
  const [value, setValue] = useState(0);
  const [Api, setApi] = useState(data);
  const [ClickedApi, setClickedApi] = useState(data[0]);
  const [CaseApi, setCaseApi] = useState(ClickedApi.cases[0]);
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(0);

  const clickHandler = (index) => {
    setValue(index);
    setClickedApi(data[index]);
    setCaseApi(data[index].cases[0]);
    setActive1(index);
    setActive2(0);
  };

  const caseHandler = (index) => {
    setCaseApi(ClickedApi.cases[index]);
    setActive2(index);
  };

  return (
    <section className="userSection">
      <div className="buttonList">
        <h3>Api Name</h3>

        {Api.map((item, index) => {
          return (
            <div key={index}>
              <button
                key={item.id}
                onClick={() => clickHandler(index)}
                className={active1 === index ? "active btn" : "btn"}
              >
                {item.title}
              </button>
            </div>
          );
        })}
      </div>
      {/* ============= */}
      <div className="center_container">
        <div className="info">
          <div>
            <h3>Details</h3>
            <div className="api_param">
              <h4>Request Type :</h4>
              <h4
                style={{
                  color:
                    ClickedApi.Type === "POST"
                      ? "red"
                      : ClickedApi.Type === "PUT"
                      ? "orange"
                      : ClickedApi.Type === "GET"
                      ? "green"
                      : ClickedApi.Type === "PATCH"
                      ? "orangde"
                      : "black",
                }}
              >
                {ClickedApi.Type}
              </h4>
            </div>
            <div className="api_param">
              <h4>URL endpoint :</h4>
              <h4 className="param_child">{ClickedApi.url}</h4>
            </div>
          </div>

          <hr />

          <table>
            <thead>
              <tr>
                <th>Field Name</th>
                <th>Data Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {ClickedApi.parameters.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.Field}</td>
                    <td>{item.Type}</td>
                    <td>{item.Description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <hr />

          <div className="example_container">
            <p
              className={
                CaseApi.id === 1
                  ? "response_message_success"
                  : "response_message_UNsuccess"
              }
            >
              {CaseApi.response}
            </p>

            <div className="pre_container">
              <h4>Example of a successful Request-Response cycle</h4>
              <pre>{ClickedApi.pre}</pre>
            </div>
          </div>
        </div>
        {/* ============= */}
        <div className="buttonList">
          <h3>All Cases</h3>

          {ClickedApi.cases.map((item, index) => {
            return (
              <div className="case" key={index}>
                <button
                  key={item.id}
                  onClick={() => caseHandler(index)}
                  className={active2 === index ? "active btn" : "btn"}
                >
                  {item.title}
                </button>
                {item.title === "Success" ? (
                  <TiTick style={{ color: "green", fontSize: "1rem" }} />
                ) : (
                  <RxCross2 style={{ color: "red", fontSize: "1rem" }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Api;
