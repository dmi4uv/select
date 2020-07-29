import {Select} from './select/select'
import './select/styles.scss'

const select = new Select("#select", {
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
})

window.s = select