import { EditorPlugin, PluginFunctions } from '@draft-js-plugins/editor'


export const createLiveCodePlugin = ({ }) => {

    return {
        onChange: (newEditorState: Draft.EditorState, pluginFunctions: PluginFunctions) => {
            const decorator = newEditorState.getDecorator()

            if (decorator === null) return newEditorState

            return decorator.suggest(newEditorState)
        },
        decorators: []
    }
}
