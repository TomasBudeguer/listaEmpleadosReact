import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import EmpleadoList from './components/EmpleadoList';
function App() {
  return (
    <Container>
      <h1>Lista de empleados</h1>
      <hr />
      <EmpleadoList></EmpleadoList>
    </Container>
  );
}

export default App;
