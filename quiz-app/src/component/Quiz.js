import { useContext, useEffect, useState } from "react"
import QuestionsData from "../data/QuestionsData"
import { DataContext } from "../App"

const Quiz = () => {
    // console.log(QuestionsData)
    const [current, setCurrent] = useState(0)
    const [selectChoice, setSelectChoice] = useState("")
    const { score, setScore, setAppState } = useContext(DataContext)

    useEffect(() => {
        checkAnswer()
    }, [selectChoice])
    // เรียกใช้ checkAnswer เมื่อตัว selectChoice ถูกเปลี่ยนแปลง

    const checkAnswer = () => {
        if (selectChoice !== "") {
            // เมื่อผู้ใช้ตอบคำถามแล้ัว
            if (selectChoice === QuestionsData[current].answer) {
                // ถ้าที่ผู้ใช้เลือกตรงกับ field anwser ใน Object QuestionData
                // console.log("ตอบถูกและได้คะแนน")
                setScore(score + 1)
                nextQuestion()
            } else {
                console.log("ตอบผิดไม่ได้คะแนน T_T")
                nextQuestion()
            }
        }
    }

    const nextQuestion = () => {
        setSelectChoice("")
        if (current === QuestionsData.length - 1) {
            setAppState("score")
        } else {
            setCurrent(current + 1)
        }
    }

    return (
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={() => setSelectChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick={() => setSelectChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick={() => setSelectChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick={() => setSelectChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            {/* array0คือข้อ1 array1คือข้อ2... */}
            <p>{`${current + 1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz