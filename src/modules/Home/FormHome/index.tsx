import { useState } from "react";
import { Display } from "@components/common/layouts/Display";
import { Label } from "./styles";

import { Form } from "@components/common/lib/Form";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import { Table } from "@components/common/lib/Table";

function FormHome({ handleAdd, transactionsList, setTransactionsList }: any) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => {
    return Math.round(Math.random() * 1000);
  };

  const handleSave = (e: any) => {
    e.preventDefault();

    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < "1") {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");

    return false;
  };

  return (
    <>
      <Form
        css={{
          width: "70%",
          "@mm": {
            width: "68%",
          },
          "@t": {
            width: "60%",
          },
          "@dp": {
            width: "47%",
          },
        }}
      >
        <Display
          flex
          css={{
            width: "100%",
            height: "100%",
            padding: "$4 $6",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.5rem",
            background: "$white",
            border: "0.1rem solid $grayLight",
            gap: "$6",
            "@t": {
              flexDirection: "row",
            },
          }}
        >
          <Display flex css={{ flexDirection: "column" }}>
            <Label>Descrição</Label>
            <Input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              css={{ width: "100%", height: "$8" }}
            />
          </Display>

          <Display flex css={{ flexDirection: "column" }}>
            <Label>Valor</Label>
            <Input
              value={amount}
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              css={{ width: "100%", height: "$8" }}
            />
          </Display>

          <Display
            align="center"
            justify="center"
            flex
            css={{
              maxWidth: "50%",
              "@t": {
                maxWidth: "20%",
                marginTop: "$2",
              },
            }}
          >
            <Input
              type="radio"
              id="rIncome"
              defaultChecked
              name="rGroup"
              onChange={() => setExpense(!isExpense)}
              css={{ marginRight: "$1" }}
            />
            <Label htmlFor="rIncome" css={{ marginTop: "$1" }}>
              Entrada
            </Label>

            <Input
              type="radio"
              id="rExpense"
              name="rGroup"
              onChange={() => setExpense(!isExpense)}
              css={{ marginRight: "$1" }}
            />
            <Label htmlFor="rExpense" css={{ marginTop: "$1" }}>
              Saída
            </Label>
          </Display>

          <Button
            onClick={handleSave}
            css={{ width: "$32", height: "$12", background: "$primary" }}
          >
            Adicionar
          </Button>
        </Display>
      </Form>

      <Table itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
}

export { FormHome };