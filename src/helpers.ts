type DataElement = {
  id: string;
  [key: string]: unknown;
};

const getData = async (path: string, id?: string) => {
  const data = await fetch(path);
  const dataArray = await data.json();

  if (id) {
    return dataArray.find(
      (element: DataElement) => element.id.toString() === id.toString(),
    );
  }
  console.log("Data loaded:", dataArray);
  return dataArray;
};

export { getData };
