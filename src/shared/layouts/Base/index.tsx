import Grid, { CellGrid } from "@components/common/layouts/Grid";
import { Aside } from "@components/common/lib/Aside";
import { Footer } from "@components/common/lib/Footer";
import { Header } from "@components/common/lib/Header";
import { Outlet } from "react-router-dom";
import { Main } from "./styles";

function LayoutBase() {
  return (
    <>
      <Grid
        gap={false}
        css={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          gridTemplateAreas: `
          'header'
          'aside'
          'main'
          'footer'
          `,
          gridTemplateColumns: "1fr",
          gridTemplateRows: "$12 $10 1fr $12",
          "@mg": {
            gridTemplateAreas: `
              'aside header'
              'aside main'
              'aside footer'
            `,
            gridTemplateColumns: "$10 1fr",
            gridTemplateRows: "$12 1fr $12",
          },
        }}
      >
        <CellGrid area="header">
          <Header />
        </CellGrid>

        <CellGrid area="aside">
          <Aside />
        </CellGrid>

        <CellGrid area="main">
          <Main>
            <Outlet />
          </Main>
        </CellGrid>

        <CellGrid area="footer">
          <Footer />
        </CellGrid>
      </Grid>
    </>
  );
}

export { LayoutBase };
