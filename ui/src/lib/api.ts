import axios from "axios";
import { Configuration, FileUploadApi, TransactionApi } from "../generated";
import { EnvironmentConfig } from "./environment";


const environment = EnvironmentConfig;
const axiosInstance = axios.create();
const configuration = new Configuration({
    basePath: environment.apiUrl
})

export default {
    Transaction: new TransactionApi(configuration, "", axiosInstance),
    FileUpload: new FileUploadApi(configuration, "", axiosInstance),
}