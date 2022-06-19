import { useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor as ToastEditor } from '@toast-ui/react-editor';

import MonacoEditor from '@monaco-editor/react';
import styled from 'styled-components';
import ToastuiEditor from '@toast-ui/editor';

type OnSaveType = {
  contentHtml: string;
  contentMarkdown: string;
  code: string;
};

type Props = {
  onSave?: (editor: OnSaveType) => void;
};

type MonacoEditorType = {
  getValue: () => string;
};

const Editor = (props: Props) => {
  const toastUiRef: any = useRef(null);
  const [monacoEditor, setMonacoEditor] = useState({} as MonacoEditorType);

  function handleOnSave() {
    const editor = toastUiRef.current.getInstance() as ToastuiEditor;

    const contentHtml = editor.getHTML();
    const contentMarkdown = editor.getMarkdown();
    const code = monacoEditor?.getValue();

    const args = {
      contentHtml,
      contentMarkdown,
      code,
    };

    console.log(args);

    props.onSave?.(args);
  }

  function handleMonacoMount(editor: MonacoEditorType) {
    setMonacoEditor(editor);
  }

  return (
    <Wrapper>
      <InputGroup>
        <Label>질문</Label>

        <EditorWrapper>
          <ToastEditor
            initialValue="hello react editor world!"
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            ref={toastUiRef}
          />
        </EditorWrapper>
      </InputGroup>

      <InputGroup>
        <Label>코드</Label>
        <MonacoEditor
          onMount={handleMonacoMount}
          height="20vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
      </InputGroup>

      <button onClick={handleOnSave}>test</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2px 20px;
`;

const Label = styled.label`
  min-width: 100px;
`;

const InputGroup = styled.div`
  display: flex;
  background: #fff;
  gap: 20px;
  padding: 10px;
`;

const EditorWrapper = styled.div`
  flex-grow: 1;
`;

export default Editor;
