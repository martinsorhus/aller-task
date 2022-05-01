import React, { useState } from 'react'

interface TitleFieldProps {
    isEditing: boolean
    title: string
    changeTitle: (s: string) => void
}

const TitleField = ({ isEditing, title, changeTitle }: TitleFieldProps) => {

    const [ articleTitle, setArticleTitle ] = useState<string>(title)

    const handleChange = (val: string) => {
        changeTitle(val)
        setArticleTitle(val)
    }

    if ( isEditing ) {
        return (
            <input 
                className='title-input'
                onChange={e => handleChange(e.target.value)}
                value={articleTitle}
                />
        )
    } else {
        return <h2>{articleTitle}</h2>
    }
}

export default TitleField