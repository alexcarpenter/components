export type DataAttributeValue = string | number | boolean | null | undefined;

export type DataAttributes = Record<`data-${string}`, string>;

function toDataAttributeName(name: string): `data-${string}` {
  const kebabCaseName = name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();

  return `data-${kebabCaseName}`;
}

export function dataAttributes(
  values: Record<string, DataAttributeValue>,
): DataAttributes {
  const attributes: DataAttributes = {};

  for (const [name, value] of Object.entries(values)) {
    if (value != null) {
      attributes[toDataAttributeName(name)] = String(value);
    }
  }

  return attributes;
}
