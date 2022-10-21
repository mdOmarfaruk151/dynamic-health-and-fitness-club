import React from "react";
import "./QnA.css";
import picOne from "../../images/Q.1.pic-1.png";
import picTwo from "../../images/Q.1.pic-2.png";
import picThree from "../../images/Q.1.pic-3.png";
import picFour from "../../images/Q.3.pic-1.png";
import picFive from "../../images/Q.3.pic-2.png";
import picSix from "../../images/Q.3.pic-3.png";
import picSeven from "../../images/Q.3.pic-4.png";
import picEight from "../../images/Q.3.pic-5.png";
import picNine from "../../images/Q.3.pic-6.png";
import picTen from "../../images/Q.3.pic-7.png";

const QnA = () => {
  return (
    <div className="qna">
      <hr />
      <h1>QnA</h1>
      <hr />
      <hr />
      <h2>1. How Does React Work ?</h2>
      <hr />
      <p>
        One of the biggest advantages of using React is that you can infuse HTML
        code with JavaScript. Users can create a representation of a DOM node by
        declaring the Element function in React. The code below contains a
        combination of HTML and JavaScript:
        <img src={picOne} alt="" />
        <br />
        You may have noticed that the syntax of the HTML code above is similar
        to XML. That said, instead of using the traditional DOM class, React
        uses className.
        <br />
        JSX tags have a name, children, and attributes. Numeric values and
        expressions must be written inside curly brackets. The quotation marks
        in JSX attributes represent strings, similarly to JavaScript.
        <br />
        In most cases, React is written using JSX instead of standard JavaScript
        to simplify components and keep code clean.
        <br />
        Here is an example of React code written using JSX:
        <br />
        <img src={picTwo} alt="" />
        <br />
        The following is a breakdown of the HTML tags above:
        <br />
        <ul>
          <li>
            MyCounter> represents a variable called count whose value is a
            numeric expression.
          </li>
          <li>
            GameScores is an object literal that has two prop-value pairs.
          </li>
          <li>DashboardUnit> is the XML block that is rendered on the page.</li>
          <li>
            scores=〈GameScores〉is the scores attribute. It gets its value from
            the GameScores object literal defined earlier.
          </li>
        </ul>
        A React app usually has a single root DOM node. Rendering an element
        into the DOM will change the user interface of the page.
        <br />
        For instance, the following code displays “Hello World” on the page by
        rendering the element into a DOM node called root.
        <br />
        <img src={picThree} alt="" />
        <br />
        Whenever a React component returns an element, the Virtual DOM will
        update the real DOM to match.
      </p>
      <hr />
      <h2>2. What Are The Differences Between Props And State ?</h2>
      <hr />
      <p>
        Difference Between Props And State:
        <br />
        <br />
        <table>
          <tr>
            <th>No.</th>
            <th>Props</th>
            <th>State</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Props are read-only.</td>
            <td>State changes can be asynchronous.</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Props are immutable.</td>
            <td>State is mutable.</td>
          </tr>
          <tr>
            <td>03</td>
            <td>
              Props allow you to pass data from one component to other
              components as an argument.
            </td>
            <td>State holds information about the components.</td>
          </tr>
          <tr>
            <td>04</td>
            <td>Props can be accessed by the child component.</td>
            <td>State cannot be accessed by child components.</td>
          </tr>
          <tr>
            <td>05</td>
            <td>Props are used to communicate between components.</td>
            <td>
              States can be used for rendering dynamic changes with the
              component.
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Stateless component can have Props.</td>
            <td>Stateless components cannot have State.</td>
          </tr>
          <tr>
            <td>07</td>
            <td>Props make components reusable.</td>
            <td>State cannot make components reusable.</td>
          </tr>
          <tr>
            <td>08</td>
            <td>
              Props are external and controlled by whatever renders the
              component.
            </td>
            <td>
              The State is internal and controlled by the React Component
              itself.
            </td>
          </tr>
        </table>
      </p>
      <hr />
      <h2>3. What Are The Uses Of useEffict Beside API load ?</h2>
      <hr />
      <p>
        The callback function we pass to the useEffect hook runs the side
        effects. React runs it on every render of a component by default.
        However, side effects can be expensive and performance-intensive to run
        on every render. We can control it using the dependency array argument
        we pass to the useEffect hook.
        <br />
        There are six usages of useEffect hook to run and clean up a side
        effect.
        <br />
        <h4>1. Side Effect Runs After Every Render</h4>
        The first is the default case. If you do not pass the dependency array
        to the useEffect hook, the callback function executes on every render.
        Thus React will run the side effect defined in it after every render.
        <br />
        <img src={picFour} alt="" />
        <br />
        It is not a highly used use case scenario. We may always want to control
        the run of a side effect.
        <br />
        <h4>2. Side Effect Runs Only Once After Initial Render</h4>
        You may want to run the side effect just once after the initial render.
        A typical case will be fetching data making an API call, and storing the
        response in the state variable after the initial render. You do not want
        to make this API call again.
        <br />
        You can pass an empty array as the second argument to the useEffect hook
        to tackle this use case.
        <br />
        <img src={picFive} alt="" />
        <br />
        In this case, the side effect runs only once after the initial render of
        the component.
        <br />
        <h4>3. Side Effect Runs After State Value Changes</h4>
        You may need to run a side effect depending on a state value. For
        example, you may have a side effect to prepare a greeting message based
        on a spoken language〔English, Spanish, Hindi, Tamil, etc.〕. Here the
        spoken language value is stored in a state variable.
        <br />
        Every time we select a spoken language, the state gets updated. As the
        state value gets updated, you want to recreate the greeting message. To
        solve this use case, you must pass the state variable to the useEffect
        hook as part of the dependency array.
        <br />
        <img src={picSix} alt="" />
        <br />
        In this case, the side effect will run every time the value of the state
        variable changes. If multiple state variables influence a side effect,
        you can pass them as comma-separated in the dependency array.
        <br />
        <img src={picSeven} alt="" />
        <h4>4. Side Effect Runs After Props Value Change</h4>
        Just like the state, we can also use props as a dependency to run the
        side effect. In this case, the side effect will run every time there is
        a change to the props passed as a dependency.
        <br />
        <img src={picEight} alt="" />
        <br />
        You can pass multiple props as comma-separated as dependencies like the
        previous example.
        <br />
        <h4>5. Side Effect Runs After Props and State Value Change</h4>
        What if you need to run the side effect every time a combination of
        state and props change. This use case may occur when your side effect
        depends on the state and props values. In this case, you need to pass
        both the state and props variables as dependencies.
        <br />
        <img src={picNine} alt="" />
        <h4>6. Side EffectCleanup</h4>
        So far, we have seen how and when to run a side effect. It is also
        essential that we clean up the side effect to taking care of the
        application's performance. Every side effects are different. So, the
        cleanup strategy for the side effect will differ.
        <br />
        For example, if you have a side effect of running a timer using the
        setTimeout function, you need to clean it up by invoking the
        clearTimeout function. But how do we do it?
        <br />
        To clean up a side effect, you need to return a function from the
        callback function we pass to the useEffect hook. You must place the side
        effect clean up logic inside the returned function.
        <br />
        <img src={picTen} alt="" />
        <br />
        A few points to note,
        <br />
        <ul>
          <li>
            The cleanup function gets invoked every time after the initial
            render to clean up the previous side effect, and then the subsequent
            side effect runs.
          </li>
          <li>
            The cleanup function gets invoked when the component unmounts.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default QnA;
