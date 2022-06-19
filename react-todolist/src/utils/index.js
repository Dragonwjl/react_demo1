// 读取本地存储的数据
 export function getLocalData() {
    let localData = localStorage.getItem("todolist");
    let result = []
    if (localData != null) {
        result = JSON.parse(localData)
    }
    return result;
}

//保存本地存储数据
export function setLocalData(data) {
    localStorage.setItem("todolist", JSON.stringify(data));
}

