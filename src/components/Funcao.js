import { useEffect, useState } from "react";

const Funcao = (props) => {
  const [text, setText] = useState("");
  const [mostrarCursor, setMostrarCursor] = useState(false);

  const escreverNaTela = (text, i = 0) => {
    if (i < text.length) {
      setMostrarCursor(true);

      setText(text.slice(0, i + 1));
      setTimeout(() => escreverNaTela(text, i + 1), 200);

    } else if (i >= text.length && props?.esconderCursor) {
      setMostrarCursor(false);
    }
  };

  useEffect(() => {
    setTimeout(() => escreverNaTela(props.text), props?.delay ?? 300);
  }, []);

  return (
    <span>
      {text}
    </span>
  );
}

export default Funcao