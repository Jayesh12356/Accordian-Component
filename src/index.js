import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div>
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordianItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          num={i}
          title={el.title}
          text={el.text}
          key={i}
        />
      ))}
    </div>
  );
}

function AccordianItem({ curOpen, onOpen, num, title, text }) {
  return (
    <div
      className={`item ${curOpen === num ? "open" : ""}`}
      onClick={() => onOpen(curOpen === num ? null : num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{curOpen === num ? "-" : "+"}</p>

      {curOpen === num && <div className="content-box">{text}</div>}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
