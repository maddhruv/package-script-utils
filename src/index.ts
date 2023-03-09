import fs from "fs";

const packageJsonPath = process.cwd() + "/package.json";

const updatePackageJson = (packageJson: any): void => {
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
};

export const getScript = (script: string): string | undefined => {
  const packageJson = require(packageJsonPath);

  return packageJson?.scripts?.[script];
};

export const addScript = (script: string, command: string): boolean => {
  const packageJson = require(packageJsonPath);

  if (getScript(script)) return false;

  try {
    packageJson.scripts[script] = command;

    updatePackageJson(packageJson);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deleteScript = (script: string): boolean => {
  const packageJson = require(packageJsonPath);

  if (!getScript(script)) return false;

  try {
    delete packageJson.scripts[script];

    updatePackageJson(packageJson);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
