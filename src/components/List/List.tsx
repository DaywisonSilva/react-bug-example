import ItemList from "../ItemList/ItemList"

type Item = {
    value: string
}

interface ListProps {
    items: Item[]
}

const List = ({items}: ListProps) => {
   

    return <>
        {items.map(item => <ItemList key={item.value} text={item.value}/>)}
    </>
}

export default List