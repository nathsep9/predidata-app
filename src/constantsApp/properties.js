export const TYPE_PROPERTIES = {
  URBAN: 1,
  RURAL: 2,
};

export const typeProperties = [
  {
    value: TYPE_PROPERTIES.URBAN,
    label: "Urbano",
  },
  {
    value: TYPE_PROPERTIES.RURAL,
    label: "Rural",
  },
];

export const typePropertiesMap = new Map(
  typeProperties.map((item) => [item.value, item])
);
