import cn from 'classnames'
import styles from './style.module.css'
import lineToWords from '../../utils/parse-line';
import TypingTextWithColors from '../../utils/typing';
import { useEffect, useState, useRef } from 'react';


const SPEED = 50;

const EditorBody = ({lines, linesCount, wordColors}) => {
    const numbers = Array.from({ length: linesCount }, (_, index) => index + 1);
    const [displayText, setDisplayText] = useState([]);
    const [lineIndex, setLineIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const letterIndexRef = useRef()
    letterIndexRef.current = letterIndex

    const typeLetter = async (letter, color) => {
        setTimeout(() => {
            setDisplayText((prevDisplayText) => [
                ...prevDisplayText,
                <span style={{ color: color }}>
                    {letter}
                </span>,
            ])
        }, 3000)
        console.log("typeletter ends")
    }
    
    
    
    const typeWord = async (word, color) => {
      const intervalId = setInterval (() => {
        if (letterIndexRef.current >= word.length) {
            setLetterIndex(0)
            clearInterval(intervalId)
        }
        setDisplayText((prevDisplayText) => [
            ...prevDisplayText,
            <span key={letterIndexRef.current} style={{ color: color }}>
                {word[letterIndexRef.current]}
            </span>,
        ])
        console.log(displayText)
        setLetterIndex(prevLetterIndex => prevLetterIndex + 1)
    }, SPEED)
    }


    // foo()
    // typeWord("pohui", "red")
    // useEffect(() => {
    //     // const foo = async () => {
    //     //     console.log("line", lineIndex,
    //     //                 "word", wordIndex,
    //     //                 "displayText", displayText
    //     //     )
    //     //     if (lineIndex < lines.length) {
                
    //     //         const line = lines[lineIndex];
    //     //         const colors = wordColors[lineIndex];
    //     //         const {identation, words} = lineToWords(line);
    //     //         const word = words[wordIndex] 

    //     //         if (wordIndex === 0) {
    //     //             setDisplayText((prevDisplayText) => [
    //     //                 ...prevDisplayText,
    //     //                 <span key={`${lineIndex}identation`}>
    //     //                     {' '.repeat(identation)}
    //     //                 </span>
    //     //             ])
    //     //         }

    //     //         console.log("before setInterval")
    //     //         const intervalId = await typeWord(word[wordIndex], colors[wordIndex])
    //     //         clearInterval(intervalId)
    //     //         setWordIndex(wordIndex + 1)
    //     //         if (wordIndex === words.length) {
    //     //             setLineIndex(lineIndex + 1)
    //     //             setWordIndex(0)
    //     //         }
    //     //         console.log("after setLineIndex")
    //     //     }
    //     // }

    //     foo()
    // }, []);

    // useEffect(() => {
    //     const word = "1234567890"
    //     const color = "red"
    //     setLetterIndex(0);
    //     setDisplayText([])
    //     const foo = async () => {
    //     const intervalId = setInterval (() => {
    //         if (letterIndexRef.current >= word.length) {
    //             setLetterIndex(0)
    //             clearInterval(intervalId)
    //         } else {
    //         console.log(letterIndexRef.current, "index")
    //         console.log(word[letterIndexRef.current], "letter")
    //         setDisplayText((prevDisplayText) => [
    //             ...prevDisplayText,
    //             <span key={letterIndexRef.current} style={{ color: color }}>
    //                 {word[letterIndexRef.current]}
    //             </span>,
    //         ])
    //         console.log(displayText)
    //         setLetterIndex(prevLetterIndex => prevLetterIndex + 1)
    //       }
    //     }, 1000)
    //   }
    //     // const foo = async () => {
    //     //   await typeWord(word, color)
    //     // }
    //     foo()
    //   console.log(displayText)
    //   // Clean up the interval when the component unmounts
    //   return () => {
    //     // clearInterval(intervalId);
    //   };
    // }, []);
    
    // return (
    //   <div>
    //     <p>Counter: {counter}</p>
    //   </div>
    // );
    return <div className={cn(styles.container)}>
      <div className={cn(styles.linenumbers)}>
        <ul>
          {numbers.map((number) => (
            <li key={number} className={cn(styles.numbers)}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>
          {displayText}
        </p>
      </div>
        
    </div>
    // const [counter, setCounter] = useState(0);


}

export default EditorBody;

{/* <div className={cn(styles.lines)}>
<ul>
  { lines.map((line, index) => (
    <li key={line} id={`${page}line${index}`} className={cn(styles.line)}> {''} </li>
  ))

  }    
</ul>

</div> */}