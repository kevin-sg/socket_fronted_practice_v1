interface IEnvironmentVariables {
  HOST_SERVER: string;
}

export const environmentVariables: IEnvironmentVariables = {
  HOST_SERVER: import.meta.env.VITE_APP_HOST,
};
