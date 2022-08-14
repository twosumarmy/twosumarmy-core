export interface DataCellProps {
  children?: React.ReactNode;
  fontWeight?: "normal" | "medium";
}

export const DataCell: React.FC<DataCellProps> = ({
  children,
  fontWeight = "normal",
}) => {
  const render = (): React.ReactElement => {
    return (
      <td
        className={`whitespace-nowrap px-2 py-2 text-sm ${fontWeightToStyles[fontWeight]}`}
      >
        {children}
      </td>
    );
  };

  return render();
};

const fontWeightToStyles: Record<"normal" | "medium", string> = {
  normal: "font-normal text-gray-500",
  medium: "font-medium text-gray-900",
};
