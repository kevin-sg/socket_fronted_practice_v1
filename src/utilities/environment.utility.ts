interface EnvironmentVariables {
  HOST_SERVER: string;
}

export const environmentVariables: EnvironmentVariables = {
  HOST_SERVER: import.meta.env.VITE_APP_HOST,
};
