import * as React from "react";
import BudgetDataManager from "../../../../BudgetDataManager/BudgetDataManager";
import LocalStorageProvider from "../../../../BudgetDataManager/providers/LocalStorageProvider";
import type { BudgetData } from "../../../../BudgetDataManager/BudgetDataManager.types";


const useBudgetView = (id: number): [ BudgetData | null, boolean ] => {
  const dataManager = React.useMemo(() => new BudgetDataManager(new LocalStorageProvider()), []);
  const [ budgetData, setBudgetData ] = React.useState<BudgetData | null>(null);
  const [ isLoaded, setIsLoaded ] = React.useState(false);

  React.useEffect(() => {
    const data = dataManager.getBudget(id);

    if (data) {
      setBudgetData(data);
    }

    setIsLoaded(true);
  }, [dataManager, id]);

  return [ budgetData, isLoaded ]
}

export default useBudgetView;