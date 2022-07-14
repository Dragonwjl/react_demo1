// 读取本地存储的数据
export function getLocalStorageData() {
    let localData = localStorage.getItem("todolist");
    let result = []
    if (localData != null) {
        result = JSON.parse(localData)
    }
    return result;
}

//保存本地存储数据
export function setLocalStorageData(data) {
    localStorage.setItem("todolist", JSON.stringify(data));
}

