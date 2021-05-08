import React, { memo, useEffect, useState } from "react";
import { WithData } from "../../Api/FetchData";
import BrowserDesign from "../Browser/browserDesign";
import TestQuestion from "./question";
import { useDispatch , useSelector } from "react-redux";
import { scoreAction, TimeFinishedAction, TimerAction } from "../../Redux/Actions";
import ModalFeelback from "../Modal/Modal";
import CreateData from "../../Api/CreateData";

let ab = 1;
let timeleft = 1200;

function ConvertSeconds(s) {
  let min = Math.floor(s / 60);
  let sec = s % 60;
  return (min < 10 ? "0" + min : min) + " : " + (sec < 10 ? "0" + sec : sec);
}

function Quiz({ data, history }) {
  const [nextQuestion, setNextQuestion] = useState(0);
  const {
    correctA
  } = data[nextQuestion];
  const [currentAnswer, setcurrentAnswer] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state);

 
  useEffect(() => {
    let clean = setInterval(() => {
      ab++;
      dispatch(TimerAction(ConvertSeconds(timeleft - ab)));
      if (timeleft === ab) {
        clearInterval(clean);
        dispatch(TimeFinishedAction(true));
      }
    }, 1000);

  }, [dispatch]);

  const handleNextQuestion = async () => {
    if (data.length - 1 > nextQuestion) {
      setNextQuestion(nextQuestion + 1);
      document.querySelectorAll('input[type="radio"]').forEach(element => {
        element.checked = false;
      });
      if(currentAnswer === correctA){
        dispatch(scoreAction());
      }
    } else {
      const {displayName , email} = user.User;
      const score = (user.Score * 5) + '%';
      let params = {
       Fullname : displayName,
       Email : email,
       Score : score
      }
      await CreateData('User' , params);
      history.push('/certificate/ghty145phjjghy45879632lm124-457poiuytf-231l/result');
    }
  };

  return (
    <BrowserDesign>
      <div className="w-75 m-auto browser-design-conatiner-all">
        <TestQuestion
          question={data}
          currentQuestion={nextQuestion}
          onClickToNextQuestion={handleNextQuestion}
          currentAnswer={currentAnswer}
          setcurrentAnswer={setcurrentAnswer}
        />
        <ModalFeelback history={history} />
      </div>
    </BrowserDesign>
  );
}

export default memo(WithData(Quiz, "Question"));
