import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
    const arregloEmpleado = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://www.pngarts.com/files/3/Employee-Avatar-PNG-Free-Download.png" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://cdn-icons-png.flaticon.com/512/147/147144.png" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://www.pngarts.com/files/3/Employee-Avatar-Free-PNG-Image.png" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://www.pngarts.com/files/3/Employee-Avatar-PNG-High-Quality-Image.png" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://www.pngarts.com/files/3/Girl-Avatar-Transparent-Background-PNG.png" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://www.pngarts.com/files/3/Employee-Avatar-PNG-Pic.png" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://www.pngarts.com/files/3/Girl-Avatar-PNG-Download-Image.png" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://www.pngarts.com/files/3/Boy-Avatar-PNG-Download-Image.png" },
      ]
  return (
    <section>
      <EmpleadoRow arregloEmpleado={arregloEmpleado}></EmpleadoRow>
    </section>
  );
};

export default EmpleadoList;
