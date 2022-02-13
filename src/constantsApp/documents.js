export const TYPE_DOCUMENTS = {
  CC: 2,
  CE: 3,
  TI: 1,
  NIT: 4,
};

export const typeDocuments = [
  {
    value: TYPE_DOCUMENTS.CC,
    label: "Cédula de Ciudadanía",
  },
  {
    value: TYPE_DOCUMENTS.CE,
    label: "Cédula de Extranjería",
  },
  {
    value: TYPE_DOCUMENTS.TI,
    label: "Tarjeta de Identidad",
  },
  {
    value: TYPE_DOCUMENTS.NIT,
    label: "Número de Identificación Tributaria",
  },
];

export const typeDocumentsMap = new Map(
  typeDocuments.map((item) => [item.value, item])
);

export const findTypeDocument = (id) =>
  typeDocuments.find(({ value }) => value === id);
