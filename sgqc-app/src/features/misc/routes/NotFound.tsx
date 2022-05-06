import { MainLayoutPublic } from "@/components/Layout";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container>
      <MainLayoutPublic title="Ops, Pagina não encontrada !!!">
      </MainLayoutPublic>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Link to={"/"} ></Link>
      </div>
    </Container>

  )
};
