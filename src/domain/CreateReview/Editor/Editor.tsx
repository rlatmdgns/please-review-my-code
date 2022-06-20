import { useRef, useState } from 'react';
import { useSetAtom } from 'jotai';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor as ToastEditor } from '@toast-ui/react-editor';

import MonacoEditor from '@monaco-editor/react';
import styled from 'styled-components';
import ToastuiEditor from '@toast-ui/editor';

import { CONTENT_ATOM, CODE_ATOM, MARKDOWN_ATOM } from 'store';

type MonacoEditorType = {
  getValue: () => string;
};

const Editor = () => {
  const toastUiRef: any = useRef(null);
  const [monacoEditor, setMonacoEditor] = useState({} as MonacoEditorType);
  const setContent = useSetAtom(CONTENT_ATOM);
  const setCode = useSetAtom(CODE_ATOM);
  const setMarkdown = useSetAtom(MARKDOWN_ATOM);

  function handleChanged() {
    const editor = toastUiRef.current.getInstance() as ToastuiEditor;

    const contentHtml = editor.getHTML();
    const contentMarkdown = editor.getMarkdown();
    const code = monacoEditor?.getValue();

    setContent(contentHtml);
    setCode(code);
    setMarkdown(contentMarkdown);
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
            onChange={handleChanged}
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
          onChange={handleChanged}
        />
      </InputGroup>
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
