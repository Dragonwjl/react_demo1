// 读取本地存储的数据
 export function getData() {
    let localData = localStorage.getItem("todolist");
    let result = []
    if (localData != null) {
        result = JSON.parse(localData)
    }
    return result;
}

//保存本地存储数据
export function setData(data) {
    localStorage.setItem("todolist", JSON.stringify(data));
}

