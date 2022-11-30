

export const saveToLocalStorage = (data) => {

    try {
        const serialisedState =   JSON.stringify(data);
        localStorage.setItem("persistantState", serialisedState);
      } catch (e) {
        console.warn(e);
      }
}

export const getDataFromLocalStorage = () => {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      
      return JSON.parse(serialisedState); 

     
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

  export const checkLocalStorageData = () => {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      return serialisedState ? true : false; 

     
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

  export const clearLocalStorageData = () => {
    localStorage.setItem("persistantState", '');
    
  }