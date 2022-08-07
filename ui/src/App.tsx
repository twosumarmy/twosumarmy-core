import React, { useState } from "react";
import axios from "axios";
import { EnvironmentConfig } from "./lib/environment";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Button } from "./components/Button/Button";
import { FileInput } from "./components/FileInput/FileInput";

const environmentConfig = EnvironmentConfig;

export const App: React.FC = ({}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const uploadFile = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      axios
        .post(`${environmentConfig.apiUrl}/file_upload/sparkasse`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          setSelectedFile(null);
          console.log("Upload succeed.");
        })
        .catch((e) => console.log("Upload failed.", e));
    }
  };

  const render = (): React.ReactElement => {
    return (
      <AppLayout>
        <FileInput
          label={selectedFile ? selectedFile.name : "File upload"}
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
