
import * as React from "react";

import Card from "../Card/Card";
import data from "./bugget.config.json";

const BudgetManager = () => {
    const [totalValue, setTotalValue] = React.useState(0);
    
    const onCheck = (value: number) => {
        setTotalValue(totalValue + value);
    }

    return  (<>
        <header className={ `rounded-xl  h-32 justify-center flex items-center bg-[url('./src/components/BudgetManager/assets/images/background-header.png')]` }>
            <h1 className="w-80 font-bold text-xl">Get the best quality</h1>
        </header>
        { data.map((element) => {
            return <Card onCheck={ onCheck } title={ element.title } description={ element.description } value={ element.value }></Card>
        })}
        <div>Budget price: { totalValue }</div>
    </>)
}

export default BudgetManager;