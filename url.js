const fullParamsMaker = (data) => {
  let query = "";
  let first = true;
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "object" && value !== null) {
      const subQuery = fullParamsMaker(value);
      if (subQuery !== "") {
        query += `${first ? "" : "&"}${subQuery}`;
        first = false;
      }
    } else if (value !== null && value !== undefined) {
      query += `${first ? "" : "&"}${key}=${encodeURIComponent(value)}`;
      first = false;
    }
  }
  return query;
};

console.log(
  fullParamsMaker({
    limit: 10,
    offset: 11,
    query: { persona: "sss", value: { type: "text" } },
  })
);
