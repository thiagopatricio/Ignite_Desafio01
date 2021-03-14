import "../styles/header.scss";

function dataAtualFormatada() {
  var data = new Date(),
    dia = data.getDate().toString().padStart(2, "0"),
    mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
    ano = data.getFullYear();
  return dia + "/" + mes + "/" + ano;
}
const formattedDate = dataAtualFormatada();

export function Header() {
  return (
    <header className="header">
      <div>
        <h1> Lista de Tarefas Samara {formattedDate} </h1>
      </div>
    </header>
  );
}
