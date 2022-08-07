import React, { useState } from "react";
import { FileInput } from "./components/FileInput/FileInput";

export const App: React.FC = ({}) => {
  const [_selectedFile, setSelectedFile] = useState<File | null>(null);

  const render = (): React.ReactElement => {
    return (
      <div>
        <FileInput
          label="File upload"
          accept=".csv"
          onChange={(e) => setSelectedFile(e.target.files![0])}
        />
      </div>
    );
  };

  return render();
};
