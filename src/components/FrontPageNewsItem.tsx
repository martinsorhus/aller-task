import React, { useState } from 'react'
import EditButton from './EditButton'
import TitleField from './TitleField'

interface FrontPageNewsItemProps {
    width: number
    title: string
    imageUrl: string
    url: string
}

const FrontPageNewsItem = ({ width, title, imageUrl, url } : FrontPageNewsItemProps) => {

    const [ isEditing, setIsEditing ] = useState<boolean>(false)
    const [ articleTitle, setArticleTitle ] = useState<string>(title)

    return (
        <div className='news-list-item'>
            <img />
            <TitleField isEditing={isEditing} title={articleTitle} changeTitle={setArticleTitle}/>
            <EditButton isEditing={isEditing} handleClicked={setIsEditing} />
        </div>
    )
}

export default FrontPageNewsItem