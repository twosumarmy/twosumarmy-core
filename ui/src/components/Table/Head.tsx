export interface HeadProps {
  children?: React.ReactNode;
}

export const Head: React.FC<HeadProps> = ({ children }) => {
  const render = (): React.ReactElement => {
    return (
      <thead className="bg-gray-50">
        <tr>{children}</tr>
      </thead>
    );
  };

  return render();
};
