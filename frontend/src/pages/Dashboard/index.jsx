import { useState } from "react";
import api from "../../services/api";

import { Container, Aside, Main, Title, InputBlock } from "./styles";

const Dashboard = () => {
  const [clientName, setClientName] = useState("");
  const [clientCPF, setClientCPF] = useState("");
  const [clientRG, setClientRG] = useState("");
  const [clientUF, setClientUF] = useState("");
  const [clientBirthDate, setClientBirthDate] = useState("");
  const [firstLawyer, setFirstLawyer] = useState("");
  const [firstOAB, setFirstOAB] = useState("");
  const [secondLawyer, setSecondLawyer] = useState("");
  const [secondOAB, setSecondOAB] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const passengers = {
      clientName,
      clientCPF,
      clientRG,
      clientUF,
      clientBirthDate,
      firstLawyer,
      firstOAB,
      secondLawyer,
      secondOAB,
    };

    const pdf = await api.post("/pdf", passengers, {
      responseType: "arraybuffer",
      headers: {
        Accept: "application/pdf",
      },
    });

    const blob = new Blob([pdf.data], { type: "application/pdf" });
    window.open(window.URL.createObjectURL(blob), "_blank");
  }

  return (
    <Container>
      <Aside>
        <h2>ANDRADE & FONSECA</h2>
        <h3>ADVOCACIA e CONSULTORIA</h3>
      </Aside>
      <Main>
        <Title>Contrato</Title>
        <form onSubmit={handleSubmit}>
          <label htmlFor="clientName">Nome</label>
          <input
            id="clientName"
            value={clientName}
            placeholder="Digite o nome do cliente"
            onChange={(event) => setClientName(event.target.value)}
          />
          <InputBlock>
            <div>
              <label htmlFor="clientCPF">CPF</label>
              <input
                id="clientCPF"
                value={clientCPF}
                placeholder="Digite o CPF do cliente"
                onChange={(event) => setClientCPF(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="clientRG">RG</label>
              <input
                id="clientRG"
                value={clientRG}
                placeholder="Digite o RG do cliente"
                onChange={(event) => setClientRG(event.target.value)}
              />
            </div>
          </InputBlock>
          <InputBlock>
            <div>
              <label htmlFor="clientUF">Estado</label>
              <input
                id="clientUF"
                value={clientUF}
                placeholder="Digite o UF do cliente"
                onChange={(event) => setClientUF(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="clientBirthDate">Data de Nascimento</label>
              <input
                id="clientBirthDate"
                value={clientBirthDate}
                placeholder="Digite o nascimento do cliente"
                onChange={(event) => setClientBirthDate(event.target.value)}
              />
            </div>
          </InputBlock>
          <label htmlFor="firstLawyer">1º Advogado</label>
          <input
            id="firstLawyer"
            value={firstLawyer}
            placeholder="Digite o nome do 1º advogado"
            onChange={(event) => setFirstLawyer(event.target.value)}
          />
          <label htmlFor="firstOAB">OAB</label>
          <input
            id="firstOAB"
            value={firstOAB}
            placeholder="Digite a OAB"
            onChange={(event) => setFirstOAB(event.target.value)}
          />
          <label htmlFor="secondLawyer">2º Advogado</label>
          <input
            id="secondLawyer"
            value={secondLawyer}
            placeholder="Digite o nome do 2º advogado"
            onChange={(event) => setSecondLawyer(event.target.value)}
          />
          <label htmlFor="secondOAB">OAB</label>
          <input
            id="secondOAB"
            value={secondOAB}
            placeholder="Digite a OAB"
            onChange={(event) => setSecondOAB(event.target.value)}
          />

          <button type="submit">Gerar</button>
        </form>
      </Main>
    </Container>
  );
};

export default Dashboard;
