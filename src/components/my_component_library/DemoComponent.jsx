import DemoAmount from "./DemoAmount";
import demoImage from "../../assets/demo.png";
import DemoFragment from "./DemoFragment";

const DemoComponent = () => (
  <div className="DemoComponent">
    <p>
      Nulla Lorem in do culpa aliquip excepteur non eiusmod reprehenderit minim.
      <br />
      <DemoFragment />
    </p>
    <img src={demoImage} alt="logo" />
    <ul>
      <li>
        Books: <DemoAmount amount={154} />
      </li>
      <li>
        Pencils: <DemoAmount amount={12.85} />
      </li>
      <li>
        Erasers: <DemoAmount amount={18} />
      </li>
    </ul>
  </div>
);

export default DemoComponent;
