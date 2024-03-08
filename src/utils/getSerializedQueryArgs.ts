/* eslint-disable @typescript-eslint/no-explicit-any */
export default function getSerializedQueryArgs({
  endpointName,
  queryArgs,
}: {
  endpointName: string;
  queryArgs: any;
}) {
  let result = endpointName;

  Object.keys(queryArgs || {}).forEach((key) => {
    if (key === "skip") {
      return;
    }
    result = `${result}-(${key}=${queryArgs[key]})`;
  });

  return result;
}
