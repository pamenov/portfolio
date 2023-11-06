import React, { useEffect, useState } from 'react';





// const SPEED = 50;

// const getLineAndSymb = (lines, index, lineIndex) => {
//     index = index + 1
//     while (lineIndex < lines.length && index  === lines[lineIndex].length) {
//         index = 0
//         lineIndex = lineIndex + 1
//     }
//     // if (index + 1 === lines[lineIndex].length) {
//     //     return {lineIndex: lineIndex + 1, index: 0}
//     // }
//     return {lineIndex: lineIndex, charIndex: index}
// }

// // 

// async function typeNextSymbol(currentLine, charIndex, lineIndex, pageName) {
//     console.log(`${pageName}line${lineIndex}`)
//     document.getElementById(`${pageName}line${lineIndex}`).textContent += currentLine[charIndex];
//     await new Promise(resolve => setTimeout(resolve, SPEED));
// }

// async function typingFunction(lines, pageName) {
//     let lineIndex = 0, charIndex = 0
//     while (lineIndex < lines.length) {
//         const currentLine = lines[lineIndex]
//         // await typeNextSymbol()
//         await typeNextSymbol(currentLine, charIndex, lineIndex, pageName);
//         console.log(lineIndex, charIndex, "indexies");
//         ({ lineIndex, charIndex } = getLineAndSymb(lines, charIndex, lineIndex))
        
//     }
// }



// function TypingTextWithColors() {
//   const initialText = "This is a sample text.";
//   const textArray = Array.from(initialText);
//   const colorArray = [
//     'red', 'blue', 'green', 'purple', 'orange', 'teal', 'brown', 'pink',
//   ];

//   const [displayText, setDisplayText] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const textLength = textArray.length;

//     const typingInterval = setInterval(() => {
//       if (currentIndex < textLength) {
//         setDisplayText((prevDisplayText) => [
//           ...prevDisplayText,
//           <span key={currentIndex} style={{ color: colorArray[currentIndex] }}>
//             {textArray[currentIndex]}
//           </span>,
//         ]);
//         setCurrentIndex(currentIndex + 1);
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 100); // Adjust the interval to control typing speed

//     return () => {
//       clearInterval(typingInterval);
//     };
//   }, [currentIndex, textArray]);

//   return (
//     <div>
//       <p>{displayText}</p>
//     </div>
//   );
// }

// export default TypingTextWithColors;





// export default typingFunction;