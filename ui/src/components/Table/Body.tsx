export interface BodyProps {
  children?: React.ReactNode;
}

export const Body: React.FC<BodyProps> = ({ children }) => {
  const render = (): React.ReactElement => {
    return (
      <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
    );
  };

  return render();
};
