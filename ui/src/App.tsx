import React from 'react';


export const App: React.FC = ({
}) => {
  const render = (): React.ReactElement => {
    return (
      <div>
      <h1 className="text-3xl font-bold underline">
        Learn React
      </h1>
    </div>
    );
  };

  return render();
};

