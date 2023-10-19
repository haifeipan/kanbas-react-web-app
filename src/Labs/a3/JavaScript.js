import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
// import ES5Functions from "./ES5Functions";
// import ArrowFunctions from "./ArrowFunctions";
// import ImpliedReturn from "./ImpliedReturn";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
          <WorkingWithArrays/>
          <House/>
          <Spread/>
          <Destructing/>
          <FunctionDestructing/>
          
          {/* <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/> */}
       </div>
    );
 }
 export default JavaScript