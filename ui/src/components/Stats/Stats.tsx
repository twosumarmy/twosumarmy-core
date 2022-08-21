export interface StatsProps {
  title: string;
  stats: string;
}

export const Stats: React.FC<StatsProps> = ({ title, stats }) => {
  const render = (): React.ReactElement => {
    return (
      <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
        <dd className="mt-1 text-3xl tracking-tight font-semibold text-gray-900">
          {stats}
        </dd>
      </div>
    );
  };

  return render();
};
