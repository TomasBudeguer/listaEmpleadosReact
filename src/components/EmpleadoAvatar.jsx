const EmpleadoAvatar = (props) => {
  return (
    <div>
      <img
        src={props.empleado.pic}
        alt={props.empleado.fullName}
        className="w-100"
      />
    </div>
  );
};

export default EmpleadoAvatar;
