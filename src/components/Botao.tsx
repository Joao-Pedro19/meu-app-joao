function Botao({texto}){
  return(
    <button
      style={{
        background: "#F2A900",
        color: "#0d2248",
        padding: "10px 24px",
        fontWeight: "bold",
        border: "none",
      }}
    >
      {texto}
    </button>
  );
}

export default Botao
