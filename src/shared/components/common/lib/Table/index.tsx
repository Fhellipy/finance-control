import { Display } from "@components/common/layouts/Display";
import { ItemTable } from "./ItemTable";
import { NoItemTable } from "./NoItemTable/index ";
import { Table as ContentTable, Caption, Thead, Tr, Th, Tbody } from "./styles";

const Table = ({ itens, setItens }: any) => {
  const onDelete = (ID: number) => {
    const newArray = itens.filter((transaction: any) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <ContentTable
      css={{
        "& div::-webkit-scrollbar": {
          width: "0.4rem",
          "@mg": {
            width: "0.5rem",
          },
        },
        "& div::-webkit-scrollbar-thumb": {
          background: "$gray",
          borderRadius: "$ls",
        },
      }}
    >
      <Caption>Controle de Finança</Caption>
      <Thead>
        <Tr>
          <Th scope="col">Descrição</Th>
          <Th scope="col">Valor</Th>
          <Th scope="col">Tipo</Th>
        </Tr>
      </Thead>
      <Display
        flex
        justify="center"
        css={{
          padding: "0.3rem 0",
          maxHeight: "35rem",
          overflowY: "scroll",
          overflowX: "hidden",
          "@mg": {
            maxHeight: "20rem",
          },
        }}
      >
        <Tbody>
          {itens.length ? (
            itens?.map((item: any, index: any) => (
              <ItemTable key={index} item={item} onDelete={onDelete} />
            ))
          ) : (
            <NoItemTable />
          )}
        </Tbody>
      </Display>
    </ContentTable>
  );
};

export { Table };
