const GetDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getFullYear()}/${newDate.getMonth()}/${newDate.getDate()}`;
  };

  export default GetDate