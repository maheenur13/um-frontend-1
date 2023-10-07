export const getErrorMessages: any = (
  errors: Record<string, any>,
  propertyName: string
) => {
  const properties = propertyName.split(".");

  let value = errors;

  for (const prop of properties) {
    if (value[prop]) {
      value = value[prop];
    } else {
      return undefined;
    }
  }
  return value.message;
};
