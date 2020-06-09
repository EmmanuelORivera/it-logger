import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import "moment/locale/es";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../Actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";
const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { message, attention, date, id, tech } = log;
  const onDelete = (id) => {
    deleteLog(id);
    M.toast({ html: "Log Deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
          onClick={() => setCurrent(log)}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> cambiado por ultima vez
          por <span className="black-text">{tech}</span> el{" "}
          <Moment format="DD MMMM  YYYY,h:mm:ss a" local="es">
            {date}
          </Moment>
        </span>
        <a
          href="#!"
          onClick={(e) => onDelete(id)}
          className="secondary-content"
        >
          <i className="material-icons red-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
