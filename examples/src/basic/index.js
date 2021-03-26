import React, { useState } from 'react'
import { EditorState } from 'draft-js'
import Editor from '@draft-js-plugins/editor'

import { createLiveCodePlugin } from '../../../lib'


const liveCodePlugin = createLiveCodePlugin({})

const plugins = [liveCodePlugin]


export const BasicExample = props => {
  // setup editor state
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  )

  const onChange = newEditorState => setEditorState(newEditorState)
  
  return (
    <div>
      <Editor
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
      />
    </div>
  )
}
