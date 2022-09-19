import { useEffect, useState } from "react";
import { Display } from "@components/common/layouts/Display";
import { Card } from "@components/common/lib/Card";
import { FormHome } from "./FormHome";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const HomePage = () => {
  const data = localStorage.getItem("transactions");

  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState("0");
  const [expense, setExpense] = useState("0");
  const [total, setTotal] = useState("0");

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item: any) => item.expense)
      .map((transaction: any) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item: any) => !item.expense)
      .map((transaction: any) => Number(transaction.amount));

    const expense = amountExpense
      .reduce((acc: any, cur: any) => acc + cur, 0)
      .toFixed(2);

    const income = amountIncome
      .reduce((acc: any, cur: any) => acc + cur, 0)
      .toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction: any) => {
    const newArrayTransaction = [...transactionsList, transaction];

    setTransactionsList(newArrayTransaction);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransaction));
  };

  return (
    <Display
      flex
      align="center"
      css={{
        height: "100%",
        flexDirection: "column",
        padding: "1rem 0",
        gap: "$4",
        "@mm": {
          gap: "$10",
        },
      }}
    >
      <Display
        flex
        justify="space-between"
        css={{
          width: "10rem",
          gap: "$3",
          flexDirection: "column",
          "@mm": {
            width: "20rem",
            flexDirection: "row",
          },
          "@mg": {
            width: "25rem",
            flexDirection: "row",
          },

          "@t": {
            width: "40rem",
            flexDirection: "row",
          },
        }}
      >
        <Card title="Entradas" value={income} icon={FaRegArrowAltCircleUp} />
        <Card title="Saídas" value={expense} icon={FaRegArrowAltCircleDown} />
        <Card title="Total" value={total} icon={FaDollarSign} />
      </Display>

      <FormHome
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </Display>
  );
};

export { HomePage };
