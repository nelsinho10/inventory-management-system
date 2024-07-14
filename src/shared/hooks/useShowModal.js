import { useState } from 'react'

export const useShowModal = () => {

    const [showModal, setshowModal] = useState(false)

    const handleShowModal = () => {
        setshowModal(!showModal)
    }

    return {
        showModal,
        handleShowModal
    }
}