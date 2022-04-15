type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// keyof array -> 索引
type r = TupleToObject<typeof tuple>;

// 遍历一个 数组  [P in T[number]]
// 遍历一个 union [P in T]
// 遍历一个 接口 [P in keyof T]

// js
function tupleToObject(array) {
  const obj = {};

  array.forEach((val) => {
    obj[val] = val;
  });

  return obj;
}

// 1. 返回一个对象
// 2. 遍历 array  T[number]
