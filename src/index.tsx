import { EditorPlugin, PluginFunctions } from '@draft-js-plugins/editor'


export const createLiveCodePlugin = ({ }) => {

    return {
        onChange: (newEditorState: Draft.EditorState, pluginFunctions: PluginFunctions) => {
            console.log('umm')
            return newEditorState
        },
        decorators: []
    }
}
