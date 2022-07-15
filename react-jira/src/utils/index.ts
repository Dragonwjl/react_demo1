import { useEffect,useState } from "react"

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";
//在一个函数中，改变传入的对象本身是不好的 
// export const cleanObject = (object?: { [key: string]: unknown }) => {
//     const result = { ...object }
//     Object.keys(result).forEach(key => {
        
//         const value = result[key]
//         if (isFalsy(value)) {
//             delete result[key]
//         }
//     })
//     return result
// }


export const cleanObject = (object?: { [key: string]: unknown }) => {
    // Object.assign({}, object)
    if (!object) {
      return {};
    }
    const result = { ...object };
    Object.keys(result).forEach((key) => {
      const value = result[key];
      if (isVoid(value)) {
        delete result[key];
      }
    });
    return result;
  };

export const useMount = (callback:()=>void) => {
    useEffect(() => {
        callback()
    }, [])
}



//防抖
// const debounce = (func, delay) => {
//     let timeout;
//     return (...param) => {
//         if (timeout) {
//             clearTimeout(timeout)
//         }
//         timeout = setTimeout(() => {
//             func(...param);
//         }, delay)
//     }
// }

// const log = debounce(() => console.log('call'), 5000);
// log();
// log();
// log();


export const useDebounce = <V>(value:V, delay?:number)=> {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      // 每次在value变化以后，设置一个定时器
      const timeout = setTimeout(() => setDebouncedValue(value), delay);
      // 每次在上一个useEffect处理完以后再运行
      return () => clearTimeout(timeout);
    }, [value, delay]);
  
    return debouncedValue;
  };  

  export const  useArray = <T>(initialArray:T[])=>{
    const [value,setValue] = useState(initialArray)
    return {
        value,
        setValue,
        add:(item:T)=>{setValue([...value,item]) },
        clear:()=>setValue([]),
        removeIndex:(index:number)=>{
            const copy = [...value]
            copy.splice(index,1)
            setValue(copy)
        }
    }
  }