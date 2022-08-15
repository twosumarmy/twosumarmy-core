export interface HeadColumnProps {
  children?: React.ReactNode;
}

export const HeadCell: React.FC<HeadColumnProps> = ({ children }) => {
  const render = (): React.ReactElement => {
    return (
      <th
        scope="col"
        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
      >
        {children}
      </th>
    );
  };

  return render();
};
