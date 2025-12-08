import * as React from "react";
import BudgetDataManager from "../../../../BudgetDataManager/BudgetDataManager";
import LocalStorageProvider from "../../../../BudgetDataManager/providers/LocalStorageProvider";
import type { BudgetData } from "../../../../BudgetDataManager/BudgetDataManager.types";
import { useParams } from "react-router";


const useBudgetView = (): [ BudgetData | null, boolean ] => {
  const dataManager = React.useMemo(() => new BudgetDataManager(new LocalStorageProvider()), []);
  const [ budgetData, setBudgetData ] = React.useState<BudgetData | null>(null);
  const [ isLoaded, setIsLoaded ] = React.useState(false);
  const budgetId = useParams().id;

  React.useEffect(() => {
    const data = dataManager.getBudget(Number(budgetId));

    if (data) {
      setBudgetData(data);
    }

    setIsLoaded(true);
  }, [dataManager, budgetId]);

  return [ budgetData, isLoaded ]
}

export default useBudgetView;