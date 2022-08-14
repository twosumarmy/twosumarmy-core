import React, { useState } from "react";
import api from "../lib/api";
import { Alert } from "../components/Alert/Alert";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { Button } from "../components/Button/Button";
import { FileInput } from "../components/FileInput/FileInput";

export const UploadFilePage: React.FC = ({}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const uploadFile = () => {
    if (selectedFile) {
      setError(undefined);
      setLoading(true);
      api.FileUpload.createUploadSparkasseTransactionsFileUploadSparkassePost(
        selectedFile
      )
        .then(() => setSelectedFile(null))
        .catch((e: Error) => setError(e.message))
        .finally(() => setLoading(false));
    }
  };

  const render = (): React.ReactElement => {
    return (
      <AppLayout>
        {error && (
          <div className="my-4">
            <Alert description={error} />
          </div>
        )}
        <FileInput
          label={selectedFile ? selectedFile.name : "No file selected"}
          accept=".csv"
          onChange={(e) => setSelectedFile(e.target.files![0])}
        />
        <Button
          variant="primary"
          className="w-full my-4"
          disabled={selectedFile === null || loading}
          onClick={() => uploadFile()}
        >
          Upload file
        </Button>
      </AppLayout>
    );
  };

  return render();
};
