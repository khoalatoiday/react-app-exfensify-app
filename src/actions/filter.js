const setTextForFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text,
  });
  
  const storeByAmount = () => ({
    type: "STORE_BY_AMOUNT",
  });
  
  const storeByDate = () => ({
    type: "STORE_BY_DATE",
  });
  
  const setStartDate = (startDate = 0) => ({
    type: "SET_START_DATE",
    startDate,
  });
  
  const setEndDate = (endDate = 0) => ({
    type: "SET_END_DATE",
    endDate,
  });

  export {setTextForFilter, storeByAmount, storeByDate, setStartDate, setEndDate}