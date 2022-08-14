export interface RowProps {
  children?: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({ children }) => {
  const render = (): React.ReactElement => {
    return <tr>{children}</tr>;
  };

  return render();
};
