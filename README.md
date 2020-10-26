Плагин получает на входе три параметра:
1. placeholder - тектовое поле
2. selectedId - выбраный элемент по умолчанию
3. data - массив обьектов. В каждом обьекте должен быть ключ id и value (значение)

Пример:

placeholder: "Pick element",
 selectedId : '1',
 data: [
  {id : '1', value : "First el"},
  {id : '2', value : "Second el"},
  {id : '3', value : "Third el"},
 ],
 onSelect(item) {
  console.log("Selected", item)
 }
 
