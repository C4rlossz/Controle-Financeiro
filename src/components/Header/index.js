import React from "react";
import * as C from "./styles";

const Header = () => {
  return (
    <C.Container>
      <C.Background />
      <C.BordaInferior />
      <C.Content>
        <C.Title>Controle Financeiro</C.Title>
      </C.Content>
    </C.Container>
  );
};

export default Header;
