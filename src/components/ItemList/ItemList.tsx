import { useEffect, useState } from "react"
import debounce from "../../utils/debounce"

interface ItemListProps {
    text: string
}

const ItemList = ({text}: ItemListProps) => {
    const [show, setShow] = useState<boolean>(true)


    const decideIfElementShouldBeVisible = () => {
        if(window.innerWidth < 500) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    const debouncedFn = () => debounce(decideIfElementShouldBeVisible, 400)

    useEffect(() => {
        window.addEventListener('resize', debouncedFn)

        return () => {
            window.removeEventListener('resize', debouncedFn)
        }
    }, [])

    return show? <li>{text}</li>: null
}

export default ItemList