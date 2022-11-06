import React, { Fragment, useState, useEffect } from "react";

import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6

function Editor(props) {
  const [currentContent, setCurrentContent] = useState("");
  const [timer, setTimer] = useState(null);

  ///traz aquele método no arquivo de notas
  const updateNote = (content) => {
    const title = content.replace(/(<([^>]+)>)/gi, "").slice(0, 30);
    props.updateNote(props.note, { title, body: content });
  };


  //content é o conteudo no editor, o source é quem fez a ediçao.
  const handleChange = (content, delta, source) => {
    clearTimeout(timer);
    if (source === "user") {
      setCurrentContent(content);
      setTimer(setTimeout(() => updateNote(content), 2000));
    }
  };

  useEffect(() => {
    setCurrentContent(props.note.body);
  }, [props.note]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <Fragment>
      <ReactQuill
        value={currentContent}
        modules={modules}
        onChange={handleChange}
      />
    </Fragment>
  );
}

export default Editor;
