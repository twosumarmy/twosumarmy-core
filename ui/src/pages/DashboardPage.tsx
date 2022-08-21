import React, { useEffect } from "react";
import { Stats } from "../components/Stats/Stats";
import { Money } from "../lib/money";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchBalance, selectBalance } from "../redux/reducers/balanceSlice";

export const DashboardPage: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(selectBalance);

  useEffect(() => {
    dispatch(fetchBalance());
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

    return (
      <div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Current month
          </h3>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((value) => (
              <Stats title={value.title} stats={value.stats} />
            ))}
          </dl>
        </div>
      </div>
    );
  };

  return render();
};
