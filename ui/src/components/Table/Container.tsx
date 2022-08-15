export interface ContainerProps {
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const render = (): React.ReactElement => {
    return (
      <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          {children}
        </table>
      </div>
    );
  };

  return render();
};
