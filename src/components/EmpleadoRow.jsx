import EmpleadoAvatar from "./EmpleadoAvatar";
import { Badge, Col, Row } from "react-bootstrap";

const EmpleadoRow = ({ arregloEmpleado }) => {
  return (
    <div>
      {arregloEmpleado.map((empleado, id) => (
        <Row key={id}>
          <Col sm={12} md={4} lg={2}>
            <EmpleadoAvatar empleado={empleado}></EmpleadoAvatar>
          </Col>
          <Col sm={12} md={8} lg={4} className='text-center'>
            <div>
              <h3 className="mt-3">{empleado.fullName}</h3>
              <p className="mb-3">
                {empleado.title}
                <Badge bg="info" className="ms-4">
                  {empleado.department}
                </Badge>
              </p>
            </div>
          </Col>
          <hr />
        </Row>
      ))}
    </div>
  );
};

export default EmpleadoRow;
