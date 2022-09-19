import { Tr, Td, Span } from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const ItemTable = ({ item, onDelete }: any) => {
  return (
    <Tr>
      <Td scope="row" data-label="Descrição">
        {item.desc}
      </Td>
      <Td data-label="Valor">{item.amount}</Td>
      <Td
        data-label="Tipo"
        css={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Span>
          {item.expense ? (
            <FaRegArrowAltCircleDown color="red" />
          ) : (
            <FaRegArrowAltCircleUp color="green" />
          )}

          <FaTrash onClick={() => onDelete(item.id)} />
        </Span>
      </Td>
    </Tr>
  );
};

export { ItemTable };
