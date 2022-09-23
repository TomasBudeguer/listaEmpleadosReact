import EmpleadoAvatar from "./EmpleadoAvatar";
import {Badge} from "react-bootstrap"
const EmpleadoRow = ({ arregloEmpleado }) => {
  return (
    <div>
      {arregloEmpleado.map((empleado, id) => (
        <div className="row" key={id}>
          <aside className="col-2">
            <EmpleadoAvatar empleado={empleado}></EmpleadoAvatar>
          </aside>
          <aside className="col-10">
            <div>
              <h3>{empleado.fullName}</h3>
              <p>
                {empleado.title}
                <Badge bg="info" className="ms-4">{empleado.department}</Badge>
              </p>
            </div>
          </aside>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default EmpleadoRow;
