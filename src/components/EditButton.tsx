import React, { useState } from 'react'

interface EditButtonProps {
    isEditing: boolean
    handleClicked: (b: boolean) => void
}

const EditButton = ({ isEditing, handleClicked }: EditButtonProps) => {
    
    const handleClick = () => {
        return handleClicked(!isEditing)
    }

    return (
        <button
            className='edit-button'
            onClick={handleClick}>
                {isEditing ? 'Save' : 'Edit'}
        </button>
    )
}

export default EditButton