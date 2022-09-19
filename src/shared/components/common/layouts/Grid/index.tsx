import { ComponentProps } from "@stitches/react";
import { CellGridStyled, GridStyled as Grid } from "./styles";

type CellProps = ComponentProps<typeof CellGridStyled> & {
  area: string;
};

function CellGrid({ children, area, css, ...rest }: CellProps) {
  return (
    <CellGridStyled css={{ gridArea: area, ...css }} {...rest}>
      {children}
    </CellGridStyled>
  );
}

export { CellGrid };

export default Grid;
