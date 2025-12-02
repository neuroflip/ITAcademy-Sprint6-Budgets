
import * as React from "react";

import type { BudgetCardValues } from "../BudgetCard/BudgetCard.types";
import BudgetCard from "../BudgetCard/BudgetCard";
import { initValues } from "./helpers/utils";
import data from "./budget.config.json";

 const baseExtraCost = 30;

const BudgetManager = () => {
    const [totalValue, setTotalValue] = React.useState(0);
    const [ values, setValues ] = React.useState<Array<BudgetCardValues>>(initValues());
    const calculateTotal = (values: Array<BudgetCardValues>) => {
        setTotalValue(values.reduce((acc, element) => acc + element.cost + element.extrasCost, 0));
    };

    const onChangeBudget = (id: number, cardValues: BudgetCardValues) => {
        const newValues = [...values];

        newValues[id] = cardValues;
        calculateTotal(newValues);
        setValues(newValues);
    }

    return  (<>
        <header className={ `rounded-xl  h-32 justify-center flex items-center bg-[url('./src/components/BudgetManager/assets/images/background-header.png')]` }>
            <h1 className="w-80 font-bold text-xl">Get the best quality</h1>
        </header>
        { data.map((element) => {
            return <BudgetCard hasExtraInfo={ element.id === 0 }
                key={ element.cost } onChangeBudget = { onChangeBudget }
                id= { element.id } title={ element.title }
                description={ element.description } cost={ element.cost }
                extraCost={ baseExtraCost }></BudgetCard>
        })}
        <div className="text-right">
            Budget price: <h1 className="inline ml-1">{ totalValue }</h1>€
        </div>
    </>)
}

export default BudgetManager;