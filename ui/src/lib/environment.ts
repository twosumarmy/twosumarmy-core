import {string} from 'yup';

class EnvironmentConfigManager {
  private static _instance: EnvironmentConfigManager;

  private stringSchema = string().required();

  public readonly apiUrl: string;

  constructor() {
    this.apiUrl = this.stringSchema.validateSync(process.env.REACT_APP_API_URL);
  }

  public static getInstance(): EnvironmentConfigManager {
    if (EnvironmentConfigManager._instance == null) {
      EnvironmentConfigManager._instance = new EnvironmentConfigManager();
    }
    return this._instance;
  }
}

export const EnvironmentConfig = EnvironmentConfigManager.getInstance();