import React, {useEffect  , lazy } from "react";
import { Redirect, Route  } from "react-router";
import {useDispatch , useSelector} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch } from "react-router-dom";
import {auth, createUserProfil} from './Firebase/firebase.utils';
import { currentUserAction, IsLoadingAction } from "./Redux/Actions";
import SpinnerInCenter from "./Components/Spiner/SpinnerInCenter";
import ShowAllUsers from "./Components/Admin/ShowAllUsers";


const SignIn = lazy(() => import('./Components/Sign/signIn'));
const Home = lazy(() => import('./Components/Home/home'));
const Registration = lazy(() => import('./Components/Sign/registration'));
const Quiz = lazy(() => import('./Components/Quiz/quiz'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const AddQuestion = lazy(() => import('./Components/Admin/AddQuestion'));
const ShowAllQuestions = lazy(() => import('./Components/Admin/ShowAllQuestions'));
const GoToTest = lazy(() => import('./Components/BeforeTest'));
const ResultPage = lazy(() => import('./Components/GoToCertificate'));
const ForgotPassword = lazy(() => import('./Components/Sign/forgotPassword'));
const PrintCertificate = lazy(() => import('./Components/PrintReact'));


function App() {
const dispatch = useDispatch();
let currentUser = useSelector(state => state.User);
let isLoading = useSelector(state => state.IsLoading);

useEffect(() => {
  let unsubscribe = auth.onAuthStateChanged(async userAuth => {
    if(userAuth)
    {
      const userRef = await createUserProfil(userAuth);
      userRef.onSnapshot(snapShop => {
        dispatch(currentUserAction(
          {
            id : snapShop.id,
            ...snapShop.data()
          }
        ))
        dispatch(IsLoadingAction(true));
      })
    }else{
      dispatch(IsLoadingAction(true));
    }
  })
  return () => unsubscribe();
}, [dispatch])

  return isLoading ? (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account/log_in-pass-your-test-react.1245a54789g6987b/SignUp" render={() => currentUser == null ? <SignIn/> : <Redirect to="/" />}/>
        <Route exact path="/account/log_out/new-user.in.pass-your-react-test.03215lojuyt4578941jihg/Registration" render={() => currentUser == null ? <Registration/> : <Redirect to="/" />}/>
        <Route exact path="/Test/245pl2563lokj5789/lokiut1245879/quiz" component={Quiz} />
        <Route exact path="/contacts" component={Contact} />
        <Route  exact path="/Admin/gfhy475jvb01-548pokh897phju-35lois/Add-Question" component={AddQuestion} />
        <Route exact path="/Admin/show-145lohkju-all-jhu45678974lpoiuyt-questions-1245loiu/Show-All-Questions" component={ShowAllQuestions} />
        <Route exact path="/Admin/show-145lohkju-all-jhu45678974ghcbjoiuyt-users-1245loiu/Show-All-Users" component={ShowAllUsers} />
        <Route exact path="/certificate/ghty145phjjghy45879632lm124-457poiuytf-231l/get-certificate" component={PrintCertificate}/>
        <Route exact path="/next-step-to-the-test/1fgh5034tyui6897o45/gotothetest" component={GoToTest}/>
        <Route exact path="/certificate/ghty145phjjghy45879632lm124-457poiuytf-231l/result" component={ResultPage}/>
        <Route exact path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  ) : <SpinnerInCenter/>;
}

export default App;
