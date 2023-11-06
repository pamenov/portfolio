import { EditorBody } from "../components"
import typingFunction from "../utils/typing"
import { useEffect } from "react"

const Bio = () => {
    const lines = [
        '   fullstack developer',
        '',
        'Some other text'
    ]
    const wordColors = [
        ["red", "blue"],
        [],
        ["white", "green", "white"]
    ]
    const pageName = 'bio'

    // useEffect(() => {
    //     typingFunction(lines, )
    // })



    return <EditorBody lines={lines} linesCount={6} wordColors={wordColors}/>

}

export default Bio