import React, { useState } from "react";
import api from "./lib/api";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Button } from "./components/Button/Button";
import { FileInput } from "./components/FileInput/FileInput";

export const App: React.FC = ({}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const uploadFile = () => {
    if (selectedFile) {
      api.FileUpload.createUploadSparkasseTransactionsFileUploadSparkassePost(
        selectedFile
      )
        .then(() => setSelectedFile(null))
        .catch((e) => console.log("Upload failed.", e));
    }
  };

  const render = (): React.ReactElement => {
    return (
      <AppLayout>
        <FileInput
          label={selectedFile ? selectedFile.name : "No file selected"}
          accept=".csv"
          onChange={(e) => setSelectedFile(e.target.files![0])}
        />
        <Button
          variant="primary"
          className="w-full my-4"
          disabled={selectedFile === null}
          onClick={() => uploadFile()}
        >
          Upload file
        </Button>
      </AppLayout>
    );
  };

  return render();
};
