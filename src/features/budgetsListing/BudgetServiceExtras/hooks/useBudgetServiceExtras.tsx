import * as React from "react";

const useBudgetServiceExtras = (id: string, value: number, onChange: (id: number, value: number) => void):
  [ boolean, (operator: number) => void, () => void] => {
  const [ isModalOpen, setIsModalOpen ] = React.useState(false);
  const onClick = (operator: number) => {
    const total = value + operator;

    if (total >= 1) {
      onChange(Number(id), total);
    }
  }
  const onModalClick = () => {
    setIsModalOpen(!isModalOpen);
  }

  return [ isModalOpen, onClick, onModalClick ];
}

export default useBudgetServiceExtras;