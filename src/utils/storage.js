// 存储数据
export const setItem = (key, value) => {
  if(typeof value==='object'){
    value=JSON.stringify(value)
  }
  window.localStorage.setItem(key, value);
};


// 读取数据
export const getItem = key => {
  const data = window.localStorage.getItem(key)

  //如果可以转换则转换 不能转换则直接返回data
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 删除数据
export const removeItem = key => {
  window.localStorage.removeItem(key)
}