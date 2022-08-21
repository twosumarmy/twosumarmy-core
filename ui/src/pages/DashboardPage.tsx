import React, { useEffect } from "react";
import { Stats } from "../components/Stats/Stats";
import { Money } from "../lib/money";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchBalance, selectBalance } from "../redux/reducers/balanceSlice";
import { fetchFlow, selectFlow } from "../redux/reducers/flowSlice";

export const DashboardPage: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { balance } = useAppSelector(selectBalance);
  const { flow } = useAppSelector(selectFlow);

  useEffect(() => {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    dispatch(fetchBalance());
    dispatch(fetchFlow({ startDate: firstDayOfMonth }));
  }, []);

  const render = (): React.ReactElement => {
    return <div>{renderStats()}</div>;
  };

  const renderStats = (): React.ReactElement => {
    const stats: Array<{ title: string; stats: string }> = [];
    if (balance) {
      const money = new Money(balance.value, "EUR");
      stats.push({ title: "Balance", stats: money.formatted });
    }
    if (flow) {
      flow.forEach((value) => {
        const money = new Money(value.amount, "EUR");
        stats.push({ title: value.flow, stats: money.formatted });
      });
    }

    return (
      <div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Current month
          </h3>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((value, index) => (
              <Stats key={index} title={value.title} stats={value.stats} />
            ))}
          </dl>
        </div>
      </div>
    );
  };

  return render();
};
